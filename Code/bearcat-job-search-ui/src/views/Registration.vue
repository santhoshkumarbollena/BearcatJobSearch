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
              <label>First Name</label>
              <input type="text" class="form-control" placeholder="Firstname" />
            </div>
            <div class="form-group text-left">
              <label>Last Name</label>
              <input type="text" class="form-control" placeholder="Lastname" />
            </div>
             <div class="form-group text-left">
              <label>User Name</label>
              <input type="text" class="form-control" placeholder="User Name" />
            </div>
            <div class="form-group text-left">
              <label>Password</label>
              <input type="password" class="form-control" placeholder="Password" />
            </div>
             <div class="form-group text-left">
            <label>Gender</label>
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