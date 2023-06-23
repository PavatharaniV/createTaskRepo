import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,FormBuilder, Validators} from '@angular/forms';
import { UserService } from '../service/user.service';
import { User } from '../service/user';
import { friendList } from '../service/user-list';
import { TasksService } from '../service/tasks.service';
import { Tasks } from '../service/tasks';
import { Location } from '@angular/common';


@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent implements OnInit {

  formValidation = new FormGroup({
    taskName:new FormControl('',[Validators.required]),
    taskDescription:new FormControl('',[Validators.required]),
    statusOfTask:new FormControl('',[Validators.required]),
    teamLeader :new FormControl('',[Validators.required]),
    teamMem : new FormControl([],[Validators.required]),
    dueDate:new FormControl('',[Validators.required]) ,
    yesOrNoOption:new FormControl('',[Validators.required])
  });

  task:Tasks =new Tasks()
  constructor(private userdetails:UserService,
    private taskdetails:TasksService,
    private location:Location) { 
  }
 
  teamLead !: User[];
  teamMember!:friendList[] ;
  value:any 
  showMultiselect = false;
  clicked:boolean=false;

  selectedStatus:String = '';
  selectedValue:any

  date1 = new Date();
  currentYear = this.date1.getUTCFullYear();
  currentMonth = this.date1.getUTCMonth() + 1;
  currentDay = this.date1.getUTCDate();
  
  FinalMonth:any;
  FinalDay:any;
  minValue : any;
  TodayDate : any;
  

  teamMembers=[];

  status=[ 
    { value:'Todo',indicator: '⚪'},
    { value:'Inprogress',indicator: '🟡' },
    { value:'Completed',indicator: '🟢' },
   ]
 
 
   selectedOption: string = 'Todo';
 
 radioHandler(selectedState: string) {
   this.selectedOption = selectedState;
   this.selectedStatus = selectedState;
 }
  
  itemSelected(e:any){
    console.log(e);
  }

  getUserDetils(){
    this.teamLead=this.userdetails.getUserDetails()
  }

  get teamMem(){
    return this.formValidation.get('teamMem')
  }

  get teamLeader(){
    return this.formValidation.get('teamLeader')
  }


  //getting teamLeader
 // private getTeamLeader(){
   // this.userdetails.getUserDetails().subscribe(data=>
     // {
       // this.teamLead=data;
     // })
  //}
  
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

   this.getUserDetils()

 // this.teamLead=this.userdetails.getUserDetails()

   //teamLeader
   this.teamLead=this.userdetails.getUserDetails();

   //teamMember
   this.teamMember= this.userdetails.getFriendList();
   // this.getTeamLeader;
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
  
  
  toggleMultiselect(option: string) {
    this.showMultiselect = option === 'Yes';
  }

  onClick(){
    this.clicked = !this.clicked;
    console.log(this.clicked)
  }

  selectedMembers: any[] = [];

  onSelectionChange(event: any) {
    this.selectedMembers = event;
    console.log(event);
  }
  
  onReset(){
    this.formValidation.reset();
  }

  onCancel(){
    this.location.back();
  }
}
