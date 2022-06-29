$(".find").click(function() { 
	let number = Number($(".hours").val());
    console.log(number);
	let worker = $(".har-work").val();
	let problem = $(".problem").val();
	if(number >= 15 && worker === "Yes" && problem === "No") {
		$(".results").append("<p>You will be very succesfull</p>");
	} else {
  		$(".results").append("<p>You will not be successfull</p>");
	}
});