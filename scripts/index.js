let source = document.getElementById('source');
let preview = document.getElementById('preview');

function renderHandler () {
  let userIn = source.value

  let userHTML = marked(userIn)

  preview.innerHTML = userHTML
}

source.addEventListener('keyup', renderHandler)
