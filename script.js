document.getElementById('year').textContent = new Date().getFullYear();
const observer = new IntersectionObserver((entries) => { entries.forEach(entry => { if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target)} }) },{threshold:.08});
document.querySelectorAll('.section-head,.skill-card,.project,.about-grid,.contact h2').forEach(el=>{el.classList.add('reveal');observer.observe(el)});
