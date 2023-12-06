import {Component, OnInit} from '@angular/core';
import {Product} from "../../model/Produit";
import {ProduitsService} from "../produits.service";

@Component({
  selector: 'app-produits-view',
  templateUrl: './produits-view.component.html',
  styleUrls: ['./produits-view.component.css']
})
export class ProduitsViewComponent implements OnInit{
  products:Product[]=[];
    remainingProducts: number = 0;
  constructor(private produitservice: ProduitsService) {}

  ngOnInit() {
    this.produitservice.ApiResponse.subscribe({
      next: (data) => {
        console.log(data);
        this.products = data
        console.log('data in products');
        console.log(this.products);
        this.remainingProducts=this.produitservice.remainingValues;
        console.log("remaining products"+this.remainingProducts);
      },
      error: () => {
        console.log('error occurred while getting product data');
        this.products = this.produitservice.fakeProducts;
      },
    });
  }

  loadMore() {
    this.produitservice.nextPage();
    this.produitservice.ApiResponse.subscribe({
      next: (data) => {
        console.log(data);
        this.products = [...this.products,...data]
        console.log('data in products');
        console.log(this.products);
      },
      error: () => {
        console.log('error occurred while getting product data');
        this.products = this.produitservice.fakeProducts;
      },
    })

  }
}
