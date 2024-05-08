document.addEventListener("DOMContentLoaded", function() {
  console.log("JavaScript file linked properly.");

  // Get references to the about and contact sections
  var aboutSection = document.getElementById('about');
  var contactSection = document.getElementById('contact');

  // Flag to track if the GIF is currently playing
  var isPlaying = false;
  
  // Add click event listener to the about section
  aboutSection.addEventListener('click', function() {
      // Start playing the GIF
      isPlaying = true;

      // Switch background of about section to moon_gif_real.gif
      aboutSection.style.backgroundImage = 'url("assets/moon_gif_real.gif")';

      // Once the GIF finishes playing
      setTimeout(function() {
          // Switch background of about section to moon_gif_end.png
          aboutSection.style.backgroundImage = 'url("assets/moon_gif_end.png")';
          
          // Start playing the GIF for contact section
          contactSection.style.backgroundImage = 'url("assets/moon_bottom_gif.gif")';

          // Once the GIF for contact section finishes playing
          setTimeout(function() {
              // Switch background of contact section to bottom_end.png
              contactSection.style.backgroundImage = 'url("assets/bottom_end.png")';
          }, 4350); // Adjust the delay according to the length of the GIF
      }, 4830); // Adjust the delay according to the length of the GIF
  });
});



document.addEventListener("DOMContentLoaded", function() {
  // Get the contact link
  var contactLink = document.getElementById('contact-link');

  // Get the contact section
  var contactSection = document.getElementById('contact');

  

  // Add click event listener to the contact link
  contactLink.addEventListener('click', function(event) {
      // Prevent default link behavior
      event.preventDefault();

      // Trigger the GIF animation in the contact section
      contactSection.style.backgroundImage = 'url("assets/moon_bottom_gif.gif")';

      setTimeout(function() {
        // Switch background of contact section to bottom_end.png
        contactSection.style.backgroundImage = 'url("assets/bottom_end.png")';
    }, 2175);
      
      // Scroll to the contact section smoothly
      contactSection.scrollIntoView({ behavior: 'smooth' });
  });
});





document.addEventListener("DOMContentLoaded", function() {
  // Get the contact link
  var contactLink = document.getElementById('contact-link');
  
  // Get the contact section
  var contactSection = document.getElementById('contact');
  
  // Get the "Get in Touch" button
  var getInTouchButton = document.getElementById('getintouch');

  // Function to trigger the contact action
  function triggerContactAction(event) {
      // Prevent default button behavior
      event.preventDefault();

      // Trigger the GIF animation in the contact section
      contactSection.style.backgroundImage = 'url("assets/moon_bottom_gif.gif")';

      setTimeout(function() {
        // Switch background of contact section to bottom_end.png
        contactSection.style.backgroundImage = 'url("assets/bottom_end.png")';
    }, 2175);
      
      // Scroll to the contact section smoothly
      contactSection.scrollIntoView({ behavior: 'smooth' });
  }

  // Add click event listener to the contact link
  contactLink.addEventListener('click', triggerContactAction);

  // Add click event listener to the "Get in Touch" button
  getInTouchButton.addEventListener('click', triggerContactAction);
});




