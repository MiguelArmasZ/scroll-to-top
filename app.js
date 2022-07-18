const btn = document.querySelector('.btn')

window.addEventListener('scroll', () => {
  const distance = window.scrollY

  if (distance > 300) {
    btn.classList.add('active')
  } else {
    btn.classList.remove('active')
  }
})

btn.addEventListener('click', () => {
  window.scroll({
    top: 0,
    behavior: 'smooth'
  })
})
