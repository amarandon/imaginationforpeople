$(document).ready(function(){ 

    $(".filters_box input.styled").ezMark();
    
    function blockPanel(){
    	$("div.categories").block({ message: '<h1>Filtering ...</h1>',
						    		css: { 
						                border: '1px solid #676665', 
						                padding: '15px', 
						                backgroundColor: '#000', 
						                opacity: .8,
						                color: '#fff' 
						            }});
    }
    
    $(".filtersbox_content select#id_country").change(function(){
    	blockPanel();
        $("#filter_form").submit();
    });
    
    $(".filtersbox_content select#id_objectives").change(function(){
    	blockPanel();
        $("#filter_form").submit();
    });
    
    $(".filters_box input.styled").change(function(){
    	blockPanel();
        $("#filter_form").submit();
    });
    
    $(".tag_link").click(function(){
    	blockPanel();
        var val = $("#id_themes").val();
        var tag_id = $(this).attr("id").replace("tag_", "");
        
        if($(this).hasClass("selected")){
            $(this).removeClass("selected");
            var new_val = val.replace(tag_id, "");
            new_val = new_val.replace(",,", ",");
            new_val = new_val.replace(/^,/g,'').replace(/,$/g,'')
            $("#id_themes").val(new_val);
        }
        else {
            $(this).addClass("selected");
            var new_tag = val == "" ? tag_id : ","+tag_id;
            $("#id_themes").val(val + new_tag);
        }
        $("#filter_form").submit();
    });
   
    $("a#lock-picto").toggle(
    	function () {
    		$(this).removeClass("off");
    		$(this).addClass("on");
    		$.cookie('i4p_bottom_panel', 'on', { expires: 1, path: '/'} );
    		
    	},
		function () {
		      $(this).removeClass("on");
		      $(this).addClass("off");
		      $.cookie('i4p_bottom_panel', null, { expires: -1, path: '/' } );
		}
      );

    $(".categories_project_page").hoverIntent({    
	     over: function() {
	    	 if($.cookie('i4p_bottom_panel') != 'on'){
	    		 $(".categories_project_page").animate({height: '260px'});
	    	 }
	     },
	     timeout: 200,
	     out: function() { 
	    	 if($.cookie('i4p_bottom_panel') != 'on'){
	    		 $(".categories_project_page").animate({height: '36px'});
	    	 }
	     },  
	}); 
    
    $('.categories_project_page .menu ul').idTabs();

    $(".search #id_text").example("Project Search");
});
