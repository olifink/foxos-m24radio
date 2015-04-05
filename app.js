window.addEventListener("load", function () {
    console.log("Hello World!");


    var player = document.getElementById('player');
    var n = null;

    player.addEventListener('play', function () {
        if (!n) {
            // todo: find a nice origin for the webapp manifest
            var img = 'app://mywebapp.com/icons/icon60x60.png';
            n = new Notification("Now playing monocle radio", {body: "Tap this to stop anytime.", icon:img});
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

    player.addEventListener('error', function () {
        showError(true);
        player.pause();
    });
    player.addEventListener('canplay', function () {
        showError(false);
    });


    function showError(visible) {
        var error = document.getElementById('error');
        if (visible) {
            error.setAttribute("style", "visibility:visible");
        }
        else {
            error.setAttribute("style", "visibility:hidden");
        }
    }
});
