import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BuilderComponent } from './builder.component';
import { RouterModule } from '@angular/router';

import { CoreModule } from './core/core.module';
import { PagesModule } from './pages';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SidebarContainerService } from './services/sidebar-container.service';
import { DropdownsService } from './services/dropdowns.service';

@NgModule({
    declarations: [
        BuilderComponent
    ],
    imports: [
        BrowserModule.withServerTransition({appId: 'runner-builder'}),
        BrowserAnimationsModule,
        CoreModule,
        RouterModule.forRoot([], { useHash: true }),
        PagesModule
    ],
    providers: [
        SidebarContainerService,
        DropdownsService
    ],
    bootstrap: [BuilderComponent]
})
export class BuilderModule { }


