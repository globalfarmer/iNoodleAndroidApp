const requireInfo = (code, term) => (
	fetch("http://188.166.222.158:8080/finaltest", {
		method: 'POST',
  		headers: {
    		'Content-Type': 'application/json',
  		},
  		body: JSON.stringify({code,term })
	})
	.then((response)=>response.json())
	//.then((responseJson) => {console.log(responseJson)})
);

module.exports = requireInfo;