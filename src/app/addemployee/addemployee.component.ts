import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css']
})
export class AddemployeeComponent implements OnInit {
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
     //availability..........
  public availability: { [key: string]: Object; }[] = [
        { fourName: '1', fourVal: '1' },
        { fourName: '2', fourVal: '2' },
        { fourName: '3', fourVal: '3' },
        { fourName: '4', fourVal: '4' },
        { fourName: '5', fourVal: '5' },
        { fourName: '6', fourVal: '6' },
        { fourName: '7', fourVal: '7' },
        { fourName: '8', fourVal: '8' },
        { fourName: '9', fourVal: '9' },
        { fourName: '10', fourVal: '10' }
];
    // maps the local data column to fields property
    public localFieldsfour: Object = { text: 'fourName', value: 'fourVal' };
    // set the placeholder to MultiSelect Dropdown input element
    public localWaterMarkfour: string = 'Select Availability';
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
             //Open Relocate..........
  public relocate: { [key: string]: Object; }[] = [
        { fiveName: 'Yes', sixVal: 'Yes' },
        { fiveName: 'No', sixVal: 'No' }
];
    // maps the local data column to fields property
    public localFieldssix: Object = { text: 'sixName', value: 'sixVal' };
    // set the placeholder to MultiSelect Dropdown input element
    public localWaterMarksix: string = 'Select Relocate';
  constructor(private commonService:CommonService) { }
  form:any = new FormGroup({
    name: new FormControl ('',[Validators.required]),
    designation: new FormControl ('',[Validators.required]),
    technology: new FormControl ('',[Validators.required]),
    skills: new FormControl ('',[Validators.required]),
    availability: new FormControl ('',[Validators.required]),
    location: new FormControl ('',[Validators.required]),
    relocate: new FormControl ('',[Validators.required]),
  });
  invalidMsg = false
  validMsg = false;
  onSubmit(){
    if(this.form?.invalid){
      this.invalidMsg = true;
      return;
    }else{
    // console.log(this.form.value);
      this.commonService.createEmployee(this.form.value).subscribe((result)=>{
        console.log(result);
         this.form?.reset();
      this.validMsg = true;
      })
     
    }
  }

  ngOnInit(): void {

  }
}
