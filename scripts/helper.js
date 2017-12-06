class Helper {

    playPauseAndUpdate (song) {
      // call helper.playPauseAndUpdate
      player.playPause(song);
      //update total time
      $('#time-control .total-time').text( player.prettyTime(song.duration) );
    }
}
// initiate the class as a variable
const helper = new Helper();
