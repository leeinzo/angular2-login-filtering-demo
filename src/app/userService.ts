// Service used by (imported, or injected, into) the inputForm component, takes a json string formed from the two input fields
//  and inserts them into an array as a record of a user.
export class UserModel{
	static ACTIVE: string = "active";
	static DELETED: string = "deleted";
	
	status: string = UserModel.ACTIVE;
	
	constructor(
		public id: number = null,
		public username: string = "",
		public password: string = "",
		public activeStatus: boolean = false
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

export class UserService{
	
	// Array of 'UserModel's defined above as class property
	users:UserModel[] = [
		new UserModel(1, 'dkane', 'password1'),
		new UserModel(2, 'davek', 'password2'),
	];
	
	// This method is called when the form on the inputForm component is submitted, passing through the entries in the text
	//  boxes to construct the new user to add to the 'users' array.
	addUser(newUser:UserModel):void {
		newUser.id = this.users.length + 1;
		newUser.activeStatus = true;
		this.users.push(newUser);
	}
	
	// Checks if the users Array is empty - used by the userSearch component to decide whether to display or not.
	isAnyUsers():boolean {
		var anyUsers = false;
		if(this.users.length > 0) {
			anyUsers = true;
		}
		return anyUsers;
	}
}