import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  username:string;
  profile:any[];

  constructor(private profileService: ProfileService) { }
  findProfile(){
  	this.profileService.getupdate(this.username);
  	this.profileService.getDetails().subscribe(profile => {
  		console.log(profile);
  		this.profile = profile;
  	});

  	
  }

  ngOnInit() {
  }
 

}
