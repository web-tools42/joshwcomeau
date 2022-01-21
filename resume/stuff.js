$(document).ready(function() {
	// Event Binders
	$("#sm-facebook").mouseenter(function() {
		$(this).attr("src","images/icon-facebook-color.png")
	}).mouseleave(function() {
		$(this).attr("src","images/icon-facebook.png")
	});
	$("#sm-twitter").mouseenter(function() {
		$(this).attr("src","images/icon-twitter-color.png")
	}).mouseleave(function() {
		$(this).attr("src","images/icon-twitter.png")
	});
	$("#sm-gplus").mouseenter(function() {
		$(this).attr("src","images/icon-gplus-color.png")
	}).mouseleave(function() {
		$(this).attr("src","images/icon-gplus.png")
	});
	$("#sm-github").mouseenter(function() {
		$(this).attr("src","images/icon-github-color.png")
	}).mouseleave(function() {
		$(this).attr("src","images/icon-github.png")
	});

	// Show/hide experience subsections
	$(".experience-smalltitles-l").click(function() {
		$(".experience-am-details").addClass("hiddensub");
		$(".experience-am-details > p").slideUp(500);
		if ( $(this).parent().children("p").is(":visible") ) {
			$(this).parent().children("p").slideUp(500);
		} else {
			$(this).parent().children("p").slideDown(500);
			$(this).parent().removeClass("hiddensub");
		}
	});
	$(".experience-smalltitles-r").click(function() {
		$(".experience-wd-details").addClass("hiddensub");
		$(".experience-wd-details > p, .experience-wd-details > div").slideUp(500);
		if ( $(this).parent().children("p, div").is(":visible") ) {
			$(this).parent().children("p, div").slideUp(500);
		} else {
			$(this).parent().children("p, div").slideDown(500);
			$(this).parent().removeClass("hiddensub");
		}
	});


	// Hide stuff for those with javascript disabled.
	$(".hiddensub").children("p, div").hide();

// Add 10 notches to our graph
for (i=0;i<100;i+=10) {
	$("#graph").append("<div class='graph-notch' style='top:" + i + "%;'></div>")
}

// Add our bars!
data = Array();
data["python"] = 82;
data["javascript"] = 54;
data["jquery"] = 80;
data["htmlcss"] = 96;
data["ruby"] = 51;
data["rails"] = 19;
data["php"] = 45;
data["mysql"] = 52;
data["photoshop"] = 92;

label = Array();
label["python"] = "Python";
label["javascript"] = "JavaScript";
label["jquery"] = "jQuery";
label["htmlcss"] = "HTML/CSS";
label["ruby"] = "Ruby";
label["rails"] = "Rails";
label["php"] = "PHP";
label["mysql"] = "MySQL";
label["photoshop"] = "Photoshop";

leftdist = 25;

for (var index in data) {
	$("#graph").append("<div class='graph-bar' id='graph-" + index + "' style='height: " + data[index] + "%; left: " + leftdist + "px;'><div class='graph-x-label'>" + label[index] + "</div><div class='graph-x-number'>" + data[index] + "%</div></div>")
	leftdist += 70;
};

// Do 'chart-making skills' separately
$("#graph").append("<div class='graph-bar' id='graph-chart' style='height: 110%; left: " + leftdist + "px;'><div class='graph-x-label'>Chart&nbsp;Making&nbsp;Skills</div><div class='graph-x-number' id='charts-number'>It's off the charts!</div></div>")

	// Hide the bars, for compatibility with JS-disabled devices.
	$(".graph-bar").hide();
	// Bind scrolling to a function that shows the bars when it reaches the right distance from top.
	$(window).scroll(function() {
		if ( scrollVisible( $("#graph") ) ) {
			
			// $(".graph-bar").show("slide", { direction: "down", easing: "easeOutBounce"}, 1000);
			$("#graph-python").show("slide", { direction: "down", easing: "easeOutBounce"}, 1000);
			$("#graph-javascript").delay(50).show("slide", { direction: "down", easing: "easeOutBounce"}, 1000);
			$("#graph-jquery").delay(100).show("slide", { direction: "down", easing: "easeOutBounce"}, 1000);
			$("#graph-htmlcss").delay(150).show("slide", { direction: "down", easing: "easeOutBounce"}, 1000);
			$("#graph-ruby").delay(200).show("slide", { direction: "down", easing: "easeOutBounce"}, 1000);
			$("#graph-rails").delay(250).show("slide", { direction: "down", easing: "easeOutBounce"}, 1000);
			$("#graph-php").delay(300).show("slide", { direction: "down", easing: "easeOutBounce"}, 1000);
			$("#graph-mysql").delay(350).show("slide", { direction: "down", easing: "easeOutBounce"}, 1000);
			$("#graph-photoshop").delay(400).show("slide", { direction: "down", easing: "easeOutBounce"}, 1000);
			$("#graph-chart").delay(450).show("slide", { direction: "down", easing: "easeOutBounce"}, 1000, function() {
				// Put our chart mouseover bindings AFTER the last bounce, to avoid trouble.
	  		$(".graph-bar").mouseenter(function() {
	  			$(this).find(".graph-x-number").show("slide", { direction: "down" }, 250);
	  		}).mouseleave(function() {
	  			$(this).find(".graph-x-number").hide("slide", { direction: "down"}, 250);
	  		});

			});
			
		} 
	});

});

function scrollVisible(chart) {
	var docTop = $(window).scrollTop(),
		docBtm = docTop + $(window).height(),
		chartTop = $(chart).offset().top,
		chartBtm = chartTop + $(chart).height();
	return ( (chartBtm >= docTop) && (chartTop <= docBtm) && (chartBtm <= docBtm) && (chartTop >= docTop) );
}
