import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Login from "./views/Login.vue";
import Registration from "./views/Registration.vue";
import Error404Page from "./components/utils/Error404Page.vue";

Vue.use(Router);

const router = new Router({
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/error-page",
      name: "Error404Page",
      component: Error404Page,
    },
    {
      path: "/login",
      name: "Login",
      component: Login,
    },
    {
      path: "/register",
      name: "Register",
      component: Registration,
    },
    {
      path: "/home",
      name: "Home",
      component: Home,
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
    next({ name: "Login" });
  } else if (to.matched.length == 0) {
    next({ name: "Error404Page" });
  } else if (to.matched.some((record) => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (!auth.loggedIn()) {
      next({ name: "Login" });
    } else {
      next();
    }
  } else {
    next(); // make sure to always call next()!
  }
});

export default router;
