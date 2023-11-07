$(document).ready(function () {
  $(".mortgage-list li").click(function () {
    $(".mortgage-list li").removeClass("active");
    $(this).addClass("active");
    var imgsrc = $(this).find(".linkimg").attr("src");
    var imgsrcId = $(this).attr("id");

    if (imgsrcId === "link1") {
      $(".mortgage-content .contentarea").addClass("d-none");
      $(".mortgage-content .contentarea").removeClass("d-block");
      $(".mortgage-content .contentarea:first-child()")
        .addClass("d-block")
        .removeClass("d-none");
    }
    if (imgsrcId === "link2") {
      $(".mortgage-content .contentarea").addClass("d-none");
      $(".mortgage-content .contentarea").removeClass("d-block");
      $(".mortgage-content .contentarea:nth-child(2)")
        .addClass("d-block")
        .removeClass("d-none");
    }
    if (imgsrcId === "link3") {
      $(".mortgage-content .contentarea").addClass("d-none");
      $(".mortgage-content .contentarea").removeClass("d-block");
      $(".mortgage-content .contentarea:nth-child(3)")
        .addClass("d-block")
        .removeClass("d-none");
    }
    if (imgsrcId === "link4") {
      $(".mortgage-content .contentarea").addClass("d-none");
      $(".mortgage-content .contentarea").removeClass("d-block");
      $(".mortgage-content .contentarea:nth-child(4)")
        .addClass("d-block")
        .removeClass("d-none");
    }
    if (imgsrcId === "link5") {
      $(".mortgage-content .contentarea").addClass("d-none");
      $(".mortgage-content .contentarea").removeClass("d-block");
      $(".mortgage-content .contentarea:nth-child(5)")
        .addClass("d-block")
        .removeClass("d-none");
    }
    $("#image")
      .fadeOut(500, function () {
        $("#image").attr("src", imgsrc);
      })
      .fadeIn(100);
  });
});

$(".b-search").click(function () {
  $(".blog-search").toggle("search-width");
  /* $('.searchtop input').focus();*/
});

$(".btn-search").click(function () {
  $(".searchtop .inpSearch").addClass("inpwidth");
  $(".searchtop input").focus();
});

$(document).mouseup(function (e) {
  var container = $(".inpSearch");

  // if the target of the click isn't the container nor a descendant of the container
  if (!container.is(e.target) && container.has(e.target).length === 0) {
    container.removeClass("inpwidth");
  }
});

$(".searchcross").click(function () {
  $(".searchtop .inpSearch").removeClass("inpwidth");
});

function changeImage() {
  var img = document.getElementById("topimg");
  img.style.backgroundImage = "url('" + images[x] + "')";
  x++;
  if (x >= images.length) {
    x = 0;
  }
  fadeImg(img, 4800, true);

  setTimeout("changeImage()", 5500);
}

function fadeImg(el, val, fade) {
  if (fade === true) {
    val--;
  } else {
    val++;
  }
  if (val > 0 && val < 5) {
    // el.style.opacity = val / 100;
    setTimeout(function () {
      fadeImg(el, val, fade);
    }, 5500);
    setTimeout("slide()", 3000);
    setTimeout("slidedesc()", 3000);
  }
}

var images = [],
  x = 0;
images[0] = "assets/images/California.jpg";
images[1] = "assets/images/California1.jpg";
images[2] = "assets/images/California2.jpg";
images[3] = "assets/images/California3.jpg";

var cnt = 0,
  texts = [],
  texts2 = [],
  cnt1 = 0;

// save the texts in an array for re-use
$(".textContent").each(function () {
  texts[cnt++] = $(this).html();
});
function slide() {
  if (cnt >= texts.length) cnt = 0;
  $("#textMessage").html(texts[cnt++]);
  $("#textMessage")
    .fadeIn("normal")
    .animate({ opacity: 1 }, 4800)
    .fadeOut("normal", function () {
      return slide();
    });
}
$(".bannerdesc").each(function () {
  texts2[cnt1++] = $(this).html();
});
function slidedesc() {
  if (cnt1 >= texts2.length) cnt1 = 0;
  $("#textDetail").html(texts2[cnt1++]);
  $("#textDetail")
    .fadeIn("normal")
    .animate({ opacity: 1 }, 4800)
    .fadeOut("normal", function () {
      return slidedesc();
    });
}
slide();
slidedesc();
changeImage();
