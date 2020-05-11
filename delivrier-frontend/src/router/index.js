import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/home",
    name: "LandingPage",
    component: () =>
      import(/* webpackChunkName: "landingpage" */ "../views/Landingpage.vue"),
    children: [
      {
        path: "/home",
        name: "Home",
        component: () =>
          import(/* webpackChunkName: "home" */ "../views/landingPage/Home.vue")
      },
      {
        path: "/pricing",
        name: "Cotización",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(
            /* webpackChunkName: "home" */ "../views/landingPage/Pricing.vue"
          )
      },
      {
        path: "/delivery",
        name: "Envíos",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(
            /* webpackChunkName: "home" */ "../views/landingPage/Delivery.vue"
          )
      },
      {
        path: "/tracking",
        name: "Rastreo",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(
            /* webpackChunkName: "home" */ "../views/landingPage/Tracking.vue"
          )
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
