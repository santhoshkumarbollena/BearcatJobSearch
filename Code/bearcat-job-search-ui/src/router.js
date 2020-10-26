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
      path: "/reset-password/:secretKey",
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
      meta: { requiresAuth: true },
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue"),
    },
    {
      path: "/add-faq",
      name: "add-faq",
      meta: { requiresAuth: true },
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/AddFAQ.vue"),
    },
    {
      path: "/add-job",
      name: "add-job",
      meta: { requiresAuth: true },
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/AddJob.vue"),
    },
    {
      path: "/add-admin",
      name: "add-admin",
      meta: { requiresAuth: true },
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/AddAdmin.vue"),
    },
    {
      path: "/edit-job/:jobId",
      name: "edit-job",
      meta: { requiresAuth: true },
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/EditJob.vue"),
    },
    {
      path: "/apply-job/:jobId",
      name: "apply-job",
      meta: { requiresAuth: true },
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/ApplyJob.vue"),
    },
    {
      path: "/job-details/:jobId",
      name: "job-details",
      meta: { requiresAuth: true },
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/JobDetails.vue"),
    },
    {
      path: "/edit-faq/:id",
      name: "edit-faq",
      meta: { requiresAuth: true },
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/EditFAQ.vue"),
    },
    {
      path: "/student-info/:studentId",
      name: "student-info",
      id: "ID",
      meta: { requiresAuth: true },
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/StudentInfo.vue"),
    },
    {
      path: "/student-info/:studentId/student-github/:githubUserId",
      name: "student-github",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/StudentGithub.vue"),
    },
    
    {
      path: "/faqs",
      name: "faqs",
      meta: { requiresAuth: true },
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/FAQ.vue"),
    },
    {
      path: "/careers",
      name: "careers",
      meta: { requiresAuth: true },
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/Careers.vue"),
    },
    {
      path: "/students",
      name: "students",
      meta: { requiresAuth: true },
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/Students.vue"),
    },
    {
      path: "/StudentProfile",
      name: "StudentProfile",
      meta: { requiresAuth: true },
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/StudentProfile.vue"),
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
