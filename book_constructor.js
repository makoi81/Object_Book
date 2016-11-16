function Book(title, body){
	this.title = title;
	this.body = body;
	this.read = function(){
		console.log("title: " + this.title);
        for(var item in this.body){
        	console.log("page" + (parseInt(item) + 1) + " : " + this.body[item]);
        }
	}
}

var myBook1 = new Book('infinite Jest', ["Written by David Foster Wallace","Hal Incandenza is the youngest of the Incandenza children.","As a child, he was very precocious."]);
myBook1.read(); 