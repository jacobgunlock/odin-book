function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}
const library = [];

document.getElementById('add').addEventListener('click', (e) => {
    e.preventDefault();
    addBook();
    displayLibrary();
})

function addBook() {
    title = document.getElementById('title').value;
    author = document.getElementById('author').value;
    pages = document.getElementById('pages').value;
    document.getElementById('read').checked
    ? read = true
    : read = false;

    const book = new Book(title, author, pages, read);
    library.push(book);

    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('pages').value = '';
}

function displayLibrary() {
    const bookDiv = document.getElementById('books');
    const div = document.createElement('div');
    const bookTitle = document.createElement('div');
    const bookAuthor = document.createElement('div');
    const bookPages = document.createElement('div');
    const bookBtns = document.createElement('div');
    const readBtn = document.createElement('button');
    const delBtn = document.createElement('button');
    
    div.setAttribute('class', 'book')
    bookTitle.setAttribute('class', 'book-info')
    bookAuthor.setAttribute('class', 'book-info')
    bookPages.setAttribute('class', 'book-info')
    bookBtns.setAttribute('class', 'bookBtns')
    delBtn.setAttribute('class', 'btn btn-secondary btn-danger del-btn')
    
    library.forEach(book => {
        bookDiv.appendChild(div);
        div.appendChild(bookTitle);
        div.appendChild(bookAuthor);
        div.appendChild(bookPages);
        div.appendChild(bookBtns);
        bookBtns.appendChild(readBtn);
        bookBtns.appendChild(delBtn);
        div.setAttribute('id', book.title)
        
        bookTitle.innerText = `${book.title}`;
        bookAuthor.innerText = `by ${book.author}`
        bookPages.innerText = `${book.pages} pages`;
        if (book.read === true) {
            readBtn.setAttribute('class', 'btn btn-success read-true')
            readBtn.innerText = 'Read'
        } else {
            readBtn.setAttribute('class', 'btn btn-warning read-false')
            readBtn.innerText = 'Not Read'
        }
        delBtn.innerText = 'Delete Book'
    })
    delBtn.addEventListener('click', deleteBook);
    readBtn.addEventListener('click', hasRead);
}

function deleteBook(e) {
    console.log(e.target.parentNode.parentNode)
    const index = library.findIndex(x => x.title === e.target.parentNode.parentNode.id)
    library.splice(index, 1)
    const targetBook = e.target.parentNode.parentNode;
    targetBook.parentNode.removeChild(targetBook);
    console.log(library)
}

function hasRead(e) {
    console.log(e.target.parentNode.parentNode)
    const index = library.findIndex(x => x.title === e.target.parentNode.parentNode.id)
    if (library[index].read === true){
        library[index].read = false;
    }
    else if (library[index].read === false){
        library[index].read = true;
    }

    if (library[index].read === true) {
        e.target.setAttribute('class', 'btn btn-success read-true')
        e.target.innerText = 'Read'
    } else {
        e.target.setAttribute('class', 'btn btn-warning read-false')
        e.target.innerText = 'Not Read'
    }
}
