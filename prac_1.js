// Задание 1
console.log('Задание #1')

let user_name_1 = 'Андрей';
let user_age_1 = 19;
let user_city_1 = 'Рязань';

var user_name_2 = 'Борис';
var user_age_2 = 21;
var user_city_2 = 'Москва';

user_name_3 = 'Виктор';
user_age_3 = 25;
user_city_3 = 'Новосибирск';

console.log(`Пользователь 1: ${user_name_1} ${user_age_1} ${user_city_1}`);
console.log(`Пользователь 2: ${user_name_2} ${user_age_2} ${user_city_2}`);
console.log(`Пользователь 3: ${user_name_3} ${user_age_3} ${user_city_3}`);

user_age_1 = 23

console.log(`Пользователь 1: ${user_name_1} ${user_age_1} ${user_city_1}`);

// Задание 2
console.log('\nЗадание #2')

let number_var = 123
let string_var = 'qwerty'
let boolean_var = true
let null_var = null
let undefined_var = undefined
let object_var = {one: true, two: '1', three: 1}

console.log(`
    ${typeof(number_var)}
    ${typeof(string_var)}
    ${typeof(boolean_var)}
    ${typeof(null_var)}
    ${typeof(undefined_var)}
    ${typeof(object_var)}
    `)

// Задание 3
console.log('\nЗадание #3')

function maximum(a, b, c){
    if (a > b){
        if (a > c){ return a }
        else{ return c }
    }
    else{
        if (b > c){ return b }
        else{ return c }
    }
}

console.log(maximum(20, 60, 40))

// Задание 4
console.log('\nЗадание #4')

let i = 1
while(i < 11){
    console.log(i++)
}
console.log('\n')

i = 1
do{
    console.log(i++)
} while(i < 11)
console.log('\n')

for(i = 1; i <= 10; i++){
    console.log(i)
}

// Задание 5
console.log('\nЗадание #5')

function summa(a, b) {return(a + b)}
console.log(summa(60, 40))

var del = (a, b) => a / b
console.log(del(400, 4))

var umn = function(a, b) {return(a * b)}
console.log(umn(5, 20))