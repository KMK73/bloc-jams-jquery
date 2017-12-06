{
  $('button#play-pause').on('click', function() {
    player.playPause();
    $(this).attr('playState', player.playState);
  });

  // next button
  $('button#next').on('click', function(){
    if (player.playState !== 'playing') { return; }

    const currentSongIndex = album.songs.indexOf(player.currentlyPlaying);
    const nextSongIndex = currentSongIndex + 1;
    if (nextSongIndex >= album.songs.length) { return; }
    const nextSong = album.songs[nextSongIndex];

    //start next song
    player.playPause(nextSong);
  });

  // previous buttons
  $('button#previous').on('click', function(){
    if(player.playState !== 'playing'){ return;}

    //get current song
    const currentSongIndex = album.songs.indexOf(player.currentlyPlaying);
    const previousSongIndex = currentSongIndex - 1;
    //check if previous
    if(previousSongIndex < 0){ return; }

    //get previous songs
    const previousSong = album.songs[previousSongIndex];

    //play previous song
    player.playPause(previousSong);
  });
}
