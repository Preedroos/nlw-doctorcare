function onScroll() {
  if (scrollY > 0) {
    navigation.classList.add('scroll')
  } else {
    navigation.classList.remove('scroll')
  }
}

function openMenu() {
  if (!document.body.classList.contains('menu-expanded')) {
    document.body.classList.add('menu-expanded')
    navigation.classList.add('scroll')
  }
}

function closeMenu() {
  if (document.body.classList.contains('menu-expanded')) {
    document.body.classList.remove('menu-expanded')
    navigation.classList.remove('scroll')
  }
}

ScrollReveal({
  origin: 'top',
  distance: '50px',
  duration: 1500
}).reveal(`
#header-p,
.stat,
.card`)

ScrollReveal({
  origin: 'bottom',
  distance: '50px',
  duration: 1500
}).reveal(`#home .button`)
