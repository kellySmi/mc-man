import { Component, EventEmitter, Output } from '@angular/core';
//import { NzMessageService } from 'ng-zorro-antd/message';
import { NzUploadFile } from 'ng-zorro-antd/upload';


@Component({
  selector: 'app-file-selector',
  templateUrl: './file-selector.component.html',
  styleUrls: ['./file-selector.component.scss']
})
export class FileSelectorComponent {
  @Output() fileResults: EventEmitter<File> = new EventEmitter();
  uploading = false;
  fileList: NzUploadFile[] = [];

  constructor( ){
  }
  beforeUpload = (file: NzUploadFile): boolean => {
    this.fileList = this.fileList.concat(file);
    return false;
  };
  handleUpload(): void {
    this.uploading = true;
    this.fileList.forEach((file: any) => {
      this.fileResults.emit(file);
      this.uploading = false;
      this.fileList = [];
     });
  }
}
