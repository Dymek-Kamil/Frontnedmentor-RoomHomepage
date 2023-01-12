"use strict";

// Selecting Elements
const mainImage = document.querySelector(".main--img");
const swipeLeftEl = document.querySelector(".left--description");
const swipeRightEl = document.querySelector(".right--description");
const imgDescriptionH1El = document.querySelector(".title--image");
const imgDescriptionPEl = document.querySelector(".p--image");

// Text Variables
// First Img
const firstImgTitle = `Discover innovative ways to decorate`;
const firstImgParagraph = `We provide unmatchet quality, comfort and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.`;
// Second Img
const secondImgTitle = `We are available all across the globe`;
const secondImgParagraph = `With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we're in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.`;
// Third Img
const thirdImgTitle = `Manufactured with the best materials`;
const thirdImgParagraph = `Out modern furniture store provide ahigh level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decadeds of experience in this industry, we understand what customers want for their home and office.`;

// Swiping Right
console.log(mainImage.classList.contains("first"));
swipeRightEl.addEventListener("click", function () {
  if (mainImage.classList.contains("first")) {
    mainImage.classList.remove("first");
    mainImage.classList.add("second");
    // Changing to other img
    mainImage.src = "images/desktop-image-hero-2.jpg";
    // Changing Text of image description
    imgDescriptionH1El.textContent = secondImgTitle;
    imgDescriptionPEl.textContent = secondImgParagraph;
  } else if (mainImage.classList.contains("second")) {
    mainImage.classList.remove("second");
    mainImage.classList.add("third");
    mainImage.src = "images/desktop-image-hero-3.jpg";
    imgDescriptionH1El.textContent = thirdImgTitle;
    imgDescriptionPEl.textContent = thirdImgParagraph;
  } else {
    mainImage.classList.remove("third");
    mainImage.classList.add("first");
    mainImage.src = "images/desktop-image-hero-1.jpg";
    imgDescriptionH1El.textContent = firstImgTitle;
    imgDescriptionPEl.textContent = firstImgParagraph;
  }
});

// Swiping Left
swipeLeftEl.addEventListener("click", function () {
  if (mainImage.classList.contains("first")) {
    mainImage.classList.remove("first");
    mainImage.classList.add("third");
    mainImage.src = "images/desktop-image-hero-3.jpg";
    imgDescriptionH1El.textContent = thirdImgTitle;
    imgDescriptionPEl.textContent = thirdImgParagraph;
  } else if (mainImage.classList.contains("second")) {
    mainImage.classList.remove("second");
    mainImage.classList.add("first");
    mainImage.src = "images/desktop-image-hero-1.jpg";
    imgDescriptionH1El.textContent = firstImgTitle;
    imgDescriptionPEl.textContent = firstImgParagraph;
  } else {
    mainImage.classList.remove("third");
    mainImage.classList.add("second");
    mainImage.src = "images/desktop-image-hero-2.jpg";
    imgDescriptionH1El.textContent = secondImgTitle;
    imgDescriptionPEl.textContent = secondImgParagraph;
  }
});
