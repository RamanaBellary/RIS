import {Component } from 'angular2/core';
import {Router, ROUTER_PROVIDERS, ROUTER_DIRECTIVES} from 'angular2/router';
import {GlobalMembersUtil} from './GlobalMembersUtil';
import {Http, Headers, Response} from 'angular2/http';

@Component({
    selector:'login-page',
    templateUrl:'./app/login.html'
})

export class Login {
    userName:string;
    password:string;
    //@Output() onUserLoggedIn = new EventEmitter<any>();

    constructor(private router: Router, private globalMembersUtil:GlobalMembersUtil, private http: Http) { }

    OnLogin(){
        console.log("UserName Entered:"+this.userName);
        var hdr = new Headers({'content-type':'application/json'});
        hdr.append('username',this.userName);
        hdr.append('password',this.password);
        var rsp = Object;
         this.http.get('http://localhost:8084/api/ris/login',{headers:hdr})
         .subscribe(res => this.afterLogin(res),
                    error => console.log(error)) ;
    }

    private afterLogin(res:any)
    {
        let jsonData = res.json();
        console.log(JSON.stringify(jsonData));
        let jsonDataRes = JSON.parse(JSON.stringify(jsonData));
        console.log(jsonDataRes.Status);
        if(jsonDataRes.Status == "Ok")
        {
            if(jsonDataRes.IsUserAdmin)
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
}