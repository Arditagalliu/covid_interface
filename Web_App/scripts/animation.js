//importing jquery
var script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.4.1.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);

//This code checks the local memory of the browser if the user has saved a theme and applies it
//by changing the css color variables and the icons that are needed
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
// Here we catch the clicking of the theme icon with jquery 
//and we change the colors to apply the theme we choose
$( "#theme" ).click(change_theme);
function change_theme() {
    //it checks if there is a theme stored
    //if the local(browser) variable localstorage.theme
    //is created and what is its value
    //the local variable is created when the user tap the theme button
    //for the first time in his first visit
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
//this snippet opens the menu for mobile devices 
//by opening a lauout fixed that fills the whole screen
//its triggered by clicking the menu icon 
$( "#menu" ).click(function() {
    $("#menu_layout").get(0).style.setProperty("display", "flex");
}
);
//the x icon on the menu layuot closes the menu and shows us the page again 
//by making the layout display none again
$( "#close_menu" ).click(function() {
    $("#menu_layout").get(0).style.setProperty("display", "none");
}
);
//here we check if there was a resize of the screen while the menu layout was open
//and we close it if the new width is higher than the pc tablet breakpoint
$(window).resize(function(){
	if (window.screen.width > 849) {
        $("#menu_layout").get(0).style.setProperty("display", "none");
    }
}); 
//here the accordeion effect for the questions is implemented
//when we click on the question the next element changes display
//from none to bock and the other way around
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

//here we make the validation of the fields for the contact form
$( "#submit_message" ).click(function() {
    //first we assign the values of the inputs to variables for ease
    var inputname = $('#fname').val();
    var inputsurname = $('#lname').val();
    var inputmail = $('#mymail').val();
    var inputphone = $('#myphone').val();
    var inputmessage = $('#message').val();
    //we check if there is a name
    if (inputname == '') {
        alert('Το πεδίο Όνομα δέν μπορεί να είναι κενό');
    }
    //we check if the name has only letters with regex
    else if (inputname.match(/[^Α-Ωα-ωA-Za-z]+/g)) {
        alert('Το πεδίο Όνομα δέχεται μόνο γράμματα(λατινικά ή ελληνικά)');
    }
    //the surname field is required
    else if (inputsurname == '') {
        alert('Το πεδίο Επώνυμο δέν μπορεί να είναι κενό');
    }
    //the regex checjs if there is anything but letters in the surname field
    else if (inputsurname.match(/[^Α-Ωα-ωA-Za-z]+/g)) {
        alert('Το πεδίο Επώνυμο δέχεται μόνο γράμματα(λατινικά ή ελληνικά)');
    }
    //the regex checks if the mail is something@somethingelse.anythingelse
    else if (!inputmail.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
        alert('Αυτό το mail δεν είναι έγκυρο');
    }
    //the email is required
    else if (inputmail == '') {
        alert('Το πεδίο mail δέν μπορεί να είναι κενό');
    }
    //the phone number is required
    else if (inputphone == '') {
        alert('Το πεδίο κινητό δέν μπορεί να είναι κενό');
    }
    //we check if there is anything but numbers in the phone field
    else if (inputphone.match(/[^0-9]+/g)) {
        alert('Το πεδίο κινητό δέχεται μόνο αριθμούς');
    }
    //thi phone number is required and exactly 10 digits
    //the max 10 digits is implemented in the html file
    else if (inputphone.length < 10) {
        alert('Το πεδίο κινητό πρεπει να έχει ακριβώς 10 ψηφία');
    }
    //the message has to be atleast 10 characters long
    else if (inputmessage.length < 10) {
        alert('Το πεδίο μηνύματος πρεπει να έχει τουλάχιστον 10 χαρακτήρες');
    }
    else {
        //if all the fields are valide we submit the form give a message and redirect to the homepage
        document.getElementById('contact_form').submit();
        window.alert("Tο μήνυμα σας πήγε στους διαχειριστές και θα λαβετε σύντομα απάντηση");
        location.href = 'HomePage.html';
    }
});
//by clicking on any of the two radios we apply special effects to it
//and erase them from the other if there are any
$( "#female" ).click(function() {
    if ($('#female').is(':checked')) {
        $('#labelfemale').css('border', '2px var(--text-color) solid');
        $('#labelmale').css('border', 'none');
    }
}
);
//this code implements the effects of the radio buttons for the gender
//in the vaccination date page it checks at first wich gender is checked
//and applies special style to it 
if ($('#female').is(':checked')) {
    $('#labelfemale').css('border', '2px var(--text-color) solid');
    $('#labelmale').css('border', 'none');
}
//the two previous proccedures are implemented for the male radio button too bellow
$( "#male" ).click(function() {
    if ($('#male').is(':checked')) {
        $('#labelmale').css('border', '2px var(--text-color) solid');
        $('#labelfemale').css('border', 'none');
    }
}
);
if ($('#male').is(':checked')) {
    $('#labelmale').css('border', '2px var(--text-color) solid');
    $('#labelfemale').css('border', 'none');
}
//here we submit the vaccination date to the date api 
$( "#submit_rantevou" ).click(function() {
    //we assign the field values to variables
    var inputname = $('#fname').val();
    var inputsurname = $('#lname').val();
    var inputmail = $('#mymail').val();
    var inputphone = $('#myphone').val();
    var inputamka = $('#amka').val();
    var inputdate = $('#date').val();
    var inputtime = $('#appt').val();
    var inputgender;
    if ($('#male').is(':checked')) {
        inputgender = "male";
    }
    else {
        inputgender = "female";
    }
    //we validate every field as shown in the comments before for the contact form
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
    else if (!inputamka) {
        alert('Το ΑΜΚΑ είναι υποχρεωτικό');
    }
    else if (inputamka.match(/[^0-9]+/g)) {
        alert('Το πεδίο ΑΜΚΑ δέχεται μόνο αριθμούς');
    }
    else if (inputamka.length < 11) {
        alert('Το πεδίο ΑΜΚΑ πρεπει να έχει ακριβώς 11 ψηφία');
    }
    else if (!inputdate) {
        console.log("date,",inputdate,",")
    }
    else if (!inputtime) {
        console.log("time,",inputtime,",")
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
    else {
        //if there was no problem with the validations
        // we create a json like object with properties from the fields
        //the object is logged in the console
        var data = {
            name: inputname,
            surname: inputsurname,
            mail: inputmail,
            phone: inputphone,
            gender: inputgender,
            amka: inputamka,
            date: inputdate,
            time: inputtime
        };
        console.log(data)
        //we make an ajax call to post everything to the api
        $.ajax({
            url: 'https://us-central1-unipi-aps.cloudfunctions.net/emvolioDate', data : data,type: "POST",
            complete: function(xhr) {
                console.log(xhr.status);
                //by the code we get we show the right message
                if (xhr.status == 500) {
                    window.alert("Το αίτημα σας δεν καταχωρήθηκε λόγο κάποιου σφάλματος (status:"+xhr.status+")");
                }
                else if (xhr.status == 400) {
                    window.alert("Το αίτημα σας καταχωρύθηκε αλλά απορίφθηκε (status:"+xhr.status+")");
                }
                else if (xhr.status == 200) {
                    window.alert("Το ραντεβού σας καταχωρήθηκε με επιτυχία (status:"+xhr.status+")");
                }
            } 
        });
    }
});


$( "#submit_statistics" ).click(function() {    
    //first we take the period from the user input
    var data = {
        date_from: $('#start').val(),
        date_to: $('#end').val()
    };
    //then with an ajax call we take the data we need
    $.ajax({
        url: 'https://data.gov.gr/api/v1/query/mdg_emvolio', data : data, headers: {
        "Authorization": "Token 67b4e691b907faee4b61004b4c179740b6fbd3dd"
        },
        //if the call was successfull organize the data to arrays for editing
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
        //first we group the data by date
        //so if if two data have same date we add every property from the ones we need
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
        //here we clean the table
        $("tbody").html("");
        var len = todaytotal.length;
        //then we use bubble sort to sort the data by date
        // first we sort by year
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
        //then we sort by month
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
        //and last we sort by day
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
        //then we append for every date a row in the html tble
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