//ADD YOUR CODE HERE.
$.getJSON("http://localhost:8080/Oraclereq/guide.JSON", function(data){
	alert(data);
})
.success(function() { alert("second success"); })
.error(function(jqXHR, textStatus, errorThrown) { alert(errorThrown); })
.complete(function() { alert("complete"); });
