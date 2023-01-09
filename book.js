function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = function() {
        print(`${title} by ${author} has ${pages}. Read?: ${read}`)
    }
}

const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 295, false)
theHobbit.info();