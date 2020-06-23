for (var i=0;i<document.querySelectorAll(".drum").length;i++){
document.querySelectorAll("button")[i].addEventListener("click",function(){
  //var a=new Audio("sounds/tom-1.mp3");
  //a.play();
      var  input =this.innerHTML;
      musicplay(input);
      animation(input);
});
}
 document.addEventListener("keypress",function(event){
    var c= event.key;
     musicplay(c);
     animation(c);
 });

 function musicplay(choice)
 {
    switch(choice)
    {
      case "w":
      {
        var s1=new Audio("sounds/crash.mp3");
        s1.play();
        break;
      }
      case "a":
      {
        var s2=new Audio("sounds/kick-bass.mp3");
        s2.play();
          break;
      }
      case "s":
      {
        var s3=new Audio("sounds/snare.mp3");
        s3.play();
          break;
      }
      case "d":
      {
        var s4=new Audio("sounds/tom-1.mp3");
        s4.play();
          break;
      }
      case "j":
      {
        var s5=new Audio("sounds/tom-2.mp3");
        s5.play();
          break;
      }
      case "k":
      {
        var s6=new Audio("sounds/tom-3.mp3");
        s6.play();
          break;
      }
      case "l":
      {
        var s7=new Audio("sounds/tom-4.mp3");
        s7.play();
          break;
      }
      default :
        alert("wrong key pressed");
          break;
    }
 }


function animation( ani)
{
  document.querySelector("."+ani).classList.add("pressed");
  setTimeout(function(){
    document.querySelector("."+ani).classList.remove("pressed");
  },100);
}
