window.addEventListener("load", function () {
    console.log("Hello World!");


    var player = document.getElementById('player');
    var n = null;

    player.addEventListener('play', function () {
        if (!n) {
            n = new Notification("Playing Monocle Radio");
            n.addEventListener('click', function () {
                n.close();
                window.close();
            });
            n.addEventListener('close', function () {
                n.close();
                window.close();
            });
        }
    });

});
