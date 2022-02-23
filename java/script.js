// share button
function copy() {
  navigator.clipboard.writeText('http://127.0.0.1:5501/blogpost.html')
  if (writeText = 'http://127.0.0.1:5501/blogpost.html') {
    let copypop = document.getElementById('copypop').style.display = 'block'
    setInterval(() => {
      let copypop = document.getElementById('copypop').style.display = 'none'

    }, 3000);
  }
  else {
    alert('no')
  }
}

let songitems = Array.from(document.getElementsByClassName('songitems'));
let playsg = new Audio('audio/cradle.mp3')
let song = [
  { songname: "CRDLE", filepath: "audio/cradle.mp3", coverpath: "song-pics/cradle.jpg" },
  { songname: "MY LAST MADE", filepath: "audio/my last made.mp3", coverpath: "song-pics/last made.jpg" },
  { songname: "SHAPE OF YOU", filepath: "audio/shape 0f you.mp3", coverpath: "song-pics/shape.jpg" }
  ,
  { songname: "Joker BGM Song", filepath: "audio/shape 0f you.mp3", coverpath: "song-pics/joker.jpg" }
  ,
  { songname: "Prada", filepath: "audio/shape 0f you.mp3", coverpath: "song-pics/top.jpg" }
  ,
  { songname: "panda", filepath: "audio/shape 0f you.mp3", coverpath: "song-pics/top2.jpg" }
  ,
  { songname: "You are last", filepath: "audio/shape 0f you.mp3", coverpath: "song-pics/top4.jpg" }
]
// search
function searchresults(){
  let input=document.getElementById('input');
  let filter=input.value.toUpperCase();
  songitems.forEach(
    (element,i) => {
     let ee= element.getElementsByTagName('h4')[0].innerText=song[i].songname
     let iname=ee.toUpperCase()
     if(iname.indexOf(filter)>-1){
        document.getElementById('li').style.display='none'
     }
     else{
       console.log('not')
     }
    }
  )


}



// search


songitems.forEach(
 
  (element,i) => {
    element.getElementsByTagName('img')[0].src = song[i].coverpath
    element.getElementsByTagName('h4')[0].innerText=song[i].songname
// element.getElementsByTagName(h2).innerText=song[i].songname
  }
)


// update song list
let n = song.length
document.getElementById("song-menu").innerText = n


let player = document.getElementById('player')
player.addEventListener('click', () => {
  if (playsg.paused || playsg.currentTime <= 0) {
    playsg.play()
    player.classList.remove('fa-play-circle');
    player.classList.add('fa-pause-circle');

  }
  else {
    playsg.pause()
    player.classList.remove('fa-pause-circle');
    player.classList.add('fa-play-circle');
  }

}
)


playsg.addEventListener('timeupdate', () => {
  progress = ((playsg.currentTime / playsg.duration) * 100)
  myprogressbar.value = progress
  document.getElementById('tp').innerText = format(playsg.currentTime);

  function format(time) {
    // Hours, minutes and seconds
    var hrs = ~~(time / 3600);
    var mins = ~~((time % 3600) / 60);
    var secs = ~~time % 60;

    // Output like "1:01" or "4:03:59" or "123:03:59"
    var ret = "";
    if (hrs > 0) {
      ret += "" + hrs + ":" + (mins < 10 ? "0" : "");
    }
    ret += "" + mins + ":" + (secs < 10 ? "0" : "");
    ret += "" + secs;
    return ret;
  }
})



myprogressbar.addEventListener('change', () => {
  playsg.currentTime = myprogressbar.value * playsg.duration / 100;

})


