
//Loader Function
$(window).on('load', function() {
  // Retrieve progress bar status, if it is undefined give its default status to false
  var loadedProgress = sessionStorage.getItem('loadedProgress') || false; 
  if(loadedProgress){
    $('.loader_bg').css({'display': "none"});
    document.body.style.overflow = "visible";
  }else{
    $('.loader_bg').css({'display': "block"});
    setTimeout(function () {
      $(".loader_bg").fadeToggle();  
      document.body.style.overflow = "visible";
    }, 3200);
    sessionStorage.setItem('loadedProgress', true);
  }
});

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
function gotoTicTacToe(){
  window.location.href = "games/tictactoe.html";
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
