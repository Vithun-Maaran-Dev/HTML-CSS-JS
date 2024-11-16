
let musicsList = [
     {
          id: 1
          , name: `Vaadi Pulla Vaadi`
          , artist: `HipHop Adhi`
          , album: `Meesaya Murukku`
          , genreId: 4
          , imgSRC: `https://static.qobuz.com/images/covers/11/17/3614976991711_600.jpg`
          , musicSRC: `https://dl1.jattpendu.com/download/128k-dhzbp/Vaadi-Pulla-Vaadi-(From-%22Meesaya-Murukku%22).mp3`
     },
     {
          id: 2
          , name: `Kavalayaa`
          , artist: `Shilpa Rao`
          , album: `Jailer`
          , genreId: 3
          , imgSRC: `https://masstamilan.cool/siteuploads/thumb/sft1/37_resize2x_250x250.webp`
          , musicSRC: `https://masstamilan.cool/files/download/id/37`
     },
     {
          id: 3
          , name: `Vanthe Bharath`
          , artist: `AR Rahuman`
          , album: `Vanthe Bharath - India`
          , genreId: 2
          , imgSRC: ``
          , musicSRC: `https://pagal.com.in/assets/images/products/Jai_Ho_(Slumdog_Millionaire)_128_Kbps.mp3`
     },
     {
          id: 4
          , name: `Acho Acho Achacho`
          , artist: `HipHop Adhi`
          , album: `Aranmanai - 4`
          , genreId: 3
          , imgSRC: `https://masstamilan.cool/siteuploads/thumb/sft1/139_resize2x_250x250.webp`
          , musicSRC: `https://masstamilan.cool/files/download/id/139`
     },
     {
          id: 5
          , name: `Urugi Urugi Ponadhadi`
          , artist: `Siddhu Kumar`
          , album: `Joe`
          , genreId: 2
          , imgSRC: `https://masstamilan.cool/siteuploads/thumb/sft1/127_resize2x_250x250.webp`
          , musicSRC: `https://masstamilan.cool/files/download/id/127`
     },
     {
          id: 6
          , name: `Beep Song`
          , artist: `Simbu`
          , album: `Beep Song`
          , genreId: 3
          , imgSRC: `https://masstamilan.cool/siteuploads/thumb/sft1/63_resize2x_250x250.webp`
          , musicSRC: `https://masstamilan.cool/files/download/id/63`
     },
     {
          id: 7
          , name: `Railing Oligal`
          , artist: `Govind Vasantha`
          , album: `Blue Star`
          , genreId: 5
          , imgSRC: `https://masstamilan.cool/siteuploads/thumb/sft1/47_resize2x_250x250.webp`
          , musicSRC: `https://masstamilan.cool/files/download/id/47`
     },
     {
          id: 8
          , name: `Naa Ready Tha Varava`
          , artist: `Anirudh Ravichander`
          , album: `Leo`
          , genreId: 4
          , imgSRC: `https://masstamilan.cool/siteuploads/thumb/sft1/22_resize2x_250x250.webp`
          , musicSRC: `https://masstamilan.cool/files/download/id/22`
     },
     {
          id: 9
          , name: `Hukum`
          , artist: `Anirudh Ravichander`
          , album: `Jailer`
          , genreId: 3
          , imgSRC: `https://masstamilan.cool/siteuploads/thumb/sft1/20_resize2x_250x250.webp`
          , musicSRC: `https://masstamilan.cool/files/download/id/20`
     },
     {
          id: 10
          , name: `En Roja Neeye`
          , artist: `Hesham Abdul Wahab`
          , album: `Kushi`
          , genreId: 5
          , imgSRC: `https://masstamilan.cool/siteuploads/thumb/sft1/19_resize2x_250x250.webp`
          , musicSRC: `https://masstamilan.cool/files/download/id/19`
     },


]

const listsGenres = [
     { id: 1, genreName: `All` },
     { id: 2, genreName: `Pop` },
     { id: 3, genreName: `Rock` },
     { id: 4, genreName: `Hip Hop` },
     { id: 5, genreName: `Melodies` },
];

let yourPlaylists = [
     {
          id: 1,
          playlistName: 'Pop songs',
          playlistSongsId: [9]
     }
]

const playlistSection = document.querySelector(`.playlist`);

let playlistSeletedID = 0;

headerView();

dropDown(listsGenres);

//intial song lists
addSongToSongList(1);

//onClick od songsList
let songListClickID = 0;

//intial song will paly
let currentMusicIndex = 0;
playSong();

//calling playlist section
playlistSectionDiv();

function headerView() {
     const LogoParEl = document.querySelector(`.app-logo`)
     const toggleParEl = document.querySelector(`.toggle`)
     const body = document.querySelector(`body`)

     const logoEL = document.createElement(`H1`);
     logoEL.textContent = `UrRythm`
     logoEL.classList.add(`logo`)

     const toggleBtn = document.createElement(`button`);
     toggleBtn.textContent = ` `
     toggleBtn.classList.add(`toggle-btn`, `theme-dark`)

     LogoParEl.append(logoEL);
     toggleParEl.append(toggleBtn);

     toggleBtn.addEventListener(`click`, () => {
          if (toggleBtn.classList.contains(`theme-dark`)) {
               toggleBtn.classList.remove(`theme-dark`);
               toggleBtn.classList.add(`theme-bright`)
               body.classList.remove(`theme-bright`)
               body.classList.add(`theme-dark`)
          }
          else {
               toggleBtn.classList.remove(`theme-bright`);
               toggleBtn.classList.add(`theme-dark`)
               body.classList.remove(`theme-dark`)
               body.classList.add(`theme-bright`)
          }
     })
}

function dropDown(listsGenres) {
     const filterLable = document.createElement(`label`);
     filterLable.textContent = `Filter by Genre : `;

     const filterDrpDwn = document.createElement(`select`);
     filterDrpDwn.name = `genre-drpdwn`;
     filterDrpDwn.id = `genre-drpdwn`;
     filterDrpDwn.title = `Select Genre`

     listsGenres.forEach((genre) => {
          const filterDrpDwnOpt = document.createElement(`option`);
          filterDrpDwnOpt.append(genre.genreName);
          filterDrpDwnOpt.value = genre.id;
          filterDrpDwn.append(filterDrpDwnOpt);
     })

     const musicDrpDwnEL = document.querySelector(`.filter-music-drpdwn`);
     musicDrpDwnEL.append(filterLable, filterDrpDwn)


     filterDrpDwn.addEventListener('change', (e) => {

          const genreDrpDwn = document.getElementById(`genre-drpdwn`).value
          addSongToSongList(parseInt(genreDrpDwn));

     })

}

function addSongToSongList(genreDrpDwnVal) {

     const songListEL = document.querySelector(`.song-list`)
     songListEL.innerHTML = ``;

     if (genreDrpDwnVal === 1) {

          musicsList.forEach((music) => {
               createSongView(songListEL, music);
          })
     }
     else {
          const filteredMusics = musicsList.filter(music => music.genreId === genreDrpDwnVal)

          filteredMusics.map((filterMusic) => {
               createSongView(songListEL, filterMusic);
          })

     }

}

function createSongView(songListEL, music) {

     const songDiv = document.createElement('div');
     songDiv.setAttribute('song-id', music.id)
     songDiv.classList.add('song')

     const imgDiv = document.createElement('div');
     imgDiv.classList.add('music-img')

     const img = document.createElement('img');
     img.src = music.imgSRC !== `` ? music.imgSRC : `https://www.pngitem.com/pimgs/m/116-1163086_music-icon-hd-png-download.png`;
     img.alt = 'Album Pic';

     const songDetailsDiv = document.createElement('div');
     songDetailsDiv.classList.add('music-details');

     const songName = document.createElement('p');
     songName.classList.add('music-name');
     songName.textContent = music.name;

     const songAlbumName = document.createElement('p');
     songAlbumName.classList.add('music-album');
     songAlbumName.textContent = music.album;

     songDetailsDiv.append(songName, songAlbumName);
     imgDiv.appendChild(img);

     songDiv.appendChild(imgDiv);
     songDiv.appendChild(songDetailsDiv);
     songListEL.append(songDiv);

     songDiv.addEventListener(`click`, () => {
          const songID = songDiv.getAttribute(`song-id`)
          songListClickID = parseInt(songID);
          playSong()
     });
}

function playSong() {

     if (songListClickID !== 0) {

          // Find the music item by ID
          const selectedMusic = musicsList.find(music => music.id === songListClickID);

          if (selectedMusic) {
               const { id, name, album, artist, imgSRC, musicSRC } = selectedMusic;
               createMusicPlayer(id, name, album, artist, imgSRC, musicSRC);
          }

          // Reset the click ID after handling
          songListClickID = 0;
     }
     else {
          const { id, name, album, artist, imgSRC, musicSRC } = musicsList[currentMusicIndex]
          createMusicPlayer(id, name, album, artist, imgSRC, musicSRC);
     }
}

function createMusicPlayer(id, name, album, artist, imgSRC, musicSRC) {
     const musicPlayerImageEL = document.querySelector(`.music-player-image`);
     musicPlayerImageEL.innerHTML = ``

     const musicIMG = document.createElement(`img`);
     musicIMG.src = imgSRC !== `` ? imgSRC : `https://www.pngitem.com/pimgs/m/116-1163086_music-icon-hd-png-download.png`;
     musicIMG.alt = `Album Picture`;

     const musicPlayerDetails = document.createElement(`div`);
     musicPlayerDetails.classList.add('music-player-detail');

     const musicPlayerName = document.createElement(`p`);
     musicPlayerName.classList.add('music-player-name');
     musicPlayerName.textContent = `${name}`

     const musicPlayerAlbum = document.createElement(`p`);
     musicPlayerAlbum.classList.add('music-player-album');
     musicPlayerAlbum.textContent = `${album}, ${artist}`


     musicPlayerDetails.append(musicPlayerName, musicPlayerAlbum);
     musicPlayerImageEL.append(musicIMG, musicPlayerDetails)


     const musicControlsEL = document.querySelector(`.music-controls`);
     musicControlsEL.innerHTML = ``;

     const musicAudio = document.createElement(`audio`);
     musicAudio.src = musicSRC;
     musicAudio.id = `audio-player`;
     musicAudio.type = "audio/mpeg"; // Set the audio type here
     musicAudio.controls = true;
     musicAudio.autoplay = true;
     musicAudio.textContent = "Your browser does not support the audio element.";

     const musicPlayerBtn = document.createElement(`div`);
     musicPlayerBtn.classList.add(`music-player-button`);

     const nextBtn = document.createElement(`button`);
     nextBtn.classList.add(`btn`);
     nextBtn.textContent = `->`

     const prevBtn = document.createElement(`button`);
     prevBtn.classList.add(`btn`);
     prevBtn.textContent = `<-`

     musicPlayerBtn.append(prevBtn, nextBtn)


     const musicPayerPlaylist = document.createElement(`div`);
     musicPayerPlaylist.classList.add(`music-player-playlist`);

     const addPlaylistBtn = document.createElement(`button`);
     addPlaylistBtn.classList.add(`btn`);
     addPlaylistBtn.id = `music-player-playlist-btn`
     addPlaylistBtn.textContent = `Add to Playlist`;


     musicPayerPlaylist.append(addPlaylistBtn)



     const hiddenSongID = document.createElement(`input`);
     hiddenSongID.id = `add-to-playlistSongs`;
     hiddenSongID.name = `add-to-playlistSongs`
     hiddenSongID.value = id;
     hiddenSongID.type = `hidden`;

     musicControlsEL.append(musicAudio, musicPlayerBtn, musicPayerPlaylist, hiddenSongID);

     nextBtn.addEventListener(`click`, nextSong);
     prevBtn.addEventListener(`click`, prevSong);

     addPlaylistBtn.addEventListener(`click`, () => {
          const songId = document.getElementById(`add-to-playlistSongs`).value;

          if (playlistSeletedID === 0) {
               alert(`Please select Playlist.`)
          }
          else {
               const isPlaylist = yourPlaylists.find(playlist => playlist.id === playlistSeletedID)

               if (isPlaylist) {
                    isPlaylist.playlistSongsId.push(parseInt(songId));
                    RenderPlaylistSongs(isPlaylist.id);
               }
          }
     });

}


function nextSong() {
     const totalMusic = musicsList.length - 1;
     currentMusicIndex = currentMusicIndex === totalMusic ? 0 : ++currentMusicIndex;
     playSong();
}

function prevSong() {
     const totalMusic = musicsList.length - 1;
     currentMusicIndex = currentMusicIndex <= 0 ? totalMusic : --currentMusicIndex;
     playSong();
}

function playlistSectionDiv() {

     playlistControls();
     playlists();
     RenderPlaylistSongs(0);

}

function playlistControls() {

     const playlistControls = document.querySelector(`.playlist-conrtol`);
     playlistControls.innerHTML = ``;

     const txtPlaylist = document.createElement(`input`);
     txtPlaylist.type = `text`;
     txtPlaylist.id = `txt-Playlist`
     txtPlaylist.name = `txt-Playlist`
     txtPlaylist.placeholder = `Please Enter Playlist Name`;

     const btnCreatePlaylist = document.createElement(`button`);
     btnCreatePlaylist.classList.add(`btn-playlist`);
     btnCreatePlaylist.id = 'btn-crt-playlist';
     btnCreatePlaylist.name = 'btn-crt-playlist';
     btnCreatePlaylist.textContent = `New Playlist`;

     playlistControls.append(txtPlaylist, btnCreatePlaylist);
     playlistSection.append(playlistControls);

     btnCreatePlaylist.addEventListener(`click`, () => {
          const txtValue = document.getElementById(`txt-Playlist`).value;

          if (txtValue !== "") {
               const playlistObj = {
                    id: yourPlaylists.length + 1,
                    playlistName: txtValue,
                    playlistSongsId: []
               }

               yourPlaylists.push(playlistObj);
               playlistSeletedID = 0;
               playlistSectionDiv();

          }
          else {
               alert(`please enter playlist name to add.`)
          }

     })


}


function playlists() {

     const allPlaylist = document.querySelector(`.all-playlist`);

     allPlaylist.innerHTML = ``;

     const playlistTag = document.createElement(`p`);
     playlistTag.classList.add(`playlist-tag`);
     playlistTag.textContent = `Your Playlist`;

     const playlistCollection = document.createElement(`div`);
     playlistCollection.classList.add(`playlist-collection`);

     yourPlaylists.forEach((yourPlaylist) => {
          const eachPlaylist = document.createElement(`div`);
          eachPlaylist.classList.add(`each-playlist`);

          const playlistName = document.createElement(`p`);
          playlistName.classList.add(`playlist-tag`);
          playlistName.textContent = `${yourPlaylist.playlistName}`;

          const playlistBtn = document.createElement(`button`);
          playlistBtn.classList.add(`btn-playlist`);
          playlistBtn.id = `${yourPlaylist.id}`
          playlistBtn.name = `${yourPlaylist.id}`
          playlistBtn.textContent = `Select`;

          eachPlaylist.append(playlistName, playlistBtn);
          playlistCollection.appendChild(eachPlaylist);

          playlistBtn.addEventListener(`click`, () => {

               playlistSeletedID = yourPlaylist.id;
               RenderPlaylistSongs(yourPlaylist.id);
          })

     });

     allPlaylist.append(playlistTag, playlistCollection)

     playlistSection.appendChild(allPlaylist);
}

function RenderPlaylistSongs(playlistID) {

     const playlistSongsCollection = document.querySelector(`.playlist-song-collections`);
     playlistSongsCollection.innerHTML = ``;

     const playlistTag = document.createElement(`p`);
     playlistTag.classList.add(`playlist-tag-name`, `playlist-tag`)
     playlistTag.style.borderBottom = `2px solid brown`


     const playlistSongs = document.createElement(`div`);
     playlistSongs.classList.add(`playlist-songs`);

     const songListEL = document.createElement(`div`);
     songListEL.classList.add(`song-list`);

     songListEL.innerHTML = ``;

     if (playlistID === 0) {
          playlistTag.textContent = `Playlist Songs`;

          songListEL.textContent = `Please select Playlist.`
          songListEL.style.textAlign = `center`;
          songListEL.style.padding = `5rem`;

     }
     else {

          let yourPlaylist = yourPlaylists.find(playlist => playlist.id === playlistID);
          playlistTag.textContent = yourPlaylist.playlistName;

          if (yourPlaylist.playlistSongsId.length > 0) {
               yourPlaylist.playlistSongsId.forEach((songsID) => {

                    let song = musicsList.find(musicID => musicID.id === songsID)

                    if (song) {

                         playlistSongsEL(songListEL, song);

                    }
               });
          }
          else {
               songListEL.textContent = `No songs in ${yourPlaylist.playlistName} playlist.`
               songListEL.style.textAlign = `center`;
               songListEL.style.padding = `5rem`;
          }


     }

     playlistSongs.append(songListEL);
     playlistSongsCollection.append(playlistTag, playlistSongs)
     playlistSection.append(playlistSongsCollection);
}

function playlistSongsEL(songListEL, music) {

     const songDiv = document.createElement('div');
     songDiv.setAttribute('song-id', music.id)
     songDiv.classList.add('song')

     const imgDiv = document.createElement('div');
     imgDiv.classList.add('music-img')

     const img = document.createElement('img');
     img.src = music.imgSRC !== `` ? music.imgSRC : `https://www.pngitem.com/pimgs/m/116-1163086_music-icon-hd-png-download.png`;
     img.alt = 'Album Pic';

     const songDetailsDiv = document.createElement('div');
     songDetailsDiv.classList.add('music-details');

     const songName = document.createElement('p');
     songName.classList.add('music-name');
     songName.textContent = music.name;

     const songAlbumName = document.createElement('p');
     songAlbumName.classList.add('music-album');
     songAlbumName.textContent = music.album;

     songDetailsDiv.append(songName, songAlbumName);
     imgDiv.appendChild(img);

     songDiv.appendChild(imgDiv);
     songDiv.appendChild(songDetailsDiv);

     songListEL.append(songDiv);

     songDiv.addEventListener(`click`, () => {
          const songID = songDiv.getAttribute(`song-id`)
          songListClickID = parseInt(songID);
          playSong()
     });

}
