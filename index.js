let coins = 100;
let hearts = 0;
let copies = 0;

// Elements
const coinBtn = document.getElementById("coinBtn");
const heartBtn = document.getElementById("heartBtn");
const copyBtn = document.getElementById("copyBtn");

const historyList = document.getElementById("historyList");
const clearHistoryBtn = document.getElementById("clearHistory");

// Call Buttons
document.querySelectorAll(".callBtn").forEach(btn => {
  btn.addEventListener("click", () => {
    const serviceName = btn.getAttribute("data-name");
    const serviceNumber = btn.getAttribute("data-number");

    if (coins < 20) {
      alert("Not enough coins! Need at least 20.");
      return;
        }

    coins -= 20;
    coinBtn.innerHTML = coins + `<img class="w-6 h-6" src="./assets/coin.png" alt="">`;  

      
    alert(`Calling ${serviceName} at ${serviceNumber}`);

    const time = new Date().toLocaleTimeString();
     const li = document.createElement("li");

     li.className = "bg-gray-100 rounded-lg p-4 mb-3"; 

    const nameTimeWrapper = document.createElement("div");
    nameTimeWrapper.className = "flex justify-between items-center mb-1";

   const nameEl = document.createElement("span");
   nameEl.textContent = serviceName;
   nameEl.className = "font-bold";

    const timeEl = document.createElement("span");
    timeEl.textContent = time;
    timeEl.className = "text-sm ";

    nameTimeWrapper.appendChild(nameEl);
    nameTimeWrapper.appendChild(timeEl);

const numberEl = document.createElement("p");
numberEl.textContent = serviceNumber;
numberEl.className = "text-gray-500";

   li.appendChild(nameTimeWrapper);
   li.appendChild(numberEl);


  historyList.appendChild(li);
});
});

// Clear History
clearHistoryBtn.addEventListener("click", () => {
  historyList.innerHTML = "";
  });

  // Heart Buttons
  document.querySelectorAll(".heartBtn").forEach(btn => {
  btn.addEventListener("click", () => {
    hearts++;
    heartBtn.innerHTML = hearts + `<img class="w-6 h-6" src="./assets/heart.png" alt="">`;
  });
});



// Copy Buttons
document.querySelectorAll(".copyBtn").forEach(btn => {
  btn.addEventListener("click", () => {
    const number = btn.parentElement.querySelector(".number").innerText;
    navigator.clipboard.writeText(number);
    copies++;
    copyBtn.innerHTML = `<span>${copies}</span> Copy`;
    alert(`Copied Number: ${number}`);
});
});