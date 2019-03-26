import { Component, OnInit } from '@angular/core';
import {Quote } from '../quote'

@Component({
  selector: 'app-quote-view',
  templateUrl: './quote-view.component.html',
  styleUrls: ['./quote-view.component.css']
})
export class QuoteViewComponent implements OnInit {

  quotes = [
    new Quote('Anonymous', 'Wherever life plants you, bloom with grace', 'Badrudin', new Date (2019,3,27), 0, 0),
    new Quote('Anonymous', 'Wherever life plants you, bloom with grace', 'Badrudin', new Date (2019,3,27), 0, 0)
  ]

  addNewQuote(quote){
    let quoteLength = this.quotes.length;
    quote.author = quote.author;
    quote.writer = quote.writer;
    quote.date = new Date(quote.date)
    this.quotes.push(quote)

  }

  deleteQuote(isComplete, index){
    if(isComplete){
      let toDelete = confirm(`This action cannot be undone. Delete ${this.quotes[index].quote}`)

      if(toDelete) {
        this.quotes.splice(index,1)
      }
    }
  }
  constructor() { 

   }

  ngOnInit() {
  }

}
