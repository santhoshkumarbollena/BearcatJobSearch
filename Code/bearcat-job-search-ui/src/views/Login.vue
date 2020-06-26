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
				<div class="login-form p-3">
					<form>
						<div class="form-group">
							<div class="input-group">
								<span class="fa-stack fa-lg">
									<i class="fa fa-square-o fa-stack-2x"></i>
									<i class="fa fa-user fa-1x"></i>
								</span>
								<input type="text" class="form-control" placeholder="User Name" />
							</div>
						</div>
						<div class="form-group">
							<div class="input-group">
								<span class="fa-stack fa-lg">
									<i class="fa fa-square-o fa-stack-2x"></i>
									<i class="fa fa-unlock fa-1x"></i>
								</span>
								<input type="password" class="form-control" placeholder="Password" />
								<br>
								</div>
							</div>
							<button type="submit" class="btn btn-primary mr-2">Login</button>
							<button type="submit" class="btn btn-secondary">Register</button>
							<div class="form-group mt-3">
								<a href="/#/login" id="forgot-pwd">Forgot password?</a>
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
  .login-form {
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

  .login-form {
    margin-top: 50%;
  }

  .register-form {
    margin-top: 20%;
  }
}

.login-main-text {
  margin-top: 20%;
  padding: 60px;
  color: #fff;
}

.login-main-text h2 {
  font-weight: 300;
}

.btn-black {
  background-color: #000 !important;
  color: #fff;
}

.btn:hover {
  color: #aaa
}

#forgot-pwd {
  color: #000000
}

</style>