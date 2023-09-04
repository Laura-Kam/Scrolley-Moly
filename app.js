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
  console.log(containerHeight);
  const linksHeight = links.getBoundingClientRect().height;
  //height of the links in total.

  //links container height is 0;

  //you are targetting unordered list (all links- height total)
  console.log(linksHeight);
  if (containerHeight === 0) {
    linksContainer.style.height = `${linksHeight}px`;
  } else {
    linksContainer.style.height = 0;
  }
  //   linksContainer.classList.toggle("show-links");
});
// ********** fixed navbar ************

// ********** smooth scroll ************
// select links
