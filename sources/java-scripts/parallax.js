let img1 = document.getElementById('parallax-img1');
let img2 = document.getElementById('parallax-img2');
let parallaxContainer = document.querySelector('.parallax-scroll');

window.addEventListener('scroll', function() {
  let containerOffset = parallaxContainer.offsetTop;
  let scrollValue = window.scrollY - containerOffset;

  // Apply parallax effect only when container is in view
  if (scrollValue >= 0 && scrollValue <= parallaxContainer.offsetHeight) {
    img1.style.transform = `translate(-50%, calc(-50% + ${scrollValue * -0.8}px))`;
    img2.style.transform = `translate(-50%, calc(-50% + ${scrollValue * 0.8}px))`;
  }
});
