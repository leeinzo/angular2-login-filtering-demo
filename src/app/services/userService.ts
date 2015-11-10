import * as Rx from 'rx';

// Service used by (imported, or injected, into) the inputForm component, takes a json string formed from the two input fields
//  and inserts them into an array as a record of a user.
export class UserModel{
	static ACTIVE: string = "active";
	static DELETED: string = "deleted";

	status: string = UserModel.ACTIVE;

	constructor(
		public id: number = null,
		public username: string = "",
		public password: string = ""
	){}

	// called from userRenderer.ts, sets the status of the user represented by the component
	//  which will be used to apply styling to the component
	setStatusDeleted():void {
		this.status = UserModel.DELETED;
	}

	setStatusActive():void {
		this.status = UserModel.ACTIVE;
	}
}


// This class combines the array of users and an Rx.Subject object that will fire a message whenever the array is
//   added to  - this seemed like the easiest way to get this working, adapted for ES6 from
//   http://stackoverflow.com/questions/28816691/how-can-i-create-an-observer-over-a-dynamic-list-in-rxjava
export class ObservableUserList<item> {

	userList: Array<item>;
	onAddUser: Rx.Subject<Array<item>>;

	constructor() {
		this.userList = new Array<item>();
		this.userList.push(new UserModel(1, "davek", "password1"));
		this.userList.push(new UserModel(2, "dkane", "password2"));
		this.onAddUser = new Rx.Subject<Array<item>>();
	}


	// When the addUser method is called from the addUser method on the UserService class, the user is pushed to the
	//   array and the Subject object sends out a message with the contents of the updated userList, to be used
	//   by the UserList component
	public addUser(newUser):void {
		if(this.userList.length > 0)
		{ newUser.id = this.userList[this.userList.length - 1].id + 1; }
		else
		{ newUser.id = 1};
		this.userList.push(newUser);
		this.onAddUser.onNext(this.userList);
	}


	// Returns the onAddUser Subject object for monitoring by its subscribers
	public getObservable():Rx.Observable {
		return this.onAddUser;
	}
}

export class UserService {

	// The list of users currently held as a property of the UserService, as an object which consists of the users
	//   array with an observable attached
	users: ObservableUserList<UserModel>;

	constructor() {
		this.users = new ObservableUserList<UserModel>();
	}

	// Returns a bool signifying whether the users array in ObservableUserList is populated, for use by the user-search
	//   component when deciding whrther to show the search box
	isAnyUsers():boolean {
		var anyUsers = false;
	  	if(this.users.userList.length > 0) {
		 	 anyUsers = true;
		}
		return anyUsers;
	}

	// Add a user, calling the assUser method of the ObservableUserList.
	addUser(newUser:UserModel):void {
		this.users.addUser(newUser);
	}
}
