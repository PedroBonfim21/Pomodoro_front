function startTimer() {
    var timerElement = $('.pomotime.d-block'); // seleciona a div com classe pomotime e d-block
    var timerValue = timerElement.text().split(':'); // obtém o valor do timer e separa em minutos e segundos
    var minutes = parseInt(timerValue[0]);
    var seconds = parseInt(timerValue[1]);
    interval = setInterval(function() {
    if (seconds === 0) {
        if (minutes === 0) {
        clearInterval(interval);
        } else {
        minutes--;
        seconds = 59;
        }
    } else {
        seconds--;
    }
    timerElement.text(minutes.toString().padStart(2, '0') + ':' + seconds.toString().padStart(2, '0')); // atualiza o valor do timer na div
    }, 1000);
}

$(document).ready (function(){
    $("#controlbutton").click(function(){
        if ($(this).text() == 'START') {
        $("#controlbutton").removeClass('counting').addClass('breakcount');
        $(this).text('BREAK');
        startTimer();
        } else {
        $("#controlbutton").removeClass('breakcount').addClass('counting')
        $(this).text('START')
        clearInterval(interval);
        }
    });
    $(".pomobuttons").click(function(){
        $( "button" ).removeClass( "selected" );
        let elem = $(this)
        elem.addClass( "selected" );
        if ($('.selected').text() == 'Pomodoro') {
            //mudando timer para 25:00
            $('#timestring').text('25:00')
            $('#focustime').removeClass('d-none').addClass('d-block')
            $('#breaktime').addClass('d-none')
            $('#Home').css("background-color", "rgb(186, 73, 73)")
            $('#controlbutton').css("color", "rgb(186, 73, 73)")

            clearInterval(interval);
            $("#controlbutton").removeClass('breakcount').addClass('counting')
            $("#controlbutton").text('START');
        }
        if ($('.selected').text() == 'ShortBreak') {
            //mudando timer para 5:00
            $('#timestring').text('5:00')
            
            $('#breaktime').removeClass('d-none').addClass('d-block')
            $('#focustime').addClass('d-none')
            $('#Home').css("background-color", "rgb(57, 112, 151)")
            $('#controlbutton').css("color", "rgb(57, 112, 151)")

            clearInterval(interval);
            $("#controlbutton").removeClass('breakcount').addClass('counting');
            $("#controlbutton").text('START');
            
        }
        if ($('.selected').text() == 'LongBreak') {
            //mudando timer para 15:00
            $('#timestring').text('15:00')

            $('#breaktime').removeClass('d-none').addClass('d-block')
            $('#focustime').addClass('d-none')
            $('#Home').css("background-color", "rgb(56, 133, 138)")
            $('#controlbutton').css("color", "rgb(56, 133, 138)")
            
            clearInterval(interval);
            $("#controlbutton").removeClass('breakcount').addClass('counting');
            $("#controlbutton").text('START');
        }
    });
});

