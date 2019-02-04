function playpause() {
  var Playing = document.getElementById("audio").paused;
  if (Playing === true){
      document.getElementById("audio").play();
      document.getElementById('playbutton').src='Reasources/pause-button.png';
  } else {
    document.getElementById("audio").pause();
    document.getElementById('playbutton').src='Reasources/play-button.png';
  }
}
document.getElementById("audio").ontimeupdate = function() {track()};
function track() {
  var totaltime = document.getElementById("audio").duration;
  var currenttime = document.getElementById("audio").currentTime;
  var percentdone = (currenttime / totaltime) * 100000000;
  document.getElementById("track").value = percentdone;

  if (currenttime <= 60) {
    document.getElementById("currenttime").innerHTML = "0:" + (("0" + (Math.round(currenttime))).slice(-2));
  }else{
    var currenttimem = Math.floor(currenttime / 60);
    var currenttimes = ("0" + (Math.round(currenttime - (60* currenttimem)))).slice(-2);
    document.getElementById("currenttime").innerHTML = currenttimem + ":" + currenttimes;
  }
}

function trackupdate() {
  var totaltime = document.getElementById("audio").duration;
  var updatedtime = document.getElementById("track").value;
  var newtime = (updatedtime / 100000000 ) * totaltime;
  document.getElementById("audio").currentTime = newtime;
}

 function finaltime() {
   var totaltime = document.getElementById("audio").duration;
   if (totaltime <= 60) {
     document.getElementById("totaltime").innerHTML = "0:" + (("0" + (Math.round(totaltime))).slice(-2));
   }else{
     var totaltimem = Math.floor(totaltime / 60);
     var totaltimes = ("0" + (Math.round(totaltime - (60* totaltimem)))).slice(-2);
     document.getElementById("totaltime").innerHTML = totaltimem + ":" + totaltimes;
   }
 }

 if (audio) {
   window.addEventListener('keydown', function (event) {
     var key = event.which || event.keyCode;
     if (key === 32) {
       event.preventDefault();
       if (document.querySelector('audio').paused === true) {
         document.querySelector('audio').play();
         document.getElementById('playbutton').src='Reasources/pause-button.png';
       }else{
         document.querySelector('audio').pause();
         document.getElementById('playbutton').src='Reasources/play-button.png';
       }
     }
   });
 }

 function skipahead() {
   var currenttime = document.getElementById("audio").currentTime;
   document.getElementById("audio").currentTime = currenttime + 10;
 }

function skipback() {
  var currenttime = document.getElementById("audio").currentTime;
  document.getElementById("audio").currentTime = currenttime - 10;
}

function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

document.getElementById("defaultOpen").click();
