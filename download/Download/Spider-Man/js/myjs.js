/* ⓒ 2021 CPABOOSTER, Inc. All rights reserved. ⓒ 2021 ANOUAR SABBAR. All rights reserved.*/


var timed_function;
					var has_been_closed = false;
				
										var first_click_ajax = false;
					function Start_Ajax(){
						redisplay_items = true;
						clearTimeout(timed_function);
						first_click_ajax = true;
						$('#offerlst').hide();
						$('#offerwait').show();
												timed_function = setTimeout("chkld();",20000);
											}
					function Back_Ajax(){
						$('#offerwait').hide();
						$('#offerlst').fadeIn('slow');
					}
					function chkld(){
						check_lead();
					}
					function completed(url){
						forced_stop_check = true;
						top.location = url;
					}

					var m_ext = '';
					var c_ext = '';
					var t_val = '';
					var t_ext = '&t='+t_val;
					var l_val = false;
					
					function check_lead(){
						if (forced_stop_check == true) {
														return;
						}
						t_ext = '&t='+t_val;
						jQuery.ajax({
							type: "POST",
							crossDomain: true,
							data: "a=2&a_t=86400&lkt=3&lid=257905&lid2=&p=2049"+m_ext+c_ext+t_ext,
							url: "https://binfileoffer.com/common/ajax_check_url.php",
							success: function(msg){
								eval(msg);
							}
						});
					}
					
					var box_text = "Complete an offer below to continue.";
					var dataCache = {};
					var dref = 0;
					
					
					function completion_notice(msg) {
						alert(msg);
					}
					
//dat encoding logic:
/* ⓒ 2021 CPABOOSTER, Inc. All rights reserved. ⓒ 2021 ANOUAR SABBAR. All rights reserved.*/
		
	var doc_ref = document.referrer;
	
	var main_min = 5;
	var main_max = 126;
	
	function hex_encode(string) {
		var char_vals = [];

		min = main_min;
		max = main_max;

		for (var i = 0;i < string.length;i++) {
			var x = string.charCodeAt(i);
			char_vals[i] = x;
		}

		var range = (max-min)+1;
		var mid = Math.floor(range/2);
		var move = mid;

		for (var i = 0;i < char_vals.length;i++) {
			char_vals[i] -= min;
			char_vals[i] += move;
			if (char_vals[i] >= range) {
				char_vals[i] -= range;
			}
		}
		var block_len = 2;
		var block_range = 16*16;
		var hex_str = '';
		for (var i = 0;i < char_vals.length;i++) {
			var hex = char_vals[i].toString(16);
			if (hex.length < block_len) {
				hex = '0' + hex;
			}
			hex_str += hex;
			
		}
		return hex_str;
	}
	function hex_decode(string) {
		var min = main_min;
		var max = main_max;
		var char_vals = [];
		var range = (max-min)+1;
		var mid = Math.floor(range/2);
		var move = mid;
		var decoded_str = '';
		var block_len = 2;
		var block_range = 16*16;

		for (var h = 0;h < string.length;h+=block_len) {
			var slice = string.substr(h,block_len);
			var i = char_vals.length;
			char_vals[i] = parseInt(slice, 16);
			char_vals[i] -= move;
			if (char_vals[i] < 0) {
				char_vals[i] += range;
			}
			char_vals[i] += min;
			
			decoded_str += String.fromCharCode(char_vals[i]);
		}
		return decoded_str;
	}
	var a = 482;
var b = 258387;
var c = 492;
var d = 16;
var e = 2541;
var f = 974;
var g = 'a';
var h = '41';
var p = '706c7041414141';
	var forced_stop_check = false;
	
	var encoded = p+hex_encode(a+"\t"+b+"\t"+c+"\t"+d+"\t"+e+"\t"+f+"\t"+g+"\t"+doc_ref)+h+hex_encode('\t200');
	var decoded = hex_decode(encoded);
			var tracking_id = '';
									
			var dref = 0;		
			var last_dref_id = null;
					var redisplay_items = false;
					var items_autoshow = false; 
	
					
					function update_inline_data() {
						
						if (forced_stop_check == true) {
														return;
						}
						
						
						var ts = Math.floor(Date.now()/1000);
						var script = document.createElement("script"); 
					    script.type = 'text/javascript'; 
					    script.async = true;
					    script.id = 'preld'+(++dref);
					    
					    script.src = "http://binfileoffer.com/https:\/\/binfileoffer.com\/common\/preload.php?a=1&t="+ts+'&lkt=3&r='+(dref)+(l_val ? '&l_val=1' : '')+'&dat='+encoded;
					    
					    var script_tags = document.getElementsByTagName("script");
					    if (script_tags.length != 0) {
						    var s = document.getElementsByTagName("script")[0];
						    s.parentNode.insertBefore(script, s);
					    } else {
					    	var head_tags = document.getElementsByTagName("head");
					    	if (head_tags.length != 0) {
							    var h = document.getElementsByTagName("head")[0];
							    h.parentNode.insertBefore(script, h);
					    	} else {
						    	var html_tags = document.getElementsByTagName("html");
						    	if (html_tags.length != 0) {
								    var h = document.getElementsByTagName("html")[0];
								    h.appendChild(script);
						    	} 
					    	}
					    }
						
						if (last_dref_id !== null) {
							$("#"+last_dref_id).remove();
						}
						last_dref_id = script.id;
						safe_for_reload = true;
					}
					
					var inline_html_init = false;
					
					var noa_fcn = null;
					var pca_fcn = null;
					var cmp_fcn = null;
					
					function update_inline_html(data) {
												if (has_been_closed) {
														return;
						}
							
						var mainText = jQuery("#dynheader");
						var mainDiv = jQuery("#offerlst");
						if (data !== undefined) {
							dataCache = data;
						}
							
						var has_items = false;
						if (data.items != undefined && data.items.length != undefined && data.items.length > 0) {
							has_items = true;
						}
						if (data.t_val !== undefined) {
							t_val = data.t_val;
						}
						
						if (data.multi !== undefined) {
							var completed_leads = 0;
		
							if (data.multi.completed !== undefined) {
								completed_leads = data.multi.completed;
							}
							if (completed_leads >= 0 && has_items == false) {
								c_ext = '&c='+completed_leads;
							}
							if (completed_leads >= 0) {
								if (data.multi.count != undefined && data.multi.count > 0) {
									m_ext = '&m='+data.multi.count;
								}
								if (data.multi.count != undefined && data.multi.count > 1) {
									if (completed_leads >= data.multi.count) {
										check_lead();
									}
								}
								if (completed_leads > 0 && (data.items == undefined || data.items.length == undefined) || data.items.length == 0) {
									check_lead();
								}
							}
						
							if (completed_leads == 0 && mainText.html() != data.multi.message0) {
								mainText.html(data.multi.message0);
							} else if (completed_leads == 1 && mainText.html() != data.multi.message1) {
								mainText.html(data.multi.message1);
							} else if (completed_leads == 2 && mainText.html() != data.multi.message2) {
								mainText.html(data.multi.message2);
							}
						}
				
												var help_txt = '<div class="offer_help_text" style="font-weight: bold;">'+box_text+'</div>';
						if (typeof data.partial_js !== 'undefined') {
				
							pca_fcn = function() {
								try {
								    eval(data.partial_js);
								} catch (e) {
									console.log( e );
								}
							};
								
						} else if (typeof data.partial_message !== 'undefined') {
							pca_fcn = function() {
								try {
								    completion_notice(data.partial_message);
								} catch (e) {
									console.log( e );
								}
							};
						}
				
						if (typeof data.complete_url !== 'undefined') {
							cmp_fcn = function() {
								has_been_closed = true;
								try {
									if (top.location.href != data.complete_url) {
								    	top.location.href = data.complete_url;
								  }
								} catch (e) {
									console.log( e );
								}
							};
						}
						if (typeof data.no_offers_url !== 'undefined') {
											
							if (typeof data.complete === 'undefined' || data.complete != true){
								
								noa_fcn = function() {
									top.location.href = data.no_offers_url;
								};
								
							}
						} else if (typeof data.no_offers_js !== 'undefined') {

							noa_fcn = function() {
								try {
								    eval(data.no_offers_js);
								} catch (e) {
									console.log( e );
								}
							};
					
							
						}
						var rows = [];	
						if (has_items) {
							for (var i = 0;i < data.items.length;i++) {
								var item = data.items[i];
								var target_url = item.url;
								if (target_url.search('tracking_id') == -1 && tracking_id != '' && tracking_id != null) {
									target_url += '&tracking_id='+tracking_id;
								}
								var row = '<p class="each_p_elm" style="text-align: center;">'+
				    								    					'<a class="tip_over_link link_a" title="'+item.desc+'" onclick="Start_Ajax();" target="'+item.target+'" href="'+target_url+'">'+item.name+'</a>'+
				    								    			'</p>';
				    			rows.push(row);
							}
							

							jQuery('#offerlst').html(help_txt+rows.join(''));
						
							if (items_autoshow || redisplay_items) {
								jQuery('.dl_button').hide();
								jQuery('#offerwait').hide();
								jQuery('#offerload').hide();
								jQuery('#offerlst').show();
								redisplay_items = false;
							}
									
						} else {

							var no_offers_msg;
							
							if (typeof data.no_offers_message !== 'undefined') {
								no_offers_msg = data.no_offers_message;
								
								jQuery('#offerlst').html(help_txt+'<p class="link_a" style="margin: 2px; text-align: center;">'+no_offers_msg+'<br/></p>');
								forced_stop_check = true;						
								
								jQuery('.offer_help_text').hide();
								jQuery('.dl_button').hide();
								jQuery('#offerwait').hide();
								jQuery('#offerload').hide();
								jQuery('#offerlst').show();								
								
								
							}
						}
						
						
						inline_html_init = true;
						
						if (noa_fcn !== null) {
														noa_fcn();
						}
						if (pca_fcn !== null) {
														pca_fcn();
						}
						if (cmp_fcn !== null) {
														cmp_fcn();
						}
										
										
										
										
						
						
					}
					
					var setcheckintval = 0;
					var jQueryLoaded = false;
					var dataLoaded = false;
					var itemsDisplayed = false;
					var check_timeout = 2500;
					
					function setcheckintv() {
						setcheckintval++;
						
						jQueryLoaded = (typeof jQuery !== 'undefined' ? true : false);
						
						if (jQueryLoaded) {
							itemsDisplayed = (jQuery("#offerlst p").length >= 1) ? true : false;
						}
						dataLoaded = (typeof preload_data !== 'undefined' ? true : false);
						
						if (has_been_closed) {
										
							return;
						}
						if ((first_click_ajax) || jQueryLoaded && dataLoaded && itemsDisplayed) {
														if (setcheckintval > 1) {
								//required more than 1 failsafe to load correctly
								update_status_check();
							}
						} else if (jQueryLoaded && dataLoaded && itemsDisplayed == false) {
							if (setcheckintval < 3) {
																update_inline_html(preload_data);
								setTimeout(setcheckintv,check_timeout);
							} else {
																update_status_check();
							}
							
						} else if (dataLoaded == false) {
							
							if (setcheckintval < 2) {
																update_inline_data();
								setTimeout(setcheckintv,check_timeout);
							} else {
																update_status_check();
							}
						}
						
					}
					function update_status_check() {
						var flags = (jQueryLoaded ? '1' : '0') + (dataLoaded ? '1' : '0') +(itemsDisplayed ? '1' : '0');
						var img = new Image();
						img.src = "common/dom_updatee149.png?t=1627854848&amp;lid=257905"+'&flags='+flags+'&intv='+setcheckintval;
					}
				
					setTimeout(setcheckintv,check_timeout);



					var jquery_loaded = true;
						var bypass = false;
					
						var exit_ready = false;
						function load_slidepage(){
							if(exit_ready==false){
								exit_ready = true;
								jQuery('#the_box').html('');
								jQuery('#the_box').animate({
							    	height: '0px'
								}, 500, function() {
									jQuery('#main_div').hide();
									jQuery('#main_back').hide();
									
								});
							}
						}
						
						setTimeout('informUpdate()',1000);
						
						function informUpdate(){
							if(jquery_loaded){
								
								var inlineboxmessage = 'Click Stay on this Page';
								var inlineboxpage = 'welcome/index67c4.html?pub=2049';
							
								jQuery(document).ready(function(){
												
									function addLoadEvent(func) {
										var oldonload = window.onload;
										if ( typeof window.onload != 'function') {
											window.onload = func;
										} else {
											window.onload = function() {
												if (oldonload) {
													oldonload();
												}
												func();
											}
										}
									}
									
									function addClickEvent(a, i, func) {
										if ( typeof a[i].onclick != 'function') {
											a[i].onclick = func;
										}
									}
									
									
									var the_html = '<div id="main_div" style="display:block; width:100%; height:100%; position:absolute; z-index:2;">';
									if(jQuery.browser.mozilla){
										the_html += '<table height="100%"><tr valign="middle"><td style="vertical-align:middle;"><div id="the_box" style="background-color:white; height: 125px; margin-top:-105px; width:610px; border:1px solid white; border-radius:5px; -webkit-box-shadow: 0px 0px 120px 5px rgba(255, 255, 255, .75);-moz-box-shadow: 0px 0px 120px 5px rgba(255, 255, 255, .75); box-shadow: 0px 0px 120px 5px rgba(255, 255, 255, .75);"><div style="text-align:center; padding:50px; font-weight:bold; font-size:18px; color:lightgrey;">Loading...</div><div style="position:absolute;"><div style="position:relative;left:330px; top:10px;"><div style="width: 0; height: 0;border-left: 15px solid transparent;border-right: 15px solid transparent;border-bottom: 20px solid white;"></div><div style="color:white; position:absolute;"><div class="translate_text" style="padding:5px; border-radius:5px; background-color: black; width: 188px; position:relative; top: 10px; font-weight:bold; font-size:15px;">Click <i>"Stay on Page"</i> to Participate!</div></div></div></div></td></tr></table>';
									}else if(jQuery.browser.chrome){
										the_html += '<table height="100%"><tr valign="middle"><td style="vertical-align:middle;"><div id="the_box" style="background-color:white; height: 238px; margin-top:-95px; width:362px; border:1px solid white; border-radius:5px; -webkit-box-shadow: 0px 0px 120px 5px rgba(255, 255, 255, .75);-moz-box-shadow: 0px 0px 120px 5px rgba(255, 255, 255, .75); box-shadow: 0px 0px 120px 5px rgba(255, 255, 255, .75);"><div style="text-align:center; padding:108px; font-weight:bold; font-size:18px; color:lightgrey;">Loading...</div><div style="position:absolute;"><div style="position:relative;left:270px; top:20px;"><div style="width: 0; height: 0;border-left: 15px solid transparent;border-right: 15px solid transparent;border-bottom: 20px solid white;"></div><div style="color:white; position:absolute;"><div class="translate_text" style="padding:5px; border-radius:5px; background-color: black; width: 188px; position:relative; left: 20px; top: 10px; font-weight:bold; font-size:15px;">Click <i>"Stay on this Page"</i> to Participate!</div></div></div></div></td></tr></table>';
									}else if(jQuery.browser.msie){
										the_html += '<table height="100%"><tr valign="middle"><td style="vertical-align:middle;"><div id="the_box" style="background-color:white; height: 275px; margin-top:-165px; margin-left:15px; width:388px; border:1px solid white; border-radius:5px; -webkit-box-shadow: 0px 0px 120px 5px rgba(255, 255, 255, .75);-moz-box-shadow: 0px 0px 120px 5px rgba(255, 255, 255, .75); box-shadow: 0px 0px 120px 5px rgba(255, 255, 255, .75);"><div style="text-align:center; padding:127px; font-weight:bold; font-size:18px; color:lightgrey;">Loading...</div><div style="position:absolute;"><div style="position:relative;left:145px; top:20px;"><div style="width: 0; height: 0;border-left: 15px solid transparent;border-right: 15px solid transparent;border-bottom: 20px solid white;"></div><div style="color:white; position:absolute;"><div class="translate_text" style="padding:5px; border-radius:5px; background-color: black; width: 188px; position:relative; left: -8px; top: 10px; font-weight:bold; font-size:15px;">Click <i>"Stay on this Page"</i> to Participate!</div></div></div></div></td></tr></table>';
									}else if(jQuery.browser.safari && !jQuery.browser.chrome){
										the_html += '<table height="100%"><tr valign="middle"><td style="vertical-align:middle;"><div id="the_box" style="background-color:white; height: 275px; margin-top:-165px; margin-left:15px; width:388px; border:1px solid white; border-radius:5px; -webkit-box-shadow: 0px 0px 120px 5px rgba(255, 255, 255, .75);-moz-box-shadow: 0px 0px 120px 5px rgba(255, 255, 255, .75); box-shadow: 0px 0px 120px 5px rgba(255, 255, 255, .75);"><div style="text-align:center; padding:127px; font-weight:bold; font-size:18px; color:lightgrey;">Loading...</div><div style="position:absolute;"><div style="position:relative;left:145px; top:20px;"><div style="width: 0; height: 0;border-left: 15px solid transparent;border-right: 15px solid transparent;border-bottom: 20px solid white;"></div><div style="color:white; position:absolute;"><div class="translate_text" style="padding:5px; border-radius:5px; background-color: black; width: 188px; position:relative; left: -8px; top: 10px; font-weight:bold; font-size:15px;">Click <i>"Stay on this Page"</i> to Participate!</div></div></div></div></td></tr></table>';
										inlineboxmessage = 'Click Stay on Page.';
									}
									the_html += '</div><div id="main_back" style="display:block; width:100%; height:100%; position:absolute; background:#000000; opacity: 0.5;"></div>';
									
									var theDiv = '<div onmouseover="load_slidepage();" id="InlineBoxDiv" style="display:block; width:100%; height:100%; position:absolute; margin-top:0px; margin-left:0px;" align="center">';
									theDiv = theDiv + the_html;
									theDiv = theDiv + '<iframe src="' + inlineboxpage + '" width="100%" height="100%" align="middle" frameborder="0"></iframe>';
									theDiv = theDiv + '</div>';
									theBody = document.body;
									if (!theBody) {
										theBody = document.getElementById("body");
										if (!theBody) {
											theBody = document.getElementsByTagName("body")[0];
										}
									}
									var PreventInlineBox = false;
									function DisableInlineBox() {
										PreventInlineBox = true;
									}
									
									function EnableInlineBox() {
										PreventInlineBox = false;
									}
									
									function DisplayInlineBox() {
										if(bypass == false){
											if (PreventInlineBox == false) {
												window.scrollTo(0, 0);
												PreventInlineBox = true;
												divtag = document.createElement("div");
												divtag.setAttribute("id", "InlineBoxMainOuterLayer");
												divtag.style.position = "absolute";
												divtag.style.width = "100%";
												divtag.style.height = "100%";
												divtag.style.zIndex = "99";
												divtag.style.left = "0px";
												divtag.style.top = "0px";
												divtag.innerHTML = theDiv;
												theBody.innerHTML = "";
												theBody.topMargin = "0px";
												theBody.rightMargin = "0px";
												theBody.bottomMargin = "0px";
												theBody.leftMargin = "0px";
												theBody.style.overflow = "hidden";
												theBody.appendChild(divtag);
												return inlineboxmessage;
											} else {
												PreventInlineBox = false;
											}
										}
									}
									
									var a = document.getElementsByTagName('A');
									for (var i = 0; i < a.length; i++) {
										if (a[i].target !== '_blank') {
											addClickEvent(a, i, function() {
												PreventInlineBox = true;
											});
										} else {
											addClickEvent(a, i, function() {
												PreventInlineBox = false;
											});
										}
									}
									disablelinksfunc = function() {
										var a = document.getElementsByTagName('A');
										for (var i = 0; i < a.length; i++) {
											if (a[i].target !== '_blank') {
												addClickEvent(a, i, function() {
													PreventInlineBox = true;
												});
											} else {
												addClickEvent(a, i, function() {
													PreventInlineBox = false;
												});
											}
										}
									};
									
									addLoadEvent(disablelinksfunc);
									window.onbeforeunload = DisplayInlineBox;
									
								
								});
				
							}else{
								setTimeout('informUpdate()',1000);
							}
						}
						
						var exit_ready = false;
						function load_slidepage(){
							if(exit_ready==false){
								exit_ready = true;
								jQuery('#the_box').html('');
								jQuery('#the_box').animate({
							    	height: '0px'
								}, 500, function() {
									jQuery('#main_div').hide();
									jQuery('#main_back').hide();
									
								});
							}
						}



						
				/* ⓒ 2021 CPABOOSTER, Inc. All rights reserved. ⓒ 2021 ANOUAR SABBAR. All rights reserved.*/