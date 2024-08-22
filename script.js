
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e){
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


let currentTest=0;
const testimonials = document.querySelectorAll('.test');
const totalTestimonials = testimonials.length;

document.getElementById('nextbtn').addEventListener('click', function(){
    testimonials[currentTest].style.display = 'none';
    currentTest = (currentTest + 1) % totalTestimonials;
    testimonials[currentTest].style.display ='block';
});
document.getElementById('prevbtn').addEventListener('click', function(){
    testimonials[currentTest].style.display = 'none';
    currentTest = (currentTest - 1 + totalTestimonials) % totalTestimonials;
    testimonials[currentTest].style.display ='block';
});

testimonials.forEach((test, index)=>{
    test.style.display =  index === 0? 'block' : 'none';
});

document.getElementById('registerform').addEventListener('submit', function(e){
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    if (name === ''|| email==='' || password==='') {
        alert('All fields are required');
    }
    else if(!validateEmail(email)){
        alert('Please enter the validate email');
    }
    else{
        alert('Your Registration is successful!!');
    }
});
document.getElementById('loginform').addEventListener('submit', function(e){
    e.preventDefault();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    if (email==='' || password==='') {
        alert('Both fields are required');
    }
    else if(!validateEmail(email)){
        alert('Please enter the valid email');
    }
    else{
        alert('Successfully Logined!!');
    }
});
 function validateEmail(email){
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
 }
