import { Component } from 'angular2/core';
import {HTTP_PROVIDERS} from 'angular2/http';
import 'rxjs/Rx';//Load all features
import {Router, ROUTER_PROVIDERS, RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {Home} from './home';
import {Login} from './login';
import {Admin} from './admin';
import {SignUp} from './signup';
import {GlobalMembersUtil} from './GlobalMembersUtil';

@Component({
    selector: 'ris-app',
    templateUrl: './app/app.component.html',
    directives: [ROUTER_DIRECTIVES],
    providers:[HTTP_PROVIDERS,
               ROUTER_PROVIDERS,
               GlobalMembersUtil]
})

@RouteConfig([
    { path: '/Home', name: 'Home', component: Home, useAsDefault: true },
    { path: '/login', name: 'Login', component: Login },
    { path: '/admin', name: 'Admin', component: Admin },
    { path: '/signup', name: 'SignUp', component: SignUp }
])

export class AppComponent {
    // isUserLoggedIn: boolean=false;
    // isAdmin: boolean = false;
    // userName: string = 'Ramana';
    

    constructor(private router: Router, private globalMembersUtil:GlobalMembersUtil) { }

    NavigateToSignUpPage(){
      console.log("Navigating To SignUp Page");
      this.router.navigate(['/SignUp']);
    }

    NavigateToLoginPage(){
      console.log("Navigating To Login Page");
    this.router.navigate(['/Login']);
    }

    onUserLoggedIn(object){      
      console.log("Updated app.component after the user has logged in");
    }

    Logout(){
      console.log("Logout");
      this.globalMembersUtil.IsUserAdmin = this.globalMembersUtil.IsUserLoggedIn = false;
      this.globalMembersUtil.LoggedInUserName="";
      this.router.navigate(['/Home']);
    }
}