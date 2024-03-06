// Open Navbar
$('.open-Nav').on('click', function() {
    $('.sideLeft').animate({ width: '250px'}  ,500)
    })

    $('.close-button').on('click', function() {
    $('.sideLeft').animate({width: '0'}, 500)
    })

    // Scroll Somth
    $('a[href ^="#"]').on('click', function(e) {
    
        let href= $(e.target).attr('href')
        let goals = $(href).offset().top;
        $('body,html').animate({ scrollTop: goals},2000)
})


// Slider Down

$('#sliderDown .toggle').click(function(){
    $('.inner').not($(this).next()).slideUp(500);
    $(this).next().slideToggle(500);
});





// Counting


window.onload = function() {
   
    countDownToTime("10 october 2021 9:56:00");
  }

  function countDownToTime(countTo) {
  
        let futureDate = new Date(countTo);
    futureDate = (futureDate.getTime()/1000);

    let now = new Date();
    now = (now.getTime()/1000);

    timeDifference = (futureDate- now);
        
   let days = Math.floor( timeDifference / (24*60*60));
   let hours = Math.floor((timeDifference - (days * (24*60*60))) / 3600);
   let mins = Math.floor((timeDifference - (days * (24*60*60)) - (hours * 3600 )) / 60);
   let secs = Math.floor((timeDifference - (days * (24*60*60)) - (hours * 3600) - (mins * 60)))


    $(".days").html(`${days} D`);
    $(".hours").html(`${hours} h`);
    $(".minutes").html(`${ mins } m`);
    $('.seconds').html(`${ secs} s`)

  
    setInterval(function() {  countDownToTime(countTo); }, 1000);
}

// textarea
let num = 100

$('#number').text(num)

$('textarea').on('input', (e)=> {
    let inputValue = $(e.target).val().length
    let sbstract = num - inputValue
    console.log(sbstract);

    $('#number').html(`${sbstract < 0 ? "your available character finished": sbstract}`)
})