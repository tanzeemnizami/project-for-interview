import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup} from '@angular/forms';
import { CommonService } from './common.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  filterData:any= [];
  form:any = new FormGroup({
    technology: new FormControl(''),
    skills: new FormControl(''),
    exprience: new FormControl(''),
    location: new FormControl('')
  })
  onSubmit(){
    
  }
  // checkbox ...
  off:boolean = false;
  // for search....
  allSearch:string = '';
// define the JSON of data
//technology.....
public technologies: { [key: string]: Object; }[] = [
  { secondName: 'Photohop', secondVal: 'Photohop' },
  { secondName: 'Visual Studio', secondVal: 'Visual Studio' },
  { secondName: 'MS Office', secondVal: 'MS Office' },
  { secondName: 'Android', secondVal: 'Android' },
  { secondName: 'Eclips', secondVal: 'Eclips' },
  { secondName: 'MS Excel', secondVal: 'MS Excel' },
  { secondName: 'Sublime', secondVal: 'Sublime' }


 ];
// maps the local data column to fields property
public localFieldstwo: Object = { text: 'secondName', value: 'secondVal' };
// set the placeholder to MultiSelect Dropdown input element
public localWaterMarktwo: string = 'Select Technologies';
//skills..........
public skills: { [key: string]: Object; }[] = [
    { thirdName: 'HTML', thirdVal: 'HTML' },
    { thirdName: 'CSS', thirdVal: 'CSS' },
    { thirdName: 'Java Script', thirdVal: 'Java Script' },
    { thirdName: 'JQuery', thirdVal: 'JQuery' },
    { thirdName: 'Angular', thirdVal: 'Angular' },
    { thirdName: 'Java', thirdVal: 'Java' },
    { thirdName: 'Pyhton', thirdVal: 'Pyhton' }


   ];
// maps the local data column to fields property
public localFieldsthree: Object = { text: 'thirdName', value: 'thirdVal' };
// set the placeholder to MultiSelect Dropdown input element
public localWaterMarkthree: string = 'Select Skills';
         //Base Location..........
         public location: { [key: string]: Object; }[] = [
          { fiveName: 'Pune', fiveVal: 'Pune' },
          { fiveName: 'Banglore', fiveVal: 'Banglore' },
          { fiveName: 'Noida', fiveVal: 'Noida' },
          { fiveName: 'Dehradun', fiveVal: 'Dehradun' },
          { fiveName: 'Mumbai', fiveVal: 'Mumbai' },
          { fiveName: 'Chandigarh', fiveVal: 'Chandigarh' },
          { fiveName: 'Hydrabad', fiveVal: 'Hydrabad' }
  ];
      // maps the local data column to fields property
      public localFieldsfive: Object = { text: 'fiveName', value: 'fiveVal' };
      // set the placeholder to MultiSelect Dropdown input element
      public localWaterMarkfive: string = 'Select Location';
  ngOnInit() {
    // -- Employee List Code.....
    this.commonService.getEmployee().subscribe((result)=>{
      this.allEmployees = result;
    })
  }
  constructor(private commonService: CommonService){}
  allEmployees:any = [];
  
  onClick(data:any){
    this.delete = data;
    console.log('checked')
  }
  delete:any
  employeeDelete(){
    this.off = true;
    this.commonService.deleteEmployee(this.delete).subscribe(()=>{
      this.ngOnInit();
      console.log('user has been deleted')
    })
  }
   
}

