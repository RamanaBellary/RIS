System.register(['angular2/core', 'angular2/router', './GlobalMembersUtil', 'angular2/http'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, GlobalMembersUtil_1, http_1;
    var Login;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (GlobalMembersUtil_1_1) {
                GlobalMembersUtil_1 = GlobalMembersUtil_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            Login = (function () {
                //@Output() onUserLoggedIn = new EventEmitter<any>();
                function Login(router, globalMembersUtil, http) {
                    this.router = router;
                    this.globalMembersUtil = globalMembersUtil;
                    this.http = http;
                }
                Login.prototype.OnLogin = function () {
                    var _this = this;
                    console.log("UserName Entered:" + this.userName);
                    var hdr = new http_1.Headers({ 'content-type': 'application/json' });
                    hdr.append('username', this.userName);
                    hdr.append('password', this.password);
                    var rsp = Object;
                    this.http.get('http://localhost:8084/api/ris/login', { headers: hdr })
                        .subscribe(function (res) { return _this.afterLogin(res); }, function (error) { return console.log(error); });
                };
                Login.prototype.afterLogin = function (res) {
                    var jsonData = res.json();
                    console.log(JSON.stringify(jsonData));
                    var jsonDataRes = JSON.parse(JSON.stringify(jsonData));
                    console.log(jsonDataRes.Status);
                    if (jsonDataRes.Status == "Ok") {
                        if (jsonDataRes.IsUserAdmin) {
                            console.log("User is Admin");
                            this.globalMembersUtil.IsUserAdmin = true;
                            this.globalMembersUtil.IsUserLoggedIn = true;
                            this.globalMembersUtil.LoggedInUserName = this.userName;
                            // this.onUserLoggedIn.emit({userName:this.userName,isUserAdmin:true});
                            this.router.navigate(['/Admin']);
                        }
                        else {
                            console.log("User is not Admin");
                            this.globalMembersUtil.IsUserAdmin = false;
                            this.globalMembersUtil.IsUserLoggedIn = true;
                            this.globalMembersUtil.LoggedInUserName = this.userName;
                            //this.onUserLoggedIn.emit({userName:this.userName,isUserAdmin:false});
                            this.router.navigate(['/Home']);
                        }
                    }
                };
                Login = __decorate([
                    core_1.Component({
                        selector: 'login-page',
                        templateUrl: './app/login.html'
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, GlobalMembersUtil_1.GlobalMembersUtil, http_1.Http])
                ], Login);
                return Login;
            }());
            exports_1("Login", Login);
        }
    }
});
//# sourceMappingURL=login.js.map