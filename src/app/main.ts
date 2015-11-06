import {bootstrap, Component, View, bind} from "angular2/angular2";
// Import the exported todoInput class from src/app
import {InputForm} from "./inputForm";
// UserService is initially an empty array
import {UserService} from "./userService";
import {UserList} from "./userList";

@Component({
	selector: 'tutorial-app'
})

@View ({
	// Angular directives are similar to WebComponents.
	// If we define and import a class and add it to the directives
	// We can then put a placeholder for it in the template.
	directives: [InputForm, UserList],
	template: `
		<div class="main">
			<input-form></input-form>
			<user-list></user-list>
		</div>
		`
})

class TutorialApp{}

// Make this 'main' view and the UserService (containing user array) available on app initialization
bootstrap(TutorialApp, [bind(UserService).toClass(UserService)]);