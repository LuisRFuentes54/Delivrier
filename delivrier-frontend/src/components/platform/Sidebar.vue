<template>
  <v-navigation-drawer
    v-model="drawer"
    class="sidebarColor"
    :mini-variant.sync="mini"
    permanent
    dark
    app
  >
    <v-list-item class="px-2">
      <v-list-item-avatar>
        <v-img src="../../assets/delivrier-logo-only.png"></v-img>
      </v-list-item-avatar>

      <v-list-item-title>Menu</v-list-item-title>

      <v-btn icon @click.stop="mini = !mini">
        <v-icon>mdi-chevron-left</v-icon>
      </v-btn>
    </v-list-item>

    <v-divider></v-divider>

    <v-list dense>
      <v-list-item-group v-model="selectedOption" mandatory>
        <span v-if="!admin">
          <v-list-item
            v-for="option in menuOptions"
            :key="option.title"
            @click="route(option.routeName)"
            class="size"
          >
            <v-list-item-icon class="pt-7">
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
            class="size"
          >
            <v-list-item-icon class="pt-7">
              <v-icon>{{ option.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title class="subtitle-2">{{ option.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </span>
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: 'Sidebar',
  data: () => ({
    drawer: true,
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
      }
    ],
    mini: true,
    selectedOption: 0
  }),
  methods: {
    route(option) {
      if (this.$router.currentRoute.name !== option) {
        this.$router.push({ name: `${option}` });
      }
    }
  },
  watch: {
    $route() {
      if (this.admin) {
        this.selectedOption = this.adminMenuOptions.findIndex(option => {
          return this.$router.currentRoute.name === option.routeName;
        });
      } else {
        this.selectedOption = this.menuOptions.findIndex(option => {
          return this.$router.currentRoute.name === option.routeName;
        });
      }
    }
  },
  mounted() {
    this.admin = this.$router.currentRoute.name.includes('Admin');
    if (this.admin) {
      this.selectedOption = this.adminMenuOptions.findIndex(option => {
        return this.$router.currentRoute.name === option.routeName;
      });
    } else {
      this.selectedOption = this.menuOptions.findIndex(option => {
        return this.$router.currentRoute.name === option.routeName;
      });
    }
  }
};
</script>

<style scoped>
.sidebarColor {
  background: rgb(68, 93, 123);
  background: linear-gradient(
    180deg,
    rgba(68, 93, 123, 1) 59%,
    rgba(124, 164, 212, 1) 100%
  );
}
.size {
  height: 75px !important;
}
</style> 