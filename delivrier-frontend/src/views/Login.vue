<template>
  <v-container fluid class="gradient">
    <v-row style="height: 96vh;" align="center" justify="center">
      <v-card width="400px" class="ml-5 mr-5 mt-10 rounded-card" color="#F8F8FF">
        <p class="text-center mt-10 caption grey--text">Sign in with</p>
        <v-card-actions class="justify-center">
          <v-btn elevation="10" text color="primary">
            <v-icon left>mdi-facebook</v-icon>Facebook
          </v-btn>
          <v-btn elevation="10" text color="primary">
            <v-icon left color="red">mdi-google</v-icon>Google
          </v-btn>
        </v-card-actions>
        <p class="text-center caption grey--text">Or sign in with credentials</p>
        <v-card-text class="text-center">
          <v-form>
            <div v-if="errors.length" class="mx-auto mb-5 error-card">
              <ul>
                <li class="error-list" v-for="(error,index) in errors" :key="index">{{ error }}</li>
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
            <v-btn large color="primary" @click="login">Login</v-btn>
          </v-form>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions width="400" class="text-center">
          <v-btn x-small>Forgot password?</v-btn>
          <v-spacer></v-spacer>
          <v-btn x-small>Register</v-btn>
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
        if (this.errors.length === 0) this.$router.push('home');
      } else {
        if (!this.username) this.errors.push('Username required.');
        if (!this.password) this.errors.push('Password required.');
      }
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
</style>
