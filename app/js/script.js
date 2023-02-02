window.addEventListener("load", function (e) {
    // header navbar menu toggle
    $("header .activeBars").click(function () {
      $("header .activeMenuBars").slideToggle(1000);
    });
    // headerTitle
    $(".headerLogin .close").click(function () {
        $(".headerLogin").fadeOut(500);
      });

      $("header .signUp").click(function () {
        $(".headerLogin").fadeIn();
        $(".headerLogin").css("display", "flex");
      });
      // colection
      $(".colection .size").click(function () {
        if ($(".colection .activeCourses").hasClass("activeCourses")) {
          $(".colection .activeCourses").removeClass("activeCourses");
        } else {
          $(".colection .def").addClass("activeCourses");
        }
      });
      // About
      $(".About .close").click(function () {
        $(".About").fadeOut(500);
      });

      $(".shopping .signUp").click(function () {
        $(".About").fadeIn();
        $(".About").css("display", "flex");
      });
      // box
      $(".box button").click(function (e) {
        e.preventDefault();
        if ($(".box input").val() === "") {
          $(".errorMsg").show();
        } else {
          $(".errorMsg").hide();
        }
      });
      $(".new .imperya").click(function () {
        $(".box").fadeIn();
        $(".box").css("display", "flex");
      });
})
