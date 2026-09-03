//javascript

// A simple Book class(using cnstructr functin in JS)

function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
}

//function t display book informatin

function displayBook(book) {
    const booklist = document.getElementById("book-list");
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