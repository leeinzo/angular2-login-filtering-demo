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
var angular2_1 = require("angular2/angular2");
// Import the exported todoInput class from src/app
var inputForm_1 = require("./inputForm");
// UserService is initially an empty array
var userService_1 = require("./userService");
var userList_1 = require("./userList");
var TutorialApp = (function () {
    function TutorialApp() {
    }
    TutorialApp = __decorate([
        angular2_1.Component({
            selector: 'tutorial-app'
        }),
        angular2_1.View({
            // Angular directives are similar to WebComponents.
            // If we define and import a class and add it to the directives
            // We can then put a placeholder for it in the template.
            directives: [inputForm_1.InputForm, userList_1.UserList],
            template: "\n\t\t<div class=\"main\">\n\t\t\t<input-form></input-form>\n\t\t\t<user-list></user-list>\n\t\t</div>\n\t\t"
        }), 
        __metadata('design:paramtypes', [])
    ], TutorialApp);
    return TutorialApp;
})();
// Make this 'main' view and the UserService (containing user array) available on app initialization
angular2_1.bootstrap(TutorialApp, [userService_1.UserService]);
//# sourceMappingURL=main.js.map