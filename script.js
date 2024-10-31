function toggleAccordion(element) {
  const allItems = document.querySelectorAll(".accordion-item");

  allItems.forEach(item => {
    const content = item.querySelector(".accordion-content");
    if (content !== element.nextElementSibling) {
      content.classList.remove("open");
      content.style.height = "0";
      item.classList.remove("active");
    }
  });

  const content = element.nextElementSibling;
  const parentItem = element.parentElement;

  if (content.classList.contains("open")) {
    content.classList.remove("open");
    content.style.height = "0";
    parentItem.classList.remove("active");
  } else {
    content.classList.add("open");
    content.style.height = content.scrollHeight + "px";
    parentItem.classList.add("active");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const firstItem = document.querySelector(".accordion-item");
  const firstContent = firstItem.querySelector(".accordion-content");

  firstContent.classList.add("open");
  firstContent.style.height = firstContent.scrollHeight + "px";
  firstItem.classList.add("active");
});

$(document).ready(function () {
  $('.testimonial-slider__container').slick({
    dots: true,
    infinite: false,
    speed: 500,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<button type="button" aria-label="Previous slide" class="slick-prev slick-arrow"><img src="./images/chevron_backward.svg" alt="arrow"></button>',
    nextArrow: '<button type="button" aria-label="Next slide" class="slick-next slick-arrow"><img src="./images/chevron_forward.svg" alt="arrow"></button>'
  });
});

document.getElementById("contactForm").addEventListener("submit", function (event) {
  event.preventDefault();

  let isValid = true;
  const requiredFields = ["fullName", "company", "email", "privacyPolicy"];
  requiredFields.forEach((fieldId) => {
    const field = document.getElementById(fieldId);
    if (!field || !field.value.trim() || (field.type === "checkbox" && !field.checked)) {
      isValid = false;
      field.classList.add("form__input--error");
    } else {
      field.classList.remove("form__input--error");
    }
  });

  if (isValid) {
    alert("Form submitted successfully!");
  } else {
    alert("Please fill out all required fields.");
  }
});

document.querySelector(".navbar-toggle").addEventListener("click", function () {
  document.querySelector(".navbar-wrapper").classList.toggle("active");
});
