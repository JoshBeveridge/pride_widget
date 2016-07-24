(function($) {

    $(document).ready(function() {

        $(".widget__heart--static").on("click", function(e) {
            $(".widget__heart").removeClass("active");
            $(".widget__heart").addClass("active");
            $(".widget__heart--static").addClass("active");

            setTimeout(function(e) {
                $(".widget__heart").removeClass("active");
            }, 400);

        });

    });

})(jQuery);
