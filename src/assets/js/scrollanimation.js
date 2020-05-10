const animateScrollOberserver = new IntersectionObserver((entries, animateScrollOberserver) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('enter');
            animateScrollOberserver.unobserve(entry.target);
        }
    });
});

export default {
    bind(el) {
        el.classList.add('before-enter');
        animateScrollOberserver.observe(el);
    }
}