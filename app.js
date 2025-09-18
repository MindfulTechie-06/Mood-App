function showMood(mood) {
  const moodTitle = document.getElementById("moodTitle");
  const quoteText = document.getElementById("quoteText");
  const musicPlayer = document.getElementById("musicPlayer");
  const videoPlayer = document.getElementById("videoPlayer");

  // Remove previous background classes
  document.body.className = "";

  // Add mood-based background
  document.body.classList.add("bg-" + mood);

  // Create floating particles
  createParticles();

  // Show mood title
  moodTitle.textContent = "Your mood: " + mood.toUpperCase();

  // Get a quote from local quotes.js
  quoteText.textContent = getQuoteByMood(mood);

  // Spotify + YouTube
  let playlist = "";
  let video = "";

  if (mood === "happy") {
    playlist = "https://open.spotify.com/embed/playlist/37i9dQZF1DXdPec7aLTmlC";
    video = "https://www.youtube.com/embed/ZbZSe6N_BXs"; 
  } else if (mood === "sad") {
    playlist = "https://open.spotify.com/embed/playlist/37i9dQZF1DWVV27DiNWxkR";
    video = "https://www.youtube.com/embed/hLQl3WQQoQ0"; 
  } else if (mood === "chill") {
    playlist = "https://open.spotify.com/embed/playlist/37i9dQZF1DX4WYpdgoIcn6";
    video = "https://www.youtube.com/embed/1ZYbU82GVz4"; 
  } else if (mood === "angry") {
    playlist = "https://open.spotify.com/embed/playlist/37i9dQZF1DX7EF8wVxBVhG";
    video = "https://www.youtube.com/embed/04F4xlWSFh0"; 
  }

  // Display Spotify
  musicPlayer.innerHTML = `
    <iframe style="border-radius:12px" src="${playlist}" 
      width="300" height="380" frameborder="0" allow="autoplay; 
      clipboard-write; encrypted-media; fullscreen; picture-in-picture">
    </iframe>`;

  // Display YouTube
  videoPlayer.innerHTML = `
    <iframe width="300" height="200" 
      src="${video}" frameborder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
      allowfullscreen>
    </iframe>`;
}

// Particle generator
function createParticles() {
  // remove old particles
  document.querySelectorAll(".particle").forEach(el => el.remove());

  for (let i = 0; i < 20; i++) {
    let particle = document.createElement("div");
    particle.classList.add("particle");
    particle.style.left = Math.random() * window.innerWidth + "px";
    particle.style.animationDuration = (3 + Math.random() * 4) + "s";
    document.body.appendChild(particle);

    // remove particle after animation ends
    setTimeout(() => particle.remove(), 7000);
  }
}
