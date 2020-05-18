<template>
  <v-container class="pb-0 mb-n3">
    <v-row>
      <v-col cols="3">
        <div
          class="d-flex align-center"
          :class="[
            $vuetify.breakpoint.lgAndUp ? 'justify-end' : 'justify-center'
          ]"
        >
          <v-img
            alt="Vuetify Logo"
            class="shrink mr-2"
            contain
            src="../../assets/delivrier-logo-only.png"
            transition="scale-transition"
            width="60"
          />
        </div>
      </v-col>
      <v-col cols="5">
        <v-row justify="end">
          <div>
            <v-tabs
              dark
              background-color="transparent"
              align-with-title
              v-if="$vuetify.breakpoint.mdAndUp"
              v-model="currentOption"
              :key="currentOption"
            >
              <v-tab
                v-for="option in navbarOptions"
                :key="option.title"
                @click="route(option.routeName)"
              >{{ option.title }}</v-tab>
            </v-tabs>
          </div>
        </v-row>
      </v-col>
      <v-col cols="2">
        <v-select
          dark
          v-model="language"
          :items="languages"
          menu-props="auto"
          label="Select"
          hide-details
          prepend-icon="mdi-web"
          class="mt-n1"
          single-line
        ></v-select>
      </v-col>
      <v-col cols="2">
        <v-menu v-if="$vuetify.breakpoint.mdAndUp" offset-y>
          <template v-slot:activator="{ on }">
            <v-btn dark v-if="$vuetify.breakpoint.mdAndUp" class="ma-2 mt-1" large icon v-on="on">
              <v-icon>mdi-account-circle</v-icon>
            </v-btn>
          </template>
          <v-list>
            <v-list-item-group>
              <v-list-item
                v-for="option in profileOptions"
                :key="option.title"
                @click="route(option.routeName)"
              >
                <v-list-item-icon>
                  <v-icon>{{option.icon}}</v-icon>
                </v-list-item-icon>
                <v-list-item-title class="subtitle-2">{{ option.title }}</v-list-item-title>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-menu>
        <v-menu v-else offset-y>
          <template v-slot:activator="{ on }">
            <v-btn dark class="mt-0" large icon v-on="on">
              <v-icon>mdi-menu</v-icon>
            </v-btn>
          </template>
          <v-list>
            <v-list-item-group v-model="currentOption">
              <v-list-item
                v-for="option in navbarOptions"
                :key="option.title"
                @click="route(option.routeName)"
              >
                <v-list-item-title>{{ option.title }}</v-list-item-title>
              </v-list-item>
              <v-divider />
              <v-list-item
                v-for="option in profileOptions"
                :key="option.title"
                @click="route(option.routeName)"
              >
                <v-list-item-title>{{ option.title }}</v-list-item-title>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-menu>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Navbar',
  data: () => ({
    navbarOptions: [
      { title: 'Home', routeName: 'Home' },
      { title: 'Envíos', routeName: 'Delivery' },
      { title: 'Rastreo', routeName: 'Tracking' },
      { title: 'Cotización', routeName: 'Pricing' }
    ],
    currentOption: 1,
    profileOptions: [
      {
        title: 'Iniciar sesión',
        icon: 'mdi-login-variant',
        routeName: 'Login'
      },
      { title: 'Registrarse', icon: 'mdi-account-circle', routeName: 'SignUp' }
    ],
    currentProfileOption: '',
    languages: ['Español', 'English'],
    language: 'Español'
  }),
  methods: {
    route(option) {
      this.$router.push({ name: `${option}` });
    }
  },
  watch: {
    $route() {
      this.currentOption = this.navbarOptions.findIndex(option => {
        return this.$router.currentRoute.name === option.routeName;
      });
    }
  },
  mounted() {
    this.currentOption = this.navbarOptions.findIndex(option => {
      return this.$router.currentRoute.name === option.routeName;
    });
  }
};
</script>

<style></style>
