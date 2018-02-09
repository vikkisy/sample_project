import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  
  products = [];
  cart= [];
  total = 0.00;

  constructor(private _apiService: ApiService) { }

  public ngOnInit() {

    //GET PRODUCTS FROM jSON
    this._apiService.getProducts()
    .then((data) => {
      console.log(data);
      this.products = data.products;
    })
    .catch((error) => {
      console.log("catch", error);
    })

    // CART MODAL
    var modal = document.getElementById('myModal');
    var cart = document.getElementById('cart');

    cart.onclick = function () {
      modal.style.display = "block";
    }

    // CLOSE CART MODAL
    var span = document.getElementsByClassName("close")[0];

    (<HTMLImageElement>span).onclick = function () {
      modal.style.display = "none";
    }

  } //END NgOnInit

  
  menu() {
    var x = document.getElementById("navbar");
    if (x.className === "nav") {
      x.className += "responsive";
    } else {
      x.className = "nav";
    }
  } //END MENU

  addToCart(product) {
    //ADD PRODUCT
    this.cart.push(product);
    //ADD TOTAL
    this.total += product.price*.01;
  } //END ADDTOCART

  remove(index) {
    var price = this.cart[index].price*.01;

    this.cart.splice(index, 1);
    if(this.cart.length === 0){
      this.total = 0;
    } else {
      this.total -= price;
    }
  } //END REMOVE


  
}
