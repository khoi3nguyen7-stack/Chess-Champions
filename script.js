// ===============================
// Chess Opening RNG
// ===============================

const openings = [

    // WHITE

    {
        side: "White",
        name: "Italian Game",
        description: "A classical opening focused on rapid development and attacking chances.",
        message: "Control the centre before launching your attack.",
        color: "#ffffff"
    },

    {
        side: "White",
        name: "London System",
        description: "A reliable setup that can be played against almost anything.",
        message: "Simple, solid and deadly.",
        color: "#ffffff"
    },

    {
        side: "White",
        name: "Queen's Gambit",
        description: "Offer a pawn to gain central control.",
        message: "A champion's choice.",
        color: "#ffffff"
    },

    {
        side: "White",
        name: "Vienna Game",
        description: "An aggressive alternative to the Ruy Lopez.",
        message: "Prepare for exciting tactics!",
        color: "#ffffff"
    },



    // BLACK

    {
        side: "Black",
        name: "Sicilian Defense",
        description: "The most popular response to 1.e4.",
        message: "Counterattack from move one.",
        color: "#ffffff"
    },

    {
        side: "Black",
        name: "French Defense",
        description: "A solid defence that challenges White's centre.",
        message: "Patience wins games.",
        color: "#ffffff"
    },

    {
        side: "Black",
        name: "Caro-Kann Defense",
        description: "Strong structure and long-term plans.",
        message: "Solid as a rock.",
        color: "#ffffff"
    },

    {
        side: "Black",
        name: "King's Indian Defense",
        description: "Allow White the centre before striking back.",
        message: "Attack from the shadows.",
        color: "#ffffff"
    }

];



const spinButton = document.getElementById("spinButton");

const openingName = document.getElementById("openingName");

const openingDescription = document.getElementById("openingDescription");

const openingMessage = document.getElementById("openingMessage");

let spinning = false;



spinButton.addEventListener("click", spin);



function spin(){

    if(spinning) return;

    spinning = true;

    spinButton.disabled = true;

    spinButton.innerHTML = "Spinning...";

    openingName.classList.add("spinning");

    document.body.style.filter = "brightness(70%)";



    const selectedSide =
    document.querySelector('input[name="side"]:checked').value;



    let pool;



    if(selectedSide === "Both"){

        pool = openings;

    }

    else{

        pool = openings.filter(opening => opening.side === selectedSide);

    }



    let counter = 0;



    const animation = setInterval(()=>{

        const random = pool[Math.floor(Math.random()*pool.length)];

        openingName.textContent = random.name;

        counter++;

    },80);





    setTimeout(()=>{

        clearInterval(animation);

        const winner = pool[Math.floor(Math.random()*pool.length)];



        openingName.textContent = winner.name;

        openingDescription.textContent = winner.description;

        openingMessage.textContent = winner.message;



        openingName.style.color = winner.color;

        openingMessage.style.color = winner.color;



        openingName.classList.remove("spinning");



        document.body.style.filter = "brightness(100%)";



        spinButton.disabled = false;

        spinButton.innerHTML = "🎲 SPIN";



        spinning = false;



    },2500);

}