function scrollCarousel(direction) {
    const carousel = document.querySelector('.carousel');
    carousel.scrollBy({ left: direction * 280 });
}

function handleSubmit(e) {
    e.preventDefault();
    alert('Thank you! We will get back to you soon.');
    e.target.reset();
}
