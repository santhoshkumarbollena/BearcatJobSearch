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
			<section>
				<div class="container">
					<div class="row justify-content-center">
						<div class="col-12 col-md-8 col-lg-8 col-xl-6">
							<div class="row align-items-center mt-4">
								<div class="col">
									<div class="input-group"> <span class="fa-stack fa-lg">
                <i class="fa fa-square-o fa-stack-2x"></i>
                 <i class="fa fa-user fa-1x"></i>
                 </span>
										<input type="text" class="form-control" placeholder="First Name"> </div>
								</div>
							</div>
							<div class="row align-items-center mt-4">
								<div class="col">
									<div class="input-group"> <span class="fa-stack fa-lg">
                <i class="fa fa-square-o fa-stack-2x"></i>
                 <i class="fa fa-user fa-1x"></i>
                 </span>
										<input type="text" class="form-control" placeholder="Last Name"> </div>
								</div>
							</div>
							<div class="row align-items-center mt-4">
								<div class="col">
									<div class="input-group"> <span class="fa-stack fa-lg">
                <i class="fa fa-square-o fa-stack-2x"></i>
                 <i class="fa fa-phone fa-1x"></i>
                 </span>
										<input type="text" class="form-control" placeholder="Phone Number"> </div>
								</div>
							</div>
							<div class="row text-left mt-4">
								<div class="col">
									<div class="form-check form-check-inline">
										<input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="Male">
										<label class="form-check-label" for="inlineRadio1">Male</label> <span class="fa-stack fa-lg">
                  <i class="fa fa-circle fa-stack-1x"></i>
                  <i class="fa fa-male fa-stack-1x fa-inverse"></i>
                </span> </div>
									<div class="form-check form-check-inline">
										<input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="Female">
										<label class="form-check-label" for="inlineRadio2">Female</label> <span class="fa-stack fa-lg">
                  <i class="fa fa-circle fa-stack-1x"></i>
                  <i class="fa fa-female fa-stack-1x fa-inverse"></i>
                </span> </div>
								</div>
							</div>
							<div class="row align-items-center mt-4">
								<div class="col">
									<div class="input-group"> <span class="fa-stack fa-lg">
                <i class="fa fa-square-o fa-stack-2x"></i>
                 <i class="fa fa-envelope fa-1x"></i>
                 </span>
										<input type="email" class="form-control" placeholder="Email"> </div>
								</div>
							</div>
							<div class="row align-items-center mt-4">
								<div class="col">
									<div class="input-group"> <span class="fa-stack fa-lg">
                <i class="fa fa-square-o fa-stack-2x"></i>
                 <i class="fa fa-lock fa-1x"></i>
                 </span>
										<input type="password" class="form-control" placeholder="Password"> </div>
								</div>
							</div>
							<div class="row text-left mt-4">
								<div class="col">
									<div class="form-check">
										<label class="form-check-label">
											<input type="checkbox" class="form-check-input"> I Read and Accept <a href="#">Terms and Conditions</a> </label>
									</div>
									<button class="btn btn-primary mt-4">Register</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
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