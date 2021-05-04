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

$( "#submit_rantevou" ).click(function() {
    var data = {
        date_from: '2021-04-27',
        date_to: '2021-04-30'
    };
    $.ajax({
        url: 'https://us-central1-unipi-aps.cloudfunctions.net/emvolioDate', data : data,type: "POST",
        // success: function(data, textStatus, xhr) {
        //     console.log(xhr.status);
        // },
        complete: function(xhr, textStatus) {
            console.log(xhr.status);
            if (xhr.status == 500) {
                window.alert("Το αίτημα σας δεν καταχωρήθηκε λόγο κάποιου σφάλματος");
            }
            else if (xhr.status == 400) {
                window.alert("Το αίτημα σας καταχωρύθηκε αλλά απορίφθηκε");
            }
            else if (xhr.status == 200) {
                window.alert("Το ραντεβού σας καταχωρήθηκε με επιτυχία");
            }
        } 
    });
});


$( "#submit_statistics" ).click(function() {    
    var data = {
        date_from: $('#start').val(),
        date_to: $('#end').val()
    };
    $.ajax({
        url: 'https://data.gov.gr/api/v1/query/mdg_emvolio', data : data, headers: {
        "Authorization": "Token 67b4e691b907faee4b61004b4c179740b6fbd3dd"
        },
        success: function(data) {
        console.log(data);
        var datechecker = data[0].referencedate;
        var count = 0;
        var todaytotal = [];
        todaytotal[0] = 0;
        var total = [];
        total[0] = 0;
        var todaydose1 = [];
        todaydose1[0] = 0;
        var todaydose2 = [];
        todaydose2[0] = 0;
        var mydates = [];
        mydates[0] = data[0].referencedate;
        for (const property in data) {
            if (data[property].referencedate == datechecker) {
                todaytotal[count] = todaytotal[count] + parseInt(data[property].daytotal);
                total[count] = total[count] + parseInt(data[property].totalvaccinations);
                todaydose1[count] = todaydose1[count] + parseInt(data[property].dailydose1);
                todaydose2[count] = todaydose2[count] + parseInt(data[property].dailydose2);
            }
            else {
                datechecker = data[property].referencedate
                count = count + 1;
                todaytotal[count] = parseInt(data[property].daytotal);
                mydates[count] = (data[property].referencedate);
                total[count] = parseInt(data[property].totalvaccinations);
                todaydose1[count] = parseInt(data[property].dailydose1);
                todaydose2[count] = parseInt(data[property].dailydose2);
            }
        }
        $("tbody").html("");
        var len = todaytotal.length;
        for (const day in todaytotal) {
            for(var j = 0 ; j < len - day - 1; j++){
                if (parseInt(mydates[j].substr(0,4)) > parseInt(mydates[j + 1].substr(0,4))) {
                    var temp = mydates[j];
                    mydates[j] = mydates[j + 1];
                    mydates[j + 1] = temp;

                    temp = todaytotal[j];
                    todaytotal[j] = todaytotal[j + 1];
                    todaytotal[j + 1] = temp;

                    temp = todaydose1[j];
                    todaydose1[j] = todaydose1[j + 1];
                    todaydose1[j + 1] = temp;
                    
                    temp = todaydose2[j];
                    todaydose2[j] = todaydose2[j + 1];
                    todaydose2[j + 1] = temp;

                    temp = total[j];
                    total[j] = total[j + 1];
                    total[j + 1] = temp;
                }
            }
        }
        for (const day in todaytotal) {
            for(var j = 0 ; j < len - day - 1; j++){
                if ((parseInt(mydates[j].substr(5,2)) > parseInt(mydates[j + 1].substr(5,2))) && (parseInt(mydates[j].substr(0,4)) == parseInt(mydates[j + 1].substr(0,4)))) {
                    var temp = mydates[j];
                    mydates[j] = mydates[j + 1];
                    mydates[j + 1] = temp;

                    temp = todaytotal[j];
                    todaytotal[j] = todaytotal[j + 1];
                    todaytotal[j + 1] = temp;

                    temp = todaydose1[j];
                    todaydose1[j] = todaydose1[j + 1];
                    todaydose1[j + 1] = temp;
                    
                    temp = todaydose2[j];
                    todaydose2[j] = todaydose2[j + 1];
                    todaydose2[j + 1] = temp;

                    temp = total[j];
                    total[j] = total[j + 1];
                    total[j + 1] = temp;
                }
            }
        }
        for (const day in todaytotal) {
            for(var j = 0 ; j < len - day - 1; j++){
                if ((parseInt(mydates[j].substr(5,2)) == parseInt(mydates[j + 1].substr(5,2))) && (parseInt(mydates[j].substr(0,4)) == parseInt(mydates[j + 1].substr(0,4))) && (parseInt(mydates[j].substr(8,2)) > parseInt(mydates[j + 1].substr(8,2)))) {
                    var temp = mydates[j];
                    mydates[j] = mydates[j + 1];
                    mydates[j + 1] = temp;

                    temp = todaytotal[j];
                    todaytotal[j] = todaytotal[j + 1];
                    todaytotal[j + 1] = temp;

                    temp = todaydose1[j];
                    todaydose1[j] = todaydose1[j + 1];
                    todaydose1[j + 1] = temp;
                    
                    temp = todaydose2[j];
                    todaydose2[j] = todaydose2[j + 1];
                    todaydose2[j + 1] = temp;

                    temp = total[j];
                    total[j] = total[j + 1];
                    total[j + 1] = temp;
                }
            }
        }
        for (const day in todaytotal) {
            $("tbody").append(
                '<tr><th scope="row">' + mydates[day].substr(0,10) +
                '</th><td>' + todaytotal[day] + 
                '</td><td>' + todaydose1[day] + 
                '</td><td>' + todaydose2[day] + 
                '</td><td>' + total[day] + 
                '</td></tr>'
            );
        }
        }
    });
});