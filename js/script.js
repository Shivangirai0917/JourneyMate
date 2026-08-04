// ================= Navbar Scroll Effect =================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if(window.scrollY > 60){

        navbar.style.background = "rgba(255,255,255,0.95)";
        navbar.style.boxShadow = "0 8px 25px rgba(0,0,0,0.08)";
        navbar.style.padding = "14px 8%";

    }
    else{

        navbar.style.background = "rgba(255,255,255,0.15)";
        navbar.style.boxShadow = "none";
        navbar.style.padding = "18px 8%";

    }

});


// ================= Dark Mode =================

const themeBtn = document.getElementById("theme-toggle");

console.log(themeBtn);


themeBtn.addEventListener("click",()=>{

    document.body.classList.toggle("dark-mode");


    if(document.body.classList.contains("dark-mode")){

        themeBtn.innerHTML = "☀️";

    }
    else{

        themeBtn.innerHTML = "🌙";

    }

});

// Hamburger Menu

const menuIcon = document.getElementById("menu-icon");
const navLinks = document.querySelector(".nav-links");


menuIcon.addEventListener("click",()=>{

    navLinks.classList.toggle("active");

});

// Back To Top Button

const backToTop = document.getElementById("backToTop");


window.addEventListener("scroll",()=>{

    if(window.scrollY > 300){

        backToTop.style.display="block";

    }
    else{

        backToTop.style.display="none";

    }

});


backToTop.addEventListener("click",()=>{

    window.scrollTo({

        top:0,
        behavior:"smooth"

    });

});

// Destination Search Filter

const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");

const cards = document.querySelectorAll(".card");


searchBtn.addEventListener("click",()=>{

    let searchValue = searchInput.value.toLowerCase();


    cards.forEach(card=>{

        let destination = card
        .querySelector("h3")
        .innerText
        .toLowerCase();


        if(destination.includes(searchValue)){

            card.style.display="block";

        }
        else{

            card.style.display="none";

        }

    });

});

// Booking Modal


const modal = document.getElementById("bookingModal");

const openModal = document.getElementById("openModal");

const closeModal = document.getElementById("closeModal");



openModal.onclick = function(e){

    e.preventDefault();

    modal.style.display="flex";

}



closeModal.onclick=function(){

    modal.style.display="none";

}



window.onclick=function(e){

    if(e.target == modal){

        modal.style.display="none";

    }

}

// Animated Counter


const counters = document.querySelectorAll(".counter");


counters.forEach(counter=>{


    counter.innerText="0";


    const updateCounter=()=>{


        const target = +counter.getAttribute("data-target");


        const current = +counter.innerText;


        const increment = target / 100;



        if(current < target){


            counter.innerText = Math.ceil(current + increment);


            setTimeout(updateCounter,20);


        }
        else{


            counter.innerText = target;


        }

    }


    updateCounter();


});

// Active Navbar On Scroll

const sections = document.querySelectorAll("section");
const activenavLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{

    let current = "";

    sections.forEach(section=>{

        const id = section.getAttribute("id");

        if(!id) return;

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.clientHeight;


        if(window.scrollY >= sectionTop && 
           window.scrollY < sectionTop + sectionHeight){

            current = id;

        }

    });


    activenavLinks.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href") === "#" + current){

            link.classList.add("active");

        }

    });

});

// ================= Loader =================
window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    if (loader) {
        setTimeout(() => {
            loader.style.opacity = "0";
            loader.style.visibility = "hidden";

            // 500ms baad completely remove bhi kar do
            setTimeout(() => {
                loader.style.display = "none";
            }, 500);

        }, 1500);
    }

});

// Destination Popup

const destinationCards = document.querySelectorAll(".card");

const destinationModal = document.getElementById("destinationModal");

const modalImage = document.getElementById("modalImage");

const modalTitle = document.getElementById("modalTitle");

const modalCountry = document.getElementById("modalCountry");

const modalPrice = document.getElementById("modalPrice");

const modalDuration = document.getElementById("modalDuration");

const modalIncludes = document.getElementById("modalIncludes");

const closeDestination = document.querySelector(".close-destination");

destinationCards.forEach(card=>{

card.addEventListener("click",()=>{

modalImage.src=card.dataset.image;

modalTitle.innerText=card.dataset.name;

modalCountry.innerText=card.dataset.country;

modalPrice.innerText=card.dataset.price;

modalDuration.innerText=card.dataset.duration;

modalIncludes.innerHTML="";

card.dataset.includes.split(",").forEach(item=>{

modalIncludes.innerHTML+=`<li>✔ ${item}</li>`;

});

destinationModal.style.display="flex";

});

});

closeDestination.onclick=()=>{

destinationModal.style.display="none";

};

window.onclick=(e)=>{

if(e.target===destinationModal){

destinationModal.style.display="none";

}

};

const hearts = document.querySelectorAll(".wishlist");

hearts.forEach((heart)=>{

    heart.addEventListener("click",()=>{

        const icon = heart.querySelector("i");

        icon.classList.toggle("fa-regular");
        icon.classList.toggle("fa-solid");

    });

});


