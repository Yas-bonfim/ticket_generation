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

    // Limpar mensagens de erro
    clearErrors([avatarError, nameError, emailError, githubError]);

    // Validações
    if (!validateAvatar(avatar, avatarError)) isValid = false;
    if (!validateFullName(fullName, nameError)) isValid = false;
    if (!validateEmail(email, emailError)) isValid = false;
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
        avatarError.textContent = 'Por favor, envie uma imagem.';
        return false;
    } else if (avatar.files[0].size > 500 * 1024) {
        avatarError.textContent = 'O arquivo deve ter menos de 500KB.';
        return false;
    } else if (!['image/jpeg', 'image/png'].includes(avatar.files[0].type)) {
        avatarError.textContent = 'A imagem deve ser JPG ou PNG.';
        return false;
    }
    return true;
}

// Função para validar o nome completo
function validateFullName(fullName, nameError) {
    if (!fullName.value.trim()) {
        nameError.textContent = 'Digite seu nome completo.';
        return false;
    }
    return true;
}

// Função para validar o email
function validateEmail(email, emailError) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.value)) {
        emailError.textContent = 'Digite um email válido.';
        return false;
    }
    return true;
}

// Função para validar o GitHub
function validateGitHub(github, githubError) {
    if (!github.value.trim()) {
        githubError.textContent = 'Digite seu usuário do GitHub.';
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

    const ticketAvatar = document.getElementById('ticketAvatar');
    ticketAvatar.src = URL.createObjectURL(avatarFile);

    document.getElementById('ticketDisplay').style.display = 'block';
}

// Função para animação de confetti
function triggerConfetti() {
    confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 }
    });
}

// Função para resetar o formulário
function resetForm() {
    document.getElementById('ticketForm').reset();
}
