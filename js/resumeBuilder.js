// Hello.
//
// This is JSHint, a tool that helps to detect errors and potential
// problems in your JavaScript code.
//
// To start, simply enter some JavaScript anywhere on this page. Your
// report will appear on the right side.
//
// Additionally, you can toggle specific options in the Configure
// menu.
// This code is the javascript for the udacity resume project 
// below is the information that is in the header and footer of the page
var bio = {
    "name": "Jessica Sole",
    "role": "Wannabe Web Developer",
    "contacts": {
        "email": "jesesnz@gmail.com",
        "mobile": "555-5555",
        "twitter": "janedoe",
        "location": "Australia",
        "github": "CitizenofWorld",
    },
    "welcomeMessage": "Live long and prosper",
    "skills": [
        "being awesome", "patience", "  hiking", "  learning "
    ],
    "biopic": "images/lisa.jpg"

};


//This loop below puts the objects array onto the header portion of the projec

bio.display = function() {


    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
    var formattedwelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    var formattedemail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedgithub = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedmobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedlocation = HTMLlocation.replace("%data%", bio.contacts.location);
    var formattedtwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);


    $("#header").prepend(formattedName, formattedRole);
    $("#header").append(formattedBioPic, formattedwelcomeMsg);
    $("#topContacts, #footerContacts").append(formattedemail, formattedgithub, formattedlocation, formattedmobile, formattedtwitter);

    var array = bio.skills.length;
    for (skill = 0; skill < array; skill++) {
        $("#header").append(HTMLskillsStart);
        var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
        $("#skills").append(formattedSkill);
        var formattedSkill1 = HTMLskills.replace("%data%", bio.skills[1]);
        $("#skills").append(formattedSkill1);
        var formattedSkill2 = HTMLskills.replace("%data%", bio.skills[2]);
        $("#skills").append(formattedSkill2);
        var formattedSkill3 = HTMLskills.replace("%data%", bio.skills[3]);
        $("#skills").append(formattedSkill3);
        break;
    }
};

bio.display();


//// This is the work history section of the resume project

var work = {
    "jobs": [{
            "employer": "NOBU Melbourne",
            "title": "Pastry Chef",
            "dates": "01/2016-07/2016",
            "location": "Melbourne, Australia",
            "description": "In charge of pastry area of NOBU kitchen.  This involved leadership, Menu design and Creation, Food Cost calculations.  I left NOBU to persue a path and career change into web development"
        },
        {
            "employer": "WYNN Las Vegas",
            "title": "Pastry Sous Chef",
            "dates": "01/2012-06-2014",
            "location": "Las Vegas, USA",
            "description": "In charge of hotels restaurant dessert department.  left to move to Australia"
        },
        {
            "employer": "Baptist Health South",
            "title": "Dining Services Supervisor",
            "dates": "01/2010-06-2012",
            "location": "Miami, Fl",
            "description": "Manage staff of dining services and made sure all food standards were being met.  Left for Vegas opportunity"
        }
    ]
};

//This loop below will display the jobs array into the work experience part of the project
work.display = function() {
    for (var job = 0; job < work.jobs.length; job++) {
        console.log(work.jobs[job]);

        $("#workExperience").append(HTMLworkStart);

        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        $(".work-entry:last").append(formattedEmployerTitle);
        var formattedworkDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        $(".work-entry:last").append(formattedworkDates);
        var formattedworkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
        $(".work-entry:last").append(formattedworkLocation);
        var formattedworkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        $(".work-entry:last").append(formattedworkDescription);

    }
};

work.display();

/////   This is the Projects section of resume

var projects = {
    "projects": [{
            "title": "Online Resume Project",
            "dates": "January 2016",
            "description": "The project requires students to use Javascript to build a resume.",
            "images": ["images/steve.jpg"]
        },
        {
            "title": "Build a Portfolio Site",
            "dates": "October 2016",
            "description": "The project requires students to build a site using bootstrap.",
            "images": ["images/albert.jpg"]
        },

    ]
};

//This loop below displays the projects array onto the page

projects.display = function() {
    for (var project = 0; project < projects.projects.length; project++) {
        console.log(projects.projects[project]);

        $("#projects").append(HTMLprojectStart);

        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        $(".project-entry:last").append(formattedTitle);

        var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
        $(".project-entry:last").append(formattedDates);

        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
        $(".project-entry:last").append(formattedDescription);

        //this loop is for the images of the projects
        var imgArray = projects.projects[project].images.length;

        for (var image = 0; image < imgArray; image++) {
            var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
            $(".project-entry:last").append(formattedImage);

            console.log();
        }
    }
};



projects.display();

//below is the code to have a button that makes the page ready for international viewers......
//internationalize button
// function inName(name) {
//  name = name.trim().split(" ");
//  console.log(name);
//  name[1] = name[1].toUpperCase();
//  name[0] = name[0].slice(0,1).toUpperCase() +
//  name[0].slice(1).toLowerCase();

//  return name[0] +" "+ name[1];
// }

// $("#main").append(internationalizeButton);


//Below is the array that will be used to diplay the education info, both university and online courses
var education = {
    "schools": [{
            "name": "Johnson and Wales",
            "location": "Miami, FL",
            "majors": ["Baking and Pastry Arts"],
            "degree": "AS",
            "dates": "2007",
            "url": "https://www1.jwu.edu/"
        },
        {
            "name": "Florida International University",
            "location": "Miami, FL",
            "degree": "BA",
            "majors": ["Hospitality Management"],
            "dates": "Still in progress",
            "url": "http://www.fiu.edu/"
        }
    ],
    "onlineCourses": [{
            "title": "Intro to Java",
            "school": "Udacity",
            "dates": "2017",
            "url": "https://www.udacity.com/course/javascript-basics--ud804"
        },
        {
            "title": "Intro to HTML and CSS",
            "school": "Udacity",
            "dates": "2016",
            "url": "https://www.udacity.com/course/javascript-basics--ud304"
        }
    ]
};


//the loop below displays the education info that is within the schools array

education.display = function() {

    for (var school = 0; school < education.schools.length; school++) {
        console.log(education.schools[school]);

        $(".edu").append(HTMLschoolStart);

        var formattedschoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
        $(".edu:last").append(formattedschoolName);

        var formattedschoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
        $(".edu:last").append(formattedschoolDegree);

        var formattedschoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
        $(".edu:last").append(formattedschoolDates);

        var formattedschoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
        $(".edu:last").append(formattedschoolLocation);

        var formattedschoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
        $(".edu:last").append(formattedschoolMajor);

        //This loop below displays the online courses info in the onlineCourses array

        var eduArray = education.onlineCourses.length;

        for (var online = 0; online < eduArray; online++) {

            $(".online").append(HTMLschoolStart);
            var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[school].title);
            $(".education-entry:last").append(formattedOnlineTitle);
            var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[school].school);
            $(".education-entry:last").append(formattedOnlineSchool);
            var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[school].dates);
            $(".education-entry:last").append(formattedOnlineDates);
            var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[school].url);
            $(".education-entry:last").append(formattedOnlineURL);
            break;
        }
    }
};
education.display();



///  Heres  a Map

$("#mapDiv").append(googleMap);