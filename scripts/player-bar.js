{
  $('button#play-pause').on('click', function() {
    helper.playPauseAndUpdate();
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
    helper.playPauseAndUpdate(nextSong);
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
    helper.playPauseAndUpdate(previousSong);
  });

  // detect song range change
  $('#time-control input').on('input', function (event) {
      player.skipTo(event.target.value);
  });

  // song input range interval
  setInterval(() => {
    if(player.playState !== 'playing'){ return; }

    // get percentage of song playing
    const currentTime = player.getTime(); // part of song played
    const duration = player.getDuration(); // whole song
    const percent = (currentTime/duration) * 100;
    //show current time
    $('#time-control .current-time').text( player.prettyTime(currentTime) );

    //set the input value of the range
    $('#time-control input').val(percent);
  }, 1000);

  // volume control event
  $('#volume-control input').on('input', function (event) {
      player.setVolume(event.target.value);
  });
}
