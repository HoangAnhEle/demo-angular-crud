import { Component } from '@angular/core';
import { ICustomers } from './interface/demo.interface';
import { CustomerService } from './service/customer-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular_crud';

  listData: ICustomers[] = [];

  constructor(
    private customerService: CustomerService
  ) {}

  ngOnInit() {
    this.handleGetListCustomer();
  }

  handleGetListCustomer(){
    this.customerService.getAllCustomer().subscribe((res: ICustomers[]) => {
      this.listData = res;
    })
  }
}
