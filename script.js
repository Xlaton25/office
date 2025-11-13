document.getElementById("loadVideo").addEventListener("click", function () {
  const input = document.getElementById("videoLink").value.trim();
  const iframe = document.getElementById("videoFrame");

  if (!input) {
    alert("Please enter a YouTube link.");
    return;
  }

  // Extract video ID from common YouTube URL formats
  const regex =
    /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
  const match = input.match(regex);

  if (!match || !match[1]) {
    alert("Invalid YouTube URL. Please enter a valid link.");
    return;
  }

  const newVideoId = match[1];

  // Get current iframe src and replace any 11-character YouTube ID inside it
  const currentSrc = iframe.src;
  const updatedSrc = currentSrc.replace(/[a-zA-Z0-9_-]{11}/g, newVideoId);

  // Update the iframe source
  iframe.src = updatedSrc;
});
