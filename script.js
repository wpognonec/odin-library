<<<<<<< HEAD
const myLibrary = []
const bookList = document.querySelector("#bookList")
const dialog = document.querySelector("#addBookDialog")
const title = document.querySelector("#title")
const author = document.querySelector("#author")
const pages = document.querySelector("#pages")

function Book(title, author, pages, read = false) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
  this.info = function () {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${
      this.read ? "read" : "not read"
    }`
=======
class Library {
  constructor(books = []) {
    this.books = books
  }
  getAllBooks() {
    return this.books
  }
  getBook(id) {
    return this.books[id]
  }
  removeBook(id) {
    this.books.splice(id, 1)
  }
  addBook(title, author, pages, read) {
    this.books.push(new Book(title, author, pages, read))
>>>>>>> 1331bfeab9c006069c68a2cce60fe0a17a26bf7f
  }
}

class Book {
  constructor(title, author, pages, read = false) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
  }
  info() {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${
      this.read ? "read" : "not read"
    }`
  }
  readToggle() {
    this.read = !this.read
  }
}

const myLibrary = new Library()
const bookList = document.querySelector("#bookList")
const dialog = document.querySelector("#addBookDialog")

function displayBooks() {
  // Delete the book list
  bookList.replaceChildren()
  const books = myLibrary.getAllBooks()
  for (const book of books) {
    // Create elements
    const bookDiv = document.createElement("div")
    const bookInfo = document.createElement("div")
    const iconDiv = document.createElement("div")
    const delButton = document.createElement("img")
    const readButton = document.createElement("img")

    // Set element properties
    delButton.src = "images/delete.svg"
    readButton.src = "images/check.svg"
    bookInfo.textContent = book.info()
    bookInfo.className = "bookInfo"
    bookDiv.setAttribute("data-id", books.indexOf(book))

    // Add elements to the DOM
    iconDiv.appendChild(readButton)
    iconDiv.appendChild(delButton)
    bookDiv.appendChild(bookInfo)
    bookDiv.appendChild(iconDiv)
    bookList.appendChild(bookDiv)

    // Add event listeners to del and read buttons
    delButton.addEventListener("click", (e) => {
      const bookId = Number(
        e.target.parentElement.parentElement.attributes["data-id"].value
      )
<<<<<<< HEAD
      myLibrary.splice(bookId, 1)
=======
      myLibrary.removeBook(bookId)
>>>>>>> 1331bfeab9c006069c68a2cce60fe0a17a26bf7f
      displayBooks()
    })
    readButton.addEventListener("click", (e) => {
      const bookId = Number(
        e.target.parentElement.parentElement.attributes["data-id"].value
      )
<<<<<<< HEAD
      myLibrary[bookId].readToggle()
=======
      myLibrary.getBook(bookId).readToggle()
>>>>>>> 1331bfeab9c006069c68a2cce60fe0a17a26bf7f
      displayBooks()
    })
  }
}

function showDialog() {
  dialog.showModal()
}

dialog.addEventListener("submit", (e) => {
  let data = Object.fromEntries(new FormData(e.target))
  e.target.reset()
<<<<<<< HEAD
  addBookToLibrary(
=======
  myLibrary.addBook(
>>>>>>> 1331bfeab9c006069c68a2cce60fe0a17a26bf7f
    data.title,
    data.author,
    Number(data.pages),
    Boolean(data.read)
  )
<<<<<<< HEAD
  displayBooks()
})

title.addEventListener("invalid", () => {
  title.setCustomValidity("Please enter a title")
})
title.addEventListener("input", () => {
  title.setCustomValidity("")
})

author.addEventListener("invalid", () => {
  author.setCustomValidity("Please enter an author")
})
author.addEventListener("input", () => {
  author.setCustomValidity("")
})

pages.addEventListener("invalid", () => {
  pages.setCustomValidity("Please enter the number of pages")
})
pages.addEventListener("input", () => {
  pages.setCustomValidity("")
})

addBookToLibrary("Project Hail Mary", "Andy Weir", 476, true)
addBookToLibrary("Dark Matter", "Blake Crouch", 342, true)
addBookToLibrary("Wool Omnibus", "Hugh Howey", 509, true)
addBookToLibrary("Shift", "Hugh Howey", 579, true)
=======
  // addBookToLibrary(data.title, data.author, Number(data.pages), Boolean(data.read))
  displayBooks()
})

myLibrary.addBook("Project Hail Mary", "Andy Weir", 476, true)
myLibrary.addBook("Dark Matter", "Blake Crouch", 342, true)
myLibrary.addBook("Wool Omnibus", "Hugh Howey", 509, true)
myLibrary.addBook("Shift", "Hugh Howey", 579, true)
>>>>>>> 1331bfeab9c006069c68a2cce60fe0a17a26bf7f

displayBooks()
