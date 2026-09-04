//javascript

//book class to represent a book object
class Book {
    title: string;
    author: string;
    year: number;

    constructor(title: string, author: string, year: number) {
        this.title = title;
        this.author = author;
        this.year = year;
    }
}


//function t display book informatin

function displayBook(book: Book): void{
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

const book1 = new Book ("The Hobiit", "J.R.R Tolkien", 1937);
const book2 = new Book ("The Lord of the Rings", "J.R.R Tolkien", 1954);


//display the book on the webpage

displayBook(book1);
displayBook(book2);

//interface to define the structure of a review
interface Review {
    bookId: number;
    rating: number;
    comment: string;
}

//array to store reviews
const reviews: Review[] = [];



//function to add a review for a book
function addReview(
    bookId: number,
    rating: number,
    comment: string
): void {
    const review: Review = {
        bookId,
        rating,
        comment
    };

    reviews.push(review);
    
}

//example usage of the addReview function
addReview(1, 5, "An amazing adventure!");
addReview(2, 4, "A classic tale of friendship and courage.");