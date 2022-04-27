
/*=============== SHOW SIDEBAR ===============*/
const navMenu = document.getElementById('sidebar'),
      navToggle = document.getElementById('nav-toggle'),
      navClose =document.getElementById('nav-close') 


/*===== SIDEBAR SHOW =====*/
/* Validate If Constant Exists */
if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-sidebar')
  })
}
/*===== SIDEBAR HIDDEN =====*/
/* Validate If Constant Exists */
if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-sidebar')
  })
}
/*=============== SKILLS TABS ===============*/

const tabs = document.querySelectorAll("[data-target]");
const tabcontent = document.querySelectorAll("[data-content]");
tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.target);
    tabcontent.forEach((tabcontents) => {
      tabcontents.classList.remove("skills__active");
    });
    target.classList.add("skills__active");

    tabs.forEach((tab) => {
      tab.classList.remove("skills__active");
    });
    tab.classList.add("skills__active");
  });
});

/*=============== MIXITUP FILTER PORTFOLIO ===============*/

let mixerPortfolio = mixitup(".work__container", {
  selectors: {
    target: ".work__card",
  },
  animation: {
    duration: 300,
  },
});
/*===== Link Active Work =====*/
const linkWork = document.querySelectorAll('.work__item');

function activeWork () {
  linkWork.forEach(L => L.classList.remove('active-work'));
  this.classList.add('active-work')
};

linkWork.forEach(L => L.addEventListener('click',activeWork));
/*===== Work Popup =====*/
document.addEventListener('click', (e) => {
  if (e.target.classList.contains('work__button')) {
    togglePortfolioPopup()
    portfolioItemDetails(e.target.parentElement)
  }
});

// function togglePortfolioPopup () {
//   document.querySelector('.portfolio__popup').classList.toggle('open')
  
// };

// document.querySelector('.portfolio__popup-close').addEventListener('click',togglePortfolioPopup)

// function portfolioItemDetails (portfolioItem) {
// document.querySelector('.pp__thumbnail img').src = portfolioItem.querySelector('.work__img').src
// document.querySelector('.portfolio__popup-subtitle span').innerHTML = portfolioItem.querySelector('.work__title').innerHTML
// document.querySelector('.portfolio__popup-body').innerHTML = portfolioItem.querySelector('.portifolio__item-details').innerHTML
// };
/*=============== SERVICES MODAL ===============*/

/*=============== SWIPER TESTIMONIAL ===============*/

/*=============== INPUT ANIMATION ===============*/
const inputs = document.querySelectorAll('.input')

function focusFunc () {
  let parent = this.parentNode
  parent.classList.add('focus')
}

function blurFunc () {
  let parent = this.parentNode
  if (this.value == '') {
    parent.classList.remove('focus')
  }
}

inputs.forEach((input) => {
  input.addEventListener('focus', focusFunc)
  input.addEventListener('blur', blurFunc)
})

/*=============== SCROLL SMOOTH  ===============*/
const menuList = document.querySelectorAll('.nav__list a[href^="#"]')
menuList.forEach(item => {
item.addEventListener('click', scrollToOnClick)
})
function scrollToOnClick (e) {
  e.preventDefault()
  const element = e.target 
  const id = element.getAttribute('href')
  const to = document.querySelector(id).offsetTop
  window.scroll({
    top: to,
    behavior: 'smooth'
  })
}
  ScrollReveal({ reset: true });


  ScrollReveal().reveal('.section__title', {
    rotate: {x:0 , y: 100, z: 0},
    duration: 1800 
  });

  ScrollReveal().reveal('.home__container', { duration: 1000 });

ScrollReveal().reveal('.about__container', { duretion: 1900});

ScrollReveal().reveal('.skills__container', { duretion: 1000});

 ScrollReveal().reveal('.work__card', { duretion: 1000});

 ScrollReveal().reveal('.contact__container ', { duretion: 1000});
 
 ScrollReveal().reveal('.home img ', { duretion: 1000});


 var typed = new Typed(".auto-input", {
  strings: [
      "Danilo Faro Oliveira ", "Web Developer"
  ],
  typeSpeed: 100,
  backSpeed: 100,
  loop: true
});

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
// //get all section that have an id defined
// const section = document.querySelectorAll('section[id]')

// //aad an event listener listening for scroll 
// addEventListener('scroll', navHighlighter)

// function navHighlighter () {
  
//   // get current scroll position 
//   let scrolly = window.pageXOffset
//   //now we loop through sections to get height, top and ID values for each
//   section.forEach(current => {
//     const sectionHeight = current.pageXOffsetHeight 
//     const sectionTop = current.offsetTop - 50,
//     sectionId = current.getAttribute('id')
    
//     if(scrolly > sectionTop && scrolly <= sectionTop + sectionHeight) {
//       document.querySelector('.nav__menu a[href*=' + sectionId +']').classList.add('active-link') 
//     }
//     else {
//       document.querySelector('.nav__menu a[href*=' + sectionId +']').classList.remove('active-link') 
//     }
//   })
// }


/*=============== SHOW SCROLL UP ===============*/
