var value = Number(prompt(`Butun raqam kiriting, '5' va '3' sonlariga bo'linadigan bo'lsa yanayam yaxshi`))
var a = 3
var b = 5
var reminder1 = Number(value % a)
var reminder2 = Number(value % b)
var eltitle = document.querySelector(`#title`)


if(reminder1 === 0 && reminder2 === 0){
    eltitle.textContent = `FizzBuzz(5 va 3ga karrali)`;
}

else if(reminder1 === 0){
    eltitle.textContent = `Fizz(3ga karrali)`;
}

else if(reminder2 === 0) {
    eltitle.textContent = `Buzz(5ga karrali)`;
}

else{
    eltitle.textContent = `KIRITILGAN RAQAM '3' SONIGA HAM, '5' SONIGA HAM KARRALI EMAS`;
}
