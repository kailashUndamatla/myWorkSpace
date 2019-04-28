//ADD YOUR CODE HERE.
$.getJSON("http://localhost:8080/Oraclereq/guide.JSON", {'mimeType' : 'application/json'}, function(data){
	data.steps.forEach(function(subData){
		$(subData.selector).attr('title', subData.content);
	});
})
.success(function() { alert("second success"); })
.error(function(jqXHR, textStatus, errorThrown) { alert(errorThrown); })
.complete(function() { alert("complete"); });
