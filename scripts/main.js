var mySwiper;

function goToPrev() {
  if (!mySwiper) return;
  mySwiper.slidePrev();
}

function goToNext() {
  if (!mySwiper) return;
  mySwiper.slideNext();
}

$(document).ready(function () {
  // Initialize Swiper
  mySwiper = new Swiper(".swiper-container", {
    loop: false,
    spaceBetween: 30,
    slidesPerView: "auto",
  });
});
