function updateTime() {
    const clockElement = document.getElementById('clock');
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const currentTime = `${hours}:${minutes}:${seconds}`;
    clockElement.innerText = currentTime;
  }
  
  // Update the clock every second (1000 milliseconds)
  setInterval(updateTime, 1000);
  
  // Optionally, update the clock immediately on page load
  updateTime();
