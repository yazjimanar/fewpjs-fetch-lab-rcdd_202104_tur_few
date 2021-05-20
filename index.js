function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!

}
    const api = "https://anapioficeandfire.com/api/books";
  return fetch(api)
        .then(resp => resp.json())
        .then(json => renderBooks(json));
};

function renderBooks(books) {
  const main = document.querySelector('main');
