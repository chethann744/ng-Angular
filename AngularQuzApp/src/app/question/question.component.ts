import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { QuestionService } from '../service/question.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {
public name:string="";
public questionList:any=[];
public currentQuestion:number=0;
public points:number=0;
counter=60;
correctAnswer:number=0;
inCorrectAnswer:number=0;
interval$:any;
progress:string="0";
isQuizCompleted:boolean= false;
  constructor(private questionService : QuestionService) { }

  ngOnInit(): void {
    this.name= localStorage.getItem("name")!;
    this.getAllQuestion();
    this.startCounter();
  }
  getAllQuestion(){        
     this.questionService.getQuestionJson()
     .subscribe(res=>{
      this.questionList=res.question;
     })
  }
nextQuestion(){
  this.currentQuestion++;
}
previouQuestion(){
  this.currentQuestion--;
}
answer(currentQno:number,option:any){
  if(currentQno===this.questionList.length){
    this.isQuizCompleted=true;
    this.startCounter();
  }
  if(option.correct){
    this.points+=10;
    this.correctAnswer++;
     setTimeout(()=>{
      this.currentQuestion++;
     this.resetCounter();
    this.getProgressPercet();

     },1000);
  }else{
    setTimeout(()=>{
      this.currentQuestion++;
      this.inCorrectAnswer++;
      this.getProgressPercet();
    },1000);
    this.points-=10;
    
  }
}
startCounter(){
  this.interval$=interval(1000)
  .subscribe(val=>{
    this.counter--;
    if(this.counter===0){
      this.currentQuestion++;
      this.counter=60;
      this.points-=10;
    }
  });
setTimeout(()=>{
this.interval$.unsubscribe();
},60000)

}
stopCounter(){
 this.interval$.unsubscribe();
 this.counter=0;
}
resetCounter(){
 this.stopCounter();
 this.counter=60;
 this.startCounter();
}
resetQuiz(){
  this.resetCounter();
  this.getAllQuestion();
  this.points=0;
  this.counter=60;
  this.currentQuestion=0;
  this.progress="0";
}
getProgressPercet(){
  this.progress=((this.currentQuestion/this.questionList.length)*100).toString();
  return this.progress;
}
}
