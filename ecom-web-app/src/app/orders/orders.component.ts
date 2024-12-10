import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-orders',
  //imports: [],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.css'
})
export class OrdersComponent implements OnInit{
  orders : any;
  customerId!:number;
  constructor(private  http:HttpClient, private router: Router, private route: ActivatedRoute) {
    this.customerId=route.snapshot.params['customerId'];
  }
  ngOnInit(): void {
    this.http.get("http://localhost:9999/BILLING-SERVICE/bills/search/byCustomerId?customerid"+this.customerId).subscribe({
      next : (data)=>{
        this.orders = data;
      },
      error : (err) =>{}
    });
  }

  getOrdersDetails(o: any) {
    this.router.navigateByUrl("/order-details/"+o.id);

  }
}
