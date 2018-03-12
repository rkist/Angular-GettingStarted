import { Component, OnChanges, Input, Output, EventEmitter } from "@angular/core";

@Component
({
    selector: 'pm-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges
{    
    ngOnChanges(): void 
    {
        this.starWidth = this.rating * (86/5);
    }

    @Input() rating: number = 5;
    starWidth: number;

    @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();

    onRatingClick()
    {
        console.log('StarComponent onCLick');
        this.ratingClicked.emit(` ${this.rating} click!!`);
    }
}