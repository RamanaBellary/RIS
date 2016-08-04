import {Component,EventEmitter, Input, Output } from 'angular2/core';
import {Router, ROUTER_PROVIDERS, ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
    selector:'login-page',
    templateUrl:'./app/login.html'
})

export class Login {
    userName:string;
    password:string;
    @Output() onUserLoggedIn = new EventEmitter<any>();

    constructor(private router: Router) { }

    OnLogin(){
        //TODO:Validate user, update the userName in appComponent and 
        //redirect to home page if he is not Admin otherwise to Admin page
        console.log("UserName Entered:"+this.userName);
        if(this.userName.toLowerCase() == 'ramana' && this.password =='ram')
        {
            console.log("User is Admin");
            this.onUserLoggedIn.emit({userName:this.userName,isUserAdmin:true});
            this.router.navigate(['/Admin']);
        }
        else
        {
            console.log("User is not Admin");
            this.onUserLoggedIn.emit({userName:this.userName,isUserAdmin:false});
            this.router.navigate(['/Home']);
        }
    }
}