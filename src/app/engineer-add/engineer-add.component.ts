import { Component, OnInit,Input } from '@angular/core';
import{Engineer} from '../engineer';
import{EngineerService} from '../engineer.service'
import { ActivatedRoute } from '@angular/router';
import {Location} from '@angular/common';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-engineer-add',
  templateUrl: './engineer-add.component.html',
  styleUrls: ['./engineer-add.component.css']
})
export class EngineerAddComponent implements OnInit {
  @Input() engineer: Engineer;
  selectedFile: File

  constructor(
      private http:HttpClient,
      private engineerService:EngineerService,
      private route:ActivatedRoute,
      private location:Location,
  ){}

  ngOnInit() {
    this.engineerService.getCurrentUser().then();
    const id = +this.route.snapshot.paramMap.get('id');
    this.engineer = new Engineer();
    if(!id){
      return;
     
    }else{
      this.getEngineer();
    }
  }
  onFileChanged(event){
    this.selectedFile = event.target.files[0]
  }
  getEngineer():void{
    const id = +this.route.snapshot.paramMap.get('id');

    this.engineerService.getEngineer(id)
        .subscribe(engineer=>this.engineer = engineer)
  }
  
  addEngineer():void{
    const id = +this.route.snapshot.paramMap.get('id');
    if(!id){

      const formData: FormData = new FormData();
      formData.append('name', this.engineer.name);
      formData.append('image', this.selectedFile, this.selectedFile.name);
      this.http.post('https://localhost:5001/api/engineers/UploadFile', formData).subscribe(result => {
        console.log(result);
      }, error => console.error(error));

      //const formData: FormData = new FormData();
      // formData.append('name', this.engineer.name);
      // formData.append('image', this.selectedFile, this.selectedFile.name);
      // this.engineerService.addEngineer(formData)
      //   .subscribe(()=>this.goBack());
    }else{
      const formData: FormData = new FormData();
      formData.append('name', this.engineer.name);
      if(this.selectedFile !=null){
        formData.append('image', this.selectedFile, this.selectedFile.name);
      }
      
    
      this.engineerService.updateEngineer(id,formData)
      .subscribe(()=>this.goBack());
    }  
   
  }

  goBack():void{
    this.location.back();
  }

}
