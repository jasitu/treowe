function MM_preloadImages() { //v3.0
  var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
    var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
    if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
}
function MM_swapImgRestore() { //v3.0
  var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;
}
function MM_findObj(n, d) { //v4.01
  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
  if(!x && d.getElementById) x=d.getElementById(n); return x;
}
function MM_swapImage() { //v3.0
  var i,j=0,x,a=MM_swapImage.arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i+=3)
   if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}
}

$(document).ready( function() { 
	$("#nav .fade").hover(
		function () {
			// this is what happens when your mouse is on
			var nav_id = $(this).attr("id");
			var header_src = $("#header #head1").attr("src");
			var this_nav_src = $(this).attr("src");
			if (nav_id == "home")
			{
				new_header_src = "../slices/images/home/header.png";
				nav_on_src = "../slices/images/home/navigation/homeon.png";
			}
			else if (nav_id == "mission")
			{
				new_header_src = "../slices/images/home/header1.png";
				nav_on_src = "../slices/images/home/navigation/missionon.png";
			}
			else if (nav_id == "detectives")
			{
				new_header_src = "../slices/images/home/header2.png";
				nav_on_src = "../slices/images/home/navigation/detectiveson.png";
			}
			else if (nav_id == "cases")
			{
				new_header_src = "../slices/images/home/header3.png";
				nav_on_src = "../slices/images/home/navigation/caseson.png";
			}
			else if (nav_id == "contact")
			{
				new_header_src = "../slices/images/home/header4.png";
				nav_on_src = "../slices/images/home/navigation/contacton.png";
			}
			else if (nav_id == "detective1")
			{
				nav_on_src = "../slices/images/home/navigation/submenubuttons/detective1on.png";
			}	
			else if (nav_id == "detective2")
			{
				nav_on_src = "../slices/images/home/navigation/submenubuttons/detective2on.png";
			}
			else if (nav_id == "detective3")
			{
				nav_on_src = "../slices/images/home/navigation/submenubuttons/detective3on.png";
			}
			else if (nav_id == "detective4")
			{
				nav_on_src = "../slices/images/home/navigation/submenubuttons/detective4on.png";
			}
			else if (nav_id == "case1")
			{
				nav_on_src = "../slices/images/home/navigation/submenubuttons/case1on.png";
			}
			else if (nav_id == "case2")
			{
				nav_on_src = "../slices/images/home/navigation/submenubuttons/case2on.png";
			}

			else if (nav_id == "case3")
			{
				nav_on_src = "../slices/images/home/navigation/submenubuttons/case3on.png";
			}



			// do the animation only if you're on a different button
			if (header_src != new_header_src)
			{
				$("#header #head1").attr("src", "").hide();
				$("#header #head1").attr("src", new_header_src).fadeIn("slow").show();
			}
			// change nav
			$(this).attr("src", nav_on_src);
		},
		function () {
			// this is what happens once your mouse is off
			var nav_id = $(this).attr("id");
			if (!$(this).hasClass("active"))
			{
				if (nav_id == "home")
				{
					nav_off_src = "../slices/images/home/navigation/homeoff.png";
				}
				else if (nav_id == "mission")
				{
					nav_off_src = "../slices/images/home/navigation/missionoff.png";
				}
				else if (nav_id == "detectives")
				{
					nav_off_src = "../slices/images/home/navigation/detectivesoff.png";
				}
				else if (nav_id == "cases")
				{
					nav_off_src = "../slices/images/home/navigation/casesoff.png";
				}
				else if (nav_id == "contact")
				{
					nav_off_src = "../slices/images/home/navigation/contactoff.png";
				}
				else if (nav_id == "detective1")
				{
					nav_off_src = "../slices/images/home/navigation/submenubuttons/detective1off.png";
				}
				else if (nav_id == "detective2")
				{
					nav_off_src = "../slices/images/home/navigation/submenubuttons/detective2off.png";
				}
				else if (nav_id == "detective3")
				{
					nav_off_src = "../slices/images/home/navigation/submenubuttons/detective3off.png";
				}
				else if (nav_id == "detective4")
				{
					nav_off_src = "../slices/images/home/navigation/submenubuttons/detective4off.png";
				}
				else if (nav_id == "case1")
				{
					nav_off_src = "../slices/images/home/navigation/submenubuttons/case1off.png";
				}
				else if (nav_id == "case2")
				{
					nav_off_src = "../slices/images/home/navigation/submenubuttons/case2off.png";
				}
				else if (nav_id == "case3")
				{
					nav_off_src = "../slices/images/home/navigation/submenubuttons/case3off.png";
				}
				// change nav
				$(this).attr("src", nav_off_src);
			}
		}
	);
});
