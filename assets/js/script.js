// js for outer pages like about, contact and other  

var myModal = document.getElementById('myModal')
var myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', function () {
  myInput.focus()
})


function openNav() {
  document.getElementById("mobileNav").style.width = "300px";
}

function closeNav() {
  document.getElementById("mobileNav").style.width = "0";
}

