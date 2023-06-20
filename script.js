function getFormvalue() {
    //Write your code here
	const name = document.getElementsByTagName("input");
	// name[0].Id = 'fname';
	// name[1].Id = 'lname';
	// console.clear();
	// console.log(name[0].value, name[1].value);
	alert(name[0].value + " " + name[1].value);
}
