//<![CDATA[
/* Night Mode/Dark Mode */ 

$(document).ready(function(){$("body").toggleClass(localStorage.toggled),$("#modedark").on("click",function(){"nightmode"!=localStorage.toggled?($("body").toggleClass("nightmode",!0),localStorage.toggled="nightmode",$(".section-center").css("display","block")):($("body").toggleClass("nightmode",!1),localStorage.toggled="",$(".section-center").css("display",""))}),$("body").hasClass("nightmode")?$("#modedark").prop("checked",!0):$("#modedark").prop("checked",!1)});
//]]>



