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
    console.log(library);
}

function displayLibrary() {
    document.querySelector('#books').innerHTML = ''
    library.forEach(book => {
        const p = document.createElement('p');
        const delBtn = document.createElement('button');
        delBtn.setAttribute('class', 'del-btn');
        delBtn.setAttribute('id', `${library.indexOf(book)}`);
        delBtn.addEventListener('click', (deleteBook));
        delBtn.textContent = 'delete';
        p.innerText += `${book.title} by ${book.author}`
        document.getElementById('books').appendChild(p);
        p.appendChild(delBtn);
    })
}

function deleteBook(e) {
    library.splice(e.target.id, 1);
    displayLibrary()
}
