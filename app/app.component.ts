import { Component } from 'angular2/core';
import {HTTP_PROVIDERS} from 'angular2/http';
import 'rxjs/Rx';//Load all features
import {Router, ROUTER_PROVIDERS, RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {Home} from './home';
import {Login} from './login';
import {Admin} from './admin';

@Component({
    selector: 'ris-app',
    templateUrl: './app/app.component.html',
    directives: [ROUTER_DIRECTIVES],
    providers:[HTTP_PROVIDERS,
               ROUTER_PROVIDERS]
})

@RouteConfig([
    { path: '/Home', name: 'Home', component: Home, useAsDefault: true },
    { path: '/login', name: 'Login', component: Login },
    { path: '/admin', name: 'Admin', component: Admin }
])

export class AppComponent {
    isUserLoggedIn: boolean=false;
    isAdmin: boolean = false;
    userName: string = 'Ramana';

    constructor(private router: Router) { }

    NavigateToLoginPage(){
      console.log("NavigateToLoginPage");
    this.router.navigate(['/Login']);
    }

    onUserLoggedIn(object){      
      console.log("Updated app.component after the user has logged in");
    }

    Logout(){
      console.log("Logout");
    }
}