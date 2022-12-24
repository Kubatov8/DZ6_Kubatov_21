function arifm(numbers) {
    let sum = numbers.reduce((acc, curr) => acc + curr, 0)
    let length = numbers.length;
    let result = sum / length;
    console.log(result);
}
let numbers = [1, 5, 7, 10]
arifm(numbers)

var asd = 'asd'

var iNN = [prompt('введите инн')]
function check(arr) {
    let result = arr.every(Number)
    console.log(result);
}
check(iNN)
let users = [
    new auth('Emir', 'mama', 'mamaemira'),
    new auth('Akjol', 'papa', 'travisscott'),
    new auth('123', '321', '123')
]
let login = document.querySelector('#login')
let password = document.querySelector('#password')
let username = document.querySelector('#username')
let button = document.querySelector('#button').addEventListener('click', (e) => {
    e.preventDefault()
    let user = users.find(u => u.login === login.value && u.password === password.value && u.username === username.value)
    user ? alert(`Здравстуйте ${user.username}`) : alert('Пользователь не найден')
})


function auth(login, password, username) {
    this.login = login,
        this.password = password,
        this.username = username
}