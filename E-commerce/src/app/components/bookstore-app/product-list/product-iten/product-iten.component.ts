import { Component, Input, OnInit } from '@angular/core';
import { Book } from '../model/book';

@Component({
  selector: 'app-product-iten',
  templateUrl: './product-iten.component.html',
  styleUrls: ['./product-iten.component.css']
})
export class ProductItenComponent implements OnInit {


  @Input()
    
  livro!: Book;

  constructor() { }

  ngOnInit(): void {
  }

}
