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
  }
}

Book.prototype.readToggle = function () {
  this.read = !this.read
}

function addBookToLibrary(title, author, pages, read) {
  const newBook = new Book(title, author, pages, read)
  myLibrary.push(newBook)
}

function displayBooks() {
  // Delete the book list
  bookList.replaceChildren()

  for (const book of myLibrary) {
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
    bookDiv.setAttribute("data-id", myLibrary.indexOf(book))

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
      myLibrary.splice(bookId, 1)
      displayBooks()
    })
    readButton.addEventListener("click", (e) => {
      const bookId = Number(
        e.target.parentElement.parentElement.attributes["data-id"].value
      )
      myLibrary[bookId].readToggle()
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
  addBookToLibrary(
    data.title,
    data.author,
    Number(data.pages),
    Boolean(data.read)
  )
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

displayBooks()
