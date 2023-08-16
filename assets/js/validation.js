// signin validate

//validate
$(document).ready(() => {
  let signinyourEmailerrorShown = false;
  let signinyourPassworderrorShown = false;

  $("#signin-btn").click((e) => {
    //from
    if ($("#signinyourEmail").val() == "" && !signinyourEmailerrorShown) {
      var error =
        "<span class='signinyourEmail-error'>Enter your Valid Email</span>";
      $(error).insertAfter(".signinyourEmail-col");
      signinyourEmailerrorShown = true;
    }
    $("#signinyourEmail").on("input", () => {
      if ($("#signinyourEmail").val() !== "") {
        $(".signinyourEmail-error").hide();
        signinyourEmailerrorShown = false;
      }
    });
    //to
    if ($("#signinyourPassword").val() == "" && !signinyourPassworderrorShown) {
      var error =
        "<span class='signinyourPassword-error'>Enter your Password</span>";
      $(error).insertAfter(".signinyourPassword-col");
      signinyourPassworderrorShown = true;
    }
    $("#signinyourPassword").on("input", () => {
      if ($("#signinyourPassword").val() !== "") {
        $(".signinyourPassword-error").hide();
        signinyourPassworderrorShown = false;
      }
    });
    e.preventDefault();
  });
});

$(document).ready(() => {
  $("#signin-btn").click(() => {
    var signinyourEmail = $("#signinyourEmail").val();
    var signinyourPassword = $("#signinyourPassword").val();

    if (signinyourEmail && signinyourPassword !== "") {
      $(".btn-close").trigger("click");
    }
  });
});

//signup validate

$(document).ready(() => {
  let yourNameerrorShown = false;
  let yourEmailerrorShown = false;
  let yourPassworderrorShown = false;

  $("#signup-btn").click((e) => {
    //from
    if ($("#yourName").val() == "" && !yourNameerrorShown) {
      var error = "<span class='yourName-error'>Enter your Name</span>";
      $(error).insertAfter(".yourName-col");
      yourNameerrorShown = true;
    }
    $("#yourName").on("input", () => {
      if ($("#yourName").val() !== "") {
        $(".yourName-error").hide();
        yourNameerrorShown = false;
      }
    });
    //from
    if ($("#yourEmail").val() == "" && !yourEmailerrorShown) {
      var error = "<span class='yourEmail-error'>Enter Valid Email</span>";
      $(error).insertAfter(".yourEmail-col");
      yourEmailerrorShown = true;
    }
    $("#yourEmail").on("input", () => {
      if ($("#yourEmail").val() !== "") {
        $(".yourEmail-error").hide();
        yourEmailerrorShown = false;
      }
    });
    //to
    if ($("#yourPassword").val() == "" && !yourPassworderrorShown) {
      var error = "<span class='yourPassword-error'>Enter a Password</span>";
      $(error).insertAfter(".yourPassword-col");
      yourPassworderrorShown = true;
    }
    $("#yourPassword").on("input", () => {
      if ($("#yourPassword").val() !== "") {
        $(".yourPassword-error").hide();
        yourPassworderrorShown = false;
      }
    });
    e.preventDefault();
  });
});

$(document).ready(() => {
  $("#signup-btn").click(() => {
    var yourName = $("#yourName").val();
    var yourEmail = $("#yourEmail").val();
    var yourPassword = $("#yourPassword").val();

    if (yourEmail && yourPassword && yourName !== "") {
      $(".btn-close").trigger("click");
    }
  });
});
