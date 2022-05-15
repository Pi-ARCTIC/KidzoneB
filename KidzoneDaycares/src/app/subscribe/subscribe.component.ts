import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscribe } from '../subscribe';
import { SubscribeService } from '../subscribe.service';

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.css']
})
export class SubscribeComponent implements OnInit {
  subscribe : Subscribe = new Subscribe;
  listsubs!:Subscribe[];
  sub!:Subscribe;
  reactiveform!:FormGroup;
  constructor(private service: SubscribeService, private router:Router) { }

  ngOnInit(): void 
  {
    this.reactiveform = new FormGroup({
      fname: new FormControl(null,[Validators.required,Validators.minLength(4)]),
      lname: new FormControl(null,[Validators.required,Validators.minLength(4)]),
      Age: new FormControl(null,[Validators.required,Validators.minLength(1)]) })















    this.getSubs();
    
  }


  getSubs(){
    this.service.getSubcription().subscribe(data =>{
      this.listsubs = data;
    });
  }



  onSubmit(){
    console.log(this.subscribe);
    this.addsub();
  }

  addsub()
  {
    this.service.AddSubcription(this.subscribe).subscribe(data =>{
     console.log(data); 
     this.goTopayment();

    })
  }
  

  goTopayment()
  {
    this.router.navigate(['paypal']);
  }





  Deletesub(Id:number)
{
  return this.service.deletesub(Id).subscribe(data =>{
    this.getSubs();
  })
}
Updatesub(id:number)
{
  this.router.navigate(['updatesubscribe',id]);
} 

downloadPdfFile()
{
  this.service.exportPdfSubs().subscribe(x =>{
    const blob = new Blob([x],{type:'application/pdf'});
    /*if(window.navigator && window.navigator.msSaveOrOpenBlob)
    {
      window.navigator.msSaveOrOpenBlob(blob);
      return;
    }*/
    const data = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href= data;
    link.download = "sub.pdf";
    link.dispatchEvent(new MouseEvent('click',{bubbles:true,cancelable:true,view:window}));
    setTimeout(function(){
      window.URL.revokeObjectURL(data);
      link.remove();
    },100);
  });
}


  

 
}
