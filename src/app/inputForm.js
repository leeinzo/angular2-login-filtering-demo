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
// Imported the array of directives FORM_DIRECTIVES for use when creating forms.
var angular2_1 = require("angular2/angular2");
var userService_1 = require("./userService");
var InputForm = (function () {
    function InputForm(
        // Make user of the userService array
        // Making it public exposes it to the class
        userService) {
        this.userService = userService;
        // Give class userModel property, bound to the userModel references in template
        this.userModel = new userService_1.UserModel;
        console.log(userService);
    }
    InputForm.prototype.onSubmit = function () {
        // Call addUser method of UserService
        this.userService.addUser(this.userModel);
        // Reset userModel property to new UserModel - otherwise userModel references in template will be bound to same one
        this.userModel = new userService_1.UserModel();
    };
    InputForm = __decorate([
        angular2_1.Component({
            selector: 'input-form'
        }),
        angular2_1.View({
            directives: [angular2_1.FORM_DIRECTIVES],
            styles: ["\n\t\t.loginpanel {\n\t\t\twidth: 50%;\n\t\t\tmax-width: 800px;\n\t\t\tmin-width: 480px;\n\t\t\tmargin: 0 auto;\n\t\t\tpadding: 10px;\n\t\t\tfont-family: Tahoma, Geneva, sans-serif;\n\t\t\tfont-size: 14px;\n\t\t\tcolor: #0074D9;\n\t\t\tborder: 2px solid #0074D9;\n\t\t\tborder-radius: 12px;\n\t\t\tbackground-color: white;\n\t\t}\n\t\t.loginpanel .loginpanel-title {\n\t\t\tfont-size: 22px;\n\t\t\tcolor: #00427D;\n\t\t\tpadding-bottom: 5px;\n\t\t\tborder-bottom: 2px solid #0074D9;\n\t\t}\n\t\t.loginpanel .loginpanel-inputform {\n    \t\tfont-size: 18px;\n    \t\tcolor: #0074D9;\n    \t\tmargin-top: 20px;\n    \t\tmargin-bottom: 20px;\n    \t\tline-height: 26px;\n\t\t}\n\t\t.loginpanel .loginpanel-inputform input[type=text]\n\t\t{\n\t\t\tbackground-color: white;\n\t\t\tborder: solid 2px #0074D9;\n\t\t\tborder-radius: 6px;\n\t\t\tcolor:#00427D;\n\t\t\theight: 25px;\n\t\t\tpadding-left:10px;\n\t\t\twidth: 200px;\n\t\t}\n\t\t.loginpanel .loginpanel-buttons {\n\t\t\tborder-top: 2px solid #0074D9;\n\t\t}\n\t\t.loginpanel .loginpanel-buttons input[type=submit]{\n\t\t\tpadding: 7px;\n\t\t\tbackground: #3498db;\n\t\t\tbackground-image: -webkit-linear-gradient(top, #3498db, #2980b9);\n\t\t\tbackground-image: -moz-linear-gradient(top, #3498db, #2980b9);\n\t\t\tbackground-image: -ms-linear-gradient(top, #3498db, #2980b9);\n\t\t\tbackground-image: -o-linear-gradient(top, #3498db, #2980b9);\n\t\t\tbackground-image: linear-gradient(to bottom, #3498db, #2980b9);\n\t\t\t-webkit-border-radius: 28;\n\t\t\t-moz-border-radius: 28;\n\t\t\tborder-radius: 10px;\n\t\t\tcolor: #ffffff;\n\t\t\tfont-size: 18px;\n\t\t}\n\t\t.loginpanel .loginpanel-buttons input[type=submit]:hover{\n\t\t\tbackground: #3cb0fd;\n\t\t\tbackground-image: -webkit-linear-gradient(top, #3cb0fd, #3498db);\n\t\t\tbackground-image: -moz-linear-gradient(top, #3cb0fd, #3498db);\n\t\t\tbackground-image: -ms-linear-gradient(top, #3cb0fd, #3498db);\n\t\t\tbackground-image: -o-linear-gradient(top, #3cb0fd, #3498db);\n\t\t\tbackground-image: linear-gradient(to bottom, #3cb0fd, #3498db);\n\t\t}\n\t"],
            template: "\n\t\t<div class=\"loginpanel\">\n\t\t\t<div class=\"loginpanel-title\">loginner&trade;</div>\n\t\t\t<div class=\"loginpanel-inputform\">\n\t\t\t\t<form (ng-submit)=\"onSubmit()\">\n\t\t\t\t<p>\n\t\t\t\t\t<label>username</label><br>\n\t\t\t\t\t<input type=\"text\" [(ng-model)]=\"userModel.username\">\n\t\t\t\t</p>\n\t\t\t\t<p>\n\t\t\t\t\t<label>password</label><br>\n\t\t\t\t\t<input type=\"text\" [(ng-model)]=\"userModel.password\">\n\t\t\t\t</p>\n\t\t\t\t<div class=\"loginpanel-buttons\">\n\t\t\t\t<p>\n\t\t\t\t\t<input type=\"submit\" value=\"Create user\">\n\t\t\t\t</p>\n\t\t\t\t</div>\n\t\t\t\t</form>\n\t\t\t</div>\n\t\t</div>\n\t\t"
        }), 
        __metadata('design:paramtypes', [userService_1.UserService])
    ], InputForm);
    return InputForm;
})();
exports.InputForm = InputForm;
//# sourceMappingURL=inputForm.js.map