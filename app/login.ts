import {Component } from 'angular2/core';
import {Router, ROUTER_PROVIDERS, ROUTER_DIRECTIVES} from 'angular2/router';
import {GlobalMembersUtil} from './GlobalMembersUtil';

@Component({
    selector:'login-page',
    templateUrl:'./app/login.html'
})

export class Login {
    userName:string;
    password:string;
    //@Output() onUserLoggedIn = new EventEmitter<any>();

    constructor(private router: Router, private globalMembersUtil:GlobalMembersUtil) { }

    OnLogin(){
        console.log("UserName Entered:"+this.userName);
        if(this.userName.toLowerCase() == 'ramana' && this.password =='ram')
        {
            console.log("User is Admin");
            this.globalMembersUtil.IsUserAdmin = true;
            this.globalMembersUtil.IsUserLoggedIn = true;
            this.globalMembersUtil.LoggedInUserName = this.userName;
            // this.onUserLoggedIn.emit({userName:this.userName,isUserAdmin:true});
            this.router.navigate(['/Admin']);
        }
        else
        {
            console.log("User is not Admin");
            this.globalMembersUtil.IsUserAdmin = false;
            this.globalMembersUtil.IsUserLoggedIn = true;
            this.globalMembersUtil.LoggedInUserName = this.userName;
            //this.onUserLoggedIn.emit({userName:this.userName,isUserAdmin:false});
            this.router.navigate(['/Home']);
        }
    }
}