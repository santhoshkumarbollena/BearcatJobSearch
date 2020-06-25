<template>
  <div>
    <div class="sidenav">
      <div class="Registration-main-text">
        <h2>
          Bearcat Job Search
          <br />Registration Page
        </h2>
        <p>Registration to access the application.</p>
      </div>
    </div>
    <div class="main form-outline">
      <div class="col-md-6">
        <div class="register-form border p-3">
          <form>
           <div class="form-group text-left">
              <label><b>First Name</b></label>
              <input type="text" class="form-control" placeholder="Firstname" />
            </div>
            <div class="form-group text-left">
              <label><b>Last Name</b></label>
              <input type="text" class="form-control" placeholder="Lastname" />
            </div>
             <div class="form-group text-left">
              <label><b>User Name</b></label>
              <input type="text" class="form-control" placeholder="User Name" />
            </div>
            <div class="form-group text-left">
              <label><b>Password</b></label>
              <input type="password" class="form-control" placeholder="Password" />
            </div>
             <div class="form-group text-left">
            <label><b>Gender</b></label>
                  <div class="maxl">
                    <label class="radio inline">
                      <input type="radio" name="gender" value="male" checked />
                      <span> Male</span>
                    </label>&nbsp&nbsp
                    <label class="radio inline">
                      <input type="radio" name="gender" value="female" />
                      <span> Female</span>
                    </label>
                  </div>
            </div>
            <div class="form-group text-left">
                  <label><b>Phone Number</b></label>
                  <input
                    type="text"
                    minlength="10"
                    maxlength="10"
                    name="txtEmpPhone"
                    class="form-control"
                    placeholder="Your Phone"
                    value
                  />
              </div>
              <input type="submit" class="btn btn-primary" value="Register" />
             </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Registration"
};
</script>

<style scoped>
.nw-bg {
  background-image: url("https://lh5.googleusercontent.com/p/AF1QipP2PpiWMDm_uvLraBe3Esmow4Wki2lwkNF-2S1k=w203-h318-k-no");
  background-color: #cccccc;
  background-repeat: no-repeat;
}
body {
  font-family: "Lato", sans-serif;
}

.main-head {
  height: 150px;
  background: #fff;
}

.sidenav {
  height: 100%;
  background-color: #000;
  overflow-x: hidden;
  padding-top: 20px;
}

.main {
  padding: 0px 10px;
}

@media screen and (max-height: 450px) {
  .sidenav {
    padding-top: 15px;
  }
}

@media screen and (max-width: 450px) {
  .Registration-form {
    margin-top: 10%;
  }

  .register-form {
    margin-top: 10%;
  }
}

@media screen and (min-width: 768px) {
  .main {
    margin-left: 40%;
  }

  .sidenav {
    width: 40%;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
  }

  .Registration-form {
    margin-top: 50%;
  }


}

.Registration-main-text {
  margin-top: 20%;
  padding: 60px;
  color: #fff;
}

.Registration-main-text h2 {
  font-weight: 300;
}

.btn-black {
  background-color: #000 !important;
  color: #fff;
}

.btn:hover {
  color: #aaa
}

</style>