import { Component, OnInit } from '@angular/core';
import { PrintService } from '../services/print.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  bluetoothList:any=[];
  selectedPrinter:any;
  constructor(private print:PrintService) { }

      //This will list all of your bluetooth devices
      listPrinter() { 
        this.print.searchBluetoothPrinter()
         .then(resp=>{
     
          //List of bluetooth device list
          this.bluetoothList=resp;
          console.log(this.bluetoothList);
      });
  }
  //This will store selected bluetooth device mac address
  selectPrinter(macAddress)
  {
    //Selected printer macAddress stored here
    this.selectedPrinter=macAddress;
  }
  
  //This will print
  printStuff()
  {  
     //The text that you want to print
     var myText="Hello hello hello \n\n\n This is a test \n\n\n";
     this.print.sendToBluetoothPrinter(this.selectedPrinter,myText);
  }
  ngOnInit() {
    this.listPrinter();
  }

}
