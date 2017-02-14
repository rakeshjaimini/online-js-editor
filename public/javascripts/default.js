function run(){
	var url = "http://localhost:3000/api/run";
	var input =document.getElementById("input");
	var params = "script="+encodeURIComponent(input.value.trim());
	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function() {
    if (xhr.readyState == XMLHttpRequest.DONE) {
        document.getElementById("output").value=xhr.responseText;
    }
}
	xhr.open("POST", url, true);

	//Send the proper header information along with the request
	xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

	xhr.send(params);
}