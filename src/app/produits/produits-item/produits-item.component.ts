import {Component, Input} from '@angular/core';
import {Product} from "../../model/Produit";

@Component({
  selector: 'app-produits-item',
  templateUrl: './produits-item.component.html',
  styleUrls: ['./produits-item.component.css']
})
export class ProduitsItemComponent {
  @Input() product! : Product;
}
