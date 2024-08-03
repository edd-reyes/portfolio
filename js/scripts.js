const msgBtn = document.getElementById("msgBtn");
const navbarBrand = document.querySelector(".navbar-brand");
const myName = document.querySelector(".myName");

msgBtn.addEventListener("click", () => {
  let showContactForm = document.getElementById("contactForm");
  if (showContactForm.style.display === "none") {
    showContactForm.style.display = "block";
  } else {
    showContactForm.style.display = "none";
  }
});

navbarBrand.addEventListener("mouseenter", () => {
  if ((navbarBrand.innerText = "E")) {
    navbarBrand.innerText = "EDDIE";
  }
});

navbarBrand.addEventListener("mouseout", () => {
  if ((navbarBrand.innerText = "EDDIE")) {
    navbarBrand.innerText = "E";
  }
});

myName.addEventListener("click", () => {
  switch (myName.innerText) {
    case "Eddie":
      myName.innerText = "Pedro Eddie Reyes";
      break;
    default:
      myName.innerText = "Eddie";
  }
});

const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'default_service';
   const templateID = 'template_l923q4o';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Email';
      alert('Your Message has been sent!');
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});