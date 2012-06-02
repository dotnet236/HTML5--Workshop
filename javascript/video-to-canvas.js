function VideoToCanvas(video, canvas){

  var timeoutInterval = 50;
  var status = 'stopped';
  var drawTimeout;

  var drawVideoFrameToCanvas = function() {

    var ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(
      video,
      0,
      0
    );

    if(status != 'playing') { return; }

    drawTimeout = setTimeout(
      drawVideoFrameToCanvas,
      timeoutInterval
    );
  };

  drawVideoFrameToCanvas();

  return {
    start: function() {
      status = 'playing';
      drawVideoFrameToCanvas();
    },
    stop: function() {
      status = 'stopped';
      clearTimeout(drawTimeout);
    }
  }
}
