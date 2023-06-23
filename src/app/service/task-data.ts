import { Tasks } from "./tasks";

export var TASKS:Tasks[]=[
   {
    'id':1,
    'taskName':'task1',
    'taskDescription':'Tasks1 description',
    'dueDate': new Date(2023, 5, 17),
    'status':'Todo',
    'teamLeader': [{id:1,name:'user1'}],
    'teamMembers': [{id:9,name:'user9'},
                    {id:23,name:'user23'}
                ]
   }
]      