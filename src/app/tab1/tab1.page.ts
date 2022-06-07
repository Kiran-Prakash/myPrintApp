import { Component, OnInit } from '@angular/core';
import { PrintService } from '../services/print.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  bluetoothList:any=[];
  selectedPrinter:any;
  constructor(private print: PrintService) {}
  ngOnInit(): void {
    this.listPrinter();
  }
     //This will list all of your bluetooth devices
     listPrinter() { 
      this.print.searchBluetoothPrinter()
       .then(resp=>{
   
        //List of bluetooth device list
        this.bluetoothList=resp;
        console.log(this.bluetoothList);
    });
  }

  selectPrinter(macAddress)
  {
    //Selected printer macAddress stored here
    this.selectedPrinter=macAddress;
  }

}
