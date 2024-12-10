import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-products',
  //imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {
  products : any;
  constructor(private  http:HttpClient) {
  }
  ngOnInit(): void {
    this.http.get("http://localhost:9999/INVENTORY-SERVICE/products?projection=fullProduct").subscribe({
      next : (data)=>{
        this.products = data;
      },
      error : (err) =>{}
    });
  }
}
