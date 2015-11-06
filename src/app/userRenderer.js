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
// Imported NgClass so we can define the user-renderer component's template's appearance by a property of the model passed
//  into the component.
var angular2_1 = require("angular2/angular2");
var userService_1 = require("./userService");
var UserRenderer = (function () {
    function UserRenderer() {
    }
    __decorate([
        angular2_1.Input(), 
        __metadata('design:type', userService_1.UserModel)
    ], UserRenderer.prototype, "user");
    UserRenderer = __decorate([
        angular2_1.Component({
            selector: 'user-renderer'
        }),
        angular2_1.View({
            directives: [angular2_1.NgClass, angular2_1.NgIf],
            // Which css style is applied to the span in the template below depends on the user.status property.
            // Here, where the property has been set to 'deleted' (with deleted being a static variable) the template line which
            //  represents it will be struck through.
            styles: [("\n\t\t." + userService_1.UserModel.ACTIVE + " .userpanel {\n\t\t\twidth: 50%;\n\t\t\tmax-width: 800px;\n\t\t\tmin-width: 480px;\n\t\t\tmargin-top: 20px;\n\t\t\tmargin-left: auto;\n\t\t\tmargin-right: auto;\n\t\t\tpadding: 10px;\n\t\t\tfont-family: Tahoma, Geneva, sans-serif;\n\t\t\tfont-size: 14px;\n\t\t\tcolor: #0074D9;\n\t\t\tborder: 2px solid #2496FC;\n\t\t\tborder-radius: 12px;\n\t\t\tbackground-color: white;\n\t\t\tmargin-bottom: 20px;\n\t\t}\n\t\t." + userService_1.UserModel.ACTIVE + " .userpanel .userpanel-header {\n\t\t\tfont-size: 22px;\n\t\t\tcolor: #0074D9;\n\t\t\tpadding-bottom: 5px;\n\t\t\tborder-bottom: 2px solid #0074D9;\n\t\t}\n\t\t." + userService_1.UserModel.ACTIVE + " .userpanel .userpanel-header .userpanel-header-button {\n\t\t\tfloat: right;\n\t\t}\n\t\t." + userService_1.UserModel.ACTIVE + " .userpanel .userpanel-header-text, .userpanel-header-button {\n\t\t\tdisplay: inline;\n\t\t}\n\t\t." + userService_1.UserModel.ACTIVE + " .userpanel .userpanel-header-text-id {\n\t\t\tfont-size: 22px;\n\t\t\tcolor: #2496FC;\n\t\t}\n\t\t." + userService_1.UserModel.ACTIVE + " .userpanel .userpanel-header-text-username {\n\t\t\tfont-size: 22px;\n\t\t\tcolor: #B10DC9;\n\t\t}\n\t\t." + userService_1.UserModel.ACTIVE + " .userpanel .userpanel-header .userpanel-header-button button{\n\t\t\tpadding: 5px;\n\t\t\tbackground: #3498db;\n\t\t\tbackground-image: -webkit-linear-gradient(top, #3498db, #2980b9);\n\t\t\tbackground-image: -moz-linear-gradient(top, #3498db, #2980b9);\n\t\t\tbackground-image: -ms-linear-gradient(top, #3498db, #2980b9);\n\t\t\tbackground-image: -o-linear-gradient(top, #3498db, #2980b9);\n\t\t\tbackground-image: linear-gradient(to bottom, #3498db, #2980b9);\n\t\t\t-webkit-border-radius: 28;\n\t\t\t-moz-border-radius: 28;\n\t\t\tborder-radius: 10px;\n\t\t\tcolor: #ffffff;\n\t\t\tfont-size: 14px;\n\t\t\tmargin-bottom: 5px;\n\t\t}\n\t\t." + userService_1.UserModel.ACTIVE + " .userpanel .userpanel-header .userpanel-header-button button:hover{\n\t\t\tbackground: #3cb0fd;\n\t\t\tbackground-image: -webkit-linear-gradient(top, #3cb0fd, #3498db);\n\t\t\tbackground-image: -moz-linear-gradient(top, #3cb0fd, #3498db);\n\t\t\tbackground-image: -ms-linear-gradient(top, #3cb0fd, #3498db);\n\t\t\tbackground-image: -o-linear-gradient(top, #3cb0fd, #3498db);\n\t\t\tbackground-image: linear-gradient(to bottom, #3cb0fd, #3498db);\n\t\t}\n\t\t." + userService_1.UserModel.ACTIVE + " .userpanel .userpanel-details {\n\t\t\tcolor: #CB5CDA;\n\t\t\tmargin-top: 10px;\n\t\t\tmargin-bottom: 10px;\n\t\t}\n\t\t." + userService_1.UserModel.DELETED + " .userpanel {\n\t\t\twidth: 50%;\n\t\t\tmax-width: 800px;\n\t\t\tmin-width: 480px;\n\t\t\tmargin-top: 20px;\n\t\t\tmargin-left: auto;\n\t\t\tmargin-right: auto;\n\t\t\tpadding: 10px;\n\t\t\tfont-family: Tahoma, Geneva, sans-serif;\n\t\t\tfont-size: 14px;\n\t\t\tcolor: #0074D9;\n\t\t\tborder: 2px solid #AAAAAA;\n\t\t\tborder-radius: 12px;\n\t\t\tbackground-color: white;\n\t\t\tmargin-bottom: 20px;\n\t\t}\n\t\t." + userService_1.UserModel.DELETED + " .userpanel .userpanel-header {\n\t\t\tfont-size: 22px;\n\t\t\tcolor: #0074D9;\n\t\t\tpadding-bottom: 5px;\n\t\t\tborder-bottom: 2px solid #AAAAAA;\n\t\t}\n\t\t." + userService_1.UserModel.DELETED + " .userpanel .userpanel-header .userpanel-header-button {\n\t\t\tfloat: right;\n\t\t}\n\t\t." + userService_1.UserModel.DELETED + " .userpanel .userpanel-header-text, .userpanel-header-button {\n\t\t\tdisplay: inline;\n\t\t}\n\t\t." + userService_1.UserModel.DELETED + " .userpanel .userpanel-header-text-id {\n\t\t\tfont-size: 22px;\n\t\t\tcolor: #2496FC;\n\t\t}\n\t\t." + userService_1.UserModel.DELETED + " .userpanel .userpanel-header-text-username {\n\t\t\tfont-size: 22px;\n\t\t\tcolor: #AAAAAA;\n\t\t}\n\t\t." + userService_1.UserModel.DELETED + " .userpanel .userpanel-header .userpanel-header-button button{\n\t\t\tpadding: 5px;\n\t\t\tbackground: #3498db;\n\t\t\tbackground-image: -webkit-linear-gradient(top, #3498db, #2980b9);\n\t\t\tbackground-image: -moz-linear-gradient(top, #3498db, #2980b9);\n\t\t\tbackground-image: -ms-linear-gradient(top, #3498db, #2980b9);\n\t\t\tbackground-image: -o-linear-gradient(top, #3498db, #2980b9);\n\t\t\tbackground-image: linear-gradient(to bottom, #3498db, #2980b9);\n\t\t\t-webkit-border-radius: 28;\n\t\t\t-moz-border-radius: 28;\n\t\t\tborder-radius: 10px;\n\t\t\tcolor: #ffffff;\n\t\t\tfont-size: 14px;\n\t\t\tmargin-bottom: 5px;\n\t\t}\n\t\t." + userService_1.UserModel.DELETED + " .userpanel .userpanel-header .userpanel-header-button button:hover{\n\t\t\tbackground: #3cb0fd;\n\t\t\tbackground-image: -webkit-linear-gradient(top, #3cb0fd, #3498db);\n\t\t\tbackground-image: -moz-linear-gradient(top, #3cb0fd, #3498db);\n\t\t\tbackground-image: -ms-linear-gradient(top, #3cb0fd, #3498db);\n\t\t\tbackground-image: -o-linear-gradient(top, #3cb0fd, #3498db);\n\t\t\tbackground-image: linear-gradient(to bottom, #3cb0fd, #3498db);\n\t\t}\n\t\t." + userService_1.UserModel.DELETED + " .userpanel .userpanel-details {\n\t\t\tcolor: #AAAAAA;\n\t\t\tmargin-top: 10px;\n\t\t\tmargin-bottom: 10px;\n\t\t}\n\t")],
            // By using the ng-class directive on the span and setting the class to the user.status, we can define the appearance
            //  of the span by using the .${UserModel.[property]} notation as above.
            // The NgIf directive is used to hide or show the 'Activate' and 'Deactivate' buttons accordingly, dependent on the
            //  current status of the user.
            template: "\n\t\t<div [ng-class]=\"user.status\">\n\t\t\t<div class=\"userpanel\">\n\t\t\t\t<div class=\"userpanel-header\">\n\t\t\t\t\t<div class=\"userpanel-header-text\">\n\t\t\t\t\t\t<span class=\"userpanel-header-text-id\">#{{user.id}}:</span> <span class=\"userpanel-header-text-username\">{{user.username}}</span>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"userpanel-header-button\" *ng-if=\"user.status=='active'\">\n\t\t\t\t\t\t<button (click) = \"user.setStatusDeleted()\">Deactivate</button>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"userpanel-header-button\" *ng-if=\"user.status=='deleted'\">\n\t\t\t\t\t\t<button (click) = \"user.setStatusActive()\">Activate</button>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"userpanel-details\">\n\t\t\t\t\tpassword: {{user.password}}\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t"
        }), 
        __metadata('design:paramtypes', [])
    ], UserRenderer);
    return UserRenderer;
})();
exports.UserRenderer = UserRenderer;
//# sourceMappingURL=userRenderer.js.map