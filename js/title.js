


$(document).ready(function(){
      

  
  
  // fade 애니메이션
  
  
  //$("div.tbodybg").css("background-image","url(img/bodybg_"+tn+".jpg)").fadeIn(1500);
  // function titleFade(){
    //   if(tn<2){
      //     $("ul.tSlide li:eq("+tn+")").fadeOut(500,function(){
        //       $("ul.tSlide li:eq("+tn+")").next().stop().fadeIn(1500);
        //       $("ul.tap li:eq("+tn+")").removeClass('circlerot'); 
  //       tn++;
  //       $("ul.tap li:eq("+tn+")").addClass('circlerot'); 
  //       $("div.bodybg").remove();
  //       $("#title .titleWrap").prepend("<div class='bodybg'></div>")
    
  //       $("div.bodybg").css("background-image","url(img/bodybg_"+tn+".jpg)").fadeIn(1500);
  //     });
  //   }else if(tn==2){
  //     $("ul.tSlide li:eq("+tn+")").fadeOut(500,function(){
    //       $("ul.tap li:eq("+tn+")").removeClass('circlerot'); 
    //       tn=0;
  //       $("ul.tap li:eq("+tn+")").addClass('circlerot'); 
  //       $("ul.tSlide li:eq("+tn+")").fadeIn(1500);

  //       $("div.bodybg").css("background-image","url(img/bodybg_"+tn+".jpg)").fadeIn(1500);
  //     });
  //   }
  // }
  // setInterval(titleFade,3000);
  
  
  
  
  
  var slides = $('.tSlide li'),
      titleWrap = $('#title .titleWrap')
      slideCount = slides.length,
      tap = $('ul.tap li'),
      easing = 'ease-in-out',
      currentIdx = 0;
      
      titleWrap.prepend("<div class='bodybg'></div>");
      
      //tap.eq(currentIdx).addClass('circlerot'); 
      
      
      slides.eq(currentIdx).fadeIn(easing);
      $("div.bodybg").css("background-image","url(img/bodybg_"+currentIdx+".jpg)").fadeIn(easing);



      var timer =  setInterval(showNextSlide,3500);
      
      function showNextSlide(){
        var nextIdx = (currentIdx + 1)%slideCount;
        
        slides.eq(currentIdx).fadeOut();
        $("div.bodybg").css("background-image","url(img/bodybg_"+currentIdx+".jpg)").fadeOut(easing);

        slides.eq(nextIdx).fadeIn();
        $("div.bodybg").css("background-image","url(img/bodybg_"+nextIdx+".jpg)").fadeIn(easing);

        currentIdx = nextIdx;

        updateNav();
        tapClick();

        
      }
      function updateNav(){
        tap.eq(currentIdx).addClass('circlerot')
        .siblings().removeClass('circlerot');
      }

      function tapClick(){
        tap.click(function(){
          var idx = $(this).index();
          console.log(idx);
          showNextSlide(idx);
        });
      }



      updateNav();



  

















});