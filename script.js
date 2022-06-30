$(".find").click(function() { 
	let number = Number($(".hours").val());
    console.log(number);
	let worker = $(".har-work").val();
	let problem = $(".problem").val();
	if(number >= 15 && worker === "Yes" && problem === "No") {
		$(".results").text("You will be very succesfull");
	} else {
  		$(".results").text("You will not be successfull");
	}
});