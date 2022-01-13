$(function(){

  $('.bestseller_inner ul li a').after(`<a href="" class="aHover"><img src="" alt="" class = "hover"></a>`);
  
  // bestseller hover---------------------------------  
  $('.bestseller_inner ul li').each(function() {
    let nowImg = $(this).find('img');  //호버한 부분의 img파일 찾기
    let hoverImg = $(this).find('img.hover');
    
    let srcName = nowImg.attr('src');  //호버한 부분의 이미지 주소값 src가지고오기
        hoverImg.attr('src',srcName.replace("_1","_hover")); //새로 만든 태그 src에 기존 src replace해서 넣기
    
    console.log(hoverImg);
    
    
    //=============================================
    /*********** substring 이용 ******************/
    //=============================================
    //   let newSrc = srcName.substring(0, srcName.lastIndexOf('_')); //마지막 _ 로 다 잘리네 .jpg도 같이
    //   console.log(newSrc);

    //   //substring------------------------
    //   // $(this).hover(function() { 
      
    //   //   $(this).find('img').attr('src', newSrc+ '_hover.jpg');
    //   // }, function() {
      //   //   $(this).find('img').attr('src', newSrc + '_1.jpg').fadeIn(); 
    //   // });


  
    
    
      
    $(this).hover(
    function() {
      $(this).find('a.aHover').addClass('zIndex'); 
      
    }, function() {
      $(this).find('a.aHover').removeClass('zIndex'); 
    });
  
  
    });






  
});