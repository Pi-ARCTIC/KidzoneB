import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { KidZone } from 'src/kid-zone';
import { KidzoneService } from '../kidzone.service';

@Component({
  selector: 'app-details-kidzone',
  templateUrl: './details-kidzone.component.html',
  styleUrls: ['./details-kidzone.component.css']
})
export class DetailsKidzoneComponent implements OnInit {

  id! : number;
  kidzone! : KidZone;
  
  reactiveform! : FormGroup;
  constructor( private route : ActivatedRoute, private kservice : KidzoneService, private router : Router ) { }

  ngOnInit(): void 
  {
    this.id=this.route.snapshot.params['id'];
    this.kidzone = new KidZone;
    this.kservice.getKidzoneById(this.id).subscribe( data => {
      this.kidzone = data;
    });

   

  }

  UpdateKidzone(id:number)
{
  this.router.navigate(['updatekidzone',id]);
} 

  
}
