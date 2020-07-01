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

// base route to check API health
Route.get("/", async ({ response }) => {
  return response.status(200).json({
    status: 200,
    message: "bearcat job serach application is running",
  });
});

// base route to check sending mail health
Route.post("test/send-main", "Util.sendTestMail");

// login routers
Route.group(() => {
  Route.post("login", "Auth.login");
  Route.post("registration", "Auth.registrationForStudent");
  Route.post("forgotpassword", "Auth.forgotPassword");
  Route.post("resetpassword", "Auth.resetPassword");
  Route.post("changepassword", "Auth.changePassword");
}).prefix("api/v1");

// data fetching routers
Route.group(() => {
  Route.get("getStudent/:studentId", "StudentController.getStudentBasedOnId");
  Route.get("getAllJobs", "StudentController.getAllJobs");
  Route.get("getJob/:jobId", "StudentController.getJobBasedOnId");
}).prefix("api/v1/student");
