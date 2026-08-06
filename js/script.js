console.log("JS Loaded");
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

// ================= Wishlist =================

const hearts = document.querySelectorAll(".wishlist i");

hearts.forEach((heart) => {

    heart.addEventListener("click", (e) => {

        e.stopPropagation();

        heart.classList.toggle("fa-regular");
        heart.classList.toggle("fa-solid");

        if (heart.classList.contains("fa-solid")) {
            heart.style.color = "red";
        } else {
            heart.style.color = "#999";
        }

    });

});

// ================= Booking Popup =================
const bookingPopup = document.getElementById("bookingPopup");
const popupBookBtn = document.getElementById("popupBookBtn");
const closeBooking = document.querySelector(".close-booking");

popupBookBtn.addEventListener("click", () => {

    destinationModal.style.display = "none";
    bookingPopup.classList.add("show");

});

closeBooking.addEventListener("click", () => {

    bookingPopup.classList.remove("show");

});

bookingPopup.addEventListener("click", (e) => {

    if (e.target === bookingPopup) {

        bookingPopup.classList.remove("show");

    }

});

// ================= Destination Popup =================

const destinationCards = document.querySelectorAll(".card");

const destinationModal = document.getElementById("destinationModal");

const modalImage = document.getElementById("modalImage");
const modalTitle = document.getElementById("modalTitle");
const modalCountry = document.getElementById("modalCountry");
const modalPrice = document.getElementById("modalPrice");
const modalDuration = document.getElementById("modalDuration");
const modalIncludes = document.getElementById("modalIncludes");
const modalRating = document.getElementById("modalRating");
const modalBestTime = document.getElementById("modalBestTime");

const modalAttractions = document.getElementById("modalAttractions");
const closeDestination = document.querySelector(".close-destination");

destinationCards.forEach((card) => {

    card.addEventListener("click", () => {

        modalImage.src = card.dataset.image;
        modalTitle.textContent = card.dataset.name;
        modalCountry.textContent = card.dataset.country;
        modalPrice.textContent = card.dataset.price;
        modalDuration.textContent = card.dataset.duration;
modalRating.textContent = "⭐ Rating: " + card.dataset.rating;

modalBestTime.textContent = 
"🗓️ Best Time: " + card.dataset.besttime;

modalAttractions.textContent =
"📍 Attractions: " + card.dataset.attractions;
        modalIncludes.innerHTML = "";

        const includes = card.dataset.includes.split(",");

        includes.forEach((item) => {

            modalIncludes.innerHTML += `<li>✔ ${item}</li>`;

        });

        destinationModal.style.display = "flex";

    });

});

if (closeDestination) {

    closeDestination.addEventListener("click", () => {

        destinationModal.style.display = "none";

    });

}

window.addEventListener("click", (e) => {

    if (e.target === destinationModal) {

        destinationModal.style.display = "none";

    }

});

const bookButtons = document.querySelectorAll(".book-btn");
const bookingModal = document.getElementById("bookingModal");



bookButtons.forEach(button => {

    button.addEventListener("click", () => {

        bookingModal.style.display = "flex";

    });

});


closeModal.addEventListener("click", () => {

    bookingModal.style.display = "none";

});


window.addEventListener("click", (e)=>{

    if(e.target === bookingModal){

        bookingModal.style.display = "none";

    }

});


document.getElementById("bookingForm")
.addEventListener("submit",(e)=>{

    e.preventDefault();

    alert("🎉 Booking request submitted successfully!");

    bookingModal.style.display="none";

});

// ================= Trip Plan Generator =================
const generateBtn = document.getElementById("generatePlan");


generateBtn.addEventListener("click",()=>{


    let destination =
    document.getElementById("destination").value;


    let days =
    document.getElementById("days").value;


    let budget =
    document.getElementById("budget").value;


    let type =
    document.getElementById("travelType").value;

    console.log(type);
    let itinerary = "";

if(type === "Adventure"){

    itinerary = `
    <h4>Adventure Itinerary 🏔️</h4>

    <p>Day 1: Explore famous places & local sightseeing</p>

    <p>Day 2: Adventure activities and nature spots</p>

    <p>Day 3: Trekking, photography and local experience</p>
    `;

}

else if(type === "Couple"){

    itinerary = `
    <h4>Couple Itinerary ❤️</h4>

    <p>Day 1: Romantic places and sightseeing</p>

    <p>Day 2: Sunset points & special experiences</p>

    <p>Day 3: Cafe hopping and relaxing moments</p>
    `;

}

else if(type === "Luxury"){

    itinerary = `
    <h4>Luxury Itinerary ✨</h4>

    <p>Day 1: Premium hotel check-in and city tour</p>

    <p>Day 2: Luxury experiences and famous attractions</p>

    <p>Day 3: Fine dining and shopping</p>
    `;

}

else{

    itinerary = `
    <h4>Family Itinerary 👨‍👩‍👧</h4>

    <p>Day 1: Family sightseeing</p>

    <p>Day 2: Fun activities and attractions</p>

    <p>Day 3: Shopping and local exploration</p>
    `;

}



    document.getElementById("planResult").innerHTML = `

    <h3>Your ${destination} Trip Plan ✈️</h3>

    <p><b>Duration:</b> ${days} Days</p>

    <p><b>Budget:</b> ₹${budget}</p>

    <p><b>Travel Type:</b> ${type}</p>


    <hr>


    ${itinerary}

    

    `;


});
