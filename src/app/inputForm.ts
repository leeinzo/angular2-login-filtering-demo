// Imported the array of directives FORM_DIRECTIVES for use when creating forms.
import {Component, View, FORM_DIRECTIVES} from "angular2/angular2";
import {UserService, UserModel} from "./userService";

@Component({
	selector: 'input-form'
})

// [older code]
// Identify each input field using the '#[input field name]' tag
// Those fields can then be accessed in the (click) event from the button
// Note that the tag is converted to camelCase when we reference it in the onClick event.
//
// N.B. no such thing as ng-click anymore in Angular1, i.e. the click event is its own directive
// In Angular2, every possible event is handled by using the parentheses and listening for specific native or custom events.
// We can also get the specific event by using $event as a first parameter.
//
// <div><p><label>username</label>&nbsp;&nbsp;<input type="text" #inp-username></p></div>
// <div><p><label>password</label>&nbsp;&nbsp;<input type="text" #inp-password></p></div>
// <div><p><button (click)="onClick($event, inpUsername.value, inpPassword.value)">log input</button></p></div>
// [/older code]
//
// Have re-wrote the template to use a form and to bind the input values to a model.
// The [()] notation denotes a two-way binding - [] represents input, () represents output
// Form uses ng-submit directive (part of FORM_DIRECTIVES) to run method in class on submission
// Each input is bound to a property of the userModel object defined in class
@View ({
	directives: [FORM_DIRECTIVES],
	styles: [`
		.loginpanel {
			width: 50%;
			max-width: 800px;
			min-width: 480px;
			margin: 0 auto;
			padding: 10px;
			font-family: Tahoma, Geneva, sans-serif;
			font-size: 14px;
			color: #0074D9;
			border: 2px solid #0074D9;
			border-radius: 12px;
			background-color: white;
		}
		.loginpanel .loginpanel-title {
			font-size: 22px;
			color: #00427D;
			padding-bottom: 5px;
			border-bottom: 2px solid #0074D9;
		}
		.loginpanel .loginpanel-inputform {
    		font-size: 18px;
    		color: #0074D9;
    		margin-top: 20px;
    		margin-bottom: 20px;
    		line-height: 26px;
		}
		.loginpanel .loginpanel-inputform input[type=text]
		{
			background-color: white;
			border: solid 2px #0074D9;
			border-radius: 6px;
			color:#00427D;
			height: 25px;
			padding-left:10px;
			width: 200px;
		}
		.loginpanel .loginpanel-buttons {
			border-top: 2px solid #0074D9;
		}
		.loginpanel .loginpanel-buttons input[type=submit]{
			padding: 7px;
			background: #3498db;
			background-image: -webkit-linear-gradient(top, #3498db, #2980b9);
			background-image: -moz-linear-gradient(top, #3498db, #2980b9);
			background-image: -ms-linear-gradient(top, #3498db, #2980b9);
			background-image: -o-linear-gradient(top, #3498db, #2980b9);
			background-image: linear-gradient(to bottom, #3498db, #2980b9);
			-webkit-border-radius: 28;
			-moz-border-radius: 28;
			border-radius: 10px;
			color: #ffffff;
			font-size: 18px;
		}
		.loginpanel .loginpanel-buttons input[type=submit]:hover{
			background: #3cb0fd;
			background-image: -webkit-linear-gradient(top, #3cb0fd, #3498db);
			background-image: -moz-linear-gradient(top, #3cb0fd, #3498db);
			background-image: -ms-linear-gradient(top, #3cb0fd, #3498db);
			background-image: -o-linear-gradient(top, #3cb0fd, #3498db);
			background-image: linear-gradient(to bottom, #3cb0fd, #3498db);
		}
	`],
	template: `
		<div class="loginpanel">
			<div class="loginpanel-title">loginner&trade;</div>
			<div class="loginpanel-inputform">
				<form (ng-submit)="onSubmit()">
				<p>
					<label>username</label><br>
					<input type="text" [(ng-model)]="userModel.username">
				</p>
				<p>
					<label>password</label><br>
					<input type="text" [(ng-model)]="userModel.password">
				</p>
				<div class="loginpanel-buttons">
				<p>
					<input type="submit" value="Create user">
				</p>
				</div>
				</form>
			</div>
		</div>
		`
})

// Handle the (click) event in the template - here displays the inputted values to console
export class InputForm{

	// Give class userModel property, bound to the userModel references in template
	userModel: UserModel = new UserModel;
	userService: UserService;

	constructor(
		// Make user of the userService array
		// Making it public exposes it to the class
		public userService:UserService

	){
		this.userService = userService;
	}

	onSubmit() {
		// Call addUser method of UserService
		this.userService.addUser(this.userModel);
		// Reset userModel property to new UserModel - otherwise userModel references in template will be bound to same one
		this.userModel = new UserModel();
	}
}
