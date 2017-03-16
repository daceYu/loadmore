$(function(){
	function getData(config){
		config.isAjax = true;
		$.ajax({
			type: 'GET',
			url:"json/blog.json", //这里offset,size无作用，仅方便调试
			dataType: 'json',
			success: function(reponse){
				config.isAjax = false;
				var data = reponse.list;
				var sum = reponse.list.length;
				var result = '';
				for(var i=0; i< sum; i++){
					result +='<div class="weui_media_box weui_media_text">'+
							'<a href="'+ data[i].url +'" target="_blank"><h4 class="weui_media_title">'+ data[i].title +'</h4></a>'+
							'<p class="weui_media_desc">'+ data[i].desc +'</p>'+
						'</div>';
				}
				$('.js-blog-list').append(result);
				$(".js-load-more").html("加载更多");
			},
			error: function(xhr, type){
				console.log('Ajax error!');
			}
		});
	}
	$.loadmore.get(getData, {scroll: true});
});