(function (){
    let music = [
        {
            artist: "Pink Floyd",
            songTitle: "Comfortably Numb",
        },
        {
            artist: "Pink Floyd",
            songTitle: "Time",
        },
        {
            artist: "Pink Floyd",
            songTitle: "Wish You Were Here",
        },
        {
            artist: "Pink Floyd",
            songTitle: "Another Brick in the Wall pt 2",
        },
        {
            artist: "Led Zepplin",
            songTitle: "When the Levee Breaks",
        },
        {
            artist: "Led Zepplin",
            songTitle: "Black Dog",
        },
        {
            artist: "Led Zepplin",
            songTitle: "D'yer Maker",
        },
        {
            artist: "Led Zepplin",
            songTitle: "Stair way to Heaven",
        },
        {
            artist: "Avenged SevenFold",
            songTitle: "Chapter Four",
        },
        {
            artist: "Avenged SevenFold",
            songTitle: "Buried Alive",
        },
        {
            artist: "Avenged SevenFold",
            songTitle: "Hail to the King",
        },
        {
            artist: "Avenged SevenFold",
            songTitle: "Coming Home",
        },
        {
            artist: "Avenged SevenFold",
            songTitle: "Paradigm",
        },
        {
            artist: "Avenged SevenFold",
            songTitle: "Second HeartBeat",
        },
        {
            artist: "ACDC",
            songTitle: "Who made Who",
        },
        {
            artist: "ACDC",
            songTitle: "Back in Black",
        },
        {
            artist: "ACDC",
            songTitle: "You Shook me all Night Long",
        },
        {
            artist: "ACDC",
            songTitle: "Highway to Hell",
        },
        {
            artist: "ACDC",
            songTitle: "Hells Bells",
        },
        {
            artist: "ACDC",
            songTitle: "Rock and Roll aint Noise Pollution",
        },
        {
            artist: "Twenty One Pilots",
            songTitle: "Ode To Sleep",
        },
        {
            artist: "Twenty One Pilots",
            songTitle: "Migrane",
        },
        {
            artist: "Twenty One Pilots",
            songTitle: "Holding On To You",
        },
        {
            artist: "Twenty One Pilots",
            songTitle: "Screen",
        },
        {
            artist: "Rebelution",
            songTitle: "Santa Barbra",
        },
        {
            artist: "Rebelution",
            songTitle: "Closer I Get",
        },
        {
            artist: "Rebelution",
            songTitle: "Lay my Claim",
        },

    ];

    function render(arr){
        let html = `<div>`;
        for(let i = 0; i < arr.length; i++){
            html += `<div id="musicCard"><h2 id="artistHeader">${arr[i].artist}</h2>
                    <p>${arr[i].songTitle}</p></div>`;
        }
        html += "</div>";
        return html;
    }

    const errorModal = document.getElementById("errorModal");
    function displayModal(){
        errorModal.style.display = "flex";
    }
    function removeModal(){
        errorModal.style.display = "none";
    }

    let outputSpot = document.getElementById("outputArea");
    outputSpot.innerHTML = render(music);

    const addMusicButton = document.getElementById("addMusic");
    addMusicButton.addEventListener("click", function(){
       addMusicButton.disabled = true;
       addMusicButton.style.backgroundColor = "lightgrey";
       let newSongTitle = document.getElementById("addSong").value;
       let newSongArtist = document.getElementById("addArtist").value;

       if(newSongArtist.length < 1 || newSongTitle.length < 1){
           displayModal();
           setTimeout(removeModal, 1000);
       } else {

           let newMusic = {
               artist: newSongArtist,
               songTitle: newSongTitle
           }
           music.push(newMusic);
           outputSpot.innerHTML = render(music);
       }
       setTimeout(function () {
           addMusicButton.disabled = false;
           addMusicButton.style.backgroundColor = "black";
       }, 1250);
    });

    const artistSearch = document.getElementById("artistSearch");
    const songSearch = document.getElementById("songSearch");

    let songBucket = [];

    artistSearch.addEventListener("input", function (){
        songBucket = [];
        let currentInput = artistSearch.value;
        music.forEach(song => {
            if(song.artist.toLowerCase().includes(currentInput.toLowerCase())){
                songBucket.push(song);
            }
        });
        outputSpot.innerHTML = render(songBucket);
    });

    songSearch.addEventListener("input", function (){
        songBucket = [];
        let currentInput = songSearch.value;
        music.forEach(song => {
            if(song.songTitle.toLowerCase().includes(currentInput.toLowerCase())){
                songBucket.push(song);
            }
        });
        outputSpot.innerHTML = render(songBucket);
    });

    const notes = document.getElementById("notes");
    notes.addEventListener("mouseenter", function (){
        notes.style.opacity = "1";
    });
    notes.addEventListener("mouseleave", function(){
        notes.style.opacity = ".05";
    });

})();