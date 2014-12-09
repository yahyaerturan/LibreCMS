/*
 * Developed by : www.toepoke.co.uk
 *
 * If you redistribute this file, please keep this section in place
 *
 * License: Same as jQuery - see http://jquery.org/license
 *
 * Compressed with:
 *   - http://closure-compiler.appspot.com/
 *
*/
(function(){"use strict";var e="(0.1)",t="mapsed",n=1;$.fn.mapsed=function(e){function A(e){var t=e.parents(".mapsed-root");var n=e.parents(".mapsed-view");var r=it(n);if(L.onSelect(o,r)){Y()}}function O(e){var t=e.parents(".mapsed-root");var n=t.find(".mapsed-lat").val();var r=t.find(".mapsed-lng").val();var i=z(n,r);Y();i.showTooltip(true)}function M(e){var t=e.parents(".mapsed-root");var n=t.find(".mapsed-view");var r=it(n);if(L.onDelete(o,r)){var i=z(r.lat,r.lng);i.setMap(null);i.tooltip=null}}function _(e){var t=e.parents(".mapsed-root");var n=t.find(".mapsed-edit");var r="";var i=it(n);r=L.onSave(o,i);var s=n.find(".mapsed-error");if(r&&r.length>0){s.text(r);return}s.text("");var u=z(i.lat,i.lng);jQuery.extend(u.details,i);t.find(".mapsed-marker-type").val("custom");t.find(".mapsed-user-data").val(i.userData);u.showTooltip(false)}function D(){if(S){var e=E;var t=e.position().left;t+=e.width()/2;t-=S.width()/2;var n=e.position().top;n+=e.height()*2;S.css("z-index",999).css("position","absolute").css("top",n).css("right","1%").css("width","20%");if(L.showHelpOnLoad&&E.click){E.trigger("click")}}if(L.findGeoOnLoad){o.setMapCentreByGeo()}}function P(e,t,n){if(!y){if(c==0)G()}y=false;if(t=="ZERO_RESULTS"){o.showMsg("No results","Your search returned no results.")}var r=new C.LatLngBounds;for(var i=0,s;s=e[i];i++){if(!s.reference)continue;var u=s.geometry.location;var a=F(s,u,"google",r);ft(a.details,s.formatted_address);r.extend(u);h.fitBounds(r)}if(n){l[0].disabled=!n.hasNextPage;if(n.hasNextPage){C.event.addDomListenerOnce(l[0],"click",function(){event.preventDefault();c++;n.nextPage()})}}}function H(e,t){if(!e.details)return;if(!e.details.reference)return;var n={reference:e.details.reference};d.getDetails(n,function(n,r){e.details.isLoaded=true;if(r!=k.PlacesServiceStatus.OK){return}at(e.details,n);t(e)})}function B(){var e=h.getBounds();if(e){a.setBounds(e)}w=true}function j(e,t,n,r,i){var s=null,o="",u="";e=e||"";t=t||"";s=p.find(".mapsed-modal");if(s.length>0){s.remove()}u+="<div class='mapsed-modal-button-bar'>";if(r&&r.length>0){u+="<p class='prompt'>"+r+"</p>"}u+="<div class='mapsed-modal-buttons'>";if(n){u+="<button class='ok'>OK</button>";u+="<button class='cancel'>Cancel</button>"}else{u+="<button class='close'>OK</button>"}u+="</div>";u+="</div>";o="<div class='mapsed-modal'><h3>"+e+"</h3><div><div class='mapsed-modal-message'>"+t+"</div>"+u+"</div></div>";s=$(o).appendTo(p);s.find("button").on("click",function(){var e=$(this);s.fadeOut();if(!e.hasClass("cancel")){if(i)i(e)}}).end().fadeIn()}function F(e,t,n,r){var i=Z(e.name,t,false,n);jQuery.extend(i.details,e);et(i);v.push(i);r.extend(t);C.event.addListener(i,"click",function(){var e=this;Y();e.showTooltip(false)});if(e.autoShow){i.showTooltip(false)}w=true;return i}function I(e,t){var n=e;if(!t){t=30}if(e.length>t){n=e.substring(0,t-3)+"..."}return n}function R(e,t,n){e=q("{NAME}",t.name,e);e=q("{SHORT_NAME}",I(t.name,25),e);e=q("{STREET}",t.street,e);e=q("{TOWN}",t.town,e);e=q("{AREA}",t.area,e);e=q("{POSTCODE}",t.postCode,e);e=q("{TELNO}",t.telNo,e);e=q("{WEBSITE}",t.website,e);e=q("{GPLUS}",t.url,e);if(t.photo){var r=t.photo.getUrl({maxWidth:"70"});e=q("{PHOTOURL}",r,e);e=q("{IMG","<img",e)}n.html(e)}function U(e,t){t.find(".mapsed-name").parent().toggle(e.name&&e.name.length>0);t.find(".mapsed-street").toggle(e.street&&e.street.length>0);t.find(".mapsed-town").toggle(e.town&&e.town.length>0);t.find(".mapsed-area").toggle(e.area&&e.area.length>0);t.find(".mapsed-postCode").toggle(e.postCode&&e.postCode.length>0);var n=t.find(".mapsed-telNo"),r=t.find(".mapsed-website"),i=t.find(".mapsed-url");if(e.telNo&&e.telNo.length>0){n.show().css("display","block")}else{n.hide()}if(e.website&&e.website.length>0){r.show().css("display","block")}else{r.hide()}if(e.url&&e.url.length>0){i.show().css("display","block")}else{i.hide()}t.find(".mapsed-right").toggle(e.photo!=null);var s=o.getSettings();if(s.onSelect||s.onSave||s.onDelete){var u,a,f,l;l=e.canEdit;if(e.markerType=="google")l=false;u=s.onSelect!=null;a=s.onSave!=null&&l;f=s.onDelete!=null&&l&&e.markerType=="custom";t.find(".mapsed-select-button").toggle(u);t.find(".mapsed-edit-button").toggle(a);t.find(".mapsed-delete-button").toggle(f)}else{t.find(".mapsed-buttons").hide()}}function z(e,t){var n=null;for(var r=0;r<v.length;r++){var i=v[r];if(i.position.lat()==e&&i.position.lng()==t){n=i;break}}return n}function W(){var e="mapsed-search-box-"+m;u=$("#"+e);if(u.length>0)return;var t=L.searchOptions,n="<input type='text' id='"+e+"' class='mapsed-searchbox' autocomplete='off' ";n+="placeholder='";if(t.enabled&&t.placeholder)n+=t.placeholder;else n+="Search ...";n+="' ";if(t.enabled&&t.initSearch&&t.initSearch.length>0)n+=" value='"+t.initSearch+"'";n+=">";u=$(n).appendTo(p);a=new k.SearchBox(u[0]);h.controls[C.ControlPosition.TOP_LEFT].push(u[0]);C.event.addListener(a,"places_changed",function(){var e=u.val();ut(e)});C.event.addListener(h,"bounds_changed",B);f=Q(s.Go,C.ControlPosition.TOP_LEFT,"mapsed-search-button mapsed-control-button",function(e){e.preventDefault();var t=u.val();ut(t)});l=Q(s.More,C.ControlPosition.TOP_LEFT,"mapsed-more-button mapsed-control-button",null);l[0].disabled=true}function X(){if(T)return;var e=function(e){e.preventDefault();var t=h.getCenter();var n=new C.LatLngBounds;var r=Z("New place",t,true,"new");et(r);v.push(r);n.extend(t);C.event.addListener(r,"click",function(){var e=this;Y();e.showTooltip(true)});C.event.addListener(r,"dragend",function(e){var t=this;t.details.lat=e.latLng.lat();t.details.lng=e.latLng.lng();var n=$(t.tooltip.content);n.find(".mapsed-lat").val(t.details.lat);n.find(".mapsed-lng").val(t.details.lng)});C.event.trigger(r,"click")};T=Q(s.AddPlace,C.ControlPosition.TOP_RIGHT,"mapsed-add-button mapsed-control-button",e)}function V(){if(x)return;var e=function(e){e.preventDefault();if(!g)return;var t=true;if(L.onClose){t=L.onClose(o)}if(t&&g){o.closeMap()}};x=Q(s.CloseMap,C.ControlPosition.TOP_RIGHT,"mapsed-close-button mapsed-control-button",e);$("body").on("keyup",function(t){t.preventDefault();if(t.which==27)e(t)})}function J(){if(N)return;var e=function(e){o.setMapCentreByGeo()};N=Q(s.Geo,C.ControlPosition.TOP_LEFT,"mapsed-geo-button",e)}function K(){if(S)return;E=Q(s.Help,C.ControlPosition.TOP_RIGHT,"mapsed-help-button mapsed-control-button",function(e){e.preventDefault();S.fadeToggle();E.toggleClass("open")});var e=L.getHelpWindow();S=$(e).appendTo(p);S.fadeOut()}function Q(e,t,n,r){var i=null,s="",u="",a="";if(n&&n.length>0){u=" class='"+n+"' "}if(e&&e.length>0){var f=e.split("|");e=f[0];a=f.length>1?" title='"+f[1]+"'":""}var s="<button "+u+a+">"+e+"</button>";i=o.addMapControl(s,t);if(r){i.on("click",r)}return i}function G(){if(v&&v.length>0){for(var e=0;e<v.length;e++){var t=v[e];t.tooltip=null;t.setMap(null)}}v=[]}function Y(){if(v&&v.length>0){for(var e=0;e<v.length;e++){var t=v[e];if(t.tooltip)t.tooltip.close()}}}function Z(e,t,n,r){var i=null;if(L.getMarkerImage){i=L.getMarkerImage(o,r,e)}var s=new C.Marker({map:h,icon:i,title:e,animation:C.Animation.DROP,position:t,markerType:r,draggable:n});s.details={markerType:r,isLoaded:r!="google",lat:t.lat(),lng:t.lng(),userData:"",reference:"",name:"",street:"",town:"",area:"",postCode:"",telNo:"",website:"",url:"",canEdit:r=="new"||r=="custom"};return s}function et(e){if(e.id){var t=$("#mapsed-"+e.id);return t}var n=v.length+1;var r=e.details;e.id=n;var t=$("<div id='mapsed-"+n+"' class='mapsed-root'><input type='hidden' class='mapsed-lat' value='"+e.position.lat()+"'><input type='hidden' class='mapsed-lng' value='"+e.position.lng()+"'><input type='hidden' class='mapsed-can-edit' value='"+r.canEdit+"'><input type='hidden' class='mapsed-reference' value='"+r.reference+"'><input type='hidden' class='mapsed-user-data' value='"+r.userData+"'><input type='hidden' class='mapsed-marker-type' value='"+e.markerType+"'>"+nt()+rt()+"</div>");e.tooltip=new C.InfoWindow;e.tooltip.setContent(t[0]);e.tooltip.marker=e;e.showTooltip=tt;return t}function tt(e){var t=this;var n=t.tooltip;var r=t.details;var i=$(n.getContent());var s=i.find(".mapsed-view");var u=i.find(".mapsed-edit");var a=o.getSettings();if(!r.isLoaded){H(t,function(n){t.showTooltip(e)});return}u.toggle(e);s.toggle(!e);st(r);if(e){var f=rt();R(f,r,u)}else{var f=nt();R(f,r,s);U(r,s)}n.close();n.open(h,t)}function nt(){var e="<table class='mapsed-container mapsed-view'><tr><td colspan='2'><h1 class='mapsed-name' title='{NAME}'>{SHORT_NAME}</h1></td></tr><tr><td class='mapsed-left'><address><div class='mapsed-street'>{STREET}</div><div class='mapsed-town'>{TOWN}</div><div class='mapsed-area'>{AREA}</div><div class='mapsed-postCode'>{POSTCODE}</div></address><a class='mapsed-telNo' href='tel:{TELNO}'>{TELNO}</a><a class='mapsed-website' href='{WEBSITE}' title='{WEBSITE}'>website</a><a class='mapsed-url' href='{GPLUS}' title='{GPLUS}'>g+</a></td><td class='mapsed-right'><a href='{GPLUS}'>{IMG src='{PHOTOURL}'></a></td></tr><tr class='mapsed-buttons'><td colspan='2'><button class='mapsed-select-button'>Select</button><button class='mapsed-edit-button'>Edit</button><button class='mapsed-delete-button'>Delete</button></td></tr></table>";return e}function rt(){var e="<div class='mapsed-container mapsed-address-entry mapsed-edit'><h1>Place details:</h1><ul><li><label>Name<input class='mapsed-name' type='text' placeholder='e.g. Bob sandwich shop' value='{NAME}'></label></li><li><label>Street<input class='mapsed-street' type='text' placeholder='e.g. 3 Hemington place' value='{STREET}'></label></li><li><label>Town<input class='mapsed-town' type='text' placeholder='e.g. Leeds' value='{TOWN}'></label></li><li><label>Area<input class='mapsed-area' type='text' placeholder='e.g. West Yorkshire' value='{AREA}'></label></li><li><label>Postcode<input class='mapsed-postCode' type='text' value='{POSTCODE}'></label></li><li><label>Tel No<input class='mapsed-telNo' type='telephone' placeholder='contact telephone number' value='{TELNO}'></label></li><li><label>website<input class='mapsed-website' type='url' placeholder='e.g. https://toepoke.co.uk' value='{WEBSITE}'></label></li><li><label>g+ url<input class='mapsed-url' type='url' placeholder='e.g. https://plus.google.com/+ToepokeCoUk‎' value='{GPLUS}'></label></li></ul><div class='mapsed-buttons'><button class='mapsed-save-button'>Save</button><span class='mapsed-error'>&nbsp;</span></div></div>";return e}function it(e){var t=e.parents(".mapsed-root");var n={canEdit:t.find(".mapsed-can-edit").val()==="true",lat:t.find(".mapsed-lat").val(),lng:t.find(".mapsed-lng").val(),reference:t.find(".mapsed-reference").val(),markerType:t.find(".mapsed-marker-type").val(),userData:t.find(".mapsed-user-data").val()};if(e.hasClass("mapsed-view")){n.name=e.find(".mapsed-name").attr("title");n.street=e.find(".mapsed-street").html();n.town=e.find(".mapsed-town").html();n.area=e.find(".mapsed-area").html();n.postCode=e.find(".mapsed-postCode").html();n.telNo=e.find(".mapsed-telNo").html();n.website=e.find(".mapsed-website").attr("href");n.url=e.find(".mapsed-url").attr("href")}else{n.name=e.find(".mapsed-name").val();n.street=e.find(".mapsed-street").val();n.town=e.find(".mapsed-town").val();n.area=e.find(".mapsed-area").val();n.postCode=e.find(".mapsed-postCode").val();n.telNo=e.find(".mapsed-telNo").val();n.website=e.find(".mapsed-website").val();n.url=e.find(".mapsed-url").val()}st(n);return n}function st(e){if(!e.canEdit)e.canEdit=false;if(!e.lat)e.lat=0;if(!e.lng)e.lng=0;if(!e.userData)e.userData="";if(!e.name)e.name="";if(!e.street)e.street="";if(!e.town)e.town="";if(!e.area)e.area="";if(!e.postCode)e.postCode="";if(!e.telNo)e.telNo="";if(!e.website)e.website="";if(!e.url)e.url=""}function ot(){var e=[],t=new C.LatLngBounds;G();var n=[];if($.isArray(L.showOnLoad))n=L.showOnLoad;else n.push(L.showOnLoad);for(var r=0;r<n.length;r++){var i=n[r],s=new C.LatLng(i.lat,i.lng),o="";if(i.reference&&i.reference.length>0){o="google"}else{o="custom"}F(i,s,o,t)}if(n.length==1){h.setCenter(s)}}function ut(e){var t=h.getBounds();c=0;G();var n={query:e,bounds:t};d.textSearch(n,P);u.val(e)}function at(e,t){var n=t.address_components;var r=lt(n,"street_address");if(r==="")r=lt(n,"route");var i=lt(n,"locality"),s=lt(n,"administrative_area_level_1"),o=lt(n,"postal_code");e.street=r;e.town=i;e.area=s;e.postCode=o;e.name=t.name||"";if(t.photos&&t.photos.length>0)e.photo=t.photos[0];e.url=t.url||"";e.website=t.website||"";e.telNo=t.formatted_phone_number||t.telNo||""}function ft(e,t){if(!t)return;var n=t.split(",");if(n.length>=1)e.street=$.trim(n[0]);if(n.length>=2)e.town=$.trim(n[1]);if(n.length>=3)e.area=$.trim(n[2]);if(n.length>=4)e.postCode=$.trim(n[3])}function lt(e,t,n){if(e==null||e.length==0)return"";var r="";for(var i=0;i<e.length;i++){var s=e[i],o=false;for(var u=0;u<s.types.length;u++){var a=s.types[u];if(a.toLowerCase()==t.toLowerCase()){o=true;break}}if(o){r=n?s.short_name:s.long_name;break}}return r}var r=new google.maps.LatLng(53.798823,-1.5426760000000286);var i=10;var s={Go:"Go",More:"More|There are more results available ...",AddPlace:"+|Add a place",CloseMap:"&times;|Close map",Geo:"&otimes;|Centre map based on your location",Help:"?|Show help"};var o=this,u=null,a=null,f=null,l=null,c=0,h=null,p=null,d=null,v=[],m=-1,g=false,y=true,b=false,w=false,E=null,S=null,x=null,T=null,N=null,C=null,k=null;var L=$.extend({showOnLoad:null,mapOptions:{zoom:i,center:r,mapTypeId:google.maps.MapTypeId.ROADMAP},disablePoi:false,allowAdd:false,searchOptions:{enabled:false,placeholder:"e.g. Hotels in Leeds",initSearch:"Hotels in Leeds",geoSearch:"5aside football near {POSITION}"},onSelect:null,onSave:null,onDelete:null,confirmDelete:false,onClose:null,getMarkerImage:null,getHelpWindow:null,showHelpOnLoad:false,allowGeo:false,findGeoOnLoad:false},e||{});this.getSettings=function(){return L};this.getGoogleMap=function(){return h};this.getMapContainer=function(){return p};this.addMapControl=function(e,t){var n=null,r=null;r=$(e);n=r.appendTo(p);h.controls[t].push(n[0]);return n};this.disablePointsOfInterest=function(){h.styles=[{featureType:"poi",stylers:[{visibility:"off"}]}]},this.closeMap=function(){h=null;if(S){S.fadeOut()}p.fadeOut(function(){$(this).remove()});g=false};this.showMsg=function(e,t,n){j(e,t,false,"",n)};this.confirmMsg=function(e,t,n,r){j(e,t,true,n,r)};this.setMapCentreByGeo=function(){if(!navigator.geolocation)return;navigator.geolocation.getCurrentPosition(function(e){var t=new C.LatLng(e.coords.latitude,e.coords.longitude);h.setZoom(10);h.setCenter(t);N.addClass("is-active");var n=L.searchOptions;if(n&&n.geoSearch&&n.geoSearch.length>0){var r=t.toUrlValue();var i=n.geoSearch.replace("{POSITION}",r);ut(i)}if(n&&L.showOnLoad){ot()}},function(e){o.showMsg("GEO Position",e.message)})};var q=function(e,t,n){if(t==undefined)t="";return n.replace(new RegExp(e,"g"),t)};var ct=function(){var e=null;C=google.maps;k=google.maps.places;e=p.attr("id");h=new C.Map(document.getElementById(e),L.mapOptions);if(L.disablePoi){o.disablePointsOfInterest()}d=new k.PlacesService(h);m=n++;if(L.onSelect){p.on("click","button.mapsed-select-button",function(){var e=$(this);A(e)})}if(L.onSave){p.on("click","button.mapsed-save-button",function(){var e=$(this);_(e)});p.on("click","button.mapsed-edit-button",function(){var e=$(this);O(e)})}if(L.onDelete){p.on("click","button.mapsed-delete-button",function(){var e=$(this);if(L.confirmDelete){var t=e.parents(".mapsed-view");var n=it(t);var r="<strong>"+n.name+"</strong> will be deleted.";o.confirmMsg("Confirm Delete",r,"Are you sure?",function(){M(e)})}else{M(e)}})}if(L.allowGeo){J()}if(L.searchOptions.enabled){W()}if(g||L.onClose){V()}if(L.showOnLoad!=null){ot()}if(L.getHelpWindow){K()}if(L.allowAdd){X()}if(L.onPreInit){L.onPreInit(o)}C.event.addListener(h,"tilesloaded",function(e){if(b)return;D();b=true;if(L.onInit){L.onInit(o)}});var r=L.searchOptions;if(r.enabled&&r.initSearch&&r.initSearch.length>0){ut(r.initSearch)}if(!w){h.setZoom(L.mapOptions.zoom);h.setCenter(L.mapOptions.center)}var i="plugin_"+t;if(!p.data(i)){p.data(i,o)}};this.each(function(){p=$(this);ct()});if(!this.length){var ht="mapsed-full-window",p=$("#"+ht);if(!p.length){p=$("<div id='mapsed-full-window' class='mapsed-full-window'></div>");p.appendTo("body")}g=true;ct()}return this}})(jQuery)