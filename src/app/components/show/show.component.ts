import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/post.model';
import { PostService } from '../../post.service';


@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {
  Posts: Post[]
  constructor(private posService: PostService) { }

  ngOnInit(): void {
    console.log(this.posService.getPosts())
    this.posService.getPosts().subscribe((res)=>{
      
      this.Posts = res.map((e) => {
        return{
          id: e.payload.doc.id,
          ...(e.payload.doc.data() as Post)
        };
      });
    });
  }

deleteRow = (post) => this.posService.deletePost(post)

}
