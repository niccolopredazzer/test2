var openAnim = gsap.timeline({});
openAnim.to('.anim-screen-slide-1', { display: 'none', duration: 0.15 });
openAnim.to('.anim-screen-slide-2', { display: 'block', duration: 0.15 });
openAnim.to('.anim-screen-slide-2', { display: 'none', duration: 0.15 });
openAnim.to('.anim-screen-slide-3', { display: 'block', duration: 0.15 });
openAnim.to('.anim-screen-slide-3', { display: 'none', duration: 0.15 });
openAnim.to('.anim-screen-slide-4', { display: 'block', duration: 0.15 });
openAnim.to('.anim-screen', { display: 'none' });
openAnim.fromTo('.hero .bg-1 ', { opacity: 0 }, { opacity: 1 });
openAnim.to('.hero .bg-1 ', { opacity: 0 });
openAnim.fromTo('.hero .bg-2 ', { opacity: 0 }, { opacity: 1 }, '-=.2');
openAnim.to('.hero .bg-2 ', { opacity: 0 });
openAnim.fromTo('.hero .bg-3 ', { opacity: 0 }, { opacity: 1 }, '-=.2');
openAnim.from('.arrow-down ', { opacity: 0 });

// show hide navigation menu
$('#navbarOpener').click(() => {
  $('.navbar-menu').removeClass('d-none');
});
$('#navbarCloser').click(() => {
  $('.navbar-menu').addClass('d-none');
});

// show hide menu btn
$(window).scroll(function () {
  if (window.scrollY > 90) {
    $('.menu-btn').removeClass('d-none');
    $('.navbar-menu').addClass('d-none'); // hide navbar
  } else {
    $('.menu-btn').addClass('d-none');
  }
});
