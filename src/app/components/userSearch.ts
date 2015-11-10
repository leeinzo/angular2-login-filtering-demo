import {Component, View, FORM_DIRECTIVES, NgIf} from "angular2/angular2";
import {UserService} from "../services/userService";

@Component({
	selector: 'user-search'
})

@View({
	directives: [FORM_DIRECTIVES, NgIf],
	styles:[`
		.connector {
			background-color: #0074D9;
			height: 20px;
			width: 40%;
			margin-left: auto;
			margin-right: auto;
		}
		.userlist-search {
			width: 50%;
			max-width: 800px;
			min-width: 480px;
			margin: 0 auto;
			padding: 10px;
			font-family: Tahoma, Geneva, sans-serif;
			font-size: 14px;
			color: #00427D;
			border: 2px solid #0074D9;
			border-radius: 12px;
			background-color: white;
		}
		.userlist-search input[type=text]
		{
			background-color: white;
			border: solid 2px #0074D9;
			border-radius: 6px;
			color:#00427D;
			height: 25px;
			padding-left:10px;
			width: 200px;
		}
	`],
	// The search panel.
	// The div containing the template will only display if the isAnyUsers method on the userService returns true.
	//
	// The input field will set the searchTerm property on the class, which is used in the userList component to filter the
	//  list of displayed users.
	template:
	`
		<div *ng-if="userService.isAnyUsers()">
			<div class="connector"></div>
			<div class="userlist-search">
				<p><label>Search user:</label>&nbsp;&nbsp;<input type="text" [(ng-model)]='searchTerm'></p>
			</div>
		</div>
	`
})

export class UserSearch {

	searchTerm:string = "";

	constructor(
		public userService:UserService
	){

	}
}
