// Taken from - http://coolcodez.net/create-infinite-carousel-in-jquery-using-a-few-lines-of-code/
$(function(){  //shorthand for $(document).ready()
     
    var width = $('#track div').width();  // get the width of our div
     
    function carousel(){
 
        $('#track').delay(1000).animate({right: '+=' + width},1000, function(){  
            // move the entire track right using the width of our div
            // use delay so that the animation has a pause in between
            // after the animation, we run a callback function

            var first = $('#track div:first-child');
            // get the first div 

            first.remove();
            // delete the first div

            $(this).append(first);
            // add the first div to the end of the track

            $(this).css({right: '-=' + width});
            // reposition the track

            carousel();
            // start the animation again
        });
 
    }
     
    carousel();
    // run our animation the very first time
});