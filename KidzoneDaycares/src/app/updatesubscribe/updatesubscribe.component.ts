import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscribe } from '../subscribe';
import { SubscribeService } from '../subscribe.service';

@Component({
  selector: 'app-updatesubscribe',
  templateUrl: './updatesubscribe.component.html',
  styleUrls: ['./updatesubscribe.component.css']
})
export class UpdatesubscribeComponent implements OnInit {



  id! : number;
  sub : Subscribe = new Subscribe();
  constructor(private service: SubscribeService, private route : ActivatedRoute, 
    private router: Router) { }

  ngOnInit(): void {
    this.id =  this.route.snapshot.params['id'];
    this.service.getKidzoneById(this.id).subscribe (data =>{
      this.sub =data });
  }



  onSubmit(){
    this.service.updatesub(this.id, this.sub ).subscribe( data =>{
      this.goTosubscribes();
    });
  }


  goTosubscribes(){
    this.router.navigate(['/subscribe']);
  }


  


}
