import { NumberSymbol } from '@angular/common';
import { Component, NgModule, NgModuleFactory, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { KidzoneService } from 'src/app/kidzone.service';
import { KidZone } from 'src/kid-zone';

@Component({
  selector: 'app-daycares',
  templateUrl: './daycares.component.html',
  styleUrls: ['./daycares.component.css']
})
export class DaycaresComponent implements OnInit {

  listKidzones:any;
  kidzone!:KidZone;
  p : number = 1;
  //form : boolean = false;
 // closeResult! : string;

  constructor(private kidservice : KidzoneService, private router : Router) { }
  

  ngOnInit(): void {
    this.gelAllKidzones();
    this.kidzone= {
      id: null,
      description:null,
      logo:null,
      nbEmp:null,
      creationDate:null,
      numTel:null,
      cost:null,
      address:null

    }
  }
  
  gelAllKidzones()
  
  {
    this.kidservice.getAllKidzones().subscribe(res => this.listKidzones = res)
  }

    UpdateKidzone(id:number)
{
  this.router.navigate(['updatekidzone',id]);
}  
DeleteKidzone(Id:number)
{
  return this.kidservice.deletekidzone(Id).subscribe(data =>{
    this.gelAllKidzones();
  })
}

Subscribe()
{
  this.router.navigate(['subscribe']);
}

kidzoneDtetails(id : number)
{
  this.router.navigate(['detailskidzone',id]);
}

public searchKidzone(key :any): void
{
  const results: KidZone[] = [];
    for (const kidzone of this.listKidzones) {
      if (kidzone.description.toLowerCase().indexOf(key.toLowerCase()) !== -1
      ) {
        results.push(kidzone);
      }
      this.listKidzones = results;
      if (!key)
      {
        this.gelAllKidzones();
      }
    }


}

}
