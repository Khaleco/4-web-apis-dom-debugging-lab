function renderHandler () {
  let userIn = source.textContent

  let userHTML = marked(userIn)

  preview.innerHTML = userHTML
}

source.addEventListener('change', renderHandler)
