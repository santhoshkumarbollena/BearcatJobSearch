import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Login from "./views/Login.vue";
import Registration from "./views/Registration.vue";
import ForgotPassword from "./views/ForgotPassword.vue";
import ResetPassword from "./views/ResetPassword.vue";
import ChangePassword from "./views/ChangePassword.vue";
import Error404Page from "./components/utils/Error404Page.vue";

Vue.use(Router);

const router = new Router({
  base: process.env.BASE_URL,
  routes: [
    { path: "/", redirect: "/home" },
    {
      path: "/error-page",
      name: "error-404-page",
      component: Error404Page,
    },
    {
      path: "/login",
      name: "login",
      component: Login,
    },
    {
      path: "/register",
      name: "register",
      component: Registration,
    },
    {
      path: "/change-password",
      name: "change-password",
      component: ChangePassword,
    },
    {
      path: "/forgot-password",
      name: "forgot-password",
      component: ForgotPassword,
    },
    {
      path: "/reset-password",
      name: "reset-password",
      component: ResetPassword,
    },
    {
      path: "/home",
      name: "home",
      component: Home,
      meta: { requiresAuth: true },
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
  let auth = localStorage.getItem("access_token");

  if (to.fullPath == "/login" && auth) {
    next({ name: "home" });
  } else if (to.matched.length == 0) {
    next({ name: "error-404-page" });
  } else if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!auth) {
      next({ name: "login" });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
