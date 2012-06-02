function WebcamToVideo(video, canvas) {

  var videoToCanvas;
  var URL = window.URL || window.webkitURL;

  navigator.webkitGetUserMedia(
    {audio:true, video:true},
    function(stream) {
      var objectUrl = URL.createObjectURL(stream);
      video.src = objectUrl;
      video.play();
      videoToCanvas = new VideoToCanvas(video, canvas);
      videoToCanvas.start();
    }
  );

  return {
    start: function() {
      if(videoToCanvas) {
        videoToCanvas.start();
      }
    },

    stop: function(){
      if(videoToCanvas) {
        videoToCanvas.stop();
      }
    }
  }
}
