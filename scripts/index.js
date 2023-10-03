const preview = document.getElementById("preview-area");
const source = document.getElementById("content-source");

function renderHandler () {
  let userIn = source.value

  let userHTML = marked.parse(userIn)

  preview.innerHTML = userHTML
}

source.addEventListener('change', event => {renderHandler()});
