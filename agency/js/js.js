$(window).scroll(function() {
    if ($(this).scrollTop() >= 500) {
        $("navbar1").addClass("noTransparrent");
    } else {
        $("navbar1").removeClass("notransparrent");
    };
});
$(Document).ready(function() {
    $("a.scroll").on("click", function(event) {
        var hash = this.hash;

        $("html, body").animate({ scrollTop: $(hash).offset().top }, 800, function() {});
    });
    $('.timer').countTo();
    $("#commentForm").validate();
});