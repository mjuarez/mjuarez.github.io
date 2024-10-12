function updateCountdown() {
    const countdownElement = document.getElementById('countdown');
    const now = new Date();
    const targetDate = new Date(now.getFullYear(), now.getMonth(), 24);
    
    if (now.getDate() > 24) {
        targetDate.setMonth(targetDate.getMonth() + 1);
    }
    
    const difference = targetDate - now;
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);
    
    countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

setInterval(updateCountdown, 1000);
