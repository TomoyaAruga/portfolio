$(function() {

  // メニューを開く
  $("#show").click(function() {
    $("#menu").addClass("menu-open");
    $("#show").addClass("hidden");
  });
  
  
  // メニューを閉じる
$("#hide").click(function() {
  $("#menu").removeClass("menu-open");
  $("#show").removeClass("hidden");
  });
});

