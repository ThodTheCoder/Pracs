// Задание 1
console.log('Задание #1')

let user_1 = {name: 'Андрей', age: 19, city: 'Рязань'}
console.log(`Пользователь 1: ${user_1}`)
user_1.age = 21
user_1.birthday = '14-12-2003'
delete user_1.city
console.log(user_1)

let user_2 = {name: 'Борис', age: 19, date_of_birth: '14-12-2005'}
console.log(`Cумма возрастов: ${user_1.age + user_2.age}`)

// Задание 2
console.log('\nЗадание #2')

let line = 'qwertyuiop'
console.log(`Длина строки ${line.length}, первый символ ${line[0]}, последний символ ${line[line.length - 1]}`)
console.log(`Начинается с foo? ${line.startsWith('foo')}`)
console.log(`Заканчивается на bar? ${line.endsWith('bar')}`)
console.log(`Содерждит rtyu? ${line.includes('rtyu')}`)

// Задание 3
console.log('\nЗадание #3')

let array_1 = [20, 30, 60, 80, 100]
console.log(`Первый элемент ${array_1[0]}, последний элемент ${array_1[array_1.length - 1]}`)

array_1[1] = 40
let array_2 = array_1
console.log(`Первый массив: ${array_1}, второй массив: ${array_2}`)

function array_summa(array_1, array_2){
    len = array_1.length
    array_1.length = array_1.length + array_2.length
    for(let i = len; i < array_1.length; i++){
        array_1[i] = array_2[i - len]
    }
    return array_1
}
console.log(`Объединение массивов: ${array_summa(array_1, array_2)}`)

let user1 = {name: 'Андрей', age: 19}
let user2 = {name: 'Борис', age: 21}
let user3 = {name: 'Виктор', age: 25}
let users = [user1, user2, user3]

function get_user_name(users){
    names = new Array(users.length)
    users.forEach((user, index) => {
        names[index] = user.name
    });
    return names
}
console.log(`Список имен пользователей: ${get_user_name(users)}`)

function get_avg(array){
    let summa = 0
    array.forEach(i => {
        summa += i
    });
    return summa/array.length
}
console.log(`Среднее значение: ${get_avg([20, 60, 40])}`)


// Задание 4
console.log('\nЗадание #4')

let names_array = new Set();
names_array.add("Андрей");
names_array.add("Борис");
names_array.add("Виктор");
names_array.add("Глеб");
names_array.delete("Виктор")
console.log(`Виктора нет в списке? ${!names_array.has("Виктор")}`)
console.log(`Размер набора ${names_array.size}`)

// Задание 5
console.log('\nЗадание #5')

let map_user = new Map()
map_user.set('Андрей', 19)
map_user.set('Борис', 21)
map_user.set('Виктор', 25)
console.log('Последний добавленный элемент', map_user.get('Виктор'));
map_user.delete('Виктор');
console.log('Виктора нет в списке?', !map_user.has('Виктор'));