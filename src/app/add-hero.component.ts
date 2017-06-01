import {Component} from '@angular/core';
import {MdDialog, MdDialogRef} from '@angular/material';
import {MdDialogModule} from '@angular/material';
import { Hero } from './hero';



@Component({
  selector: 'add-hero',
  templateUrl: './add-hero.component.html',
})
export class AddHeroComponent {
  constructor(public dialogRef: MdDialogRef<AddHeroComponent>) {}
  hero: Hero = new Hero();
  cancel(){
       this.dialogRef.close()
  }
  save(){
     console.log('hero',this.hero);
      this.dialogRef.close(this.hero);
  }
}