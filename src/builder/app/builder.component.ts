import { Component, OnInit } from '@angular/core';

import { SidebarContainerService } from './services/sidebar-container.service';
import { DropdownsService } from './services/dropdowns.service';


@Component({
    selector: 'builder-root',
    templateUrl: './builder.component.html',
    styleUrls: ["./builder.component.scss"]
})
export class BuilderComponent implements OnInit {
    widget: any;
    constructor(
        public sidebar$: SidebarContainerService,
        public dropdowns$: DropdownsService
    ) { }
    
    ngOnInit() { 
    }

    onItem(e) {
        console.log(e);
    }

    checkUpload(){

    }

    download(){

    }

    openSidebar() {
        this.sidebar$.toogle();
    }

    onContentClick(){
        this.dropdowns$.dropdowns.forEach(res=>{
            res.close();
        })
    }
}

