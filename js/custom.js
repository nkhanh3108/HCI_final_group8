$(document).ready(function () {
    let user = sessionStorage.getItem('user');
    if (user) {
        document.getElementById('username-tag').innerHTML = 'Hello ' + user + '!';
        $('#login-btn').remove();
        // Add logout button vao subscribe-btn
    }
});
