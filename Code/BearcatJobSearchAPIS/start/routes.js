"use strict";

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use("Route");

// Base route to check API health
Route.get("/", async ({ response }) => {
  return response.status(200).json({
    status: 200,
    message: "bearcat job serach application is running",
  });
});

// Login related routers
Route.group(() => {
  Route.post("login", "Auth.login");
  Route.post("registration", "Auth.registrationForStudent");
  Route.post("forgot-password", "Auth.sendResetMail");
  Route.get("validate/reset/password/:secretKey", "Auth.validateResetPasswordLink");
  Route.post("reset/password/:secretKey", "Auth.resetPassword");
  Route.post("changepassword", "Auth.changePassword");
}).prefix("api/v1");

// Data fetching routers
Route.group(() => {
  Route.get("getStudent/:studentId", "StudentController.getStudentBasedOnId");
  Route.get("getAllJobs", "StudentController.getAllJobs");
  Route.get("getJob/:jobId", "StudentController.getJobBasedOnId");
}).prefix("api/v1/student");

Route.group(() => {
  Route.get("StudentApplyJob/:studentId/:jobId", "StudentApplicationController.StudentApplyJob");
  
}).prefix("api/v1/studentApplication");

// Data fetching routers
Route.group(() => {
  Route.get("getAllJobs", "JobController.getAllJobs");
  Route.get("getJob/:jobId", "JobController.getJobBasedOnId");
  Route.post("create-job", "JobController.createJob");
  Route.patch("update-job/:id", "JobController.updateJob");
  Route.delete("delete-job/:id", "JobController.deleteJob");
}).prefix("api/v1/job");

Route.group(() => {
  Route.get("getAllUsers", "UserController.getAllUsers");
  Route.get("getUser/:userId", "UserController.getUserBasedOnId");
  Route.post("create-user", "UserController.createUser");
  Route.patch("update-user/:id", "UserController.updateUser");
  Route.delete("delete-user/:id", "UserController.deleteUser");
}).prefix("api/v1/user");
//FAQ Data fetching routers
Route.group(() => {
  Route.get("get/all/faqs", "FAQContoller.getAllFAQs");
  Route.get("get/faqs/:FAQId", "FAQContoller.getFAQBasedOnId");
  Route.post("create/faq", "FAQContoller.createFAQ");
  Route.patch("update/faq/:id", "FAQContoller.updateFAQ");
  Route.delete("delete/faq/:id", "FAQContoller.deleteFAQ");
}).prefix("api/v1/faq");
