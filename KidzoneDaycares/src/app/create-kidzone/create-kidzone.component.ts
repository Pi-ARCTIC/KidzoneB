import { CloneVisitor } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup , Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { KidZone } from 'src/kid-zone';
import { KidzoneService } from '../kidzone.service';

declare const L:any;


@Component({
  selector: 'app-create-kidzone',
  templateUrl: './create-kidzone.component.html',
  styleUrls: ['./create-kidzone.component.css']
})
export class CreateKidzoneComponent implements OnInit {
  
  kz : KidZone = new KidZone();
  reactiveform! : FormGroup;
  selectedfile =null;
  constructor(  private kzservice : KidzoneService , private router : Router ) { }

  ngOnInit(): void {
    this.reactiveform = new FormGroup({
      description: new FormControl(null,Validators.required),
      nbEmp: new FormControl(null),
      numTel: new FormControl(null,[Validators.required,
        Validators.pattern('^\\s*(?:\\+?(\\d{1,3}))?[-. (]*(\\d{3})[-. )]*(\\d{3})[-. ]*(\\d{4})(?: *x(\\d+))?\\s*$')
        ,Validators.minLength(8)
      ]),
      cost: new FormControl(null,Validators.required),
      logo: new FormControl(null),
      address: new FormControl(null,Validators.required)
    })

//MapCode
    if(!navigator.geolocation)
    {
      console.log('not supported');
    }
    navigator.geolocation.getCurrentPosition((position)=>{
      const coords = position.coords;
      const long =[coords.latitude, coords.longitude];
      console.log(`lat: ${position.coords.latitude}, lon:${position.coords.longitude}`);
      let map = L.map('map').setView(long, 13);
      L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoidHliYWhtZWRwaSIsImEiOiJjbDJ3eWlsOHcwZTdyM2ttdm1lZWUxbWh4In0.1zMWUhV5O_PtVamk8KRZxg', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoidHliYWhtZWRwaSIsImEiOiJjbDJ3eWlsOHcwZTdyM2ttdm1lZWUxbWh4In0.1zMWUhV5O_PtVamk8KRZxg'


    
}).addTo(map);


let marker = L.marker(long).addTo(map);
    });
    this.watchPosition();
    
  }

  watchPosition()
  {
    let deslat = 0;
    let deslon = 0;
    let id = navigator.geolocation.watchPosition((position)=>{
      console.log((`lat: ${position.coords.latitude}, lon:${position.coords.longitude}`));
      if(position.coords.latitude === deslat)
      {
        navigator.geolocation.clearWatch(id);
      }
    },
    (err)=>{
      console.log(err);
    },{
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge:0
    }
    );
  }
//MapCode End


addKidzone()
{
  this.kzservice.addkidzone(this.kz).subscribe(data =>{ 
    console.log(data);
    this.goToKidzones();
  },)
  
  
}
goToKidzones()
{
  this.router.navigate(['daycares']);
}

  onSubmit()
  {
   console.log(this.kz);
   const formData= new FormData();
    formData.append("file",this.reactiveform.get("image")?.value);

   this.addKidzone();
   //console.log(this.reactiveform);
   

  } /*
  upload(event) {
    const file = event.target.files[0];
    this.reactiveform.get('logo').setValue(file)
*/

upload(event:any) {
  const file = event.target.files[0];
  this.reactiveform.get('logo')?.setValue(file);
}



onFilSelected(event:any){
console.log(event);
  
  this.selectedfile = event.target.files[0];
  this.reactiveform.get('image')?.setValue(File)

}

}



