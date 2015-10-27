// Need to import NgFor directive to use Angular2's looping function.
import {Component, View, NgFor, NgIf} from "angular2/angular2";
import {UserService} from "./userService";
import {UserRenderer} from "./userRenderer";
import {UserContains} from "./userContains";
import {UserSearch} from "./userSearch";


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
		<user-renderer *ng-for="#user of userService.users | userContains: 'username':userSearch.searchTerm" 
			[user]="user"></user-renderer>
	</div>
	`
})

export class UserList {
		
	constructor(
		public userService:UserService
	){}
}