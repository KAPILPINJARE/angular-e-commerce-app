import { Component } from '@angular/core';

@Component({
    selector: "my-cart",
    templateUrl: "./cart.component.html"
})
export class CartComponent {

    totalAmount: number;

    items = [
        {
            imageUrl: "assets/images/head_first_java.jpg",
            title: "Head First Java",
            quantity: 1,
            price: 1140
        },
        {
            imageUrl: "assets/images/a_monks_memoir.jpeg",
            title: "A Monk's Memoir",
            quantity: 1,
            price: 311
        },
        {
            imageUrl: "assets/images/rich_dad_poor_dad.jpeg",
            title: "Rich Dad Poor Dad",
            quantity: 1,
            price: 150
        }
    ];
}