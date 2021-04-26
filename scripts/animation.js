var script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.4.1.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);


var darkmode = false;

$( "html" ).ready(function() {
    if (localStorage.getItem('theme') == "true") {
        darkmode = true;
        $("#theme").attr("src","images/lightmode.png");
        $(":root").get(0).style.setProperty("--shadow-color", "var(--color4)");
        $(":root").get(0).style.setProperty("--text-color", "var(--color5)");
        $(":root").get(0).style.setProperty("--text2", "var(--color3)");
        $(":root").get(0).style.setProperty("--bg-color", "var(--color1)");
    }
});

$( "#theme" ).click(change_theme);
function change_theme() {
    if (!darkmode) {
        localStorage.theme = true;
        darkmode = !darkmode;
        $("#theme").attr("src","images/lightmode.png");
        $(":root").get(0).style.setProperty("--shadow-color", "var(--color4)");
        $(":root").get(0).style.setProperty("--text-color", "var(--color5)");
        $(":root").get(0).style.setProperty("--text2", "var(--color3)");
        $(":root").get(0).style.setProperty("--bg-color", "var(--color1)");
    } 
    else {
        localStorage.theme = false;
        darkmode = !darkmode;
        $("#theme").attr("src","images/darkmode.png");
        $(":root").get(0).style.setProperty("--shadow-color", "var(--color1)");
        $(":root").get(0).style.setProperty("--text-color", "var(--color3)");
        $(":root").get(0).style.setProperty("--text2", "var(--color5)");
        $(":root").get(0).style.setProperty("--bg-color", "var(--color2)");
    }
}

$( "#menu" ).click(function() {
    $("#menu_layout").get(0).style.setProperty("display", "flex");
}
);
$( "#close_menu" ).click(function() {
    $("#menu_layout").get(0).style.setProperty("display", "none");
}
);
$(window).resize(function(){
	if (window.screen.width > 849) {
        $("#menu_layout").get(0).style.setProperty("display", "none");
    }
}); 