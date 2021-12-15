function test(){
    var currentTime = new Date();
    var horas = currentTime.getHours();
    var mins = currentTime.getMinutes();
    var secs = currentTime.getSeconds();
    var h = document.getElementById('h')
    var m = document.getElementById("m")
    var s = document.getElementById("s")


    if (horas < 10) {
        h.innerText = "0" + horas +" :" }
        else
         h.innerText = horas +" :"

         if (mins < 10) {
            m.innerText = "0" + mins +" :" }
            else
             m.innerText = mins +" :"

             if (secs < 10) {
                s.innerText = "0" + secs }
                else
                 s.innerText = secs  
             



    let t = setTimeout(function(){ test() }, 1000);

    }

    test()