// var name ="Jessica Sole";

// var formattedName = HTMLheaderName.replace("%data%", name);

// var role = "Awesome Student";
// var formattedRole = HTMLheaderRole.replace("%data%", role);


// $("#header").prepend(formattedRole);
// $("#header").prepend(formattedName);

// var skills=
// ["Awesomeness","Multitasking","teaching","Patience"];

// $("#main").append(skills);
// $("#main").append(skills[0]);
// $("#main").append(skills.length);




var bio = {
	"name" : "Jessica Sole",
	"role" : "Wannabe Web Developer",
	"contacts": {
	"email" : "jesesnz@gmail.com",
	"mobile" : "555-5555",
	"twitter" : "janedoe",
	"location" : "Australia",
	"github" : "CitizenofWorld",
},
	"welcomeMessage" : "Hello World",
	"skills": [
	"being awesome, patience, napping, learning "
	],
	"bioPic" : "images/lisa.jpg"

};


// $("#main").append(bio.role);
// $("#main").append(bio.skills);

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
var formattedwelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
var formattedcontactGeneric = HTMLcontactGeneric.replace("%data%", bio.contacts);

var formattedemail = HTMLemail.replace("%data%", bio.email);
var formattedgithub = HTMLgithub.replace("%data%", bio.github);
var formattedskills = HTMLskills.replace("%data%", bio.skills);
var formattedmobile = HTMLmobile.replace("%data%", bio.mobile);
var formattedlocation = HTMLlocation.replace("%data%", bio.location);
var formattedtwitter = HTMLtwitter.replace("%data%", bio.twitter);


$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").append(formattedBioPic);
$("#header").append(formattedwelcomeMsg);
$("#topContacts").append(formattedcontactGeneric);
$("#topContacts").append(formattedemail);
$("#topContacts").append(formattedgithub);
$("#topContacts").append(formattedskills);
$("#topContacts").append(formattedmobile);
$("#topContacts").append(formattedlocation);
$("#topContacts").append(HTMLskillsStart);
$("#topContacts").append(formattedtwitter);




// var education = {
// 	"schools": [
// 	{
// 		"name": "Johnson and Wales",
// 		"Location": "Miami, FL",
// 		"Majors": "Baking and Pastry Arts",
// 		"Dates": "2007",
// 		"url" : "https://www1.jwu.edu/"
// 	},
// 	{
// 		"name": "Florida International University",
// 		"location": "Miami, FL",
// 		"Degree": "BA",
// 		"Major": "Hospitality Management",
// 		"dates": "Still in progress",
// 		"url" : "http://www.fiu.edu/"
// 	}
// ],
// "online courses": [
// {
// 	"tittle": "Javascript Syntax",
// 	"school": "Udacity",
// 	"dates": "2016"
// }]
// }

// var work = {
// 	"Jobs" : [
// 	{
// 		"employer": "NOBU Melbourne",
// 		"Title" : "Pastry Chef",
// 		"Dates" : "01/2016-07/2016",
// 		"description" : "In charge of pastry area of NOBU kitchen.  This involved leadership, Menu design and Creation, Food Cost calculations.  I left NOBU to persue a path and career change into web development"
// 	},
// 	{
// 		"employer": "WYNN Las Vegas",
// 		"Title" : "Pastry Sous Chef",
// 		"Dates" : "01/2012-06-2014",
// 		"description" : "In charge of hotels restaurant dessert department.  left to move to Australia"
// 	}]
// }

// var projects = {
// 	"projects" : [
// 	{
// 		"title" : "Resume Project",
// 		"dates" : "January 2016",
// 		"descripton" : "The project requires students to use Javascript to build a resume. This project is my first attempt at using Javascript",
// 		"images" : "http://placekitten.com/200/300"
// 	}]
// }


// if(bio.skills.length > 0) {
// 	$("#header").append(HTMLSkillsStart);

// 	var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
// 	$("#skills").append(formattedSkill);
// 	formattedSkill= HTMLskills.replace("%data%",bio.skills[1]);
// 	$("#skills").append(formattedSkill);
// 	formattedskill=HTMLskills.replace("%data%",bio.skills[2]);
// 	$("#skills").append(formattedSkill);
// 	formattedskill=HTMLskills.replace("%data%",bio.skills[3]);
// 	$("#skills").append(formattedSkill);

// }
// console.log(ifstatement);

// for (job in owrk.jobs) {
// 	$("#workExperience").append(HTMLworkStart);

// 	var formattedEmployer = HTMLworkEmployer.replace
// 		("%data%", work.jobs[job].employer);
// 	var formattedTitle = HTMLworkEmployer.replace
// 		("%data", work.jobs[job].title);
// 	var formattedEmployerTitle = formattedEmployer +
// 		formattedTitle;

// 		$(".work-entry:last").append(formattedEmployerTitle);
// }


