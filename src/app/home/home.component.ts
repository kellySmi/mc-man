import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ElectronService } from '../core/services/electron/electron.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @Input() filePath? : string; 
  public whitelistData : any[];
  constructor(private router: Router,private electro : ElectronService) { }

  ngOnInit(): void {
    this.getFile();
   // fileCont.then(fc => console.log(fc));
    
  }
  getFile(){
    ///get saved file path 
    this.filePath = localStorage.getItem("mc-whitelist-path");
    this.filePath = this.filePath ? this.filePath : '';
    if(this.filePath){
      let fileCont = this.electro.getFile(this.filePath);
      this.whitelistData = JSON.parse(fileCont);
    }else{
      this.whitelistData = [{name:"no whitelist found", uuid:"abc-123"}];
    }


  }
  public readWhitelist(file: File){
    const fileReader = new FileReader();
    fileReader.readAsText(file);
    fileReader.onload = (e) => {
      const fileStr = fileReader.result as string;
      this.whitelistData = JSON.parse(fileStr);
    };
    
    localStorage.setItem("mc-whitelist-path", file.path);
  }
}
