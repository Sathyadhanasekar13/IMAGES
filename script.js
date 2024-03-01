window.onload = function() {
  var modal = document.getElementById("myModal");
  modal.style.display = "none"; // Hide the modal by default

  var images = document.querySelectorAll(".gallery img");
  var modalImg = document.getElementById("modal-img");
  images.forEach(function(img) {
    img.onclick = function() {
      modal.style.display = "flex"; // Show the modal when an image is clicked
      modalImg.src = this.src;
    }
  });

  var span = document.getElementsByClassName("close")[0];

  span.onclick = function() {
    modal.style.display = "none"; // Hide the modal when the close button is clicked
  }

  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none"; // Hide the modal when clicking outside of it
    }
  }
}