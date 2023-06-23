import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { UserService } from '../service/user.service';
import { TasksService } from '../service/tasks.service';
import { Tasks } from '../service/tasks';

@Component({
  selector: 'app-create-new-task',
  templateUrl: './create-new-task.component.html',
  styleUrls: ['./create-new-task.component.css']
})
export class CreateNewTaskComponent implements OnInit {

  formValidation = new FormGroup({
    taskName:new FormControl('',[Validators.required]),
    taskDescription:new FormControl('',[Validators.required]),
    statusOfTask:new FormControl('',[Validators.required]),
    dueDate:new FormControl('',[Validators.required]) ,
  });
  location: any;
  

  
  constructor(private userdetails:UserService,
    private taskdetails:TasksService) { }


task:Tasks =new Tasks()
date1 = new Date();
currentYear = this.date1.getUTCFullYear();
currentMonth = this.date1.getUTCMonth() + 1;
currentDay = this.date1.getUTCDate();
  
FinalMonth:any;
FinalDay:any;
minValue : any;
TodayDate : any;

  status=[ 
    { value:'Todo',indicator: '⚪'},
    { value:'Inprogress',indicator: '🟡' },
    { value:'Completed',indicator: '🟢' },
  ]
   
  selectedStatus:String = '';
  selectedOption: string = 'Todo';
   
radioHandler(selectedState: string) {
  this.selectedOption = selectedState;
  this.selectedStatus = selectedState;
}  
  ngOnInit(): void {
  if(this.currentMonth<10){
    this.FinalMonth ="0"+this.currentMonth;
  }
  else{
    this.FinalMonth = this.currentMonth;
  }

  if(this.currentDay<10){
    this.FinalDay = "0"+ this.currentDay;
  }
  else{
    this.FinalDay = this.currentDay;
  }
  this.TodayDate = this.currentYear+"-"+ this.FinalMonth+"-"+this.FinalDay;
  this.minValue = this.TodayDate;
  }

  get taskName(){
    return this.formValidation.get('taskName')
  }
  
  get taskDescription(){
    return this.formValidation.get('taskDescription')
  }

  onSubmit(){ 
    console.log(this.task) ;
    if (this.formValidation.valid) {
     // Form is valid, perform the submission or other actions
     console.log('Form is valid');
   } else {
     console.log('Form is invalid');
   } 
   }
   
   onReset(){
    this.formValidation.reset();
  }

  onCancel(){
    this.location.back();
  }
}
