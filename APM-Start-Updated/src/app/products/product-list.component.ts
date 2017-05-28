import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';


@Component({
    //moduleId: module.id,
    templateUrl: 'app/products/product-list.component.html',
    styleUrls: ['app/products/product-list.component.css']
})

export class ProductListComponent
    implements OnInit { 

    pageTitle: string = 'Product List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    listFilter: DOMStringMap;
    errorMessage: string;

    products: IProduct[];

    constructor(private _productService: ProductService){ 

    }

    ngOnInit(): void{ 
        console.log('In OnInit')
        this._productService.getProducts()
            .subscribe(products => this.products = products,
            error => this.errorMessage = <any>error);
    }

    toggleImage(): void{ 
        this.showImage = !this.showImage
    }

    onRatingClicked(message:string):void{ 
        this.pageTitle = "Product list" + message;
    }
}