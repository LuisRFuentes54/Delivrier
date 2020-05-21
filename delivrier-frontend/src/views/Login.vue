<template>
  <v-container fluid class="gradient">
    <v-row class="gradient" align="center" justify="center">
      <v-card width="400px" class="ml-5 mr-5 my-auto rounded-card" color="#F8F8FF">
        <v-card-actions class="justify-center">
          <v-img
            alt="Vuetify Logo"
            class="shrink"
            src="../assets/delivrier-logo-no-borders.png"
            transition="scale-transition"
            width="250"
          />
        </v-card-actions>

        <p class="text-center mt-0 caption grey--text">Sign in with</p>
        <v-card-actions class="justify-center">
          <v-btn @click="loginFacebook" elevation="10" text color="primary">
            <v-icon left>mdi-facebook</v-icon>Facebook
          </v-btn>
          <v-btn @click="loginGoogle" elevation="10" text color="primary">
            <v-icon left color="red">mdi-google</v-icon>Google
          </v-btn>
        </v-card-actions>
        <p class="text-center caption grey--text">Or sign in with credentials</p>
        <v-card-text class="text-center">
          <v-form>
            <div v-if="errors.length" class="mx-auto mb-5 error-card">
              <ul>
                <li class="error-list" v-for="(error, index) in errors" :key="index">{{ error }}</li>
              </ul>
            </div>
            <v-text-field
              label="Username"
              prepend-inner-icon="mdi-account-circle"
              solo
              v-model="username"
            ></v-text-field>
            <v-text-field
              label="Password"
              :type="showPassword ? 'text' : 'password'"
              prepend-inner-icon="mdi-lock-open"
              :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
              @click:append="showPassword = !showPassword"
              solo
              v-model="password"
            ></v-text-field>
            <v-btn block color="primary" @click="login">Login</v-btn>
          </v-form>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions width="400" class="text-center">
          <router-link tag="li" :to="{ name: 'Login' }">Forgot password?</router-link>
          <v-spacer></v-spacer>
          <router-link tag="li" :to="{ name: 'SignUp' }">Register</router-link>
        </v-card-actions>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      showPassword: false,
      username: '',
      password: '',
      errors: []
    };
  },
  methods: {
    async login() {
      this.errors = [];
      if (this.username && this.password) {
        let errorMessage = '';
        let user = {
          username: this.username,
          password: this.password
        };
        await this.$store.dispatch('users/authorize', user);
        errorMessage = this.$store.getters['users/getError'].error;
        if (errorMessage === 'Unauthorized')
          this.errors.push('Invalid credentials.');
        if (this.errors.length === 0) {
          this.$store.getters['users/getUser'].role.id == 2
            ? this.$router.push({ name: 'Platform' })
            : this.$router.push({ name: 'AdminPlatform' });
        }
      } else {
        if (!this.username) this.errors.push('Username required.');
        if (!this.password) this.errors.push('Password required.');
      }
    },
    async loginGoogle() {
      this.errors = [];
      let errorMessage = '';
      await this.$store.dispatch('users/createAccountGoogle');
      errorMessage = this.$store.getters['users/getError'].error;
      if (errorMessage === 'Unauthorized') {
        this.$router.push({ name: 'SignUpGoogle' });
        this.errors.push(errorMessage);
      }

      if (this.errors.length === 0) this.$router.push({ name: 'Platform' });
    },
    async loginFacebook() {
      this.errors = [];
      let errorMessage = '';
      await this.$store.dispatch('users/authorizeFacebook');
      errorMessage = this.$store.getters['users/getError'].error;
      if (errorMessage !== '') this.errors.push(errorMessage);
      if (this.errors.length === 0) this.$router.push({ name: 'Platform' });
    }
  }
};
</script>

<style>
.gradient {
  background: linear-gradient(
    56deg,
    rgba(59, 57, 94, 1) 0%,
    rgba(40, 189, 213, 1) 90%,
    rgba(245, 245, 245, 1) 100%
  );
  height: 100%;
}

.error-card {
  background-color: white;
  border: 1px solid red;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.error-list {
  list-style-type: none;
}

li {
  color: #3399ff;
  list-style-type: none;
}

li:hover,
li.router-link-active,
li.router-link-exact-active {
  cursor: pointer;
  text-decoration: none;
  color: #004d99;
}
</style>
