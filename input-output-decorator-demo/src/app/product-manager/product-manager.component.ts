import { Component } from '@angular/core';
import { product } from '../../model/product';

@Component({
  selector: 'app-product-manager',
  templateUrl: './product-manager.component.html',
  styleUrl: './product-manager.component.css'
})
export class ProductManagerComponent {

  searchT:string='';
products:product[]=
[
  {pid:"a1",pname:'samsung mobile',review:4},
  {pid:"a2",pname:'realme mobile',review:5},
  {pid:"a3",pname:'vivo mobile',review:3}
]

tempProducts=this.products;

alok(serrchtext:string)
{
this.searchT=serrchtext;
alert("from parent" +this.searchT);

if(this.searchT=='')
  {
  this.products=this.tempProducts;
  }
else
{
this.products=this.products.filter(p=>p.pname==this.searchT);
}
}
}
