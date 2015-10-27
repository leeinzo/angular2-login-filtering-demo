// Imported NgClass so we can define the user-renderer component's template's appearance by a property of the model passed
//  into the component. 
import {Component, View, Input, NgClass, NgIf} from "angular2/angular2";
import {UserModel} from "./userService";

@Component({
	selector: 'user-renderer'
})

@View({
	directives:[NgClass, NgIf],
	// Which css style is applied to the span in the template below depends on the user.status property.
	// Here, where the property has been set to 'deleted' (with deleted being a static variable) the template line which
	//  represents it will be struck through.
	styles: [`
		.${UserModel.ACTIVE} .userpanel {
			width: 50%;
			max-width: 800px;
			min-width: 480px;
			margin-top: 20px;
			margin-left: auto;
			margin-right: auto;
			padding: 10px;
			font-family: Tahoma, Geneva, sans-serif;
			font-size: 14px;
			color: #0074D9;
			border: 2px solid #2496FC;
			border-radius: 12px;
			background-color: white;
			margin-bottom: 20px;
		}
		.${UserModel.ACTIVE} .userpanel .userpanel-header {
			font-size: 22px;
			color: #0074D9;
			padding-bottom: 5px;
			border-bottom: 2px solid #0074D9;
		}
		.${UserModel.ACTIVE} .userpanel .userpanel-header .userpanel-header-button {
			float: right;
		}
		.${UserModel.ACTIVE} .userpanel .userpanel-header-text, .userpanel-header-button {
			display: inline;
		}
		.${UserModel.ACTIVE} .userpanel .userpanel-header-text-id {
			font-size: 22px;
			color: #2496FC;
		}
		.${UserModel.ACTIVE} .userpanel .userpanel-header-text-username {
			font-size: 22px;
			color: #B10DC9;
		}
		.${UserModel.ACTIVE} .userpanel .userpanel-header .userpanel-header-button button{
			padding: 5px;
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
			font-size: 14px;
			margin-bottom: 5px;
		}
		.${UserModel.ACTIVE} .userpanel .userpanel-header .userpanel-header-button button:hover{
			background: #3cb0fd;
			background-image: -webkit-linear-gradient(top, #3cb0fd, #3498db);
			background-image: -moz-linear-gradient(top, #3cb0fd, #3498db);
			background-image: -ms-linear-gradient(top, #3cb0fd, #3498db);
			background-image: -o-linear-gradient(top, #3cb0fd, #3498db);
			background-image: linear-gradient(to bottom, #3cb0fd, #3498db);
		}
		.${UserModel.ACTIVE} .userpanel .userpanel-details {
			color: #CB5CDA;
			margin-top: 10px;
			margin-bottom: 10px;
		}
		.${UserModel.DELETED} .userpanel {
			width: 50%;
			max-width: 800px;
			min-width: 480px;
			margin: 0 auto;
			padding: 10px;
			font-family: Tahoma, Geneva, sans-serif;
			font-size: 14px;
			color: #0074D9;
			border: 2px solid #AAAAAA;
			border-radius: 12px;
			background-color: white;
			margin-bottom: 20px;
		}
		.${UserModel.DELETED} .userpanel .userpanel-header {
			font-size: 22px;
			color: #0074D9;
			padding-bottom: 5px;
			border-bottom: 2px solid #AAAAAA;
		}
		.${UserModel.DELETED} .userpanel .userpanel-header .userpanel-header-button {
			float: right;
		}
		.${UserModel.DELETED} .userpanel .userpanel-header-text, .userpanel-header-button {
			display: inline;
		}
		.${UserModel.DELETED} .userpanel .userpanel-header-text-id {
			font-size: 22px;
			color: #2496FC;
		}
		.${UserModel.DELETED} .userpanel .userpanel-header-text-username {
			font-size: 22px;
			color: #AAAAAA;
		}
		.${UserModel.DELETED} .userpanel .userpanel-header .userpanel-header-button button{
			padding: 5px;
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
			font-size: 14px;
			margin-bottom: 5px;
		}
		.${UserModel.DELETED} .userpanel .userpanel-header .userpanel-header-button button:hover{
			background: #3cb0fd;
			background-image: -webkit-linear-gradient(top, #3cb0fd, #3498db);
			background-image: -moz-linear-gradient(top, #3cb0fd, #3498db);
			background-image: -ms-linear-gradient(top, #3cb0fd, #3498db);
			background-image: -o-linear-gradient(top, #3cb0fd, #3498db);
			background-image: linear-gradient(to bottom, #3cb0fd, #3498db);
		}
		.${UserModel.DELETED} .userpanel .userpanel-details {
			color: #AAAAAA;
			margin-top: 10px;
			margin-bottom: 10px;
		}
	`],
	// By using the ng-class directive on the span and setting the class to the user.status, we can define the appearance
	//  of the span by using the .${UserModel.[property]} notation as above.
	// The NgIf directive is used to hide or show the 'Activate' and 'Deactivate' buttons accordingly, dependent on the
	//  current status of the user.
	template:
	` 
		<div [ng-class]="user.status">
			<div class="userpanel">
				<div class="userpanel-header">
					<div class="userpanel-header-text">
						<span class="userpanel-header-text-id">#{{user.id}}:</span> <span class="userpanel-header-text-username">{{user.username}}</span>
					</div>
					<div class="userpanel-header-button" *ng-if="user.status=='active'">
						<button (click) = "user.setStatusDeleted()">Deactivate</button>
					</div>
					<div class="userpanel-header-button" *ng-if="user.status=='deleted'">
						<button (click) = "user.setStatusActive()">Activate</button>
					</div>
				</div>
				<div class="userpanel-details">
					password: {{user.password}}
				</div>
			</div>
		</div>
	`
})

export class UserRenderer{
	// In combination with the 'Input' module on the UserRenderer component,
	//  the notation [user]="user" passes the component the model.
	@Input() user:UserModel;
}