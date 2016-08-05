import {Component } from 'angular2/core';
import {Router, ROUTER_PROVIDERS, ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
    selector:'signup-page',
    templateUrl:'./app/signup.html'
})

export class SignUp {
    userName:string;
    firstName:string;
    lastName:string;
    emailID:string;
    dateOfBirth:Date;
    gender:string = 'male';
    contactNo:number;

    //TODO:On successful signup of the user display success message and redirect him to login page.
    OnSignUp(){
        console.log("On signup");
    }
}