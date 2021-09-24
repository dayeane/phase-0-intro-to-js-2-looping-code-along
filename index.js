// Code your solutions in this file
// for (let age = 30; age < 40; age++) {
//     console.log(`I'm ${age} years old. Happy birthday to me!`);
    
// }
 
// const gifts = ["teddy bear", "drone", "doll"];

// function wrapGifts(gifts) {
//   for (let i = 0; i < gifts.length; i++) {
    // `Wrapped ${gifts[i]} and added a bow!`;
  
//   }

//   return gifts;
// }

// wrapGifts(gifts);

function writeCards(string_names, event_name) {
    const message = []

    for (let i = 0; i < string_names.length; i++) {
        message.push(`Thank you, ${string_names[i]}, for the wonderful ${event_name} gift!`)
    }
    return message
}

function countDown(number) {
    while (number > -1) {
        console.log(number--)
    }
}