import { Component, Input, OnChanges } from '@angular/core';

@Component({
    selector: "star-rating",
    templateUrl: "./star.component.html",
    styleUrls: ["./star.component.css"]
})
export class StarComponent implements OnChanges {
    @Input() rating: number;
    starWidth: number;

    ngOnChanges() {
        this.starWidth = this.rating * 75 / 5;
        console.log(this.starWidth);
    }

}