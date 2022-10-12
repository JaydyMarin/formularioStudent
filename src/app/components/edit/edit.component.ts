import { Component, OnInit } from '@angular/core';

import { PostService } from 'src/app/post.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
   public editForm: FormGroup
   postRef:any

  constructor(
    public postService: PostService,
    public formBuilder: FormBuilder,
    private activateRoute: ActivatedRoute,
    private router: Router
  ) {
    this.editForm = this.formBuilder.group({
      name: [''],
      apellido: [''],
      documento: ['']
    })
   }

  ngOnInit(): void {
    const id = this.activateRoute.snapshot.paramMap.get('id')
    this.postService.getPostById(id).subscribe( res => {
      this.postRef = res
      this.editForm = this.formBuilder.group({
        name: [this.postRef.name],
        apellido: [this.postRef.apellido],
        documento: [this.postRef.documento],
      })
    })
  }

  onSubmit(){
    const id= this.activateRoute.snapshot.paramMap.get('id')
    this.postService.updatePost(this.editForm.value,id)
    this.router.navigate([''])
  }

}
