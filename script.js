console.log("Script loaded!");

// Global variable to store the interval
let countdownInterval;

// Function to update the countdown
function updateCountdown() {
    // Get the countdown element
    const countdownElement = document.getElementById('countdown');
    
    // Set target date
    const targetDate = new Date('2025-02-08T13:15:00-05:00');
    const now = new Date();
    const timeLeft = targetDate - now;

    // Calculate all time components
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    // Create the display text
    const displayText = `
        <div class="time-segment">
            <div class="time-value">${String(days).padStart(2, '0')}</div>
            <div class="time-label">Days</div>
        </div>
        <div class="time-segment">
            <div class="time-value">${String(hours).padStart(2, '0')}</div>
            <div class="time-label">Hours</div>
        </div>
        <div class="time-segment">
            <div class="time-value">${String(minutes).padStart(2, '0')}</div>
            <div class="time-label">Minutes</div>
        </div>
        <div class="time-segment">
            <div class="time-value">${String(seconds).padStart(2, '0')}</div>
            <div class="time-label">Seconds</div>
        </div>
    `;

    // Update the display
    countdownElement.innerHTML = displayText;
}

// Wait for the page to load
window.onload = function() {
    // Get the start button
    const startButton = document.getElementById('start');
    const countdownElement = document.getElementById('countdown');
    
    // Add click handler
    startButton.onclick = function() {
        // Hide the button
        startButton.style.display = 'none';
        
        // Hide the button container
        const buttonContainer = document.querySelector('.button-container');
        if (buttonContainer) {
            buttonContainer.style.display = 'none';
        }

        // Show the countdown
        countdownElement.style.display = 'grid';

        // Clear any existing interval
        if (countdownInterval) {
            clearInterval(countdownInterval);
        }
        
        // Start the countdown
        updateCountdown();
        
        // Update every second
        countdownInterval = setInterval(updateCountdown, 1000);
    };
};

// Initial display
document.getElementById('timer').innerHTML = "Click Start to begin countdown";

// First, let's make sure we're running after the DOM loads
window.onload = function() {
    // Get our elements
    const startButton = document.querySelector('#start');
    const countdownDiv = document.querySelector('#countdown');
    
    // Log what we found
    console.log('Start button:', startButton);
    console.log('Countdown div:', countdownDiv);

    // Only proceed if we found both elements
    if (!startButton || !countdownDiv) {
        console.error('Could not find required elements');
        console.log('HTML content:', document.body.innerHTML);
        return;
    }

    // Add click handler
    startButton.onclick = function() {
        console.log('Button clicked');
        
        // Test with simple content first
        countdownDiv.textContent = 'Testing...';
        
        // Set up the countdown
        const targetDate = new Date('2025-02-08T13:15:00-05:00');
        
        function updateTime() {
            const now = new Date();
            const timeLeft = targetDate - now;
            
            const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
            
            countdownDiv.textContent = `${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`;
        }
        
        // Update immediately
        updateTime();
        
        // Then update every second
        setInterval(updateTime, 1000);
    };
}; 