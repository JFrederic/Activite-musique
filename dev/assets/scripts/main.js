

$(function() {
    $("#datepicker").datepicker({
        format: "dd/mm/yyyy",
        language: "fr",
        orientation: "bottom left",
    });
});

$(function() {
    $("#datepicker").datepicker('setDate', '10');

});


function actu() {
    var date = $('input').val();
    if (date == "01/05/2016") {
        $(".concert").text("Concert de Booba");
        $(".album").text('Sortie de l\'album de tiken jah !');
        return;
    }
    if (date == "02/05/2016") {
        $(".concert").text("Concert de Nano");
        $(".album").text("Sortie de l'album : Booba");
        return;
    }
    if (date == "03/05/2016") {
        $(".concert").text("Concert de Daft punk");
        $(".album").text("Sortie de l'album : Booba");
        return;
    }
    if (date == "04/05/2016") {
        $(".concert").text("Concert de DJ-Guigeek");
        $(".album").text("Sortie de l'album : Booba");
        return;
    }
    if (date == "05/05/2016") {
        $(".concert").text("Aucun concert de prevus le " + date + " !");
        $(".album").text("Concert de DJ-Guigeek");
        return;
    }
    if (date == "06/05/2016") {
        $(".concert").text("Aucun concert de prevus le " + date + " !");
        $(".album").text("Sortie de l'album : Booba");
        return;
    }
    if (date == "07/05/2016") {
        $(".concert").text("Aucun concert de prevus le " + date + " !");
        $(".album").text("Sortie de l'album : Booba");
        return;
    }
    if (date == "08/05/2016") {
        $(".concert").text("Aucun concert de prevus le " + date + " !");
        $(".album").text("Sortie de l'album : Booba");
        return;
    } else {
        $(".concert").text("Aucun concert de prevus le " + date + " !");
        $(".album").text("Aucun album ne sort le " + date + " !");
        return;
    }


}


$(window).scroll(function() {
if ($(this).scrollTop() > 50){
    $('#navigation').addClass("sticky");
  }
  else{
    $('#navigation').removeClass("sticky");
  }
});

var sections = $('section')
  , nav = $('nav')
  , nav_height = nav.outerHeight();

$(window).on('scroll', function () {
  var cur_pos = $(this).scrollTop();

  sections.each(function() {
    var top = $(this).offset().top - nav_height,
        bottom = top + $(this).outerHeight();

    if (cur_pos >= top && cur_pos <= bottom) {
      nav.find('a').removeClass('active');
      sections.removeClass('active');

      $(this).addClass('active');
      nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
    }
  });
});

$(document).ready(function() {
    $('.scroll a[href^="#"]').on('click', function(e) {
        e.preventDefault();
        var target = this.hash;
        var $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 900, 'swing', function() {
            window.location.hash = target;
        });
    });
});

var lastId,
    topMenu = $("#navigation"),
    topMenuHeight = topMenu.outerHeight()+15,
    // All list items
    menuItems = topMenu.find("a"),
    // Anchors corresponding to menu items
    scrollItems = menuItems.map(function(){
      var item = $($(this).attr("href"));
      if (item.length) { return item; }
    });

// Bind click handler to menu items
// so we can get a fancy scroll animation
menuItems.click(function(e){
  var href = $(this).attr("href"),
      offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;
  $('html, body').stop().animate({
      scrollTop: offsetTop
  }, 300);
  e.preventDefault();
});

// Bind to scroll
$(window).scroll(function(){
   // Get container scroll position
   var fromTop = $(this).scrollTop()+topMenuHeight;

   // Get id of current scroll item
   var cur = scrollItems.map(function(){
     if ($(this).offset().top < fromTop)
       return this;
   });
   // Get the id of the current element
   cur = cur[cur.length-1];
   var id = cur && cur.length ? cur[0].id : "";

   if (lastId !== id) {
       lastId = id;
       // Set/remove active class
       menuItems
         .parent().removeClass("active")
         .end().filter("[href='#"+id+"']").parent().addClass("active");
   }
});
