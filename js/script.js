// MONEY ASKER
var price = 100;

var money = parseInt(prompt("Qancha pulingiz bor"));
if (money >= price) {
    var pricePositiveAnswer = document.createElement("p");
    pricePositiveAnswer.textContent = "Telefon sizniki";
    document.body.append(pricePositiveAnswer);
    console.log("Telefon sizniki");
}
else {
    var priceNegativeAnswer = document.createElement("p");
    priceNegativeAnswer.textContent = "Oyligingiz chiqganda kelasiz";
    document.body.append(priceNegativeAnswer);
    console.log("Oyligingiz chiqganda kelasiz");
}


// AGE ASKER
var age = 16;
var getAge = parseInt(prompt("Yoshingizni kiriting"));
if (getAge >= age) {
    var agePositiveAnswer = document.createElement("p");
    agePositiveAnswer.textContent = "Siz musobaqada qatnashsangiz boladi";
    document.body.append(agePositiveAnswer);
    console.log("Siz musobaqada qatnashsangiz boladi")
}
else {
    var ageNegativeAnswer = document.createElement("p");
    ageNegativeAnswer.textContent = "Xali kichkina ekansan sal katta bolib ol!";
    document.body.append(ageNegativeAnswer);
    console.log("Xali kichkina ekansan sal katta bolib ol!")
}


