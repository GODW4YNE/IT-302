document.addEventListener('DOMContentLoaded', function () {

    const loginForm = document.getElementById('loginForm');
    const messageDiv = document.getElementById('message');

    // check if account has been created
    function checkAccountExists() {
        const loggedUser = localStorage.getItem('loggedUser');
        return loggedUser;
    }

     // Function to handle login
     loginForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        const storedUsername = 'admin';
        const storedPassword = 'password';

        // check if username and password match
        if (username === storedUsername && password === storedPassword) {
            messageDiv.textContent = 'Login successful!';
            messageDiv.style.color = 'green';
            localStorage.setItem('loggedUser', username);
            // refresh page after delay
            setTimeout(() => {
                window.location.reload();
            }, 1000);
        } else {
            messageDiv.textContent = 'Invalid username or password!';
        }
    });

    // logout button
    document.querySelector('#logoutBtn').addEventListener('click', () => {
        localStorage.removeItem('loggedUser');
        // refresh page after delay
        setTimeout(() => {
            window.location.reload();
        }, 1000);
    });

    // on page load
    if (checkAccountExists()) {
        // if an account already exists
        loggedInMessage.style.display = 'block';
        loginForm.style.display = 'none';
    } else {
        // if no account exists
        loggedInMessage.style.display = 'none';
        loginForm.style.display = 'block';
    }



    loginForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        const storedUsername = 'customer';
        const storedPassword = 'password';

        // check if username and password match
        if (username === storedUsername && password === storedPassword) {
            messageDiv.textContent = 'Login successful!';
            messageDiv.style.color = 'green';
            localStorage.setItem('loggedUser', username);
            // Refresh page after delay
            setTimeout(() => {
                window.location.reload();
            }, 1000);
        } else {
            messageDiv.textContent = 'Invalid username or password!';
        }
    });

    // logout button
    document.querySelector('#logoutBtn').addEventListener('click', () => {
        localStorage.removeItem('loggedUser');
        // refresh page after delay
        setTimeout(() => {
            window.location.reload();
        }, 1000);
    });

    // on page load
    if (checkAccountExists()) {
        // if account already exsist
        loggedInMessage.style.display = 'block';
        loginForm.style.display = 'none';
    } else {
        // if no account exists
        loggedInMessage.style.display = 'none';
        loginForm.style.display = 'block';
    }


});