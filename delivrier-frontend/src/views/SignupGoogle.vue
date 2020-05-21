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
        <p
          class="text-center caption grey--text mb-0 mt-5"
        >Please, complete your credentials to sign up</p>
        <v-card-text class="text-center">
          <v-form>
            <div v-if="errors.length" class="mx-auto mb-5 error-card">
              <ul>
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
                    :disabled="firstNameBooly === 1"
                    v-model="firstName"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="3">
                  <v-text-field
                    label="Second Name"
                    prepend-inner-icon="mdi-account-circle"
                    solo
                    :disabled="secondNameBooly === 1"
                    v-model="secondName"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="3">
                  <v-text-field
                    label="First Last Name"
                    prepend-inner-icon="mdi-account-circle"
                    solo
                    :disabled="firstLastNameBooly === 1"
                    v-model="firstLastName"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="3">
                  <v-text-field
                    label="Second Last Name"
                    prepend-inner-icon="mdi-account-circle"
                    solo
                    :disabled="secondLastNameBooly === 1"
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
                    :disabled="phoneNumberBooly === 1"
                    v-mask="'####-###-##-##'"
                    v-model="phoneNumber"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="3">
                  <v-text-field
                    label="Email"
                    prepend-inner-icon="mdi-email"
                    solo
                    :disabled="emailBooly === 1"
                    v-model="email"
                  ></v-text-field>
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
                        :disabled="birthDateBooly === 1"
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
                    :disabled="identNumBooly === 1"
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
                    :disabled="usernameBooly === 1"
                    v-model="username"
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
      firstName: '',
      secondName: '',
      firstLastName: '',
      secondLastName: '',
      phoneNumber: '',
      email: '',
      identNum: null,
      username: '',
      errors: [],
      firstNameBooly: 0,
      secondNameBooly: 0,
      firstLastNameBooly: 0,
      secondLastNameBooly: 0,
      phoneNumberBooly: 0,
      birthDateBooly: 0,
      emailBooly: 0,
      identNumBooly: 0,
      usernameBooly: 0,

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
        this.username
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
      }
    },
    validEmail: function(email) {
      //eslint-disable-next-line
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    }
  },
  mounted() {
    if (this.$store.getters['users/getUser'].personClient.email !== null) {
      this.email = this.$store.getters['users/getUser'].personClient.email;
      this.emailBooly = 1;
    }
    if (this.$store.getters['users/getUser'].personClient.firstName !== null) {
      this.firstName = this.$store.getters[
        'users/getUser'
      ].personClient.firstName;
      this.firstNameBooly = 1;
    }
    if (this.$store.getters['users/getUser'].personClient.secondName !== null) {
      this.secondName = this.$store.getters[
        'users/getUser'
      ].personClient.secondName;
      this.secondNameBooly = 1;
    }
    if (
      this.$store.getters['users/getUser'].personClient.firstLastName !== null
    ) {
      this.firstLastName = this.$store.getters[
        'users/getUser'
      ].personClient.firstLastName;
      this.firstLastNameBooly = 1;
    }
    if (
      this.$store.getters['users/getUser'].personClient.secondLastName !== null
    ) {
      this.secondLastName = this.$store.getters[
        'users/getUser'
      ].personClient.secondLastName;
      this.secondLastNameBooly = 1;
    }
    if (
      this.$store.getters['users/getUser'].personClient.phoneNumber !== null
    ) {
      this.phoneNumber = this.$store.getters[
        'users/getUser'
      ].personClient.phoneNumber;
      this.phoneNumberBooly = 1;
    }
    if (this.$store.getters['users/getUser'].personClient.birthDate !== null) {
      this.birthDate = this.$store.getters[
        'users/getUser'
      ].personClient.birthDate.substr(0, 10);
      this.birthDateBooly = 1;
    }
    if (this.$store.getters['users/getUser'].personClient.identNum !== null) {
      this.identNum = this.$store.getters[
        'users/getUser'
      ].personClient.identNum;
      this.identNumBooly = 1;
    }
    if (this.$store.getters['users/getUser'].username !== null) {
      this.username = this.$store.getters['users/getUser'].username;
      this.usernameBooly = 1;
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
