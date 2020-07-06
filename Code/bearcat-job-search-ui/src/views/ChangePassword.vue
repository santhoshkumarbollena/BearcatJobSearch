<template>
	<div class="container">
    <div class="row">
      <div class="col-md-4 offset-md-4 v-center p-4 border-2px">
        <h1 class="text-center" style="font-family:argon">CHANGE PASSWORD</h1>
		<div class="offset-md-5">
         <i class="fa fa-lock fa-3x"></i>
        </div>
		<base-input
			type="password"
			placeholder="Old Password"						
			addon-left-icon="fa fa-key"
		></base-input>
		<base-input
			type="password"
			placeholder="New Password"
			addon-left-icon="fa fa-unlock"
		></base-input>
		<base-input
			type="password"
			placeholder="Confirm New Password"
			addon-left-icon="fa fa-unlock"
		></base-input>
		<base-button type="primary pull-left" icon="fa fa-save" >Save</base-button>
		<base-button type="primary pull-right" icon="fa fa-times" >Cancel</base-button>
      </div>
    </div>
	</div>
</template>