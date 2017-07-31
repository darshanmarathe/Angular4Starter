import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})

export class TodosComponent implements OnInit {

  MyTodos:Array<Todo>;

  AppTitle:string;

  CurrentTask:string;
  constructor() { 
    this.AppTitle ="Todos App"
    this.MyTodos = new Array<Todo>();
   
    console.log(this.MyTodos);
  }

  ngOnInit() {
 
  }

RemoveItem(index:number){
  this.MyTodos.splice(index , 1);
}

  AddNew() {
    if(this.CurrentTask != "")   
        this.MyTodos.push(new Todo(this.CurrentTask));
      
    this.CurrentTask ="";
  }

}

export class Todo{
  /**
   *
   */
  constructor(text:string) {
    this.ToDoText = text;
    this.ToDoDone=false;
  }
  ToDoText:string 
  ToDoDone:Boolean
 
  
  private _DonePercent : number;
  public get DonePercent() : number {
    return this._DonePercent;
  }
  public set DonePercent(v : number) {
    this._DonePercent = v;
    if(v == 100)
      this.ToDoDone = true;
    else
      this.ToDoDone =false;
  }
  
  public get isCompleted() : string {
    return this.ToDoDone == true ? "completed" : "";
  }
  

  DoneUndone(){
    if(this.ToDoDone){
      this.ToDoDone = false;
      this.DonePercent=0;
      }
    else{
      this.ToDoDone = true;
      this.DonePercent = 100;
    }
  }
}
