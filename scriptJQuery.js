/* eslint-env jquery */

$(document).ready(function () {
  $(":header").css("color", "darkblue");
  $(":header").css("text-align", "center");
  $("th:eq(0)").css("background", "brown");
  $("th:eq(1)").css("background", "orange");
  $("th:eq(2)").css("background", "lavender");
  $("th:eq(3)").css("background", "white");
  $("td:eq(0)").css("background", "beige");
  $("td:eq(1)").css("background", " lightblue");
  $("td:eq(2)").css("background", "yellow");
  $("td:eq(3)").css("background", " lightgreen");
  $("td:eq(4)").css("background", "cyan");
  $("td:eq(5)").css("background", "purple");
  $("td:eq(6)").css("background", "gray");
  $("td:eq(7)").css("background", "pink");

  $("#form1").submit(function () {
    if ($("#password").val() == "logina") {
      return true;
    }
    $("span").html("<b>Contrasena no valida</b>").show();
    return false;
  });

  $("#form1").validate({
    rules: {
      usuario: {
        required: true
      },
      password: {
        required: true,
        minlength: 6
      },
      passwordRepeat: {
        equalTo: "#password"
      }
    },
    success: function (label) {
      label.text("OK").addClass("valid");
    }
  });

  $("button").click(function () {
    let str = $("#form2").serialize();
    $("#resultado").text(str);
  });

  $("#form2").validate({
    rules: {
      nombre: {
        required: true
      },
      direccion: {
        required: true
      },
      email: {
        required: true,
        email: true
      }
    },
    success: function (label) {
      label.text("OK").addClass("valid");
    },
    submitHandler: function (form) {
      // simulate form submission for demo
      alert("Formulario enviado");
      return false;
    }
  });
});
