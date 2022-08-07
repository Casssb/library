function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read;
    this.isRead = function() {
        return `${this.title} by ${this.author}, ${this.pages}, ${this.read ? 'read': 'not read yet'}`
    }
}

const silence = new Book('silence', 'g nicohla', 500, true);

console.log(silence.isRead())
