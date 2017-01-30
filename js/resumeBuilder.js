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
    "bioPic": "images/lisa.jpg"

};



var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
var formattedwelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
var formattedemail = HTMLemail.replace("%data%", bio.contacts.email);
var formattedgithub = HTMLgithub.replace("%data%", bio.contacts.github);
var formattedmobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var formattedlocation = HTMLlocation.replace("%data%", bio.contacts.location);
var formattedtwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);


$("#header").prepend(formattedName, formattedRole);
$("#header").append(formattedBioPic, formattedwelcomeMsg);
$("#topContacts").append(formattedemail, formattedgithub, formattedlocation, formattedmobile, formattedtwitter);



if (bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);

    var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
    $("#skills").append(formattedSkill);
}



//// Th is is the work history section of the resume project

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


function displayWork() {
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
}

displayWork();

/////   This is the Projects section of resume

var projects = {
    "projects": [{
            "title": "Online Resume Project",
            "dates": "January 2016",
            "description": "The project requires students to use Javascript to build a resume.",
            "images": "images/steve.jpg"
        },
        {
            "title": "Build a Portfolio Site",
            "dates": "October 2016",
            "description": "The project requires students to build a site using bootstrap.",
            "images": "images/albert.jpg"
        }
    ]
};

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

        var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images);
        $(".project-entry:last").append(formattedImage);
    }
};

projects.display();



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



var education = {
    "schools": [{
            "name": "Johnson and Wales",
            "location": "Miami, FL",
            "major": "Baking and Pastry Arts",
            "degree": "AS",
            "dates": "2007",
            "url": "https://www1.jwu.edu/"
        },
        {
            "name": "Florida International University",
            "location": "Miami, FL",
            "degree": "BA",
            "major": "Hospitality Management",
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
        $(".edu:last").append(formattedschoolDates);

        var formattedschoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
        $(".edu:last").append(formattedschoolMajor);
    }
};

if (education.onlineCourses.length > 0) {


    for (var i in education.onlineCourses) {
        if (education.onlineCourses.hasOwnProperty(i)) {
            $("#education").append(HTMLschoolStart);

            $(".online").append(HTMLschoolStart);
            var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title);
            $(".education-entry:last").append(formattedOnlineTitle);
            var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
            $(".education-entry:last").append(formattedOnlineSchool);
            var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].dates);
            $(".education-entry:last").append(formattedOnlineDates);
            var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url);
            $(".education-entry:last").append(formattedOnlineURL);
        }
    }
}


education.display();



///  Heres  a Map


$("#mapDiv").append(googleMap);