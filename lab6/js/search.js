var temp = false;
(function($){
   fuckYou = function() {
        if (temp) {
            $('body').css('font-family', 'comic sans ms').delay(1000).css('font-family', 'Times New Roman');
            temp = !temp;
        } else {
            $('body').css('font-family', 'Times New Roman').delay(1000).css('font-family', 'comic sans ms');
            temp = !temp;
        }
        return true;
   }; 
})(jQuery);