# App Structure

This is a sketch of the structure/components that I will implement here.

## App

### Components

- Router
- Main Page
- Search Page

### State

- List of all the user's books in each shelf
  - Currently Reading - "currentlyReading"
  - Want to Read - "wantToRead"
  - Read - "read"

### Actions

- Toogle Book between shelves

## Main Page

### Components

- Title
- List of Book Shelves
- Add Button

### State

- None

### Props

- List of User's Books (Array - Required)
- Toogle Book between shelves Handler (Function - Required)

## Book Shelf

### Components

- Title
- Book Item

### State

- None

### Props

- Title (String)
- List of Books (Array - Required)
- Toogle Book between shelves Handler (Function - Required)

## Book Item

### Components

- Book Cover (img)
- Book Title (h\* or p)
- Book Author (p)
- Dropdown (select)

### State

- None

### Props

- Book object (Object - Required)
- Toogle Book between shelves Handler (Function - Required)

## Search Page

### Components

- Back Button
- Form
  - Input
- Book Shelf with results

### State

- Search string (Input)
- Result of all the books matching the search

### Props

- Toogle Book between shelves Handler (Function - Required)
