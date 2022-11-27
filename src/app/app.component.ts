import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {

  todo= JSON.parse(localStorage.getItem("todo") )|| []
  todoItem=""
  addItem(){
         this.todo.push(this.todoItem)
        this.todoItem=""
       localStorage.setItem("todo",JSON.stringify(this.todo))
  }
  removeItem(index){
    this.todo.splice(index,1)
    localStorage.setItem("todo",JSON.stringify(this.todo))

  }
}
