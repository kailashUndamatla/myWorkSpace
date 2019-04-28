//ADD YOUR CODE HERE.
$.getJSON("http://www.tutorialspoint.com/jquery/result.json", function(data){
	alert(data);
})
.success(function() { alert("second success"); })
.error(function(jqXHR, textStatus, errorThrown) { alert(errorThrown); })
.complete(function() { alert("complete"); });
