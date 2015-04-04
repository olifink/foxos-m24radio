window.addEventListener("load", function () {
    console.log("Hello World!");


    var player = document.getElementById('player');
    var notification;

    var stopPlayer = function () {
        window.close();
        notification.clear();
    };

    player.addEventListener('play', function () {
        if(!notification) {
            notification = new Notification("Monocle Radio Live");
            notification.addEventListener('click', function () {
                stopPlayer();
            });
            notification.addEventListener('close', function () {
                stopPlayer();
            });
        }
    });
});
