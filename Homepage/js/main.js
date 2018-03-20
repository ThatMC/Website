$(document).ready(function(){
      $('.parallax').parallax();
      $(".button-collapse").sideNav();
    });

    $(document).ready(function() {
    var interval = 15000;
    var autoRefresh = setTimeout(function() {
            refresh();
        },
        interval);

    var refresh = function() {
        $.getJSON("https://us.mc-api.net/v3/server/info/" + config.server_ip, function(json) {
            if (json.online !== true) {
                $("span#serverStatus").html('<font color="firebrick">Server Offline</font>');
            } else {
                $("span#serverStatus").html('<div class="online"><span style="color: #3a3d4a; font-weight: 800;">' + json.players.online + '</span><span style="font-size: 1.1em;"> players are waiting for you!</span>');
            }
        });
        autoRefresh;
    }
    refresh();

    });