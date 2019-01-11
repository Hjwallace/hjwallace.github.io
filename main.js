

  var x = 0;

  function WhoIAm(){
    var words = ["a traveler","a student","a designer","a leader","a developer","helpful","dependable","creative","hardworking","imaginative"]
    var wordChoosen = "";
    if (x == words.length){
        x = 0;
    }
    wordChoosen = words[x];
    x++;
    return wordChoosen;
  }


  var i = 0;
  var txt = 'I am ' + WhoIAm();
  var speed = 75;

  var j = 0;

function typeWriter() {

    if (j == 1){
        document.getElementById("openingPanel").innerHTML = "";
        j = 0;
    }

    if (i < txt.length) {
    document.getElementById("openingPanel").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
    }
    //MAKE IT DO DELETING AND REPATING
    else{
        i = 0;
        txt = 'I am ' + WhoIAm();
        setTimeout(typeWriter, 2000);
        j = 1;
    }
}

function WIPAlert(){
    window.open("https://medium.com/@hunterjwallace");
}