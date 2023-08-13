// invite button
const addGuestButton = document.querySelector(".invite");
// label for the invite button
const guestInputLabel = document.querySelector(".add-guest label");
// text input box
const guestInput = document.querySelector(".add-guest input");
// unordered list (not yet visible)
const guestList = document.querySelector(".guest-list");
// span class for number of guests attending
const guestCount = document.querySelector(".attendance");
// alert when guest list is full (not yet visible)
const guestFull = document.querySelector(".alert");

const assignButton=document.querySelector(".assign");
const assignedItems=document.querySelector(".assigned-items");
// console.log(assignButton, assignedItems);

addGuestButton.addEventListener("click", function () {
    const guest=guestInput.value;
    // console.log(guest);
    if (guest !== "") {
        addToList(guest);
    }
    clearInput();
    updateGuestCount();
});

document.addEventListener("keydown", function (e){
    if(e.key==="Enter") {
        const guest=guestInput.value;
        if (guest!=="") {
            addToList(guest);
        }
        clearInput();
        updateGuestCount();
    }
});

// CLEARS INPU FOR THE INVITE INPUT IN BOTH THE "ENTER" KEYDOWN AND CLICK EVENT LISTENERS
const clearInput=function () {
    guestInput.value="";
};

// ADDS GUEST NAMES TO DOM
const addToList=function (guest) {
    const listItem=document.createElement("li");
        listItem.innerText=guest;
        guestList.append(listItem);
};

//FUNCTIONALITY FOR GUEST COUNTER AND LIMITS LIST TO 8PPL
const updateGuestCount=function() {
    const guests=document.querySelectorAll(".guest-list li");
    guestCount.innerText=guests.length
    if(guests.length===8) {
        addGuestButton.classList.add("hide");
        guestInput.classList.add("hide");
        guestInputLabel.classList.add("hide");
        guestFull.classList.remove("hide");
    }
};

const assignItems=function (){
    const potluckItems=["BBQ ribs", "potato salad", "chips", 
    "humus plate", "cookies", "fruit plate", "kale salad", "hamburgers",
    "hot dogs", "chips and Salsa", "cookies", "pie"];
    
    const allGuests=document.querySelectorAll(".guest-list li");
    
    for(let guest of allGuests) {
        let randomPotluckIndex=Math.floor(Math.random()*potluckItems.length);
        let randomPotluckItem=potluckItems[randomPotluckIndex];

        const listItem=document.createElement("li");
        listItem.innerText=`${guest.innerText} is bringing ${randomPotluckItem}.`;
        assignedItems.append(listItem);
        potluckItems.splice(randomPotluckIndex, 1);
    }
};  

assignButton.addEventListener("click", function (){
    assignItems();
    assignButton.disabled=true;
});

//Math.floor(Math.random() * potluckItems.length);