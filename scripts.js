/*let color="blue";

$("#first").click
(
  () => 
  {
    console.log("Yeah, you clicked me");
  }
)


$('#second').click
(
  () => 
  {
    $("#first").text("Change");
  }
)

$('#third').click
(
  () => 
  {
    $("button").css("background", "yellow");
    const input = prompt("Color?");
    color=input;
    $("button").css("background", color);

  }
)*/
/*
let a=0;

$('#counter').append(
  a);

$('#button1').click
(
  () => 
  {
    a++;
    $('#counter').text(a);
  }
);

$('#button2').click
(
  () => 
  {
    a--;
    $('#counter').text(a);
  }
);
*/


$('button').click
(
  () => 
  {
    $('body').append(
      "<li></li>");
    $("li").append("d");
  }
);