import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  username:string;
  profile:any[];

  constructor(private profileService: ProfileService) { 

  }

  ngOnInit() {
    this.profileService.getDetails().subscribe(
      
  profile=>
  {
    this.profileService.getupdate(this.username);
    console.log(profile);
  		this.profile = profile;
  },

  error=>
  
  {
    alert("incorrect user name")
  }
    )

  }
}
