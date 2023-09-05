// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

// ********** set date ************

const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();

// ********** close links ************

const navToggle = document.querySelector(".nav-toggle");

const linksContainer = document.querySelector(".links-container");

const links = document.querySelector(".links");

navToggle.addEventListener("click", function () {
  //the class is added dynamically- it is added after links container
  //then removed. Specificity is higher for the second class as it appears later in the style sheet.
  const containerHeight = linksContainer.getBoundingClientRect().height;
  // console.log(containerHeight);
  const linksHeight = links.getBoundingClientRect().height;
  //height of the links in total.

  //links container height is 0;

  //you are targetting unordered list (all links- height total)
  // console.log(linksHeight);
  if (containerHeight === 0) {
    linksContainer.style.height = `${linksHeight}px`;
  } else {
    linksContainer.style.height = 0;
  }
  //   linksContainer.classList.toggle("show-links");
});
// ********** fixed navbar ************
const navbar = document.getElementById("nav");
//TopLink hidden but rendered dynamically dependent on scroll.
const topLink = document.querySelector(".top-link");

window.addEventListener("scroll", function () {
  //number of pixels been scrolled vertically - 0 top - then increases.
  const scrollHeight = window.pageYOffset;
  //this is total height of all links in drop-down menu.
  const navHeight = navbar.getBoundingClientRect().height;

  if (scrollHeight > navHeight) {
    navbar.classList.add("fixed-nav");
  } else {
    navbar.classList.remove("fixed-nav");
  }

  if (scrollHeight > 500) {
    topLink.classList.add("show-link");
  } else {
    topLink.classList.remove("show-link");
  }
});

// ********** smooth scroll ************

// select links

const scrollLinks = document.querySelectorAll(".scroll-link");

scrollLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    //start from index of 1 (gets rid of #);
    const id = e.currentTarget.getAttribute("href").slice(1);
    console.log(id);
    const element = document.getElementById(id);
    //how far element is from it's parent in a rel/fixed.absolute/sticky position
    //calculate the heights
    const navHeight = navbar.getBoundingClientRect().height;
    const containerHeight = linksContainer.getBoundingClientRect().height;
    const fixedNav = navbar.classList.contains("fixed-nav");

    let position = element.offsetTop - navHeight;
    console.log(position);
    if (!fixedNav) {
      position = position - navHeight;
    }

    if (navHeight > 82) {
      position = position + containerHeight;
    }
    window.scrollTo({
      left: 0,
      top: position,
    });
    linksContainer.style.height = 0;
  });
});
