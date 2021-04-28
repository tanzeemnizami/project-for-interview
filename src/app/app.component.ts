import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CommonService } from './common.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  delete: any
  filterData: any = [];
  allEmployees: any = [];
  off: boolean = false;
  allSearch: string = '';
  selectedTechnologies = [];
  selectedSkills = [];
  selectedLocations = [];

  public localFieldstwo: Object = { text: 'secondName', value: 'secondVal' };
  public localWaterMarktwo: string = 'Select Technologies';
  public localFieldsthree: Object = { text: 'thirdName', value: 'thirdVal' };
  public localWaterMarkthree: string = 'Select Skills';
  public localFieldsfive: Object = { text: 'fiveName', value: 'fiveVal' };
  public localWaterMarkfive: string = 'Select Location';

  public technologies: { [key: string]: Object; }[] = [
    { secondName: 'Photohop', secondVal: 'Photohop' },
    { secondName: 'Visual Studio', secondVal: 'Visual Studio' },
    { secondName: 'MS Office', secondVal: 'MS Office' },
    { secondName: 'Android', secondVal: 'Android' },
    { secondName: 'Eclips', secondVal: 'Eclips' },
    { secondName: 'MS Excel', secondVal: 'MS Excel' },
    { secondName: 'Sublime', secondVal: 'Sublime' }
  ];

  public skills: { [key: string]: Object; }[] = [
    { thirdName: 'HTML', thirdVal: 'HTML' },
    { thirdName: 'CSS', thirdVal: 'CSS' },
    { thirdName: 'Java Script', thirdVal: 'Java Script' },
    { thirdName: 'JQuery', thirdVal: 'JQuery' },
    { thirdName: 'Angular', thirdVal: 'Angular' },
    { thirdName: 'Java', thirdVal: 'Java' },
    { thirdName: 'Pyhton', thirdVal: 'Pyhton' }
  ];

  public location: { [key: string]: Object; }[] = [
    { fiveName: 'Pune', fiveVal: 'Pune' },
    { fiveName: 'Banglore', fiveVal: 'Banglore' },
    { fiveName: 'Noida', fiveVal: 'Noida' },
    { fiveName: 'Dehradun', fiveVal: 'Dehradun' },
    { fiveName: 'Mumbai', fiveVal: 'Mumbai' },
    { fiveName: 'Chandigarh', fiveVal: 'Chandigarh' },
    { fiveName: 'Hydrabad', fiveVal: 'Hydrabad' }
  ];

  form: any = new FormGroup({
    technology: new FormControl(''),
    skills: new FormControl(''),
    exprience: new FormControl(''),
    location: new FormControl('')
  })

  constructor(private commonService: CommonService) { }
  ngOnInit() {
    this.commonService.getEmployee().subscribe((result) => {
      this.allEmployees = result;
      console.log(this.allEmployees);
    })
  }

  onClick(data: any) {
    this.delete = data;
    console.log('checked')
  }

  employeeDelete() {
    this.off = true;
    this.commonService.deleteEmployee(this.delete).subscribe(() => {
      this.ngOnInit();
      console.log('user has been deleted')
    })
  }

  onSubmit() {
    let newArray: any = [];
    let values = this.form.value;
    this.selectedTechnologies = values.technology;
    this.selectedSkills = values.skills;
    this.selectedLocations = values.location;
    this.selectedLocations = values.location;
    newArray = this.selectedTechnologies.concat(this.selectedSkills, this.selectedLocations);

    const filteredValues = this.allEmployees.filter((item: any) => {
      return newArray.includes(item.location) && newArray.includes(item.technology) && newArray.includes(item.skills);
    })
    console.log('filteredValues>>>>>>>', filteredValues);
    this.allEmployees = filteredValues;
  }

}