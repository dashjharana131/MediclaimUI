/* Import angular core module */
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

/* Import service */
import { DataserviceService } from '../services/dataservice.service'
import { MessageService } from 'primeng/components/common/messageservice';
import { User } from '../models/user'

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
  providers: [MessageService]
})
export class DetailsComponent implements OnInit {

  constructor(private router: Router,
    private fb: FormBuilder,
    private http: HttpClient,
    private commonService: DataserviceService,
    private messageService: MessageService) { }

  claimForm: FormGroup;
  loading = false;
  submitted = false;
  data: any;

  userId: string;
  policyId: string;
  disease: String;
  admisionDate: string;
  dischargeDate: string;
  claimAmount: string;
  hospitalName: String;
  dateOfBirth: Date;
  aadhaarNumber: string;
  hospitals: any = [];
  diseases: any = [];

  ngOnInit() {
    /* Claim form validations start */
    this.claimForm = this.fb.group({
      policyId: ['', Validators.required],
      userId: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      disease: ['', Validators.required],
      hospitalName: ['', Validators.required],
      admisionDate: ['', Validators.required],
      dischargeDate: ['', Validators.required],
      claimAmount: ['', Validators.required],
      aadhaarNumber: ['', Validators.required]
    });
    this.getHospitalList();
    this.getDiseaseList();
    /* Claim form validations end */
  }

  /* Get all hospital list start */
  getHospitalList() {
    this.commonService.getHospitalList().subscribe(data => {
      this.hospitals = data;

    });
  }
  /* Get all hospital list end */

  /* Get all disease list start */
  getDiseaseList() {
    this.commonService.getDiseaseList().subscribe(data => {
      this.diseases = data;
      console.log(this.diseases);

    });
  }
  /* Get all disease list end */

  /* Convenience getter for easy access to form fields */
  get f() { return this.claimForm.controls; }
  conformationMsg: string = "Claim submitted Successfully";
  isAdded: boolean = false;

  onSubmit() {
    this.submitted = true;

    /* stop here if form is invalid */
    if (this.claimForm.invalid) {
      return;
    }

    const reqObj = {
      "policyId": this.claimForm.value.policyId,
      "userId": this.claimForm.value.userId,
      "disease": this.claimForm.value.disease,
      "hospitalName": this.claimForm.value.hospitalName,
      "admisionDate": this.claimForm.value.admisionDate,
      "dischargeDate": this.claimForm.value.dischargeDate,
      "claimAmount": this.claimForm.value.claimAmount,
      "aadhaarNumber": this.claimForm.value.aadhaarNumber
    };

    /* Api call */
    this.http.post('http://10.117.189.207:9393/medi-claim/claims/users', reqObj).subscribe((response: any) => {
      if (response) {
        console.log(response.statusCode);
        if (response.statusCode == 201) {
          alert(this.claimForm.value + 'Claim submitted successfully');
        }
        this.data = response;
        this.policyId = this.data.policyId;
        this.userId = this.data.userId;
        this.disease = this.data.disease;
        this.hospitalName = this.data.hospitalName;
        this.admisionDate = this.data.admisionDate;
        this.dischargeDate = this.data.dischargeDate;
        this.claimAmount = this.data.claimAmount;
        this.aadhaarNumber = this.data.aadhaarNumber;
        this.router.navigate(['/claim/status']);
      }
    });
  }
}
