window.addEventListener("load", function () {
    console.log("Hello World!");

    //selectButton('buttonPlay');

    var player = document.getElementById('player');
    var buttonPlay = document.getElementById('buttonPlay');
    var buttonPause = document.getElementById('buttonPause');
    var buttonRetry = document.getElementById('buttonRetry');
    var notification = null;

    buttonPlay.addEventListener('click', function () {
        player.play();
    });

    buttonRetry.addEventListener('click', function () {
        player.load();
        player.play();
    });

    buttonPause.addEventListener('click', function () {
        player.pause();
        selectButton('buttonPlay');
    });


    player.addEventListener('canplay', function () {
        showElementWithId('error', false);
        if (!notification) {
            var img = 'app://zapthings.com/icons/icon128x128.png';
            notification = new Notification("Now playing monocle radio", {
                body: "Tap this to stop listening.",
                icon: img
            });
            notification.addEventListener('click', function () {
                notification.close();
                window.close();
            });
            notification.addEventListener('close', function () {
                notification.close();
                window.close();
            });
        }
    });

    player.addEventListener('play', function () {
        selectButton('buttonPause');
    });

    player.addEventListener('error', function () {
        showElementWithId('error', true);
        selectButton('buttonRetry');
    });

    function showElementWithId(id, visible) {
        //console.log("show %s - %s", id, visible);
        var element = document.getElementById(id);
        if (visible) {
            element.removeAttribute('hidden');
        }
        else {
            element.setAttribute('hidden', 'hidden');
        }
    }

    function selectButton(id) {
        const names = ['buttonPlay', 'buttonPause', 'buttonRetry'];
        for (var i in  names) {
            showElementWithId(names[i], names[i] === id);
        }

    }
});
