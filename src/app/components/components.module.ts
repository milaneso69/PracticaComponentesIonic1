import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { IonicModule } from '@ionic/angular';
import { CardPostComponent } from './card-post/card-post.component';
import { AvatarComponent } from './avatar/avatar.component';


@NgModule({
  declarations: [
    LayoutComponent,
    CardPostComponent,
    AvatarComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    LayoutComponent,
    CardPostComponent,
    AvatarComponent
  ]
})
export class ComponentsModule { }
