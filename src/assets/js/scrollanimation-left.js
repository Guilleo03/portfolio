const animateScrollOberserver = new IntersectionObserver((entries, animateScrollOberserver) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('enter-left');
            animateScrollOberserver.unobserve(entry.target);
        }
    });
});

export default {
    bind(el) {
        el.classList.add('before-enter-left');
        animateScrollOberserver.observe(el);
    }
}