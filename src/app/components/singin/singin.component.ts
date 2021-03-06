import { Component, OnInit } from '@angular/core';
import {UserService} from '../../service/singup.service' ;
import {Router} from '@angular/router';

interface htmlInputEvent extends Event{
	target:HTMLInputElement & EventTarget;
}


@Component({
  selector: 'app-singin',
  templateUrl: './singin.component.html',
  styleUrls: ['./singin.component.css']
})
export class SinginComponent implements OnInit {

   constructor(private router: Router,
  			private UserService: UserService,	

  	) { }

  ngOnInit() {
  }


signinUser(email: HTMLTextAreaElement, password: HTMLTextAreaElement):boolean{
 	//console.log(username.value);
 	//console.log(email.value);
 	//console.log(password.value);
 	//console.log(description.value)
 	this.UserService.signinUser(email.value, password.value)
 	.subscribe(res => {
 		this.router.navigate(['photos']);
 	}, err => console.log(err));

 	return false;
 }

}


