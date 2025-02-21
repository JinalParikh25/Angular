import { computed, Injectable,signal } from "@angular/core";
import { Task, TaskStatus } from "./task.model";

@Injectable({providedIn:'root'})
export class taskServices{
    private tasks = signal<Task[]>([]);
    
    allTask = this.tasks.asReadonly();
    
    addTask(task : Task){
        this.tasks.update((oldTaskValue) => [...oldTaskValue,task]);
    }

    changeTaskStatus(taskId:string,status:TaskStatus){
        this.tasks.update((oldTasks) => 
            oldTasks.map((task) => task.id === taskId ?  { ...task, status: status }: task) )
    }  
}