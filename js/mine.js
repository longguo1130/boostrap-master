var picker_status = 0;
$(function () {
  $(window).scroll(function () {
    var window_top = $(window).scrollTop();
    if (window_top > 200) {
      $(".scroll-up").show();
      var header = $(".my-header-navbar");
      header.addClass("fixed-header");
    } else {
      $(".scroll-up").hide();
      var header = $(".my-header-navbar");
      header.removeClass("fixed-header");
    }
  });
  $(".mobile-toggle-button").on("click", function () {
    $(".my-header").addClass("mobile-active");
  });
  $(".mobile-header-close").on("click", function () {
    $(".my-header").removeClass("mobile-active");
  });
  $(".scroll-up").on("click", function () {
    // animate
    $("html, body").animate(
      {
        scrollTop: $(".my-header").offset().top,
      },
      1500
    );
  });
  $(".choose-color-button-icon").on("click", function () {
    if (picker_status === 0) {
      var color_picker = $(this).parent();
      color_picker.css("left", 0);
      color_picker.css("transition", "ease 1s ");
      var color_picker_body = $(".choose-section");
      color_picker_body.css("left", 0);
      color_picker_body.css("transition", "ease 1s ");
      picker_status = 1;
    } else {
      var color_picker = $(this).parent();
      color_picker.css("left", "-268px");
      color_picker.css("transition", "ease 1s ");
      var color_picker_body = $(".choose-section");
      color_picker_body.css("left", "-270px");
      color_picker_body.css("transition", "ease 1s ");
      picker_status = 0;
    }
  });
  $(".search-icon").on("click", function () {
    $(".my-body").addClass("search-active");
  });
  $(".search-close-icon").on("click", function () {
    $(".my-body").removeClass("search-active");
  });
  $("#primary-color-picker").colorpicker({
    colorSelectors: {
      grey: "#777777",
      blue: "#337ab7",
      success: "#5cb85c",
      info: "#5bc0de",
      warning: "#f0ad4e",
      red: "#d9534f",
    },
  });
  $("#secondary-color-picker").colorpicker({
    colorSelectors: {
      grey: "#777777",
      blue: "#337ab7",
      success: "#5cb85c",
      info: "#5bc0de",
      warning: "#f0ad4e",
      red: "#d9534f",
    },
  });
});
