import { Component } from '@angular/core';

@Component({
  selector: 'user',
  template: ` 
  	<h1>{{name}} </h1>
  	<p><strong><h2>Email :</h2></strong>{{email}}</p>
  	<p><strong><h2>Address :</h2></strong>{{address.street}} {{address.city}}  {{address.state}}</p>
  	
	<button (click)="toggleHobbies()">{{ShowHobbies ? "Hide Hobbies" : "Show Hobbies"}}</button>
  	<div *ngIf= "showHobbies">
  	<h3>Hobbies :</h3>
  	<ul>
  		<li *ngFor= "let hobby of hobbies">
  		    {{hobby}}
  		</li>    

  	</ul>
  	<label> Name: </label> <br/>
  		<input type= "text" name="name" [(ngModel)]="#hobby" /><br/>
  	</div>
  	<hr />
  	<h3>Edit User</h3>
  	<form>
  		<label> Name: </label><br />
  		<input type= "text" name="name" [(ngModel)]="name" /><br/>
  		<label> Email: </label><br />
  		<input type= "text" name="email" [(ngModel)]="email" /><br/>
  		<label> Street: </label><br />
  		<input type= "text" name="address.street" [(ngModel)]="address.street" /><br/>
  		<label> City: </label><br />
  		<input type= "text" name="address.city" [(ngModel)]="address.city" /><br/>
  		<label> State: </label><br />
  		<input type= "text" name="address.state" [(ngModel)]="address.state" /><br/>

  	</form>

  `,
})
export class UserComponent  { 
	name: string;
	email: string; 
	address: address; 
	hobbies: string[];
	showHobbies: boolean;
	constructor(){
		this.name = 'Aboli';
		this.email = 'ab@gmail.com'; 
		this.address = {
	 		street: 'Harlur Road,',
	 		city: 'Bangalore,',
			state: 'Karnataka'
			}
		this.hobbies = ['Dancing' , 'Playing Badminton' , 'Shopping'];
		this.showHobbies = true;
	}
  toggleHobbies(){
  	if(this.showHobbies == true) 
  		{
       this.showHobbies = false;
          	}
  	else{
  		this.showHobbies = true;
     	}
  }

  addHobby(hobby){
  	this.hobbies.push(hobby);
  }
  deleteHobby(i){
  	this.hobbies.splice(i,1);
  }
}
interface address{
		street: string;
		city: string;
		state: string;
  }