/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/

//javascript
//book class to represent a book object
class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }
}
//function t display book informatin
function displayBook(book) {
    const booklist = document.getElementById("book-list");
    if (!booklist) {
        return;
    }
    const bookDiv = document.createElement("div");
    bookDiv.innerHTML = `<h2>${book.title}</h2>
    <p>By ${book.author}, ${book.year}</p>`;
    booklist.appendChild(bookDiv);
}
//create some book objects
const book1 = new Book("The Hobiit", "J.R.R Tolkien", 1937);
const book2 = new Book("The Lord of the Rings", "J.R.R Tolkien", 1954);
//display the book on the webpage
displayBook(book1);
displayBook(book2);
//array to store reviews
const reviews = [];
//function to add a review for a book
function addReview(bookId, rating, comment) {
    const review = {
        bookId,
        rating,
        comment
    };
    reviews.push(review);
}
//example usage of the addReview function
addReview(1, 5, "An amazing adventure!");
addReview(2, 4, "A classic tale of friendship and courage.");

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixXQUFXO0FBQzFDLFlBQVksWUFBWSxJQUFJLFVBQVU7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1wcm9qZWN0Ly4vc3JjL21haW4udHMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG4vL2phdmFzY3JpcHRcbi8vYm9vayBjbGFzcyB0byByZXByZXNlbnQgYSBib29rIG9iamVjdFxuY2xhc3MgQm9vayB7XG4gICAgY29uc3RydWN0b3IodGl0bGUsIGF1dGhvciwgeWVhcikge1xuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgICAgIHRoaXMuYXV0aG9yID0gYXV0aG9yO1xuICAgICAgICB0aGlzLnllYXIgPSB5ZWFyO1xuICAgIH1cbn1cbi8vZnVuY3Rpb24gdCBkaXNwbGF5IGJvb2sgaW5mb3JtYXRpblxuZnVuY3Rpb24gZGlzcGxheUJvb2soYm9vaykge1xuICAgIGNvbnN0IGJvb2tsaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJib29rLWxpc3RcIik7XG4gICAgaWYgKCFib29rbGlzdCkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGJvb2tEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGJvb2tEaXYuaW5uZXJIVE1MID0gYDxoMj4ke2Jvb2sudGl0bGV9PC9oMj5cclxuICAgIDxwPkJ5ICR7Ym9vay5hdXRob3J9LCAke2Jvb2sueWVhcn08L3A+YDtcbiAgICBib29rbGlzdC5hcHBlbmRDaGlsZChib29rRGl2KTtcbn1cbi8vY3JlYXRlIHNvbWUgYm9vayBvYmplY3RzXG5jb25zdCBib29rMSA9IG5ldyBCb29rKFwiVGhlIEhvYmlpdFwiLCBcIkouUi5SIFRvbGtpZW5cIiwgMTkzNyk7XG5jb25zdCBib29rMiA9IG5ldyBCb29rKFwiVGhlIExvcmQgb2YgdGhlIFJpbmdzXCIsIFwiSi5SLlIgVG9sa2llblwiLCAxOTU0KTtcbi8vZGlzcGxheSB0aGUgYm9vayBvbiB0aGUgd2VicGFnZVxuZGlzcGxheUJvb2soYm9vazEpO1xuZGlzcGxheUJvb2soYm9vazIpO1xuLy9hcnJheSB0byBzdG9yZSByZXZpZXdzXG5jb25zdCByZXZpZXdzID0gW107XG4vL2Z1bmN0aW9uIHRvIGFkZCBhIHJldmlldyBmb3IgYSBib29rXG5mdW5jdGlvbiBhZGRSZXZpZXcoYm9va0lkLCByYXRpbmcsIGNvbW1lbnQpIHtcbiAgICBjb25zdCByZXZpZXcgPSB7XG4gICAgICAgIGJvb2tJZCxcbiAgICAgICAgcmF0aW5nLFxuICAgICAgICBjb21tZW50XG4gICAgfTtcbiAgICByZXZpZXdzLnB1c2gocmV2aWV3KTtcbn1cbi8vZXhhbXBsZSB1c2FnZSBvZiB0aGUgYWRkUmV2aWV3IGZ1bmN0aW9uXG5hZGRSZXZpZXcoMSwgNSwgXCJBbiBhbWF6aW5nIGFkdmVudHVyZSFcIik7XG5hZGRSZXZpZXcoMiwgNCwgXCJBIGNsYXNzaWMgdGFsZSBvZiBmcmllbmRzaGlwIGFuZCBjb3VyYWdlLlwiKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==