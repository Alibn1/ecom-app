import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from "@angular/router";

@Component({
  selector: 'app-customers',
  //imports: [],
  templateUrl: './customers.component.html',
  styleUrl: './customers.component.css'
})
export class CustomersComponent implements OnInit {
  customers : any;
  constructor(private  http:HttpClient, private router: Router) {
  }
  ngOnInit(): void {
    this.http.get("http://localhost:9999/CUSTOMER-SERVICE/customer?projection=fullCustomer").subscribe({
      next : (data)=>{
        this.customers = data;
      },
      error : (err) =>{}
    });
  }


  getOrders(c: any) {
    this.router.navigateByUrl("/orders/"+c.id);
  }
}
