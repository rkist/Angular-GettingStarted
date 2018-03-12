import {Component, OnInit} from '@angular/core'
import { IProduct } from './product';

@Component
({
    selector: 'pm-products',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit
{
    constructor()
    {
        this.filteredProducts = this.products;
    }

    ngOnInit(): void 
    {
      console.log('OnInit ProductListComponent');
    }

    pageTitle: string = 'Product List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = true;

    products: IProduct[] = 
    [
        {
            "productId": 1,
            "productName": "Leaf Rake",
            "productCode": "GDN-0011",
            "releaseDate": "March 19, 2016",
            "description": "Leaf rake with 48-inch wooden handle.",
            "price": 19.95,
            "starRating": 3.2,
            "imageUrl": "http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
        },
        {
            "productId": 2,
            "productName": "Garden Cart",
            "productCode": "GDN-0023",
            "releaseDate": "March 18, 2016",
            "description": "15 gallon capacity rolling garden cart",
            "price": 32.99,
            "starRating": 4.2,
            "imageUrl": "http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png"
        },
        {
            "productId": 5,
            "productName": "Hammer",
            "productCode": "TBX-0048",
            "releaseDate": "May 21, 2016",
            "description": "Curved claw steel hammer",
            "price": 8.9,
            "starRating": 4.8,
            "imageUrl": "http://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer.png"
        },
    ];

    filteredProducts: IProduct[];

    _listFilter: string;
    get listFilter(): string
    {
        return this._listFilter;
    }
    set listFilter(value: string)
    {
        this._listFilter = value;
        this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
    }

    performFilter(filterString: string): IProduct[] 
    {
        filterString = filterString.toLocaleLowerCase();
        return this.products.filter((p: IProduct) => p.productName.toLocaleLowerCase().indexOf(filterString) !== -1);
    }


    toggleImage():void
    {
        this.showImage = !this.showImage;
    }

    onNotify(eventMsg: string):void
    {
        console.log('ProductListComponent onNotify: ' + eventMsg);
    }
}