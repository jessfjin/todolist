
// 3 objects, put them in the array

var matt = {
	name: 'matt',
	occupation: 'ceo/founder',
	img: "http://img-aws.ehowcdn.com/340x221p/photos.demandstudios.com/getty/article/184/227/87793674.jpg"
}

var brian = {
	name: 'brian',
	occupation: 'hacker master',
	img: "https://i.pinimg.com/originals/fd/58/17/fd58172fdee8f7016fb9e82987f203bc.jpg"	
}

var jess = {
	name: 'jess',
	occupation: 'jill of all trades',
	img: "http://www.lolcats.com/images/u/07/30/lolcatsdotcomkeqxm6oofb6yzt3z.jpg"	
}

// Place all the objects in the Array
var people = [jess, brian, matt]

// create img and title for each object and display on the html
for(var i=0; i<people.length; i++){ // loop over the poeple array

// create an img element
var img = document.createElement('img');
var header = document.createElement('h1')
var p = document.createElement('p')

// access the src attritibe of img
img.src = people[i].img;

// access the text attritibe of header and p
header.textContent = people[i].name;

p.textContent = people[i].occupation;

// display the image & text on the html

// create div to hold img, title, and occupation
var div = document.createElement('div');

// add my text and image to this div
div.appendChild(header);
div.appendChild(p);
div.appendChild(img);

// attach our dynamically generated elements to our html
var body = document.querySelector('body');

body.appendChild(div);
}


// To Do List App

function addTasks() {
	// grab the input
	var task = document.getElementById('task').value;

	console.log(task); 

	if (task.trim() === '') {
		return	// break out of this function
	};

	// create list item
	var li = document.createElement('li');

	// add text to our element
	li.textContent = task;

	// add to ordered list
	var ol = document.getElementById('mustdo');

	// get in belly of parent element
	ol.appendChild(li);

	// erase old input
	document.getElementById('task').value = "";

}


// hoisting

addMe();

function addMe(){
	console.log(2+2)
}


