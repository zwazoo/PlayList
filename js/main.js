;(function(){

    const playlist = [{
        author: "led zeppelin",
        song: "stairway to heaven",
        duration: "2:03"
    },
    {
        author: "queen",
        song: "bohemian rhapsody",
        duration: "2:30"
    },
    {
        author: "lynyrd skynyrd",
        song: "free bird",
        duration: "1:56"
    },
    {
        author: "deep purple",
        song: "smoke on the water",
        duration: "3:03"
    },
    {
        author: "jimi hendrix",
        song: "all along the watchtower",
        duration: "2:53"
    },
    {
        author: "AC/DC",
        song: "back in black",
        duration: "2:43"
    },
    {
        author: "queen",
        song: "we will rock you",
        duration: "2:13"            
    },
    {
        author: "metallica",
        song: "enter sandman",
        duration: "3:03"            
    }
];

    //Select ul where we will put our playlist
    const trackUl = document.querySelector('.ba-playlist-list');

    //Get li track templ
    const liTmpl = document.getElementById('li-tmpl').innerHTML;
    
    let trackHTML = '';

    trackUl.innerHTML = '';
    
    playlist.forEach(function (track) {
        trackHTML = liTmpl
        .replace(/{{name}}/ig, track.song)
        .replace(/{{author}}/ig, track.author)
        .replace(/{{duration}}/ig, track.duration);

        trackUl.innerHTML += trackHTML;
    });

})();
