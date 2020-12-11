(function (){
    const music = [
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
            songTitle: "",
        },
        {
            artist: "Avenged SevenFold",
            songTitle: "",
        },
        {
            artist: "Avenged SevenFold",
            songTitle: "",
        },
        {
            artist: "Avenged SevenFold",
            songTitle: "",
        },
        {
            artist: "Avenged SevenFold",
            songTitle: "",
        },
        {
            artist: "Avenged SevenFold",
            songTitle: "",
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
        }
    ];

    function render(arr){
        let html = "<div>";
        for(let i = 0; i < arr.length; i++){
            html += `<h2>${arr[i].artist}</h2>
                    <p>${arr[i].songTitle}</p>`;
        }
        html += "</div>";
        return html;
    }

    let outputSpot = document.getElementById("outputArea");
    outputSpot.innerHTML = render(music)




})();