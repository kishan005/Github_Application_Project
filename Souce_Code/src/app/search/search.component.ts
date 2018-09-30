import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  username:string;
  profile:any[];

  constructor(private profileService: ProfileService) { 

  }

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