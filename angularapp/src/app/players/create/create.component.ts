import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private fb:FormBuilder) { }
  createForm=this.fb.group
  (
    {
      shirtno:['',Validators.required],
      name:['',Validators.required],
      positionid:['',Validators.required],
      appearances:['',Validators.required],
      goals:['',Validators.required],


    }
  )
  onSubmit()
  {

  }

  ngOnInit(): void {
  }

}
