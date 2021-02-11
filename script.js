function _(query){
    return document.querySelector(query);
}
function _all(query){
    return document.querySelectorAll(query);
}
let songList = [
    {
        thumbnail:"ateam.png",
        audio:"ateam.mp3",
        songname:"A-Team Theme",
        artistname:"Mike Post and Pete Carpenter"
    },
    
    {
        thumbnail:"knight rider.png",
        audio:"halloween knight.mp3",
        songname:"Knight Rider - Halloween Knight",
        artistname:"Don Peake"
    },

    {
        thumbnail:"knight rider.png",
        audio:"halloween knight-2.mp3",
        songname:"Knight Rider - Halloween Knight",
        artistname:"Don Peake"
    },

    {
        thumbnail:"knight rider.png",
        audio:"halloween knight-3.mp3",
        songname:"Knight Rider - Halloween Knight",
        artistname:"Don Peake"
    },

    {
        thumbnail:"knight rider.png",
        audio:"junk yard dog.mp3",
        songname:"Knight Rider - Junk Yard Dog",
        artistname:"Don Peake"
    },

    {
        thumbnail:"knight rider.png",
        audio:"junk yard dog-2.mp3",
        songname:"Knight Rider - Junk Yard Dog",
        artistname:"Don Peake"
    },

    {
        thumbnail:"knight rider.png",
        audio:"junk yard dog-3.mp3",
        songname:"Knight Rider - Junk Yard Dog",
        artistname:"Don Peake"
    },

    {
        thumbnail:"knight rider.png",
        audio:"junk yard dog-4.mp3",
        songname:"Knight Rider - Junk Yard Dog",
        artistname:"Don Peake"
    },

    {
        thumbnail:"knight rider.png",
        audio:"junk yard dog-5.mp3",
        songname:"Knight Rider - Junk Yard Dog",
        artistname:"Don Peake"
    },

    {
        thumbnail:"knight rider.png",
        audio:"junk yard dog-6.mp3",
        songname:"Knight Rider - Junk Yard Dog",
        artistname:"Don Peake"
    },

    {
        thumbnail:"knight rider.png",
        audio:"junk yard dog-7.mp3",
        songname:"Knight Rider - Junk Yard Dog",
        artistname:"Don Peake"
    },

    {
        thumbnail:"knight rider.png",
        audio:"junk yard dog-8.mp3",
        songname:"Knight Rider - Junk Yard Dog",
        artistname:"Don Peake"
    },

    {
        thumbnail:"knight rider.png",
        audio:"mouth of the snake.mp3",
        songname:"Knight Rider - Mouth Of The Snake",
        artistname:"Don Peake"
    },

    {
        thumbnail:"knight rider.png",
        audio:"mouth of the snake-2.mp3",
        songname:"Knight Rider - Mouth Of The Snake",
        artistname:"Don Peake"
    },

    {
        thumbnail:"knight rider.png",
        audio:"mouth of the snake-3.mp3",
        songname:"Knight Rider - Mouth Of The Snake",
        artistname:"Don Peake"
    },

    {
        thumbnail:"knight rider.png",
        audio:"mouth of the snake-4.mp3",
        songname:"Knight Rider - Mouth Of The Snake",
        artistname:"Don Peake"
    },

    {
        thumbnail:"knight rider.png",
        audio:"mouth of the snake-5.mp3",
        songname:"Knight Rider - Mouth Of The Snake",
        artistname:"Don Peake"
    },

    {
        thumbnail:"knight rider.png",
        audio:"mouth of the snake-6.mp3",
        songname:"Knight Rider - Mouth Of The Snake",
        artistname:"Don Peake"
    },

    {
        thumbnail:"knight rider.png",
        audio:"mouth of the snake-7.mp3",
        songname:"Knight Rider - Mouth Of The Snake",
        artistname:"Don Peake"
    },

    {
        thumbnail:"knight rider.png",
        audio:"mouth of the snake-8.mp3",
        songname:"Knight Rider - Mouth Of The Snake",
        artistname:"Don Peake"
    },

    {
        thumbnail:"knight rider.png",
        audio:"mouth of the snake-9.mp3",
        songname:"Knight Rider - Mouth Of The Snake",
        artistname:"Don Peake"
    },

    {
        thumbnail:"knight rider.png",
        audio:"hero.mp3",
        songname:"Knight Rider - Night Of The Juggarnaut",
        artistname:"Tina Turner"
    },

    {
        thumbnail:"knight rider.png",
        audio:"soul survivor.mp3",
        songname:"Knight Rider - Soul Survivor",
        artistname:"Don Peake"
    },

    {
        thumbnail:"knight rider.png",
        audio:"knight 2000 remix.mp3",
        songname:"Knight Rider 2000 Soundtrack",
        artistname:"Jan Hammer"
    },

    {
        thumbnail:"knight rider.png",
        audio:"knight rider remix.mp3",
        songname:"Knight Rider Remix",
        artistname:"Unknown"
    },

    {
        thumbnail:"knight rider.png",
        audio:"knight rider remix-2.mp3",
        songname:"Knight Rider Remix",
        artistname:"Unknown"
    },

    {
        thumbnail:"knight rider.png",
        audio:"knight rider remix-3.mp3",
        songname:"Knight Rider Remix",
        artistname:"Unknown"
    },

    {
        thumbnail:"knight rider.png",
        audio:"knight rider remix-4.mp3",
        songname:"Knight Rider Remix",
        artistname:"Unknown"
    },

    {
        thumbnail:"knight rider.png",
        audio:"knight rider remix-5.mp3",
        songname:"Knight Rider Remix",
        artistname:"Unknown"
    },

    {
        thumbnail:"miami vice.jpg",
        audio:"airport swap.mp3",
        songname:"Airport Swap",
        artistname:"Jan Hammer"
    },

    {
        thumbnail:"miami vice.jpg",
        audio:"angelina flashback.mp3",
        songname:"Angelina Flashback",
        artistname:"Jan Hammer"
    },

    {
        thumbnail:"miami vice.jpg",
        audio:"black mercedes.mp3",
        songname:"Black Mercedes",
        artistname:"Jan Hammer"
    },

    {
        thumbnail:"miami vice.jpg",
        audio:"boat party.mp3",
        songname:"Boat Party",
        artistname:"Jan Hammer"
    },

    {
        thumbnail:"miami vice.jpg",
        audio:"boat party-2.mp3",
        songname:"Boat Party 2",
        artistname:"Jan Hammer"
    },

    {
        thumbnail:"miami vice.jpg",
        audio:"boat race.mp3",
        songname:"Boat Race",
        artistname:"Jan Hammer"
    },

    {
        thumbnail:"miami vice.jpg",
        audio:"clues.mp3",
        songname:"Clues",
        artistname:"Jan Hammer"
    },

    {
        thumbnail:"miami vice.jpg",
        audio:"crockett and tubbs meet.mp3",
        songname:"Crockett And Tubbs Meet",
        artistname:"Jan Hammer"
    },

    {
        thumbnail:"miami vice.jpg",
        audio:"crockett shot.mp3",
        songname:"Crockett Is Shot",
        artistname:"Jan Hammer"
    },

    {
        thumbnail:"miami vice.jpg",
        audio:"crockett shot-2.mp3",
        songname:"Crockett Is Shot 2",
        artistname:"Jan Hammer"
    },

    {
        thumbnail:"miami vice.jpg",
        audio:"crocketts return remix.mp3",
        songname:"Crocketts Return Remix",
        artistname:"Jan Hammer"
    },

    {
        thumbnail:"miami vice.jpg",
        audio:"crocketts return.mp3",
        songname:"Crocketts Return",
        artistname:"Jan Hammer"
    },

    {
        thumbnail:"miami vice.jpg",
        audio:"crocketts theme-2.mp3",
        songname:"Crocketts Theme",
        artistname:"Jan Hammer"
    },

    {
        thumbnail:"miami vice.jpg",
        audio:"el viejo mix.mp3",
        songname:"El Viejo",
        artistname:"Jan Hammer"
    },

    {
        thumbnail:"miami vice.jpg",
        audio:"evan.mp3",
        songname:"Evan",
        artistname:"Jan Hammer"
    },

    {
        thumbnail:"miami vice.jpg",
        audio:"flashback.mp3",
        songname:"Flashback",
        artistname:"Jan Hammer"
    },

    {
        thumbnail:"miami vice.jpg",
        audio:"gina.mp3",
        songname:"Gina",
        artistname:"Jan Hammer"
    },

    {
        thumbnail:"miami vice.jpg",
        audio:"golden triangle.mp3",
        songname:"Golden Triangle",
        artistname:"Jan Hammer"
    },

    {
        thumbnail:"miami vice.jpg",
        audio:"incoming.mp3",
        songname:"Incoming",
        artistname:"Jan Hammer"
    },

    {
        thumbnail:"miami vice.jpg",
        audio:"lombard trial.mp3",
        songname:"Lombard Trial",
        artistname:"Jan Hammer"
    },

    {
        thumbnail:"miami vice.jpg",
        audio:"miami vice remix.mp3",
        songname:"Miami Vice Remix",
        artistname:"Jan Hammer"
    },

    {
        thumbnail:"miami vice.jpg",
        audio:"miami vice theme.mp3",
        songname:"Miami Vice Theme",
        artistname:"Jan Hammer"
    },

    {
        thumbnail:"miami vice.jpg",
        audio:"new york.mp3",
        songname:"New York",
        artistname:"Jan Hammer"
    },

    {
        thumbnail:"miami vice.jpg",
        audio:"one way out.mp3",
        songname:"One Way Out",
        artistname:"Jan Hammer"
    },

    {
        thumbnail:"miami vice.jpg",
        audio:"payback.mp3",
        songname:"Payback",
        artistname:"Jan Hammer"
    },

    {
        thumbnail:"miami vice.jpg",
        audio:"rain.mp3",
        songname:"Rain",
        artistname:"Jan Hammer"
    },

    {
        thumbnail:"miami vice.jpg",
        audio:"remix.mp3",
        songname:"Remix",
        artistname:"Jan Hammer"
    },

    {
        thumbnail:"miami vice.jpg",
        audio:"remix-2.mp3",
        songname:"Remix 2",
        artistname:"Jan Hammer"
    },

    {
        thumbnail:"miami vice.jpg",
        audio:"remix-3.mp3",
        songname:"Remix 3",
        artistname:"Jan Hammer"
    },

    {
        thumbnail:"miami vice.jpg",
        audio:"ricos blues.mp3",
        songname:"Ricos Blues",
        artistname:"Jan Hammer"
    },

    {
        thumbnail:"miami vice.jpg",
        audio:"russian story.mp3",
        songname:"Russian Story",
        artistname:"Jan Hammer"
    },

    {
        thumbnail:"miami vice.jpg",
        audio:"shadow in the dark.mp3",
        songname:"Shadow In The Dark",
        artistname:"Jan Hammer"
    },

    {
        thumbnail:"miami vice.jpg",
        audio:"stones war.mp3",
        songname:"Stones War",
        artistname:"Jan Hammer"
    },

    {
        thumbnail:"miami vice.jpg",
        audio:"texas ranger.mp3",
        songname:"Texas Ranger",
        artistname:"Jan Hammer"
    },

    {
        thumbnail:"miami vice.jpg",
        audio:"the chase.mp3",
        songname:"The Chase",
        artistname:"Jan Hammer"
    },

    {
        thumbnail:"miami vice.jpg",
        audio:"the talk.mp3",
        songname:"The Talk",
        artistname:"Jan Hammer"
    },

    {
        thumbnail:"miami vice.jpg",
        audio:"the tip and sagots theme.mp3",
        songname:"The Tip And Sagots Theme",
        artistname:"Jan Hammer"
    },

    {
        thumbnail:"miami vice.jpg",
        audio:"the trial and the search.mp3",
        songname:"The Trial And The Search",
        artistname:"Jan Hammer"
    },

    {
        thumbnail:"miami vice.jpg",
        audio:"tubbs and valerie.mp3",
        songname:"Tubbs And Valerie",
        artistname:"Jan Hammer"
    },

    {
        thumbnail:"miami vice.jpg",
        audio:"turning point.mp3",
        songname:"Turning Point",
        artistname:"Jan Hammer"
    },

    {
        thumbnail:"miami vice.jpg",
        audio:"wedding.mp3",
        songname:"Wedding",
        artistname:"Jan Hammer"
    },

    {
        thumbnail:"weather channel.jpg",
        audio:"weather channel.mp3",
        songname:"1980s Weather Channel Music",
        artistname:"Weather Channel"
    },

    {
        thumbnail:"weather channel.jpg",
        audio:"weather channel-2.mp3",
        songname:"1980s Weather Channel Music",
        artistname:"Weather Channel"
    }
];

let currentSongIndex = 0;

let player = _(".player"),
    toggleSongList = _(".player .toggle-list");

let main = {
    audio:_(".player .main audio"),
    thumbnail:_(".player .main img"),
    seekbar:_(".player .main input"),
    songname:_(".player .main .details h2"),
    artistname:_(".player .main .details p"),
    prevControl:_(".player .main .controls .prev-control"),
    playPauseControl:_(".player .main .controls .play-pause-control"),
    nextControl:_(".player .main .controls .next-control")
}

toggleSongList.addEventListener("click", function(){
    toggleSongList.classList.toggle("active");
    player.classList.toggle("activeSongList");
});

_(".player .player-list .list").innerHTML = (songList.map(function(song,songIndex){
    return `
       <div class="item" songIndex="${songIndex}">
          <div class="thumbnail">
             <img src="./img/${song.thumbnail}">
          </div>
          <div class="details">
             <h2>${song.songname}</h2>
             <p>${song.artistname}</p>
          </div>
        </div>
    `;
}).join(""));

let volume = document.querySelector('#volume');
    audio = document.querySelector('audio');
console.log(volume);
volume.addEventListener('change', function(e){
    audio.volume = e.currentTarget.value / 100;
});


let songListItems = _all(".player .player-list .list .item");
for(let i=0;i<songListItems.length;i++){
    songListItems[i].addEventListener("click",function(){
        currentSongIndex = parseInt(songListItems[i].getAttribute("songIndex"));
        loadSong(currentSongIndex);
        player.classList.remove("activeSongList");
    });
}

function loadSong(songIndex){
    let song = songList[songIndex];
    main.thumbnail.setAttribute("src","./img/"+song.thumbnail);
    /** document.body.style.background = `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.8)), url("./files/${song.thumbnail}") center no-repeat`;
    document.body.style.backgroundSize = "cover"; **/
    main.songname.innerText = song.songname;
    main.artistname.innerText = song.artistname;
    main.audio.setAttribute("src","./audio/"+song.audio);
    main.seekbar.setAttribute("value",0);
    main.seekbar.setAttribute("min",0);
    main.seekbar.setAttribute("max",0);
    main.audio.addEventListener("canplay",function(){
        main.audio.play();
        if(!main.audio.paused){
            main.playPauseControl.classList.remove("paused");
        }
        main.seekbar.setAttribute("max",parseInt(main.audio.duration));
        main.audio.onended = function(){
            main.nextControl.click();
        }
    })
}
setInterval(function(){
    main.seekbar.value = parseInt(main.audio.currentTime);
},1000);

main.prevControl.addEventListener("click",function(){
    currentSongIndex--;
    if(currentSongIndex < 0){
        currentSongIndex = songList.length + currentSongIndex;
    }
    loadSong(currentSongIndex);
});
main.nextControl.addEventListener("click",function(){
    currentSongIndex =(currentSongIndex+1) % songList.length;
    loadSong(currentSongIndex);
})
main.playPauseControl.addEventListener("click",function(){
    if(main.audio.paused){
        main.playPauseControl.classList.remove("paused");
        main.audio.play();
    } else {
        main.playPauseControl.classList.add("paused");
        main.audio.pause();
    }
});
main.seekbar.addEventListener("change",function(){
    main.audio.currentTime = main.seekbar.value;
});
loadSong(currentSongIndex);
