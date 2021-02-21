import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TranslateModule } from '@ngx-translate/core';

import { PageNotFoundComponent } from './components/';
import { WebviewDirective } from './directives/';
import { FormsModule } from '@angular/forms';
import { FileSelectorComponent } from './components/file-selector/file-selector.component';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { NzMessageService } from 'ng-zorro-antd/message';

import { NzButtonModule } from 'ng-zorro-antd/button';

@NgModule({
  declarations: [PageNotFoundComponent, WebviewDirective, FileSelectorComponent],
  imports: [CommonModule, TranslateModule, FormsModule, NzUploadModule, NzButtonModule],
  exports: [TranslateModule, WebviewDirective, FormsModule,FileSelectorComponent],
  providers: [NzMessageService]
})
export class SharedModule {}
