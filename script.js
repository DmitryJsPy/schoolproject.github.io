// script.js
function validateForm() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if (username === 'lyapesh' && password === 'lyapesh') {
        // Если логин и пароль совпадают, перенаправляем пользователя на другую страницу
        window.location.href = '/home_page/main.html'; // Замените на адрес вашей страницы
    } else {
        // Выводим сообщение об ошибке или делаем другие действия
        alert('Неверный логин или пароль');
    }
}