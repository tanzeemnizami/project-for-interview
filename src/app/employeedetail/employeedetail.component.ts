import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-employeedetail',
  templateUrl: './employeedetail.component.html',
  styleUrls: ['./employeedetail.component.css']
})
export class EmployeedetailComponent implements OnInit {

  constructor(private route: ActivatedRoute
             ,private commonService: CommonService) { }
  allData:any = [];
  ngOnInit(): void {
    this.commonService.fatchEmployee(this.route.snapshot.params.id).subscribe((result)=>{
      console.log(result);
      this.allData = result;
    })
  }

}
