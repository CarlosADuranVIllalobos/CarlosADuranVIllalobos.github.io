// main.js

document.addEventListener('DOMContentLoaded', (event) => {
  // Function to handle page transitions
  function handlePageTransition(event) {
      event.preventDefault();
      const targetUrl = event.target.href;
      const mainContent = document.getElementById('main-content');

      // Apply fade-out animation
      mainContent.classList.add('fade-out');

      // Wait for the fade-out animation to complete before navigating
      setTimeout(() => {
          window.location.href = targetUrl;
      }, 500); // Match this duration to the CSS animation duration
  }

  // Add event listeners to all navigation links
  const navLinks = document.querySelectorAll('nav ul li a');
  navLinks.forEach(link => {
      link.addEventListener('click', handlePageTransition);
  });

  // Apply fade-in animation when the page loads
  const mainContent = document.getElementById('main-content');
  mainContent.classList.add('fade-in');

  // Darken secondary color
  const root = document.documentElement;
  const secondaryColor = getComputedStyle(root).getPropertyValue('--secondary-color').trim();
  
  function shadeColor(color, percent) {
      let R = parseInt(color.substring(1, 3), 16);
      let G = parseInt(color.substring(3, 5), 16);
      let B = parseInt(color.substring(5, 7), 16);

      R = Math.floor(R * (100 + percent) / 100);
      G = Math.floor(G * (100 + percent) / 100);
      B = Math.floor(B * (100 + percent) / 100);

      R = (R < 255) ? R : 255;
      G = (G < 255) ? G : 255;
      B = (B < 255) ? B : 255;

      const RR = ((R.toString(16).length === 1) ? "0" + R.toString(16) : R.toString(16));
      const GG = ((G.toString(16).length === 1) ? "0" + G.toString(16) : G.toString(16));
      const BB = ((B.toString(16).length === 1) ? "0" + B.toString(16) : B.toString(16));

      return "#" + RR + GG + BB;
  }

  const darkerSecondaryColor = shadeColor(secondaryColor, -20);
  root.style.setProperty('--secondary-color-darker', darkerSecondaryColor);
});
