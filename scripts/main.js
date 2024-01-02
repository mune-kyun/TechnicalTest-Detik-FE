var mySwiper;

function goToPrev() {
  if (!mySwiper) return;
  mySwiper.slidePrev();
}

function goToNext() {
  if (!mySwiper) return;
  mySwiper.slideNext();
}

var cardData = [
  {
    testimony:
      "Vestibulum eu quam nec neque pellentesque efficitur id egetnisl. Proin porta est convallis lacus blandit pretium sed nonenim. Maecenas lacinia non orci at aliquam. Donec finibus,urna bibendum ultricies laoreet.",
    img: "testimony-person-1.jpg",
    name: "Chealsea Morgan",
    position: "CEO ot Subway",
  },
  {
    testimony:
      "In a laoreet purus. Integer turpis quam, laoreet id orci nec, ultrices lacinia nunc. Aliquam erat volutpat. Curabitur fringilla in purus eget egestas. Etiam quis.",
    img: "testimony-person-2.jpg",
    name: "Nick Cave",
    position: "CMO ot Nokia",
  },
  {
    testimony:
      "Aliquam pulvinar vestibulum blandit. Donec sed nisl libero. Fusce dignissim luctus sem eu dapibus. Pellentesque vulputate quam a quam volutpat, sed ullamcorper erat commodo.",
    img: "testimony-person-3.jpg",
    name: "Lana Rosenfeld",
    position: "Senior VP ot Pinterest",
  },
  {
    testimony:
      "Porta nisl dolor, molestie pellentesque elit molestie in. Morbi metus neque, elementum ullamcorper hendrerit eget, tincidunt et nisi. Sed magna nunc.",
    img: "testimony-person-4.jpg",
    name: "Ronald Richards",
    position: "Barone LLC.",
  },
];

function newCard({ testimony, img, name, position }) {
  return `
    <div class="swiper-slide">
      <div class="testimony-card-content">
        <div class="testimony-star-container">
          <img
            src="assets/icons/testimony-star.svg"
            alt="Star"
            width="23px"
            height="21px"
          />
          <img
            src="assets/icons/testimony-star.svg"
            alt="Star"
            width="23px"
            height="21px"
          />
        </div>
        <p>
          ${testimony}
        </p>
        <div class="testimony-profile">
          <img
            src="assets/data/${img}"
            alt="profile-pict"
            width="56px"
            width="56px"
          />
          <div class="testimony-profile-text">
            <h3>${name}</h3>
            <p>${position}</p>
          </div>
        </div>
      </div>
    </div>
  `;
}

$(document).ready(function () {
  for (var i = 0; i < cardData.length; i++) {
    $(".swiper-wrapper").append(newCard(cardData[i]));
  }

  // Initialize Swiper
  mySwiper = new Swiper(".swiper-container", {
    loop: false,
    spaceBetween: 30,
    slidesPerView: "auto",
  });
});
