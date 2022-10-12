import { Injectable } from '@angular/core';
import { AngularFirestore} from '@angular/fire/compat/firestore';
import { Post } from './post.model';
import { Resolve } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private angularFirestore: AngularFirestore) { }

  getPosts(){
    return this.angularFirestore
                .collection("post")
                .snapshotChanges()
  }
  getPostById(id){
    return this.angularFirestore
                .collection("post")
                .doc(id)
                .valueChanges()
  }
  createPost(post: Post){
    return new Promise<any> ((Resolve, reject) =>{
      this.angularFirestore
        .collection("post")
        .add(post)
        .then( (Response) =>{
          console.log(Response)
        },
        (Error) =>{
          reject(Error)
        })

    })
  }
  updatePost(post: Post,id){
    return this.angularFirestore
      .collection("post")
      .doc(id)
      .update({
        name: post.name,
        apellido: post.apellido,
        documento: post.documento
      });
  }
  deletePost(post){
    return this.angularFirestore
      .collection("post")
      .doc(post.id)
      .delete();
  }
}
