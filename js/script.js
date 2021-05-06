
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

//navigation
function gotoMemoryCards(){
  window.location.href = "games/memory_cards.html";
}
function gotoPingPong(){
  window.location.href = "games/ping_pong.html";
}
function gotoSudoku(){
  window.location.href = "games/sudoku.html";
}
function goback(){
  window.location.href = "../index.html";
}


//x function
var icon = document.getElementById("icon");

icon.onmouseover = function() {
  if (this.className === "icon") {
    this.className = "icon open"; 
  } 
};
icon.onmouseout = function(){
  if(this.className === "icon open"){
    this.className = "icon";
  }
};
