$('.btn-plus, .btn-minus').on('click', function(e) {
  const isNegative = $(e.target).closest('.btn-minus').is('.btn-minus');
  const input = $(e.target).closest('.input-group').find('input');
  if (input.is('input')) {
    input[0][isNegative ? 'stepDown' : 'stepUp']()
  }
})
$(".nav-item").click(function () {
  // If the clicked element has the active class, remove the active class from EVERY .nav-link>.state element
  if ($(this).hasClass("active")) {
    $(".nav-item").removeClass("active");
  }
  // Else, the element doesn't have the active class, so we remove it from every element before applying it to the element that was clicked
  else {
    $(".nav-item").removeClass("active");
    $(this).addClass("active");
  }
});
/*modal*/
// Get the modal
var modal = document.getElementById("modal");

// Get the <span> element that closes the modal
var close = document.getElementsByClassName("dismiss")[0];

// When the user clicks on <span> (x), close the modal
close.onclick = function() {
  modal.style.display = "none";
  console.log("works")
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

const dropdownMenu = document.querySelector(".dropdown-menu");
const dropdownBtn = document.querySelector(".dropdown-btn");

dropdownBtn.onclick = () => {
  dropdownMenu.classList.toggle("dropdown-active");
};

