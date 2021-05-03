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

var acc = document.getElementsByClassName("question");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}


$( "#submit_message" ).click(function() {
    var inputname = $('#fname').val();
    var inputsurname = $('#lname').val();
    var inputmail = $('#mymail').val();
    var inputphone = $('#myphone').val();
    var inputmessage = $('#message').val();
    if (inputname == '') {
        alert('Το πεδίο Όνομα δέν μπορεί να είναι κενό');
    }
    else if (inputname.match(/[^Α-Ωα-ωA-Za-z]+/g)) {
        alert('Το πεδίο Όνομα δέχεται μόνο γράμματα(λατινικά ή ελληνικά)');
    }
    else if (inputsurname == '') {
        alert('Το πεδίο Επώνυμο δέν μπορεί να είναι κενό');
    }
    else if (inputsurname.match(/[^Α-Ωα-ωA-Za-z]+/g)) {
        alert('Το πεδίο Επώνυμο δέχεται μόνο γράμματα(λατινικά ή ελληνικά)');
    }
    else if (!inputmail.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
        alert('Αυτό το mail δεν είναι έγκυρο');
    }
    else if (inputmail == '') {
        alert('Το πεδίο mail δέν μπορεί να είναι κενό');
    }
    else if (inputphone == '') {
        alert('Το πεδίο κινητό δέν μπορεί να είναι κενό');
    }
    else if (inputphone.match(/[^0-9]+/g)) {
        alert('Το πεδίο κινητό δέχεται μόνο αριθμούς');
    }
    else if (inputphone.length < 10) {
        alert('Το πεδίο κινητό πρεπει να έχει ακριβώς 10 ψηφία');
    }
    else if (inputmessage.length < 10) {
        alert('Το πεδίο μηνύματος πρεπει να έχει τουλάχιστον 10 χαρακτήρες');
    }
    else {
        document.getElementById('contact_form').submit();
        window.alert("Tο μήνυμα σας πήγε στους διαχειριστές και θα λαβετε σύντομα απάντηση");
        location.href = 'HomePage.html';
    }
});