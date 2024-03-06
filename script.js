window.onload = function() {
  var modal = document.getElementById("myModal");
  modal.style.display = "none"; 

  var images = document.querySelectorAll(".gallery img");
  var modalImg = document.getElementById("modal-img");
  images.forEach(function(img) {
    img.onclick = function() {
      modal.style.display = "flex"; 
      modalImg.src = this.src;
    }
  });

  var span = document.getElementsByClassName("close")[0];

  span.onclick = function() {
    modal.style.display = "none"; 
  }

  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none"; 
    }
  }
}
