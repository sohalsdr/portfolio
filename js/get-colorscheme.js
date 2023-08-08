// Randomly selects a colorscheme from the ones defined (mapped to css files in /css/schemes/), and writes it to the document

function getColorscheme() {
  // Array of available colorschemes
  const schemes = ["red", "blue"];
  // Generates a random number between 0 (inclusive) and the length of the schemes array (exclusive)
  const randomNumber = Math.floor(Math.random() * schemes.length);
  // Writes the stylesheet link onto the page via a template string
  document.write(`<link rel='stylesheet' href='/css/schemes/${schemes[randomNumber]}.css' type='text/css'/>`);
}

getColorscheme();
