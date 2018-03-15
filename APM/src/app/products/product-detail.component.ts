import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";

import { IProduct } from './product';
import { ProductService } from './product.service';

@Component
({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit 
{
  errorMessage: any;
  pageTitle: string = 'Product Detail';
  product: IProduct;


  constructor(private _productService: ProductService, private _activatedRoute: ActivatedRoute, private _router: Router) 
  {     
  }

  ngOnInit() 
  {
    let id = +this._activatedRoute.snapshot.paramMap.get('id');

    this._productService.getProduct(id)
      .subscribe(
        (product) => 
          {
          this.product = product;
          },
        (error) => this.errorMessage = <any>error,
        () => console.log('getProduct completed'));  
  }

  onBack(): void
  {
    this._router.navigate(['/products']);
  }
}
