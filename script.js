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
    avatarError.textContent = '';
    nameError.textContent = '';
    emailError.textContent = '';
    githubError.textContent = '';

    // Validate Avatar
    if (!avatar.files[0]) {
        avatarError.textContent = 'Please upload an avatar.';
        isValid = false;
    } else if (avatar.files[0].size > 500 * 1024) {
        avatarError.textContent = 'File size must be less than 500KB.';
        isValid = false;
    } else if (!['image/jpeg', 'image/png'].includes(avatar.files[0].type)) {
        avatarError.textContent = 'File must be a JPG or PNG.';
        isValid = false;
    }

    // Validate Full Name
    if (!fullName.value.trim()) {
        nameError.textContent = 'Please enter your full name.';
        isValid = false;
    }

    // Validate Email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.value)) {
        emailError.textContent = 'Please enter a valid email address.';
        isValid = false;
    }

    // Validate GitHub Username
    if (!github.value.trim()) {
        githubError.textContent = 'Please enter your GitHub username.';
        isValid = false;
    }

    if (isValid) {
        // Display ticket information
        document.getElementById('ticketName').textContent = fullName.value;
        document.getElementById('ticketEmail').textContent = email.value;
        document.getElementById('ticketFullName').textContent = fullName.value;
        document.getElementById('ticketGithub').textContent = github.value;

        // Display uploaded avatar
        const avatarDisplay = document.createElement('img');
        avatarDisplay.src = URL.createObjectURL(avatar.files[0]);
        avatarDisplay.alt = 'User Avatar';
        avatarDisplay.style.width = '100px';
        avatarDisplay.style.height = '100px';
        avatarDisplay.style.borderRadius = '50%';

        const ticketInfo = document.querySelector('.ticket-info');
        ticketInfo.prepend(avatarDisplay);

        // Show ticket display
        document.getElementById('ticketDisplay').classList.remove('hidden');

        // Trigger confetti animation
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 }
        });

        // Reset form
        document.getElementById('ticketForm').reset();
    }
});