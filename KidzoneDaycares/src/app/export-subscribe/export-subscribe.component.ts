import { Component, OnInit } from '@angular/core';
import { SubscribeService } from '../subscribe.service';

@Component({
  selector: 'app-export-subscribe',
  templateUrl: './export-subscribe.component.html',
  styleUrls: ['./export-subscribe.component.css']
})
export class ExportSubscribeComponent implements OnInit {

  constructor(private service : SubscribeService) { }

  ngOnInit(): void {
  }

  exportSubPdf()
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
