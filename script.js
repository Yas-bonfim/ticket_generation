document.getElementById('ticketForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let isValid = true;

    const avatar = document.getElementById('avatar');
    const fullName = document.getElementById('fullName');
    const email = document.getElementById('email');
    const github = document.getElementById('github');

    const avatarError = document.getElementById('avatarError');
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const githubError = document.getElementById('githubError');

    // Clear all error messages on re-submission
    clearErrors([avatarError, nameError, emailError, githubError]);

    // Validate Avatar
    if (!validateAvatar(avatar, avatarError)) isValid = false;

    // Validate Full Name
    if (!validateFullName(fullName, nameError)) isValid = false;

    // Validate Email
    if (!validateEmail(email, emailError)) isValid = false;

    // Validate GitHub Username
    if (!validateGitHub(github, githubError)) isValid = false;

    if (isValid) {
        displayTicket(fullName.value, email.value, github.value, avatar.files[0]);
        triggerConfetti();
        resetForm();
    }
});

// Função para limpar mensagens de erro
function clearErrors(errorElements) {
    errorElements.forEach(errorElement => errorElement.textContent = '');
}

// Função para validar o avatar
function validateAvatar(avatar, avatarError) {
    if (!avatar.files[0]) {
        avatarError.textContent = 'Please upload an avatar.';
        return false;
    } else if (avatar.files[0].size > 500 * 1024) {
        avatarError.textContent = 'File size must be less than 500KB.';
        return false;
    } else if (!['image/jpeg', 'image/png'].includes(avatar.files[0].type)) {
        avatarError.textContent = 'File must be a JPG or PNG.';
        return false;
    }
    return true;
}

// Função para validar o nome completo
function validateFullName(fullName, nameError) {
    if (!fullName.value.trim()) {
        nameError.textContent = 'Please enter your full name.';
        return false;
    }
    return true;
}

// Função para validar o email
function validateEmail(email, emailError) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.value)) {
        emailError.textContent = 'Please enter a valid email address.';
        return false;
    }
    return true;
}

// Função para validar o nome de usuário do GitHub
function validateGitHub(github, githubError) {
    if (!github.value.trim()) {
        githubError.textContent = 'Please enter your GitHub username.';
        return false;
    }
    return true;
}

// Função para exibir o ticket
function displayTicket(fullName, email, github, avatarFile) {
    document.getElementById('ticketName').textContent = fullName;
    document.getElementById('ticketEmail').textContent = email;
    document.getElementById('ticketFullName').textContent = fullName;
    document.getElementById('ticketGithub').textContent = github;

    // Exibir avatar
    const ticketAvatar = document.getElementById('ticketAvatar');
    ticketAvatar.src = URL.createObjectURL(avatarFile);

    // Mostrar o ticket
    document.getElementById('ticketDisplay').classList.remove('hidden');
}

// Função para animação de confetti
function triggerConfetti() {
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
    });
}

// Função para resetar o formulário
function resetForm() {
    document.getElementById('ticketForm').reset();
}