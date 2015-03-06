var bio = {
	"name" : "Taylor Nodell",
	"role" : "Digital Marketer",
	
	"contacts" :  {
			"mobile" : "0449 293 524",
			"email" :"taylor.nodell@gmail.com",
			"github" : "nodes777",
			"twitter" : "@HazardousTay",
			"location" : "Melbourne"
			},
	"welcomeMessage" : "Thank you for viewing my resume!",
	"skills" : ["HTML", "CSS", "Javascript", "WordPress", "Pro Tools", "Audacity",
	 "Microsoft Office Suite", "GiMP", "Photoshop",  "Adobe Premiere",  "Microscopy"],	
	 "biopic" : "http://static.wixstatic.com/media/5efe32_07f84f293f7e46ae92dda7dd24f1bcb5.jpg_srz_p_397_332_75_22_0.50_1.20_0.00_jpg_srz",
	 display: function(){
	 	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
			$("#header").prepend(formattedRole);
			var formattedName = HTMLheaderName.replace("%data%", bio.name);
			$("#header").prepend(formattedName);
			var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
			$("#header").append(formattedBioPic);
			var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
			$("#topContacts").append(formattedMobile);
			var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
			$("#topContacts").append(formattedEmail);
			var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
			$("#topContacts").append(formattedTwitter);
			var formattedGitHub = HTMLgithub.replace("%data%", bio.contacts.github);
			$("#topContacts").append(formattedGitHub);
			var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
			$("#topContacts").append(formattedLocation);
//Welcome Message
var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
$("#header").append(formattedWelcomeMsg);
//Skills
		var skillcount = 0;
		if ( bio.skills.length > 0) {
			 $("#header").append(HTMLskillsStart);
			while ( skillcount < bio.skills.length) {
				var formattedSkill = HTMLskills.replace("%data%", bio.skills[skillcount]);
				$("#skills").append(formattedSkill);
				skillcount = skillcount + 1;
			}
		}
	 }
};
//encapsulate bio

var education = {
	"schools": [
		{
			"name" : "University of Pittsburgh",
		    "location" : "Pittsburgh",
		    "degree" : "Bachelor of Science in Business Administration",
		    "majors": ["Marketing", "Biology"],
		    "dates": 2014,
		    "url": "http://www.pitt.edu/"
		}
	],
	"onlineCourses"	: [
		{
			"title" : "Front End Web Developer",
			"school" : "Udacity",
			"dates" : 2015,
			"url" : "http://www.udacity.com"
		}
	],
		display: function(){
	for ( counter in education.schools) {
			$("#education").append(HTMLschoolStart);

			var formattedSchool = HTMLschoolName.replace("%data%", education.schools[counter].name);
				$(".education-entry:last").append(formattedSchool);
			var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[counter].degree);
				$(".education-entry:last").append(formattedDegree);
			var formattedDates = HTMLschoolDates.replace("%data%", education.schools[counter].dates);
				$(".education-entry:last").append(formattedDates);
		 	var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[counter].location);
				$(".education-entry:last").append(formattedLocation);

			if (education.schools[counter].majors.length > 0){
				for (major in education.schools[counter].majors){
					var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[counter].majors[major]);
					$(".education-entry:last").append(formattedMajor);
				}
			}
			
		}
		for ( counter in education.onlineCourses) {
				$(".education-entry:last").append(HTMLonlineClasses);
			var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[counter].title);
				$(".education-entry:last").append(formattedTitle);
			var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[counter].school);
				$(".education-entry:last").append(formattedSchool);
			var formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[counter].dates);
				$(".education-entry:last").append(formattedDates);
			var formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourses[counter].url);
				$(".education-entry:last").append(formattedURL);
		}
	}
}

var work = {
	"jobs" : [
	{
			"employer" : "Klink & Co Inc.",
			"title" : "Marketing Coordinator",
			"location" : "Pittsburgh",
			"dates" : "May 2014 - December 2014",
			"description" : "I developed online campaigns, including email blasts, advertising, and blog posts to increase web traffic by 15% and duration of visits by 20%. I created a trade show exhibition and a new WordPress site for the sister company KlinkCheck. I also performed litigation research for investigations. After a first interview I was told that an MBA or Law student would be a better fit for the role, however, I returned for a second interview with a marketing plan for the CEO's two compannies and he was so impressed that he hired me on the spot."
	},
	{		"employer" : "WPTS Radio",
			"title" : "Director of Promotions and Productions",
			"location" : "Pittsburgh",
			"dates" : "August 2012 - May 2014",
			"description" : "I coordinated the rebranding of the station, resulting in winning Best Station Imaging in the nation by College Broadcasters Inc. My branding work includes on-air promos giving identity to the station, videos including one aired on MTV and one gaining over 250,000 views on YouTube. Under my leadership WPTS Radio increased in Facebook Likes by 125% and in Twitter followers by 50%. I was responsible for managing multiple groups of 10 - 20 people. I energized and instructed peers on audio and video recording, content creation, and event coordination. My favorite event I led involved bringing a penguin to campus as an educational presentation. I also hosted a stand up comedy show where I interviewed many famous comedians including Eddie Izzard, Bill Burr and Steven Wright."
	},
	{		"employer" : "Technology Services at the University of Pittsburgh",
			"title" : "Senior Computer Lab Consultant",
			"location" : "Pittsburgh",
			"dates" : "August 2012 - December 2014",
			"description" : " I provided excellent customer service as a Junior Computer Lab Consultant, resulting in a promotion to Senior Computer Lab Consultant. I handled level one technology issues for students and faculty, and performed routine maintence on University of Pittsburgh devices. As a Senior Consultant I instructed new consultantson lab procedures and improved the readability of policies and procedures manual."
	},		
	{		"employer" : "Pruitt Lab at the University of Pittsburgh",
			"title" : "Lab Assistant",
			"location" : "Pittsburgh",
			"dates" : "August 2014 - December 2014",
			"description" : "As a Lab Assistant in one of the premiere arachnid labratories, I conducted behavioral assays on Agelonopsis Actuosa, Dolomedes Triton and Temnothorax Curvispinosis. Data from my research is being compiled into academic research papers on disease transfer in sexually cannablisitc spiders and personality research on ants at the individual and colony level. I also maintained animal enclosures and captured Agelnopsis and Dolemedes in the field. Data entry and microscopy were skills used regularly in the lab."
	}			
			],
		display: function(){
			for ( jobcounter in work.jobs) {
		$("#workExperience").append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[jobcounter].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[jobcounter].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		$(".work-entry:last").append(formattedEmployerTitle);

		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[jobcounter].dates);
		$(".work-entry:last").append(formattedDates);

	 	var formattedDescription= HTMLworkDescription.replace("%data%", work.jobs[jobcounter].description);
		$(".work-entry:last").append(formattedDescription);

		}
	}
}

var projects = {
	"projects" : [
	{
		"title" : "Technology Consultant for Bespoke Delivery",
		"dates" : "October 2014 - Ongoing",
		"description" : "Developed online ordering system for start up Bespoke Delivery, a meal delivery service on bicycles",
		"images" : ["http://i.imgur.com/Wfr9NXC.gif", "http://i.imgur.com/Wfr9NXC.gif", 
				"http://i.imgur.com/Wfr9NXC.gif"]
	},
	{
		"title" : "I Pet A Dog",
		"dates" : "August 2014 - December 2014",
		"description" : "Recorded my own album. The theme? Children's music of course! It's about petting dogs and zoos and snowpants.",
		"images" : ["https://f1.bcbits.com/img/a3479605292_10.jpg"]
	}

	],
	display: function(){
		for ( project in projects.projects) {
			$("#projects").append(HTMLprojectStart);

			var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
				$(".project-entry:last").append(formattedTitle);
			var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
				$(".project-entry:last").append(formattedDates);
			var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
				$(".project-entry:last").append(formattedDescription);

			if (projects.projects[project].images.length > 0){
				for (image in projects.projects[project].images){
					var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
					$(".project-entry:last").append(formattedImage);
				}
			}
		

		}
	}
};

education.display();

$("#mapDiv").append(googleMap);



projects.display();
work.display();
bio.display();