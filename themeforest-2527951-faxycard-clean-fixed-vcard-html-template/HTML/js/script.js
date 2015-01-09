jQuery(document).ready(function($){
    $('.customers').tinyscrollbar({
        size:146
    });
    $('.portfolio-content a').live('mouseover',function(){
        $('#concept li a').fancybox();
        $(this).children('span').addClass('hover'); 
    });
    $('.portfolio-content a').live('mouseout',function(){
        $('#concept li a').fancybox();
        $(this).children('span').removeClass('hover'); 
        
    });
    //fancybox
    $('#concept li a').fancybox();
    //quicksand functionality
    $('.concept').click(function(e) {
        $(this).parent('.submenu').children('li').children('a').removeClass('selected');
        $(this).children('a').addClass('selected');
        $('#concept').quicksand($('#conceptbase li'),{
            attribute: 'id'
        });
        e.preventDefault();
    });       
    $('.design').click(function(e) {
        $(this).parent('.submenu').children('li').children('a').removeClass('selected');
        $(this).children('a').addClass('selected');
        $('#concept').quicksand($('#design li'),{
            attribute: 'id'
        });
        e.preventDefault();
    });       
    $('.photoshop').click(function(e) {
        $(this).parent('.submenu').children('li').children('a').removeClass('selected');
        $(this).children('a').addClass('selected');
        $('#concept').quicksand($('#photoshop li'),{
            attribute: 'id'
        });
        e.preventDefault();
    });       
    $('.modeling').click(function(e) {
        $(this).parent('.submenu').children('li').children('a').removeClass('selected');
        $(this).children('a').addClass('selected');
        $('#concept').quicksand($('#modeling li'),{
            attribute: 'id'
        });
        e.preventDefault();
    });       
});