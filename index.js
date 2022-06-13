// Code your solutions in this file
const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
}

return gifts;
}

wrapGifts(gifts);


function writeCards(name, extr) {

    let emp = [];
    for(let i = 0; i < name.length; i++){
        emp.push(`Thank you, ${name[i]}, for the wonderful ${extr} gift!`);
        // console.log(emp);
    }
    return emp; 
}

function countDown(count) {
    for (let j = count.length; j > 0; j--) {
        console.log(count);
        console.log(j +' '+ count);
    }
}

// writeCards(nameArr);