<template>
  <v-container fluid class="gradient">
    <v-row class="gradient" align="center" justify="center">
      <v-card width="950px" class="ml-5 mr-5 my-auto rounded-card" color="#F8F8FF">
        <v-card-actions class="justify-center">
          <v-img
            alt="Vuetify Logo"
            class="shrink"
            src="../assets/delivrier-logo-no-borders.png"
            transition="scale-transition"
            width="250"
          />
        </v-card-actions>
        <p class="text-center caption grey--text mt-5 mb-0">Sign up with credentials</p>
        <v-card-text class="text-center">
          <v-form>
            <div v-if="errors.length" class="mx-auto mb-5 error-card">
              <ul class="list">
                <li class="error-list" v-for="(error, index) in errors" :key="index">{{ error }}</li>
              </ul>
            </div>
            <v-container>
              <v-row>
                <v-col cols="12" md="3">
                  <v-text-field
                    label="First Name"
                    prepend-inner-icon="mdi-account-circle"
                    solo
                    v-model="firstName"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="3">
                  <v-text-field
                    label="Second Name"
                    prepend-inner-icon="mdi-account-circle"
                    solo
                    v-model="secondName"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="3">
                  <v-text-field
                    label="First Last Name"
                    prepend-inner-icon="mdi-account-circle"
                    solo
                    v-model="firstLastName"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="3">
                  <v-text-field
                    label="Second Last Name"
                    prepend-inner-icon="mdi-account-circle"
                    solo
                    v-model="secondLastName"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" md="3">
                  <v-text-field
                    label="Phone Number"
                    prepend-inner-icon="mdi-cellphone"
                    solo
                    v-mask="'####-###-##-##'"
                    v-model="phoneNumber"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="3">
                  <v-text-field label="Email" prepend-inner-icon="mdi-email" solo v-model="email"></v-text-field>
                </v-col>
                <v-col cols="12" sm="3" md="3">
                  <v-menu
                    v-model="menu2"
                    :close-on-content-click="false"
                    :nudge-right="40"
                    transition="scale-transition"
                    offset-y
                    min-width="290px"
                  >
                    <template v-slot:activator="{ on }">
                      <v-text-field
                        v-model="birthDate"
                        label="Birth date"
                        prepend-icon="mdi-calendar"
                        readonly
                        v-on="on"
                      ></v-text-field>
                    </template>
                    <v-date-picker v-model="birthDate" @input="menu2 = false"></v-date-picker>
                  </v-menu>
                </v-col>
                <v-col cols="12" md="3">
                  <v-text-field
                    label="ID"
                    prepend-inner-icon="mdi-card-account-details"
                    solo
                    v-mask="'##########'"
                    v-model="identNum"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row justify="center">
                <v-col cols="12" md="3">
                  <v-text-field
                    label="Username"
                    prepend-inner-icon="mdi-account-circle"
                    solo
                    v-model="username"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="3">
                  <v-text-field
                    label="Password"
                    :type="showPassword ? 'text' : 'password'"
                    prepend-inner-icon="mdi-lock-open"
                    :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                    @click:append="showPassword = !showPassword"
                    solo
                    v-model="password"
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-container>

            <v-btn large color="primary" @click="signup">Create account</v-btn>
          </v-form>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions width="400" class="text-center">
          Already have an account?
          <router-link tag="li" :to="{ name: 'Login' }">Login</router-link>
        </v-card-actions>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Signup',
  data() {
    return {
      showPassword: false,
      firstName: '',
      secondName: '',
      firstLastName: '',
      secondLastName: '',
      phoneNumber: '',
      email: '',
      identNum: null,
      username: '',
      password: null,
      errors: [],

      birthDate: new Date().toISOString().substr(0, 10),
      menu: false,
      modal: false,
      menu2: false
    };
  },
  methods: {
    async signup() {
      this.errors = [];
      if (
        this.firstName &&
        this.firstLastName &&
        this.phoneNumber &&
        this.email &&
        this.birthDate &&
        this.identNum &&
        this.username &&
        this.password
      ) {
        let errorMessage = '';
        let person = {
          firstName: this.firstName,
          secondName: this.secondName,
          firstLastName: this.firstLastName,
          secondLastName: this.secondLastName,
          phoneNumber: this.phoneNumber,
          email: this.email,
          birthDate: this.birthDate,
          identNum: this.identNum,
          user: {
            username: this.username,
            password: this.password
          }
        };
        await this.$store.dispatch('users/createAccount', person);
        errorMessage = this.$store.getters['users/getError'].error;
        if (errorMessage !== '') this.errors.push(errorMessage);
        if (this.errors.length === 0) {
          this.$router.push({ name: 'Platform' });
        }
      } else {
        if (!this.firstName) this.errors.push('First Name required.');
        if (!this.firstLastName) this.errors.push('First Last Name required.');
        if (!this.phoneNumber) this.errors.push('Phone Number required.');
        if (!this.email) this.errors.push('Email required.');
        else if (!this.validEmail(this.email)) {
          this.errors.push('Email should be valid.');
        }
        if (!this.birthDate) this.errors.push('Birth Date required.');
        if (!this.identNum) this.errors.push('ID required.');
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
  height: 100%;
}

.error-card {
  background-color: white;
  border: 1px solid red;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
}

.list {
  padding: 0px !important;
}

li {
  color: #3399ff;
  list-style-type: none;
  list-style-position: outside;
}

li.router-link-active,
li.router-link-exact-active {
  cursor: pointer;
  text-decoration: none;
  color: #004d99;
}
</style>
