console.log("Script loaded!");

document.addEventListener('DOMContentLoaded', () => {
    const startButton = document.getElementById('start');
    const timerDisplay = document.getElementById('timer');
    const modeDisplay = document.getElementById('mode');
    
    // Next game date (you'll need to update this for each game)
    const nextGameDate = new Date('2024-04-14T19:00:00'); // Example date - adjust as needed
    
    let countdownInterval;
    
    function updateCountdown() {
        const now = new Date();
        const timeLeft = nextGameDate - now;
        
        if (timeLeft <= 0) {
            timerDisplay.textContent = "Game Time!";
            clearInterval(countdownInterval);
            startButton.disabled = true;
            return;
        }
        
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
        
        timerDisplay.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }
    
    startButton.addEventListener('click', () => {
        updateCountdown(); // Initial call
        countdownInterval = setInterval(updateCountdown, 1000);
        startButton.disabled = true;
    });
});

// Initial display
document.getElementById('timer').innerHTML = "Click Start to begin countdown"; 