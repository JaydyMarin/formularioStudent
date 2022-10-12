import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/post.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  public postForm:FormGroup

  constructor(
    public postServices: PostService,
    public formBuilder: FormBuilder,
    public router: Router
  ) {
    this.postForm = this.formBuilder.group({
      name : [''],
      apellido : [''],
      documento :[''],
    })
   }

  ngOnInit(): void {
  }

  onSubmit(){
    this.postServices.createPost(this.postForm.value)
    this.router.navigate([''])
  }

}
