# Coding Conf 2025 — Ticket Generator

A simple and interactive web application that allows users to generate personalized tickets for **Coding Conf 2025**.

Users can enter their personal information, upload an avatar, and instantly generate a customized event ticket with a celebratory confetti animation.

 **Live Demo:** [Ticket Generator](https://ticket-generation-lovat.vercel.app/)

## Features

- **Personalized Tickets:** Generate a ticket with your name, email address, GitHub username, and profile picture.
- **Avatar Upload:** Upload a custom profile image in JPG or PNG format.
- **Form Validation:** Validate user input before generating the ticket.
- **File Validation:** Accept only JPG and PNG images with a maximum file size of 500KB.
- **Interactive UI:** Enjoy a simple and engaging user interface.
- **Confetti Animation:** Celebrate ticket generation with a confetti effect.
- **Responsive Design:** Access the application through modern web browsers.

## Technologies

The project was developed using:

- **HTML5** — Application structure.
- **CSS3** — Styling and visual layout.
- **JavaScript** — Form validation, DOM manipulation, and ticket generation.
- **Canvas Confetti** — Confetti animation library.
- **Google Fonts** — Custom typography.

## Project Structure

```text
ticket_generation/
│
├── index.html      # Main application structure
├── style.css       # Visual styling and layout
├── script.js       # Validation and ticket generation logic
├── LICENSE         # MIT License
└── README.md       # Project documentation
```

## Getting Started

### Prerequisites

You only need a modern web browser and Git installed on your machine.

### Installation

1. Clone the repository:

```bash
git clone https://github.com/Yas-bonfim/ticket_generation.git
```

2. Navigate to the project directory:

```bash
cd ticket_generation
```

3. Open `index.html` in your browser.

Alternatively, use the **Live Server** extension in Visual Studio Code to run the application locally.

## How It Works

1. Upload your avatar (JPG or PNG, maximum 500KB).
2. Enter your full name.
3. Provide a valid email address.
4. Enter your GitHub username.
5. Click **Generate My Ticket**.
6. View your personalized Coding Conf 2025 ticket.

## Validation

Before generating the ticket, the application checks:

- Whether an avatar has been uploaded.
- Whether the image format is JPG or PNG.
- Whether the image size is below 500KB.
- Whether the full name field is filled in.
- Whether the email address follows a valid format.
- Whether the GitHub username field is filled in.

If all validations pass, the personalized ticket is displayed on the screen.

## Deployment

The application is deployed using **Vercel**.

Check out the live application:

[https://ticket-generation-lovat.vercel.app/](https://ticket-generation-lovat.vercel.app/)

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.

---

Developed by [Yas-bonfim](https://github.com/Yas-bonfim).
