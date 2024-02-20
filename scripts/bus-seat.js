






// 8
const seatCount = document.getElementById('seat-count');
// 0
const seatTotal = document.getElementById('seat-total');

const cards = document.querySelectorAll(".sit");


for(const sit of cards){
   
    sit.addEventListener("click", function(event){
    console.log(event.target);

    const remainSeat = parseInt(seatCount.innerText);
    const totalSeat = parseInt(seatTotal.innerText);
    if(totalSeat === 4){
        return;
    }
    addBackgroundColor(event.target)

    // Availabe
    let finalRemainSeat = remainSeat - 1;
    seatCount.innerText=finalRemainSeat;

    // total

    let finalTotalSeat = totalSeat + 1;
    seatTotal.innerText=finalTotalSeat;

    // console.log(sit.innerText);

    const totalPrices = document.getElementById('total-price');
    const totalPrice = parseInt(totalPrices.innerText);

     totalPrices.innerText = totalPrice + 550;

    const grandTotals = document.getElementById('grand-total');
    const grandTotal = parseInt(grandTotals.innerText);
    grandTotals.innerText = totalPrices.innerText;

    const seatSerials = document.getElementById('shovon-help');
    const sitName = sit.innerText;
    seatSerials.innerHTML += `
    <p>${sitName}</p>
    <p>Economy</p>
    <p>550</p>`;






})
}









function selected(){


    const seats = document.getElementById()
}