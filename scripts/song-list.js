{
  album.songs.forEach((song, index) => {
      // create song element with template literal syntax
      song.element = $(`
          <tr>
              <td>
               <button>
                 <span class="song-number">${index + 1}</span>
                 <span class="ion-play"></span>
                 <span class="ion-pause"></span>
               </button>
             </td>
              <td>${song.title}</td>
              <td>${player.prettyTime(song.duration)}</td>
          </tr>
      `);

      // click handler for song
      song.element.on('click', event => {
        helper.playPauseAndUpdate(song);
        $('button#play-pause').attr('playState', player.playState);
      });

      // append it to the song list
      $('#song-list').append(song.element);


  });
}
