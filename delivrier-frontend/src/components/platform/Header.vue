<template>
  <div>
    <v-app-bar class="gradient" dense dark app>
      <v-menu left bottom offset-y v-if="!$vuetify.breakpoint.mdAndUp">
        <template v-slot:activator="{ on }">
          <v-btn icon v-on="on">
            <v-icon>mdi-menu</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item-group v-model="selectedOption" mandatory>
            <span v-if="!admin">
              <v-list-item
                v-for="option in menuOptions"
                :key="option.title"
                @click="route(option.routeName)"
              >
                <v-list-item-icon>
                  <v-badge v-if="option.title==='Notificaciones'" color="red" content="5" overlap>
                    <v-icon>{{ option.icon }}</v-icon>
                  </v-badge>
                  <v-icon v-else>{{ option.icon }}</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                  <v-list-item-title class="subtitle-2">{{ option.title }}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </span>
            <span v-else>
              <v-list-item
                v-for="option in adminMenuOptions"
                :key="option.title"
                @click="route(option.routeName)"
              >
                <v-list-item-icon>
                  <v-icon>{{ option.icon }}</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                  <v-list-item-title class="subtitle-2">{{ option.title }}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </span>
          </v-list-item-group>
        </v-list>
      </v-menu>

      <v-toolbar-title class="font-weight-black">Delivrier</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-col v-if="$vuetify.breakpoint.mdAndUp" cols="2">
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

      <v-menu v-else left bottom offset-y>
        <template v-slot:activator="{ on }">
          <v-btn icon v-on="on">
            <v-icon>mdi-web</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item-group v-model="language" mandatory>
            <v-list-item v-for="languageOption in languages" :key="languageOption">
              <v-list-item-content>
                <v-list-item-title class="subtitle-2">{{ languageOption }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-menu>

      <span v-if="$vuetify.breakpoint.mdAndUp">{{username}}</span>
      <v-menu left bottom offset-y>
        <template v-slot:activator="{ on }">
          <v-btn icon v-on="on">
            <v-icon>mdi-account-circle</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item v-if="!$vuetify.breakpoint.mdAndUp">
            <v-list-item-content>
              <v-list-item-title class="subtitle-2">{{username}}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-divider v-if="!$vuetify.breakpoint.mdAndUp"></v-divider>
          <v-list-item @click="logOut()">
            <v-list-item-icon>
              <v-icon>mdi-logout-variant</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title class="subtitle-2">Cerrar Sesión</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
  </div>
</template>

<script>
import jwt from '../../common/jwt.service';
export default {
  name: 'Header',
  data: () => ({
    admin: false,
    menuOptions: [
      {
        title: 'Historial de Envíos',
        routeName: 'Deliveries',
        icon: 'mdi-package-variant'
      },
      {
        title: 'Realizar Envío',
        routeName: 'DeliveryForm',
        icon: 'mdi-truck-delivery'
      },
      { title: 'Notificaciones', routeName: 'Notifications', icon: 'mdi-bell' },
      { title: 'Perfil', routeName: 'Profile', icon: 'mdi-account' }
    ],
    adminMenuOptions: [
      {
        title: 'Historial de Envíos',
        routeName: 'AdminDeliveries',
        icon: 'mdi-truck-delivery'
      },
      {
        title: 'Usuarios',
        routeName: 'AdminUsers',
        icon: 'mdi-account-group'
      },
      {
        title: 'Planes de envío',
        routeName: 'AdminDeliveryPlans',
        icon: 'mdi-clipboard-multiple'
      },
      {
        title: 'Seguros',
        routeName: 'AdminInsurance',
        icon: 'mdi-shield-check'
      },
      {
        title: 'Oficinas',
        routeName: 'AdminOffices',
        icon: 'mdi-map-marker-radius'
      },
      {
        title: 'Empaques',
        routeName: 'AdminPacking',
        icon: 'mdi-package-variant'
      },
      {
        title: 'Configuraciones',
        routeName: 'AdminSettings',
        icon: 'mdi-cog'
      },
    ],
    selectedOption: 0,
    languages: ['Español', 'English'],
    language: 'Español',
    username: ''
  }),
  methods: {
    route(option) {
      if (this.$router.currentRoute.name !== option) {
        this.$router.push({ name: `${option}` });
      }
    },
    logOut() {
      jwt.destroyToken();
      this.$store.dispatch('reset');
      this.$router.push({ name: 'Home' });
    }
  },
  watch: {
    $route() {
      if(this.admin){
        this.selectedOption = this.adminMenuOptions.findIndex(option => {
          return this.$router.currentRoute.name === option.routeName;
        });
      }
      else{
        this.selectedOption = this.menuOptions.findIndex(option => {
          return this.$router.currentRoute.name === option.routeName;
        });
      }
    }
  },
  mounted() {
    this.admin = this.$router.currentRoute.name.includes('Admin');
    if(this.admin){
      this.selectedOption = this.adminMenuOptions.findIndex(option => {
        return this.$router.currentRoute.name === option.routeName;
      });
    }
    else{
      this.selectedOption = this.menuOptions.findIndex(option => {
        return this.$router.currentRoute.name === option.routeName;
      });
    }
    const user = this.$store.getters['users/getUser'];
    this.username = this.admin?`${user.username}`:`${user.personClient.firstName} ${user.personClient.secondName}`;
  }
};
</script>

<style scoped>
.gradient {
  background: rgb(34, 193, 195);
  background: linear-gradient(
    90deg,
    rgba(34, 193, 195, 1) 0%,
    rgba(1, 84, 166, 1) 100%
  );
}
</style>
