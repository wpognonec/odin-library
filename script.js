const myLibrary = []
const bookList = document.querySelector(".book-list")
const dialog = document.querySelector("#addBookDialog")

function Book(title, author, pages, read = false) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
  this.info = function() {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read ? "read" : "not read"}`;
  }
}

function addBookToLibrary(title, author, pages, read) {
  const newBook = new Book(title, author, pages, read)
  myLibrary.push(newBook)
}

addBookToLibrary("Project Hail Mary", "Andy Weir", 476, true)
addBookToLibrary("Dark Matter", "Blake Crouch", 342, true)

function displayBooks() {
  bookList.replaceChildren()
  for (const book of myLibrary) {
    const bookDiv = document.createElement("div")
    const delButton = document.createElement("button")
    delButton.textContent = "Del"
    bookDiv.textContent = book.info()
    bookDiv.appendChild(delButton)
    bookList.appendChild(bookDiv)
  }
}

function showDialog() {
  dialog.showModal()
}

dialog.addEventListener("submit", (e) => {
  let data = Object.fromEntries(new FormData(e.target))
  console.log(data);
  e.target.reset()
  addBookToLibrary(data.title, data.author, Number(data.pages), Boolean(data.read))
  displayBooks()
})

displayBooks()