const form = document.querySelector(".new-book-form");
const addBookButton = document.querySelector("#save");
const booksGrid = document.querySelector(".books");
const bookCard = document.querySelector(".book-card");


const myLibrary = [];

function Book(name, authorName, pages) {
    this.name = name;
    this.authorName = authorName;
    this.pages = pages;
}


function removeElement(element) {
    element.remove();
}

function addNewBook(event) {
    let warn = "preventDefault() won't let you check this!<br>";
    const clone = bookCard.cloneNode(true);
    const name = clone.querySelector(".name");
    const author = clone.querySelector(".author")
    const pages = clone.querySelector(".pages")
    const deleteBtn = clone.querySelector(".delete");

    const formData = new FormData(form);

    const book_name = formData.get("book-name");
    const author_name = formData.get("author-name");
    const pages_count = formData.get("pages");

    if (book_name === "" || author_name === "") {
        alert("Key data null!");
        return;
    }

    name.innerHTML = book_name;
    author.innerHTML = author_name;
    pages.innerHTML = pages_count;
    deleteBtn.addEventListener("click", (event) => removeElement(clone));

    const book = new Book(book_name, author_name, pages_count);
    myLibrary.push(book);

    booksGrid.appendChild(clone);
    event.preventDefault();
    form.reset();

    console.log(myLibrary);
}

function Initialise() {
    addBookButton.addEventListener("click", (event) => addNewBook(event));
}

Initialise();