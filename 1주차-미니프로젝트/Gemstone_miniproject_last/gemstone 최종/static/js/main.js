$(document).ready(function () {
    $(".main_about").hide();

    $("#main_comment_btn").click(function () {
        /* $("#main_about_btn").removeClass("sub_active");
         $(this).addClass("active");
         $("#main_comment_btn").addClass("sub_active").show(); */
        $(".main_comment").show();
        $(".main_about").hide();
    });

    $("#main_about_btn").click(function () {
        /*$("#main_comment_btn").removeClass("sub_active");
        $(this).addClass("active");
        $("#main_about_btn").addClass("sub_active").show(); */
        $(".main_about").show();
        $(".main_comment").hide();
    });
});