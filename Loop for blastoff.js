

function runCountdown ()
{
    var countDown = 10;
    var i = 1;
    var o = 5
    do {
        setTimeout(function () {
            document.getElementById("countdownlabel").innerHTML = " IN "+  countDown;
            if (countDown <= o) {
                document.getElementById("countdownlabel").innerHTML = "Warning, Less than half-way to launch, time left = "+ countDown;
                
            }
            if (countDown== 1){
                document.getElementById("blastoffLabel").innerHTML = "blaAASSSTT OFFFF!!!"
            }
            countDown = countDown - 1;
        }, 1000 * i);
        i += 1;
    } while (countDown >= i);


}



