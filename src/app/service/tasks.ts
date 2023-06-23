export class Tasks {
    id!:number;
    taskName!: string;
    taskDescription!: string;
    dueDate!: Date;
    status!: string;
    teamLeader!:{id:number,name:string}[];
    teamMembers!:{id:number,name:string} [ ];
}
