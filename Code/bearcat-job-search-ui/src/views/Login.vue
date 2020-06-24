<template>
  <div>
    <div class="sidenav">
      <div class="login-main-text">
        <h2>
          Bearcat Job Search
          <br />Login Page
        </h2>
        <p>Login from here to access the application.</p>
      </div>
    </div>
    <div class="main">
      <div class="col-md-6 col-sm-12">
        <div class="login-form border p-3">
          <form>
            <div class="form-group text-left">
              <label>User Name</label>
              <input type="text" class="form-control" placeholder="User Name" />
            </div>
            <div class="form-group text-left">
              <label>Password</label>
              <input type="password" class="form-control" placeholder="Password" />
            </div>
            <button type="submit" class="btn btn-black mr-2">Login</button>
            <button type="submit" class="btn btn-secondary">Register</button>

            <div class="form-group mt-3">
              <a href="/#/login">Forget password</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "login"
};
</script>

