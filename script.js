$(document).ready (function(){
    $(".pomobuttons").click(function(){
        $( "button" ).removeClass( "selected" );
        let elem = $(this)
        elem.addClass( "selected" );
        if ($('.selected').text() == 'Pomodoro') {
            $('#timer-string1').removeClass('d-none').addClass('d-block')
            $('#timer-string2').addClass('d-none')
            $('#timer-string3').addClass('d-none')

            $('#focustime').removeClass('d-none').addClass('d-block')
            $('#breaktime').addClass('d-none')

            $('#Home').css("background-color", "rgb(186, 73, 73)")
            $('.startbutton').css("color", "rgb(186, 73, 73)")
        }
        if ($('.selected').text() == 'LongBreak') {
            $('#timer-string1').addClass('d-none')
            $('#timer-string2').removeClass('d-none').addClass('d-block')
            $('#timer-string3').addClass('d-none')

            $('#breaktime').removeClass('d-none').addClass('d-block')
            $('#focustime').addClass('d-none')

            $('#Home').css("background-color", "rgb(56, 133, 138)")
            $('.startbutton').css("color", "rgb(56, 133, 138)")
            
        }
        if ($('.selected').text() == 'ShortBreak') {
            $('#timer-string1').addClass('d-none')
            $('#timer-string2').addClass('d-none')
            $('#timer-string3').removeClass('d-none').addClass('d-block')

            $('#breaktime').removeClass('d-none').addClass('d-block')
            $('#focustime').addClass('d-none')

            $('#Home').css("background-color", "rgb(57, 112, 151)")
            $('.startbutton').css("color", "rgb(57, 112, 151)")
        }
    });

    
});
