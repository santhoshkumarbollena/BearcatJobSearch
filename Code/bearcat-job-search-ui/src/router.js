import Vue from "vue";
import Router from "vue-router";
import Login from "./views/Login.vue";
import Registration from "./views/Registration.vue";


Vue.use(Router);

const router = new Router({
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/login",
      name: "login",
      component: Login,
    },
    {
      path: "/register",
      name: "registration",
      component: Registration,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue"),
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (to.fullPath == "/") {
    next({ name: 'login' });
  } else if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (!auth.loggedIn()) {
      next({ name: 'login' });
    } else {
      next()
    }
  } else {
    next() // make sure to always call next()!
  }
})

export default router;
