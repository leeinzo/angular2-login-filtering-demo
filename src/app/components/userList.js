var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Need to import NgFor directive to use Angular2's looping function.
var angular2_1 = require("angular2/angular2");
var userService_1 = require("../services/userService");
var userRenderer_1 = require("./userRenderer");
var userContains_1 = require("../utils/userContains");
var userSearch_1 = require("../components/userSearch");
var UserList = (function () {
    function UserList(userService) {
        var _this = this;
        this.userService = userService;
        this.users = new Array();
        // Populate initial value for users array
        this.users = userService.users.userList;
        // Get a reference to the observable property of UserService's ObservableUserList - whenever a new item is
        //   added to the list through the input-form component, this observable will fire a message containing
        //   the updated array.
        this.userService.users.getObservable().subscribe(function (x) { return _this.users = x; });
    }
    UserList = __decorate([
        angular2_1.Component({
            selector: 'user-list'
        }),
        angular2_1.View({
            pipes: [userContains_1.UserContains],
            directives: [angular2_1.NgFor, userRenderer_1.UserRenderer, angular2_1.NgIf, userSearch_1.UserSearch],
            template: "\n\t<user-search #user-search></user-search>\n\t<div>\n\t\t<user-renderer *ng-for=\"#user of users | userContains: 'username':userSearch.searchTerm\"\n\t\t\t[user]=\"user\"></user-renderer>\n\t</div>\n\t"
        }), 
        __metadata('design:paramtypes', [userService_1.UserService])
    ], UserList);
    return UserList;
})();
exports.UserList = UserList;
//# sourceMappingURL=userList.js.map