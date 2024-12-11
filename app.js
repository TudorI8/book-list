const titleInputElement = document.querySelector('#title');
const authorInputElement = document.querySelector('#author');
const isbnInputElement = document.querySelector('#isbn');
const submitButton = document.querySelector('#submit-btn');

const tableContainer = document.querySelector('.table');
const table = document.createElement('table');
table.id = 'book-list-table';
table.innerHTML = `
  <thead>
    <tr>
      <th>Title</th>
      <th>Author</th>
      <th>ISBN#</th>
      <th></th>
    </tr>
  </thead>
  <tbody>
  </tbody>
`;
tableContainer.appendChild(table);

class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

class UI {
  static addBookToList(book) {
    const list = document.querySelector('#book-list-table tbody');
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td>${book.isbn}</td>
      <td>
        <button class="delete-btn">X</button>
      </td>
    `;
    list.appendChild(row);
  }

  static deleteBook(target) {
    if (target.classList.contains('delete-btn')) {
      target.parentElement.parentElement.remove();
      UI.showMessage('Book removed!', 'success');
    }
  }

  static showMessage(message, className) {
    const output = document.getElementById('output');
    output.textContent = message;
    output.className = className;
    setTimeout(() => (output.textContent = ''), 3000);
  }

  static validateInputs(title, author, isbn) {
    return title !== '' && author !== '' && isbn !== '';
  }
}

submitButton.addEventListener('click', (e) => {
  e.preventDefault();

  const title = titleInputElement.value.trim();
  const author = authorInputElement.value.trim();
  const isbn = isbnInputElement.value.trim();

  if (!UI.validateInputs(title, author, isbn)) {
    UI.showMessage('Please fill in all fields', 'error');
    return;
  }

  const book = new Book(title, author, isbn);

  UI.addBookToList(book);

  UI.showMessage('Book added!', 'success');

  titleInputElement.value = '';
  authorInputElement.value = '';
  isbnInputElement.value = '';
});

document.querySelector('#book-list-table').addEventListener('click', (e) => {
  UI.deleteBook(e.target);
});