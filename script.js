const myLibrary = []
const bookList = document.querySelector("#bookList")
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
    const delButton = document.createElement("button")
    const readButton = document.createElement("button")

    // Set element properties
    readButton.textContent = "Read"
    delButton.textContent = "Del"
    bookDiv.textContent = book.info()
    bookDiv.setAttribute("data-id", myLibrary.indexOf(book))

    // Add elements to the DOM
    bookDiv.appendChild(readButton)
    bookDiv.appendChild(delButton)
    bookList.appendChild(bookDiv)

    // Add event listeners to del and read buttons
    delButton.addEventListener("click", (e) => {
      const bookId = Number(e.target.parentElement.attributes["data-id"].value)
      myLibrary.splice(bookId, 1)
      displayBooks()
    })
    readButton.addEventListener("click", (e) => {
      const bookId = Number(e.target.parentElement.attributes["data-id"].value)
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
  addBookToLibrary(data.title, data.author, Number(data.pages), Boolean(data.read))
  displayBooks()
})

addBookToLibrary("Project Hail Mary", "Andy Weir", 476, true)
addBookToLibrary("Dark Matter", "Blake Crouch", 342, true)
addBookToLibrary("Wool Omnibus", "Hugh Howey", 509, true)
addBookToLibrary("Shift", "Hugh Howey", 579, true)

displayBooks()