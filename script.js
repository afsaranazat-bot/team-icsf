// AOS Animation Initialization
AOS.init({
    duration: 1000,
    once: true,
    mirror: false
});

// NAVBAR SCROLL BACKGROUND
window.addEventListener('scroll', () => {
    const nav = document.getElementById('mainNav');
    if (window.scrollY > 80) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// SMOOTH ANCHOR SCROLLING
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        if(targetId !== '#' && targetId.startsWith('#')) {
            e.preventDefault();
            const targetElement = document.querySelector(targetId);
            if(targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        }
    });
});

// FORM VALIDATION & HANDLING
const contactForm = document.getElementById('icsfContactForm');
const feedback = document.getElementById('formFeedback');

if(contactForm) {
    contactForm.addEventListener('submit', (e) => {

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const msg = document.getElementById('message').value;

        // validation check
        if(name.trim().length < 2 || msg.trim().length < 10) {
            e.preventDefault(); // ❗ শুধু error হলে block করবে

            feedback.style.display = 'block';
            feedback.style.background = 'rgba(255, 77, 77, 0.2)';
            feedback.style.color = '#ff4d4d';
            feedback.style.border = '1px solid #ff4d4d';
            feedback.innerText = 'অনুগ্রহ করে সঠিক তথ্য এবং বিস্তারিত বার্তা প্রদান করুন।';
            return;
        }

        // sending message
        feedback.style.display = 'block';
        feedback.style.background = 'rgba(0, 0, 0, 0.3)';
        feedback.style.color = '#fff';
        feedback.style.border = '1px solid #999';
        feedback.innerText = 'বার্তা পাঠানো হচ্ছে... ⏳';

        // এখানে preventDefault নাই → form submit হবে (Formspree তে যাবে)
    });
}

// GSAP Subtle Floating Animations
gsap.to(".logo-img", {
    y: 5,
    duration: 2,
    repeat: -1,
    yoyo: true,
    ease: "power1.inOut"
});