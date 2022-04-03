import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';
import { ImageDetails } from 'src/app/models/image-details';
import { APIService } from 'src/app/service/api.service';

@Component({
  selector: 'app-leftpanel',
  templateUrl: './leftpanel.component.html',
  styleUrls: ['./leftpanel.component.scss']
})
export class LeftpanelComponent implements OnInit {

  @Input() imageList!: ImageDetails[];
  @Output() preview = new EventEmitter<{index: number, data: ImageDetails}>(); 
  @Output() updateSortOrder = new EventEmitter<string>();

  selectedOrder!: string;
  sortingOrder = ['Lowest Likes', 'Highest Likes', 'Latest First', 'Oldest First'];
  constructor(private apiService: APIService) { }

  ngOnInit(): void {
   
  }


  showPreview(event: any) {
    this.preview.emit(event);
  }

  updateSortingOrder(event: MatSelectChange) {
    this.selectedOrder = event.value;
    this.updateSortOrder.emit(this.selectedOrder);
  }
}
