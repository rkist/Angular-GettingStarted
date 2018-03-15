import {Component, OnInit} from '@angular/core'
import { IProduct } from './product';
import { ProductService } from './product.service';

@Component
({
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit
{
    errorMessage: any;
    constructor(private _productService: ProductService)
    {
    }

    ngOnInit(): void 
    {
      console.log('OnInit ProductListComponent');

      this._productService.getProducts()
      .subscribe(
          (products) => 
            {
                this.products = products;
                this.filteredProducts = this.products;
            },
          (error) => this.errorMessage = <any>error,
          () => console.log('getProducts completed'));
    }

    pageTitle: string = 'Product List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = true;

    products: IProduct[];

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