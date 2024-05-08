 &copy; 2020 - Template designed & developed by <a href="https://nisar.dev" class="link">Nisar</a>.











/* Styling for the button */
.button {
    background-color: #ff7700; /* Button background color */
    color: #fff; /* Button text color */
    padding: 10px 20px; /* Padding for the button */
    border-radius: 20px; /* Rounded edges */
    border: none; /* Remove button border */
    font-size: 30px; /* Font size for the button */
    cursor: pointer; /* Cursor style */
    transition: background-color 0.3s ease; /* Smooth transition for background color */
}

/* Flashing animation for the button */
@keyframes flash {
    0% { background-color: #000000; }
    50% { background-color: #635234; }
    100% { background-color: #000000; }
}

/* Apply the flashing animation to the button */
.button.flash {
    animation: flash 1.5s infinite; /* Flashing animation */
}