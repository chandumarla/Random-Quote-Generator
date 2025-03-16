import { Component, OnInit} from '@angular/core';

import { HttpClient } from '@angular/common/http';

// @Component({
//   selector: 'app-quote',
//   templateUrl: './quote.component.html',
//   styleUrls: ['./quote.component.css']
// })
// export class QuoteComponent {

//   quote:string[]= [ 'belive in yourself','dont give up','something is better than nothing',
//     'start doing now','never wait for tomorrow'
//   ]

//   currentQuote:string = 'Click on Generate to Display your quote here'

//   getRandomQuote(){
    
//     var randomindex = Math.floor(Math.random()*this.quote.length)
//     this.currentQuote = this.quote[randomindex]
//   }
// }            // the above one was old for static quote generator and below one was new 




@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quote: string = '';  // To store the fetched quote
  author: string = ''; // To store the quote's author

  constructor(private http: HttpClient) { }  // Inject HttpClient

  ngOnInit(): void {
    this.fetchQuote();  // Fetch a quote when the component loads
  }

  fetchQuote() {
    this.http.get<any>('https://dummyjson.com/quotes/random').subscribe(response => {
      this.quote = response.quote;  // Extract quote text
      this.author = response.author;  // Extract author name
    });
  }
}