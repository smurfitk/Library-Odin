let myLibrary = [];

// DOM Objects

$form = document.querySelector('.add-book-form');
$titleInput = $form.querySelector('#title');
$authorInput = $form.querySelector('#author');
$pagesInput = $form.querySelector('#pages');
$submitButton = $form.querySelector('#submit');


class Book {
    constructor(title, author, pages, read) {
        this.title = title
        this.author = author
        this.pages = pages
        this.read = read
    }
}

const addBookToLibrary = () => {
    let title = $titleInput.value;
    let author = $authorInput.value;
    let pages = $pagesInput.value;
    let read = getReadValue();
    let newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
}


const getReadValue = () => {
    if ($form.querySelector('#').checked) {
        return true
    } else {
        return false
    }
}


