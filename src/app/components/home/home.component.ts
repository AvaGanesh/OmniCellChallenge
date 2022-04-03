import { Component, OnInit } from '@angular/core';
import { ImageDetails } from 'src/app/models/image-details';
import { APIService } from 'src/app/service/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  imageList!: ImageDetails[];
  selectedPreviewImage!: ImageDetails;
  selectedIndex!: number;
  constructor(private apiService: APIService) { }

  ngOnInit(): void {
    this.apiService.listImageDetails().subscribe((res) => {
      console.log(res);
      this.imageList = res;
    })
  }

  selectPreviewImg(event: {index: number, data: ImageDetails}) {
    this.selectedPreviewImage = event.data;
    this.selectedIndex = event.index;
  }

  updateLike(event: ImageDetails) {
    this.imageList[this.selectedIndex] = event;
  }

  sortBy(sortingOrder: string) {
    let sortedData: ImageDetails[] = [];
    switch(sortingOrder) {
      case 'Lowest Likes': 
        sortedData = this.imageList.sort((a, b) => a.likes - b.likes); 
        break;
      case 'Highest Likes': 
        sortedData = this.imageList.sort((a, b) => b.likes - a.likes);
        break;
      case 'Oldest First':
        sortedData = this.imageList.sort((a, b) => new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime());
        break;
      case 'Latest First':
        sortedData = this.imageList.sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());
        break;
    }
    console.log('Sorted data', sortedData);
  }

}
