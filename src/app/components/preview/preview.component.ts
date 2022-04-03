import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ImageDetails } from 'src/app/models/image-details';


@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss']
})
export class PreviewComponent implements OnInit {

  @Input() selectedImage!: ImageDetails;
  @Output() updateLikes = new EventEmitter<ImageDetails>();
  constructor() { }

  
  ngOnInit(): void {
  }

  likeImage() {
    if (this.selectedImage.isLiked) {
      this.selectedImage = {
        ...this.selectedImage,
        likes: this.selectedImage.likes - 1,
        isLiked: false
      }
    } else {
      this.selectedImage = {
        ...this.selectedImage,
        likes: this.selectedImage.likes + 1,
        isLiked: true
      }
    }
   
    this.updateLikes.emit(this.selectedImage);
  }
}
