var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById('myImg');
var img1 = document.getElementById('myImg1');
var img2 = document.getElementById('myImg2');
var img3 = document.getElementById('myImg3');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
var src = document.getElementById('imagebb');
var src1 = document.getElementById('imagegame');
var src2 = document.getElementById('imagegym');
var src3 = document.getElementById('imagepaper');
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = src.src;
    modalImg.alt = this.alt;
    captionText.innerHTML = "Participated in NBA 3 on 3 and won Adidas 3 on3 contest.<br>Played for DRDO basketball club.";
}
img1.onclick = function(){
  modal.style.display = "block";
  modalImg.src = src1.src;
  modalImg.alt = this.alt;
  captionText.innerHTML = "Won Gaming contests in Comicon.<br>Played for gaming team at LXG.";
}
img2.onclick = function(){
  modal.style.display = "block";
  modalImg.src = src2.src;
  modalImg.alt = this.alt;
  captionText.innerHTML = "It's a hobby, where I hit the gym everyday.<br>";
}
img3.onclick = function(){
  modal.style.display = "block";
  modalImg.src = src3.src;
  modalImg.alt = this.alt;
  captionText.innerHTML = "Published a technical paper in my college.<br>Title of paper is Travel Explorer";
}
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}