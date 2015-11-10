// Need to import NgFor directive to use Angular2's looping function.
import {Component, View, NgFor, NgIf} from "angular2/angular2";
import {UserService, UserModel} from "../services/userService";
import {UserRenderer} from "./userRenderer";
import {UserContains} from "../utils/userContains";
import {UserSearch} from "../components/userSearch";

import * as Rx from "rx";


@Component({
	selector: 'user-list'
})

// Since this is a 'template directive' (template is altered in some way), the *[directive] notation is used
// #[variable] notation is used when the variable is due to be used in the template elsewhere
//
// The UserRenderer component will display a user object in the desired way when passed a 'user' object.
// In combination with the 'Input' module on the UserRenderer component,
//  the notation [user]="user" passes the component the model.
//
// The list of users displayed is filtered by the searchTerm property of the userSearch component, using a pipe which is
//  defined as in use by the component in the below way.
// The UserContains class returns a subset of the entire userService.users array. It is assigned two parameters - the
//  'username' property of the individual users and the searchTerm taken from the user-search component above.
@View({
	pipes:[UserContains],
	directives: [NgFor, UserRenderer, NgIf, UserSearch],
	template:
	`
	<user-search #user-search></user-search>
	<div>
		<user-renderer *ng-for="#user of users | userContains: 'username':userSearch.searchTerm"
			[user]="user"></user-renderer>
	</div>
	`
})

export class UserList {

	// Holds a version of the current list of users, taken from the UserService - this is perhaps wasting memory,
	//   so could do with filtering service-side
	users: Array<UserModel>;

	constructor(
		public userService:UserService
	){
		this.users = new Array<UserModel>();

		// Populate initial value for users array
		this.users = userService.users.userList;

		// Get a reference to the observable property of UserService's ObservableUserList - whenever a new item is
		//   added to the list through the input-form component, this observable will fire a message containing
		//   the updated array.
		this.userService.users.getObservable().subscribe(
			x => this.users = x
		);
	}
}
