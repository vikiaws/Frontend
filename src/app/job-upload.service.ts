import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, interval, timer  } from 'rxjs';
import { Overall } from './overall';
import { User } from './user';
import { UserData } from './user-data';
import { switchMap } from 'rxjs/operators';
import { map } from 'rxjs/operators';
import { StringMap } from '@angular/compiler/src/compiler_facade_interface';



 
export class UserDetails{
        public beeLine_Request_Number ?: string;
        public job_description ?:string;
        public department ?:string;
        public no_of_positions ?:string;
        public priority ?:string;
        public cv_DeadLine ?:string;
        public billing_Rate ?:string;
        public hours_per_week ?:string;
        public contact_person ?:string;
        public date_request?:string;
        public status ?:string;
        public prodapt_practice ?:string;
        public prodapt_POC ?:string;
        public dutch_Language ?:string;
        public location ?:string;
        public key_skills ?:string;

}
export class ProfileDetails{
  public beeline ?:string;
  public name_of_candidate ?: string;
  public current_Status ?:string;
  public next_step ?:string;
  public location_relocation ?:string;
  public client_Interview?:string;
  public comments ?:string;

}

@Injectable({
  providedIn: 'root'
})
export class JobUploadService {
  
  upload_url ="http://localhost:8000/Beeline/"
  get_url="http://localhost:8000/Beeline/"
  data_url="http://localhost:8000/Beeline/"
  detailedStatusUrl="http://localhost:8000/Beeline/"
  amendJobUrl="http://localhost:8000/UpdataProfileView/"
  cancelJobUrl="http://localhost:8000/Profile/"
  cancelProfileMailUrl="http://localhost:8000/mail_delete_profile/"
  addProfile="http://localhost:8000/addprofile/"
  editProfile="http://localhost:8000/Profile/"
  getProfileUrl="http://localhost:8000/Profile/"
  amendBeelineUrl="http://localhost:8000/UpdataBeeline/"
  cancelBeelineUrl="http://localhost:8000/Beeline/"
  cancelBeelineMailUrl="http://localhost:8000/mail_delete_beeline/"
  mailUrl="http://localhost:8000/mail_new_beeline/"
  amendMailUrl="http://localhost:8000/mail_updated_beeline/"
  profileMailUrl="http://localhost:8000/mail_new_profile/"
  updateprofileMailUrl="http://localhost:8000/mail_updated_profile/"
  overallUrl="http://localhost:8000/overall/"
  loginUrl="http://localhost:8000/login/"
  openCountUrl="http://localhost:8000/PracticeCount/"
  closeCountUrl="http://localhost:8000/PracticeCount/"
  fulfilledCountUrl="http://localhost:8000/PracticeCount/"
  lostCountUrl="http://localhost:8000/PracticeCount/"
  totalProfileCountUrl="http://localhost:8000/OverallProfileCount/"
  registerUserUrl="http://localhost:8000/createUser/"
  getUserUrl="http://localhost:8000/register1/"
  editUserUrl="http://localhost:8000/register1/"
  cancelUserUrl="http://localhost:8000/register1/"
  contactUsUrl="http://localhost:8000/mail_contact_us/"
  mailAlertUrl ="http://localhost:8000/alertsendmail/"
  userAddedUrl="http://localhost:8000/SendCrendentials/"
  passwordResetUrl="http://localhost:8000/resetpassword/"
  passwordResetMailUrl="http://localhost:8000/ResetPasswordMail/"
  editUserInfoUrl="http://localhost:8000/EditUserInfo/"
  userDetails:any
  count:any;
  orderStatus: any;
  OrderList: any;
  url2: string | undefined;
  editUser:any;
  user:any;
  constructor(private http: HttpClient) {
   
   
  }

  sendData(userDetails:UserDetails,file:File): Observable<any> {

    const formData = new FormData();
    formData.append('file',file)
    formData.append('User',JSON.stringify(userDetails));
    
    return this.http.post<any>(this.upload_url,formData);
  }
  sendEmail(userDetails:UserDetails,file:File): Observable<any> {
    const formData = new FormData();
    formData.append('file',file)
    formData.append('User',JSON.stringify(userDetails));
   
    return this.http.post<any>(this.mailUrl,formData);
  }

  getData(): Observable<UserData[]> {
    return this.http.get<UserData[]>(this.data_url);
  }
  getUserData(): Observable<User[]> {
    return this.http.get<User[]>(this.getUserUrl);
  }
  getDetailedstatus(id:any) {
    return this.http.get<any>(this.detailedStatusUrl+id,id)
  }
  getDetailedUserstatus(id:any) {
      return this.http.get<any>(this.getUserUrl+id,id)
  }
  amendJob(amendJobRequest:any,file:File) {
    const url1 = this.amendJobUrl+amendJobRequest['id']
    const formData = new FormData();
    formData.append('file',file)
    formData.append('User',JSON.stringify(amendJobRequest));
    return this.http.patch<any>(url1,formData)
  }
  cancelJob(id:any) {
    const url = this.cancelJobUrl+id
    return this.http.delete<any>(url)
  }
  cancelProfileMail(id:any) {
    const url = this.cancelProfileMailUrl+id
    return this.http.post<any>(url,id)
  }
  cancelUser(id:any) {
    const url = this.cancelUserUrl+id
    return this.http.delete<any>(url)
  }
  amendBeeline(amendJobRequest:any,file:File) {
    const url1 = this.amendBeelineUrl+amendJobRequest['id']
    const formData = new FormData();
    formData.append('file',file)
    formData.append('User',JSON.stringify(amendJobRequest));
    return this.http.patch<any>(url1,formData)
  }
  amendBeelineEmail(amendJobRequest:any,file:File) {
    const url1 = this.amendMailUrl
    const formData = new FormData();
    formData.append('file',file)
    formData.append('User',JSON.stringify(amendJobRequest));
    return this.http.post<any>(url1,formData)
  }
  ProfileEmail(profileDetails:ProfileDetails,file:File): Observable<any>{
    const formData = new FormData();
    formData.append('file',file)
    formData.append('User',JSON.stringify(profileDetails));
    return this.http.post<any>(this.profileMailUrl,formData);
  }
  updateProfileEmail(profileDetails:ProfileDetails,file:File): Observable<any>{
    const formData = new FormData();
    formData.append('file',file)
    formData.append('User',JSON.stringify(profileDetails));
    return this.http.post<any>(this.updateprofileMailUrl,formData);
  }
  addJobProfile(profileDetails:ProfileDetails,file:File): Observable<any>{
    const formData = new FormData();
    formData.append('file',file)
    formData.append('User',JSON.stringify(profileDetails));
    return this.http.post<any>(this.addProfile,formData);
  }
  getProfile(id:any): Observable<UserData[]> {
    return this.http.get<UserData[]>(this.getProfileUrl+id);
  }
  cancelBeeline(id:any){
    const url = this.cancelBeelineUrl+id
    return this.http.delete<any>(url)
  }
  cancelBeelineMail(id:any){
    const url = this.cancelBeelineMailUrl+id
    return this.http.post<any>(url,id)
  }

  getOverallData(): Observable<any> {
    return this.http.get<any>(this.overallUrl);
  }
  loginData(userDetails:UserDetails): Observable<any> {
    return this.http.post<any>(this.loginUrl,userDetails);
  }
  getOpenCountData(): Observable<any> {
    return this.http.get<any>(this.openCountUrl);
  }
  getClosedCountData(): Observable<any> {
    return this.http.get<any>(this.closeCountUrl);
  }
  getLostCountData(): Observable<any> {
    return this.http.get<any>(this.lostCountUrl);
  }
  getFulfilledCountData(): Observable<any> {
    return this.http.get<any>(this.fulfilledCountUrl);
  }
  getOverallProfileData(): Observable<any> {
    return this.http.get<any>(this.totalProfileCountUrl);
  }
  sendRegisterData(registerDetails:any): Observable<any> {
    return this.http.post<any>(this.registerUserUrl,registerDetails);
}
sendRegisterMailData(registerDetails:any): Observable<any> {
  return this.http.post<any>(this.userAddedUrl,registerDetails);
}
sendContactUsData(contactDetails:any): Observable<any> {
  return this.http.post<any>(this.contactUsUrl,contactDetails);
}

getAlertApiData(): Observable<any> {
  return this.http.get(this.mailAlertUrl);
}

public makeApiCall(): void {
  this.http.get(this.mailAlertUrl).subscribe((response) => {
   
  });
}
resetPasswordData(details:any,username:any): Observable<any> {
  const formData = new FormData();

  formData.append('Username',username)
  formData.append('password',JSON.stringify(details));

  return this.http.post<any>(this.passwordResetUrl,formData);
}
resetPasswordMail(details:any,username:any): Observable<any> {
  const formData = new FormData();

  formData.append('Username',username)
  formData.append('password',JSON.stringify(details));

  return this.http.post<any>(this.passwordResetMailUrl,formData);
}
amendInfoUser(id:any) {
  const url1 = this.editUserInfoUrl+id
  return this.http.get<any>(url1)
}
amendUser(amendJUserRequest:any) {
  const url1 = this.editUserInfoUrl+amendJUserRequest['id']
  return this.http.patch<any>(url1,amendJUserRequest)
}
}