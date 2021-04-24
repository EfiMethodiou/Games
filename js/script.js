
//Loader Function
setTimeout(function () {
  $(".loader_bg").fadeToggle();
}, 3500);




//POPUP infomation paragraph
function openinfo(){
  document.getElementById("info_paragBackg").style.display = "block";
  document.getElementById("info_parag").style.display = "block";
}
function closeinfo(){
  document.getElementById("info_paragBackg").style.display = "none";
  document.getElementById("info_parag").style.display = "none";
}
