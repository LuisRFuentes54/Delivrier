import Vue from 'vue';
import VueRouter from 'vue-router';
import jwt from '../common/jwt.service';
import { VueEasyJwt } from 'vue-easy-jwt';
import store from '../store';
const vueEasyJwt = new VueEasyJwt();

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/home',
    name: 'LandingPage',
    component: () =>
      import(/* webpackChunkName: "landingpage" */ '../views/Landingpage.vue'),
    children: [
      {
        path: '/home',
        name: 'Home',
        component: () =>
          import(/* webpackChunkName: "home" */ '../views/landingPage/Home.vue')
      },
      {
        path: '/pricing',
        name: 'Pricing',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(
            /* webpackChunkName: "pricing" */ '../views/landingPage/Pricing.vue'
          )
      },
      {
        path: '/delivery',
        name: 'Delivery',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(
            /* webpackChunkName: "delivery" */ '../views/landingPage/Delivery.vue'
          )
      },
      {
        path: '/tracking',
        name: 'Tracking',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(
            /* webpackChunkName: "tracking" */ '../views/landingPage/Tracking.vue'
          )
      }
    ]
  },
  {
    path: '/platform',
    name: 'Platform',
    redirect: '/platform/deliveries',
    meta: { requiresAuth: true },
    component: () =>
      import(/* webpackChunkName: "platform" */ '../views/Platform.vue'),
    children: [
      {
        path: '/platform/deliveries',
        name: 'Deliveries',
        component: () =>
          import(
            /* webpackChunkName: "deliveries" */ '../views/platform/Deliveries.vue'
          )
      },
      {
        path: '/platform/deliveryForm',
        name: 'DeliveryForm',
        component: () =>
          import(
            /* webpackChunkName: "deliveryform" */ '../views/platform/DeliveryForm.vue'
          )
      },
      {
        path: '/platform/profile',
        name: 'Profile',
        component: () =>
          import(
            /* webpackChunkName: "profile" */ '../views/platform/Profile.vue'
          )
      },
      {
        path: '/platform/notifications',
        name: 'Notifications',
        component: () =>
          import(
            /* webpackChunkName: "notifications" */ '../views/platform/Notifications.vue'
          )
      }
    ]
  },
  {
    path: '/admin',
    name: 'AdminPlatform',
    redirect: '/admin/deliveries',
    meta: { requiresAuth: true },
    component: () =>
      import(/* webpackChunkName: "platform" */ '../views/Platform.vue'),
    children: [
      {
        path: '/admin/deliveries',
        name: 'AdminDeliveries',
        component: () =>
          import(
            /* webpackChunkName: "admindeliveries" */ '../views/backoffice/AdminDeliveries.vue'
          )
      },
      {
        path: '/admin/delivery-plan',
        name: 'AdminDeliveryPlans',
        component: () =>
          import(
            /* webpackChunkName: "admindeliveryplans" */ '../views/backoffice/AdminDeliveryPlans.vue'
          )
      },
      {
        path: '/admin/insurance',
        name: 'AdminInsurance',
        component: () =>
          import(
            /* webpackChunkName: "admininsurance" */ '../views/backoffice/AdminInsurance.vue'
          )
      },
      {
        path: '/admin/office',
        name: 'AdminOffices',
        component: () =>
          import(
            /* webpackChunkName: "adminoffices" */ '../views/backoffice/AdminOffices.vue'
          )
      },
      {
        path: '/admin/packing',
        name: 'AdminPacking',
        component: () =>
          import(
            /* webpackChunkName: "adminpacking" */ '../views/backoffice/AdminPacking.vue'
          )
      },
      {
        path: '/admin/setting',
        name: 'AdminSettings',
        component: () =>
          import(
            /* webpackChunkName: "adminsettings" */ '../views/backoffice/AdminSettings.vue'
          )
      },
      {
        path: '/admin/user',
        name: 'AdminUsers',
        component: () =>
          import(
            /* webpackChunkName: "adminuser" */ '../views/backoffice/AdminUsers.vue'
          )
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "login" */ '../views/Login.vue')
  },
  {
    path: '/signup',
    name: 'SignUp',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "Signup" */ '../views/Signup.vue')
  },
  {
    path: '/signupgoogle',
    name: 'SignUpGoogle',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "Signupgoogle" */ '../views/SignupGoogle.vue')
  },
  {
    path: '/invoice',
    name: 'Invoice',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "Invoice" */ '../components/Invoice.vue')
  },
  {
    path: '/invoicepdf/:tracking/:sendEmail',
    name: 'InvoicePDF',
    props: true,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "InvoicePDF" */ '../views/InvoicePDF.vue')
  },
  {
    path: '*',
    redirect: '/home'
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  to.matched.some(route => {
    if (route.meta.requiresAuth) {
      const token = jwt.getToken();
      if (!token || vueEasyJwt.isExpired(token)) {
        jwt.destroyToken();
        next({ name: 'LandingPage' });
      } else {
        if (to.name.includes('Admin')) {
          store.getters['users/getUser'] &&
          store.getters['users/getUser'].role.id == 1
            ? next()
            : next('LandingPage');
        } else {
          if (route.name === 'Platform') {
            store.getters['users/getUser'] &&
            store.getters['users/getUser'].role.id == 2
              ? next()
              : next('LandingPage');
          }
        }
        next();
      }
    } else {
      next();
    }
  });
});

export default router;
