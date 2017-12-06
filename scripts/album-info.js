{
  $("#album-title").text(album.title);
  $("img#album-cover-art").attr('src', album.albumArtUrl);
  //set artist
  $('.artist').text(album.artist);
  //set release info
  $('#release-info').text(album.releaseInfo);
}
