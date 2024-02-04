let scoop1 = document.querySelector(".scoop1");
let scoop2 = document.querySelector(".scoop2");
let scoop3 = document.querySelector(".scoop3");
let btnScoop1 = document.getElementById("btn-scoop1");
let btnScoop2 = document.getElementById("btn-scoop2");
let btnScoop3 = document.getElementById("btn-scoop3");
let btnTopping1 = document.getElementById("btn-topping1");
let btnTopping2 = document.getElementById("btn-topping2");
let btnBill = document.getElementById("btn-bill");
let btnCloseBill = document.getElementById("btn-close-bill");
let billList = document.getElementById("bill-list");

let colors = ["#f45c96", "#f8bd3d", "#badc58", "#5c0003", "#f58619", "#ebab70"];
let counter1 = 0;
let counter2 = 0;
let counter3 = 0;
let counter4 = 0;
let counter5 = 0;

function setCounterValue(counter) {
    return counter < colors.length - 1 ? counter + 1 : 0;
}

btnScoop1.addEventListener("click", () => {
    scoop1.style.backgroundColor = colors[counter1];
    scoop1.dataset.price = "2.50";
    counter1 = setCounterValue(counter1);
});

btnScoop2.addEventListener("click", () => {
    scoop2.style.backgroundColor = colors[counter2];
    scoop2.dataset.price = "3.00";
    counter2 = setCounterValue(counter2);
});

btnScoop3.addEventListener("click", () => {
    scoop3.style.backgroundColor = colors[counter3];
    scoop3.dataset.price = "2.75";
    counter3 = setCounterValue(counter3);
});

btnTopping1.addEventListener("click", () => {
    scoop1.style.backgroundImage = `radial-gradient(circle at 20px 18px, ${colors[counter4]} 25px, transparent 25px)`;
    scoop1.dataset.price = "3.75";
    counter4 = setCounterValue(counter4);
});

btnTopping2.addEventListener("click", () => {
    scoop3.style.backgroundImage = `radial-gradient(circle at 12.5px 17px, ${colors[counter5]} 20px, transparent 21px)`;
    scoop3.dataset.price = "4.00";
    counter5 = setCounterValue(counter5);
});

btnBill.addEventListener("click", () => {
    showBill();
});

btnCloseBill.addEventListener("click", () => {
    hideBill();
});

function showBill() {
    const scoops = document.querySelectorAll(".container div[data-price]");
    scoops.forEach((scoop) => {
        const scoopName = scoop.dataset.name;
        const scoopPrice = parseFloat(scoop.dataset.price).toFixed(2);
        const listItem = document.createElement("div");
        listItem.innerHTML = `<span>${scoopName}</span> - $${scoopPrice}`;
        billList.appendChild(listItem);
    });

    // Hide options and show the bill
    document.getElementById("options-container").style.display = "";
    document.getElementById("bill-container").style.display = "block";
    document.getElementById("buttons").style.display = "none";

}

function hideBill() {
    // Clear bill list
    billList.innerHTML = "";

    // Show options and hide the bill
    document.getElementById("options-container").style.display = "flex";
    document.getElementById("bill-container").style.display = "none";
    document.getElementById("buttons").style.display = "flex";
}
