import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { DataserviceService } from '../services/dataservice.service';
import { Claim } from '../models/claim';



@Component({
  selector: 'app-claimapprove',
  templateUrl: './claimapprove.component.html',
  styleUrls: ['./claimapprove.component.css']
})
export class ClaimapproveComponent implements OnInit {
  claim: Claim[];
  reqCols: any[];

  constructor(private router: Router, private http: HttpClient, private dataservice: DataserviceService) { }

  ngOnInit() {
    //this.dataservice.getClaim(this.claim).then(claim => this.claim = claim);
    this.reqCols = [
      { field: 'claimId', header: 'ClaimId Id' },
      { field: 'userName', header: 'User Name' },
      { field: 'policyId', header: 'Policy Id' },
      { field: 'diagnosis', header: 'Diagnosis' },
      { field: 'admisionDate', header: 'Admision Date' },
      { field: 'dischargeDate', header: 'Discharge Date' },
      { field: 'claimDate', header: 'Claim Date' },
      { field: 'claimAmount', header: 'Claim Amount' },
      { field: 'hospitalName', header: 'Hospital Name' },
      { field: 'approverId', header: 'Approver Id' },
      { field: 'status', header: 'Status' },
    ];
  }

}
