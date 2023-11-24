import { Component , Input , Output , EventEmitter} from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent  {
  activatedTab : number=0;
  @Output() onTabChange = new EventEmitter<number>();
  @Input() tabsArray: string[]=[]

  setActive(index : number) {
  this.activatedTab=index;
  this.onTabChange.emit(this.activatedTab);
  }
}
