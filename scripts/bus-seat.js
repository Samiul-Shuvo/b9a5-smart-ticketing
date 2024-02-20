




const cards = document.querySelectorAll(".sit");

// for(let index = 0; index < cards.length; index++){
//     const card = cards[index];
//     card.addEventListener("click", function(){
//         // console.log('Clicked');
//         const title =card.querySelector(" button");

//     })
// }
for(const sit of cards){
sit.addEventListener("click", function(event){
console.log(event.target);
addBackgroundColor(event.target)
})
}









function selected(){


    const seats = document.getElementById()
}