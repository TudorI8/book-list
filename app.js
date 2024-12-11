const titleInputElement = document.querySelector('#title');
const authorInputElement = document.querySelector('#author');
const isbnInputElement = document.querySelector('#isbn');
const submitButton = document.querySelector('#submit-btn');

const tableContainer = document.querySelector('.table');
const table = document.querySelector('#book-list-table');

class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

class UI {
  static addBookToList(book) {
  const table = document.querySelector('#book-list-table');
  const tbody = table.querySelector('tbody');

  if (table.style.display === 'none') {
    table.style.display = 'table';

    if (!table.querySelector('thead')) {
      const thead = document.createElement('thead');
      thead.innerHTML = `
        <tr>
          <th>Title</th>
          <th>Author</th>
          <th>ISBN#</th>
          <th></th>
        </tr>
      `;
      table.insertBefore(thead, tbody);
    }
  }

  const row = document.createElement('tr');
  row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td>
      <button class="delete-btn">X</button>
    </td>
  `;
  tbody.appendChild(row);
}

  static deleteBook(target) {
    if (target.classList.contains('delete-btn')) {
        target.parentElement.parentElement.remove();
        UI.showMessage('Book removed!', 'success');
        updateTableVisibility();
    }
  }

  static showMessage(message, className) {
    const output = document.getElementById('output');
    output.textContent = message;
    output.className = className;
    setTimeout(() => (output.textContent = ''), 3000);
  }

  static validateInputs(title, author, isbn) {
    if (title === '' || author === '' || isbn === '') {
        UI.showMessage('Please fill in all fields', 'error');
        return false;
    }

    if (title.length < 2) {
        UI.showMessage('Title must be at least 2 characters long', 'error');
        return false;
    }

    if (author.length < 2) {
        UI.showMessage('Author must be at least 2 characters long', 'error');
        return false;
    }

    if (isbn.length < 10) {
        UI.showMessage('ISBN# must be at least 10 characters long', 'error');
        return false;
    }

    return true;
  }
}

function updateTableVisibility() {
    const table = document.querySelector('#book-list-table');
    const tbody = table.querySelector('tbody');
    
    if (tbody.children.length === 0) {
        table.style.display = 'none';
    } else {
        table.style.display = 'table';
    }
}

submitButton.addEventListener('click', (e) => {
  e.preventDefault();

  const title = titleInputElement.value.trim();
  const author = authorInputElement.value.trim();
  const isbn = isbnInputElement.value.trim();

  if (!UI.validateInputs(title, author, isbn)) {
    return;
  }

  const book = new Book(title, author, isbn);

  UI.addBookToList(book);

  UI.showMessage('Book added!', 'success');

  titleInputElement.value = '';
  authorInputElement.value = '';
  isbnInputElement.value = '';
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' && (e.target === titleInputElement || e.target === authorInputElement || e.target === isbnInputElement)) {
    e.preventDefault();
    submitButton.click();
  }
});

table.addEventListener('click', (e) => {
  UI.deleteBook(e.target);
});

document.addEventListener('DOMContentLoaded', () => {
    updateTableVisibility();
});