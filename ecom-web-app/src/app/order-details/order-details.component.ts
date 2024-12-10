import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';
import {DatePipe, DecimalPipe, JsonPipe, NgForOf, NgIf} from '@angular/common';

@Component({
  selector: 'app-order-details',
  imports: [HttpClientModule, JsonPipe, NgIf, DatePipe, NgForOf, DecimalPipe],
  templateUrl: './order-details.component.html',
  standalone: true,
  styleUrl: './order-details.component.css'
})
export class OrderDetailsComponent implements OnInit{
  orderDetails : any;
  orderId!:number;
  constructor(private  http:HttpClient, private router: Router, private route: ActivatedRoute) {
    this.orderId=route.snapshot.params['orderId'];
  }
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      console.log('Route parameters',params);
    });
    this.http.get("http://localhost:9999/BILLING-SERVICE/bill/"+this.orderId).subscribe({
      next : (data)=>{
        this.orderDetails = data;
      },
      error : (err) =>{}
    });
  }

  getOrdersDetails(o: any) {
    this.router.navigateByUrl("/order-details/"+o.id);

  }
}
