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
var userService_1 = require("./userService");
var UserSearch = (function () {
    function UserSearch(userService) {
        this.userService = userService;
        this.searchTerm = "";
    }
    UserSearch = __decorate([
        angular2_1.Component({
            selector: 'user-search'
        }),
        angular2_1.View({
            directives: [angular2_1.FORM_DIRECTIVES, angular2_1.NgIf],
            styles: ["\n\t\t.connector {\n\t\t\tbackground-color: #0074D9;\n\t\t\theight: 20px;\n\t\t\twidth: 40%;\n\t\t\tmargin-left: auto;\n\t\t\tmargin-right: auto;\n\t\t}\n\t\t.userlist-search {\n\t\t\twidth: 50%;\n\t\t\tmax-width: 800px;\n\t\t\tmin-width: 480px;\n\t\t\tmargin: 0 auto;\n\t\t\tpadding: 10px;\n\t\t\tfont-family: Tahoma, Geneva, sans-serif;\n\t\t\tfont-size: 14px;\n\t\t\tcolor: #00427D;\n\t\t\tborder: 2px solid #0074D9;\n\t\t\tborder-radius: 12px;\n\t\t\tbackground-color: white;\n\t\t}\n\t\t.userlist-search input[type=text]\n\t\t{\n\t\t\tbackground-color: white;\n\t\t\tborder: solid 2px #0074D9;\n\t\t\tborder-radius: 6px;\n\t\t\tcolor:#00427D;\n\t\t\theight: 25px;\n\t\t\tpadding-left:10px;\n\t\t\twidth: 200px;\n\t\t}\n\t"],
            // The search panel.
            // The div containing the template will only display if the isAnyUsers method on the userService returns true.
            //
            // The input field will set the searchTerm property on the class, which is used in the userList component to filter the
            //  list of displayed users.
            template: "\n\t\t<div *ng-if=\"userService.isAnyUsers()\">\n\t\t\t<div class=\"connector\"></div>\n\t\t\t<div class=\"userlist-search\">\n\t\t\t\t<p><label>Search user:</label>&nbsp;&nbsp;<input type=\"text\" [(ng-model)]='searchTerm'></p>\n\t\t\t</div>\n\t\t</div>\n\t"
        }), 
        __metadata('design:paramtypes', [userService_1.UserService])
    ], UserSearch);
    return UserSearch;
})();
exports.UserSearch = UserSearch;
//# sourceMappingURL=userSearch.js.map