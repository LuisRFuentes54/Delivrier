import Vue from 'vue';
import VueRouter from 'vue-router';
import jwt from '../common/jwt.service';
import { VueEasyJwt } from 'vue-easy-jwt';
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
        next();
      }
    } else {
      next();
    }
  });
});

export default router;
