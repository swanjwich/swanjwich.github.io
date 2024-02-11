const textToAnimate = "Happy 1st Anniversary, My Love!";

  function typeWriter(text, index, callback) {
    if (index < text.length) {
      $('#typewriter-text').append(text.charAt(index));
      setTimeout(function() {
        typeWriter(text, index + 1, callback);
      }, 100); // Adjust the speed by changing the timeout value
    } else {
      callback();
    }
  }

  $(document).ready(function() {
    typeWriter(textToAnimate, 0, function() {
      console.log('Animation complete!');
    });
  });

  $(function() {
    $(".heart").on("click", function() {
      $(this).toggleClass("is-active");
  
      // Scroll to the months section
      $("html, body").animate({
        scrollTop: $("#introduction").offset().top
      }); // Adjust the duration as needed
    });
  });

  // Define a function that creates a heart element with random properties
function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('hearts');
  heart.style.width = `${Math.floor(Math.random() * 65) + 10}px`;
  heart.style.height = heart.style.width;
  heart.style.left = `${Math.floor(Math.random() * 100) + 1}%`;
  heart.style.background = `rgba(255, ${Math.floor(Math.random() * 25) + 100 - 25}, ${Math.floor(Math.random() * 25) + 100}, 1)`;
  const duration = Math.floor(Math.random() * 5) + 5;
  heart.style.animation = `love ${duration}s ease`;
  return heart;
}

// Get the container element where the hearts will be added
const container = document.querySelector('.main');

// Define a function that removes hearts that have gone off screen
function removeHearts() {
  const hearts = container.querySelectorAll('.hearts');
  hearts.forEach((heart) => {
    const top = parseFloat(getComputedStyle(heart).getPropertyValue('top'));
    const width = parseFloat(getComputedStyle(heart).getPropertyValue('width'));
    if (top <= -100 || width >= 150) {
      heart.remove();
    }
  });
}

// Define a function that repeatedly adds hearts to the container
function addHeart() {
  const heart1 = createHeart();
  const heart2 = createHeart();
  container.appendChild(heart1);
  container.appendChild(heart2);
  setTimeout(removeHearts, 1000);
}

// Start the animation loop
const love = setInterval(addHeart, 500);


 // Get the audio element and the heart element
 const backgroundMusic = document.getElementById('backgroundMusic');
 const heart = document.querySelector('.heart');

 // Add a click event listener to the heart element
 heart.addEventListener('click', function() {
     // Check if the audio is paused, then play it
     if (backgroundMusic.paused) {
         backgroundMusic.play();
     } else {
         // If the audio is already playing, pause it
         backgroundMusic.pause();
     }
 });


 document.getElementById('heart').addEventListener('click', function() {
  document.getElementById('letterContainer').style.display = 'block';
});


//Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down or up, show or hide the button accordingly
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  let lastSection = document.querySelector("body").lastElementChild;
  let lastSectionRect = lastSection.getBoundingClientRect();

  if (
    (window.innerHeight + window.scrollY) >= (document.body.offsetHeight - lastSectionRect.height)
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
