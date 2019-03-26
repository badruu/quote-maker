import { Component, OnInit } from '@angular/core';
import {Quote } from '../quote'

@Component({
  selector: 'app-quote-view',
  templateUrl: './quote-view.component.html',
  styleUrls: ['./quote-view.component.css']
})
export class QuoteViewComponent implements OnInit {

  quotes = [
    new Quote('Chinese', 'The best thing is to be respected, the next is to be loved; it is bad to be hated, but still worse to be despised.', 'Badrudin', new Date (2019,3,27), 0, 0),
    new Quote('Hitopadesa', 'Circumspection in calamity; mercy in greatness; good speeches in assemblies; fortitude in adversity: these are the self-attained perfections of great souls.', 'Badrudin', new Date (2019,3,27), 0, 0),
    new Quote('Magha', 'The intellect of a good man is piercing, yet inflicts no wound; his actions are deliberate, yet bold; his heart is warm, but never burns; his speech is eloquent, yet very true.', 'Badrudin', new Date (2019,3,27), 0, 0)
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
