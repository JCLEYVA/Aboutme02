'use strict';

let counter = 0;

function greeting() {
    let yourName = prompt("What's up, what do I call you?");
    counter++
    console.log(yourName);
    alert("That's a dope name, " + yourName + ". Do you want to play a guessing game? ");

}

function question1() {
    let firstHobby = prompt("Is painting my preffered art medium? y/n");
    counter++
    console.log(firstHobby);

}

//if (firstHobby === yes)
//alert ("Nope");
//else if (firstHobby=== no);
//alert("Yes! prefer drawing! Ive been drawing since I was five.");

function question2() {
    let secondHobby = prompt("Is baseball my favorite sport? y/n");
    counter++
    console.log(secondHobby);
    alert("Baseball is the best sport, Go Dodgers !");
}

function question3() {
    let thirdhobby = prompt("Do I like to stay on google all day? y/n");
    counter++
    console.log(thirdhobby);
    alert("Every piece of information is useful to someone, I stay on google researching topics for conversation starters");
}

function question4() {
    let fourthhobby = prompt("Is Salmon my favorite seafood? y/n");
    counter++
    console.log(fourthhobby);
    alert("I eat my weight in shrimp, it's my favorite");
}

function question5() {
    let fifthhobby = prompt("Is my sexual identity important to me? y/n?");
    counter++
    console.log(fifthhobby);
    alert("My sexuality used to be important to me. It no longer is; the older I get");
}

function age() {
    var myAge = 32;
    var counterSix = 0;
    while (counterSix < 4) {
    counterSix++;
    var questionSix = parseInt(prompt("How old am I?"));
    console.log(myAge)
    if (counterSix === 4) {
    alert("Too many tries, you fail!..I am 32 years old!");
    } else if (questionSix === myAge) {
    alert("Absolutely, I'm 32!");
    counter++
    break;
    } else if (questionSix < myAge) {
    alert("Not anymore, no")
    } else if (questionSix > myAge) {
    alert("Not yet, no!"); questionSix++
    }
    }
}

function ethnicity() {
    var myEthnicity = "hispanic";
    var counterSeven = 0;
    while (counterSeven < 6) {
    counterSeven++;
    var questionSeven = prompt("What is my Ethnicity? Middle eastern, Greek, South Asian, Hispanic, Italian, or Caucasion?").toLowerCase();
    console.log(myEthnicity)
    if (counterSeven === 6) {
    alert("Nope, you failed. I am Hispanic. ");
    } else if (questionSeven === myEthnicity) {
    alert("I am Hispanic, yes. Mexican- American.");
    counter++
    break;
    } else if (questionSeven === ("Greek")) {
    alert("Nope")
    } else if (questionSeven === ("South Asian")) {
    alert("Nope"); questionSeven++
    }
    else if (questionSeven === ("Italian")) {
    alert("Nope")
    } else if (questionSeven === ("Causcasion")) {
    alert("Nope")
    }
    else if (questionSeven === ("Middle Eastern"))
    alert("Nope");
    }
    alert(`Hey this is your score ${counter}`)
}



greeting();
question1();
question2();
question3();
question4();
question5();
age();
ethnicity();
