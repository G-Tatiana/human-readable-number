module.exports = function toReadable (number) {
  if (number === 0) {
    return "zero";
  }

  let arrFirstTwenty = ["", "one", "two", "three", "four", "five",
                        "six", "seven", "eight", "nine", "ten",
                        "eleven", "twelve", "thirteen", "fourteen", "fifteen",
                        "sixteen", "seventeen", "eighteen", "nineteen"];

  let arrTens = ["", "", "twenty", "thirty", "forty", "fifty",
                "sixty", "seventy", "eighty", "ninety"];

  if (number < 20) {
        return arrFirstTwenty[number];
    }

if (number >= 20 && number < 100) {
    if (number%10 === 0) {
        let tn = number/10;
        return arrTens[tn];
    } else {
        let ten = Math.floor(number/10);
        return arrTens[ten] + " " + arrFirstTwenty[(number%10)];
    }
}

let answer = '';

if (number >= 100) {

    if (number%100 === 0) {
        let hundr = number/100;
        answer = arrFirstTwenty[hundr] + " " + "hundred";
    }

    else if (number%10 === 0 && number%100 != 10) {
        let h = Math.floor(number/100);
        answer = arrFirstTwenty[h] + " " + "hundred"+ " " + arrTens[(number%100)/10];
    }

    else if (number%100 < 20) {
        let hund = Math.floor(number/100);
        answer = arrFirstTwenty[hund] + " " + "hundred"+ " " + arrFirstTwenty[(number - hund*100)];
    }

    else {
        let hundreds = Math.floor(number/100);
        let tens = Math.floor((number%100)/10);
        answer = arrFirstTwenty[hundreds]+ " " + "hundred"+ " " + arrTens[tens]+ " " + arrFirstTwenty[(number%10)];
    }
}
return answer;
}
