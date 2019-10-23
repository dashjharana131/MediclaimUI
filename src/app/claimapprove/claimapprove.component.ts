/* Import Angular Core Components */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

/* Import Common Service */
import { DataserviceService } from '../services/dataservice.service';

/* Import claim model from models folder */
import { Claim } from '../models/claim';

@Component({
  selector: 'app-claimapprove',
  templateUrl: './claimapprove.component.html',
  styleUrls: ['./claimapprove.component.css']
})
export class ClaimapproveComponent implements OnInit {

  claim: Claim[];
  reqCols: any[];
  claimId: number;
  statusClaimId: number;

  claimIdForm = new FormGroup({
    claimId: new FormControl(''),
  });

  constructor(private formBuilder: FormBuilder, private router: Router, private http: HttpClient, private dataservice: DataserviceService) { }

  ngOnInit() {

    /* Required columns for claim tracking start */
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
    /* Required columns for claim tracking end */

    this.getClaim;
  }

  /* Claim Id generating method start*/
  getClaim(claimId) {
    this.dataservice.getClaim(claimId).subscribe(data => {
      this.claim = data;

    });
  }
  /* Claim Id generating method end*/

  /* Claim status button method start */
  onClimStatus() {
    console.log(this.statusClaimId);
    debugger;
    let claimId = this.claimIdForm.value;
    this.dataservice.getClaim(this.statusClaimId).subscribe(res => {
      console.log(res);
    })
  }
  /* Claim status button method end */

}
