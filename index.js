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

let count = [1,2,3,4];

function countDown(count) {
    while(count > 0) {
        console.log(count);
        count -=1;
    }
    console.log(count);
}

countDown(count);

// writeCards(nameArr);