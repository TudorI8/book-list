# Book List Application

## Project Requirements

### HTML
1. Create the page structure as follows:
   - Add the application title at the top.
   - Include three input fields for book details: **Title**, **Author**, and **ISBN#**.
   - Add a **submit button**. When this button is clicked, display a **confirmation message** below the application title to confirm the book has been added.
   
2. Below the submit button, a **table** should appear where each row represents a book entry. Each row should contain:
   - Four columns: **Title**, **Author**, **ISBN#**, and **Delete**.
   
3. In the **Delete** column of each row, include a delete button. When clicked, the delete button removes the book from the list, and a **confirmation message** appears below the application title.

4. Implement **validation** for input fields, requiring all fields to be filled to add a book. If any fields are missing, display an **error message** below the application title.

### CSS
- Style all elements to match the design in the attached GIF.

![BookList](https://github.com/user-attachments/assets/37fd0905-b884-409b-9abd-967512a51698)


### JavaScript
1. **Classes**:
   - Create two classes: `Book` and `UI`, each with corresponding constructors.

2. **`Book` Class**:
   - Use the `Book` class to create book objects with properties for each input field (Title, Author, ISBN).

3. **`UI` Class**:
   - Use the `UI` class to contain all methods related to:
     - Adding the book to the list.
     - Deleting the book.
     - Validating input fields.
     - Displaying confirmation or error messages.
   
4. **Arrow Functions**:
   - Use arrow functions wherever possible in the code for cleaner syntax.
