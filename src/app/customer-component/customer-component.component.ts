import { Component, Input } from '@angular/core';
import { ICustomers } from '../interface/demo.interface';
import { CustomerService } from '../service/customer-service.service';

@Component({
  selector: 'app-customer-component',
  templateUrl: './customer-component.component.html',
  styleUrl: './customer-component.component.css'
})
export class CustomerComponent {
  @Input() listData: ICustomers[]= [];
  @Input() customer: ICustomers= {
    id: 0,
    name:"",
    age: 0,
    nationality: "",
  };

  constructor(
    private customerService:CustomerService
  ){}

  getData(){
    this.customerService.getAllCustomer().subscribe((res: ICustomers[]) => {
      this.listData = res;
    })
  }

  clearState(customer: ICustomers){
    customer.id = 0;
    customer.name = "";
    customer.age = 0;
    customer.nationality = "";
  }

  handleShowInforToInput = (customer:ICustomers) =>{
    this.customer.id = customer.id;
    this.customer.name = customer.name;
    this.customer.age = customer.age;
    this.customer.nationality = customer.nationality;
  }

  handleDelete = (idCustomer:number) =>{
    this.customerService.deleteCustomer(idCustomer).subscribe({
      next:(value)=> {
        alert("Xóa thành công!");
        this.getData();
      },
      error: (err)=> {
        console.log("Lỗi rồi bạn êi!!!");
      }
    });
  }

  handleAddCustomer = (customer: Omit<ICustomers,"id">) =>{
    this.customerService.createCustomer(customer).subscribe({
      next:(value) => {
          alert("Thêm mới được rồi nhé!!!");
          this.clearState(this.customer);
          this.getData();
      },
      error:(err) => {
        console.log("Ơ kìa...lỗi rồi nhé!!!");
      }
    })
  }

  handleUpdateCustomer = (customer: ICustomers)=>{
    this.customerService.updateCustomer(customer.id, customer).subscribe({
      next: (value)=>{
        alert("Bạn sửa được rồi đấy!!!");
        this.clearState(this.customer);
        this.getData();
      },
      error:(err) => {
        console.log("Đùa chứ...cứ lỗi suốt thế!!!");
      }
    })
  }
}
