// produits.service.ts

import {concatMap, map, mapTo} from 'rxjs/operators';
import {HttpClient} from "@angular/common/http";
import {Injectable, OnInit} from "@angular/core";
import {BehaviorSubject, catchError, concat, debounceTime, merge, Observable, of, retry} from "rxjs";
import {Product} from "../model/Produit";
import {ProductResponse} from "../model/productResponse";
import {fakeAsync} from "@angular/core/testing";
import {provideToastr} from "ngx-toastr";
import {NotifierService} from "../notifier.service";

// ...

@Injectable({
  providedIn: 'root'
})
export class ProduitsService {
  private currentPage = 1;
  apiUrl= 'https://dummyjson.com/products';
  private pageSize =12;
  ApiResponse: Observable<Product[]> =this.fetchAPI(1);
  fakeProducts:Product[]= [
    {
      id: 1,
      title: 'iPhone 18',
      description: 'An apple mobile which is nothing like apple',
      price: 549,
      discountPercentage: 12.96,
      rating: 4.69,
      stock: 94,
      brand: 'Apple',
      category: 'smartphones',
      thumbnail: 'https://i.dummyjson.com/data/products/1/thumbnail.jpg',
      images: [
        'https://i.dummyjson.com/data/products/1/1.jpg',
        'https://i.dummyjson.com/data/products/1/2.jpg',
        'https://i.dummyjson.com/data/products/1/3.jpg',
        'https://i.dummyjson.com/data/products/1/4.jpg',
        'https://i.dummyjson.com/data/products/1/thumbnail.jpg'
      ]
    },
    {
      id: 2,
      title: 'iPhone X',
      description: 'SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...',
      price: 899,
      discountPercentage: 17.94,
      rating: 4.44,
      stock: 34,
      brand: 'Apple',
      category: 'smartphones',
      thumbnail: 'https://i.dummyjson.com/data/products/2/thumbnail.jpg',
      images: [
        'https://i.dummyjson.com/data/products/2/1.jpg',
        'https://i.dummyjson.com/data/products/2/2.jpg',
        'https://i.dummyjson.com/data/products/2/3.jpg',
        'https://i.dummyjson.com/data/products/2/thumbnail.jpg'
      ]
    },
    {
      id: 3,
      title: 'Samsung Universe 9',
      description: "Samsung's new variant which goes beyond Galaxy to the Universe",
      price: 1249,
      discountPercentage: 15.46,
      rating: 4.09,
      stock: 36,
      brand: 'Samsung',
      category: 'smartphones',
      thumbnail: 'https://i.dummyjson.com/data/products/3/thumbnail.jpg',
      images: ['https://i.dummyjson.com/data/products/3/1.jpg']
    },
    {
      id: 4,
      title: 'OPPOF19',
      description: 'OPPO F19 is officially announced on April 2021.',
      price: 280,
      discountPercentage: 17.91,
      rating: 4.3,
      stock: 123,
      brand: 'OPPO',
      category: 'smartphones',
      thumbnail: 'https://i.dummyjson.com/data/products/4/thumbnail.jpg',
      images: [
        'https://i.dummyjson.com/data/products/4/1.jpg',
        'https://i.dummyjson.com/data/products/4/2.jpg',
        'https://i.dummyjson.com/data/products/4/3.jpg',
        'https://i.dummyjson.com/data/products/4/4.jpg',
        'https://i.dummyjson.com/data/products/4/thumbnail.jpg'
      ]
    },
    {
      id: 5,
      title: 'Huawei P30',
      description: "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
      price: 499,
      discountPercentage: 10.58,
      rating: 4.09,
      stock: 32,
      brand: 'Huawei',
      category: 'smartphones',
      thumbnail: 'https://i.dummyjson.com/data/products/5/thumbnail.jpg',
      images: [
        'https://i.dummyjson.com/data/products/5/1.jpg',
        'https://i.dummyjson.com/data/products/5/2.jpg',
        'https://i.dummyjson.com/data/products/5/3.jpg'
      ]
    },
    {
      id: 6,
      title: 'MacBook Pro',
      description: 'MacBook Pro 2021 with mini-LED display may launch between September, November',
      price: 1749,
      discountPercentage: 11.02,
      rating: 4.57,
      stock: 83,
      brand: 'Apple',
      category: 'laptops',
      thumbnail: 'https://i.dummyjson.com/data/products/6/thumbnail.png',
      images: [
        'https://i.dummyjson.com/data/products/6/1.png',
        'https://i.dummyjson.com/data/products/6/2.jpg',
        'https://i.dummyjson.com/data/products/6/3.png',
        'https://i.dummyjson.com/data/products/6/4.jpg'
      ]
    }];
  total!:number;
  //how to get first value to not be undefined
  remainingValuesObservable= new BehaviorSubject<number>(this.total);
  remainingValues = this.remainingValuesObservable.asObservable();
    remainingProducts: number;


    constructor(
        private http: HttpClient,
        private notif :NotifierService
                ) {
        // this.ApiResponse = this.fetchAPI(1);
        this.remainingValuesObservable.next(this.total);
          console.log("OnInit"+this.total);
         this.remainingProducts=this.total;
      }

  private fetchAPI(page: number) {
    const limit = this.pageSize;
    const skip = (page - 1)* this.pageSize;
    let apiUrlWithPage = `${this.apiUrl}?limit=${limit}&skip=${skip}`;
    let apiUrl=apiUrlWithPage;
    return this.http.get<ProductResponse>(apiUrl).pipe(
            map((data ) => {
                    this.total=data.total;
                    this.remainingProducts=this.total;
                    return data.products;
                }
            ),
    );
  }
  private fetchApiTotal() {

    let apiUrl=this.apiUrl;
    return this.http.get<ProductResponse>(apiUrl).pipe(
        map((data ) => {
              return data.total;
            }
        ),
    )
  }
  nextPage() {
      console.log("remaining products next pGE ONLY "+this.remainingProducts)
    if (this.remainingProducts>0) {
        console.log("remaining products next pGE "+this.remainingProducts)
        this.currentPage++;
        console.log("haaahyyy" + this.currentPage+"remaining products"+this.remainingProducts);
        this.ApiResponse = this.ApiResponse.pipe(
            concatMap(() => this.fetchAPI(this.currentPage))
        );

        // Subscribe to trigger the execution
        this.ApiResponse.subscribe(data => {
            console.log('Updated data:', data);

            // provide remaining products values
          if (this.total-this.currentPage*this.pageSize<0) {
            this.remainingValuesObservable.next(0);
          }else {
            this.remainingValuesObservable.next(this.remainingProducts - this.pageSize);
          }
          this.notif.showInfo("Remaining products",""+(this.remainingValues));
        });

    } else {
        this.notif.showInfo("Limit reached","c bon yezzi");
    }
  }

}
