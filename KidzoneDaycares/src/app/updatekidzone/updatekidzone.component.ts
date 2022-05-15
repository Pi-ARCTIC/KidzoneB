import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { KidZone } from 'src/kid-zone';
import { KidzoneService } from '../kidzone.service';

@Component({
  selector: 'app-updatekidzone',
  templateUrl: './updatekidzone.component.html',
  styleUrls: ['./updatekidzone.component.css']
})
export class UpdatekidzoneComponent implements OnInit {
  
  id! : number;
  kz : KidZone = new KidZone();
  constructor( private service : KidzoneService , private route : ActivatedRoute, 
    private router: Router) { }

  ngOnInit(): void {
   this.id =  this.route.snapshot.params['id'];
    this.service.getKidzoneById(this.id).subscribe (data =>{
      this.kz =data });
    
  }

  onSubmit(){
    this.service.updatekidzone(this.id, this.kz ).subscribe( data =>{
      this.goToKidList();
    });
  }
  goToKidList(){
    this.router.navigate(['/daycares']);
  }


}
