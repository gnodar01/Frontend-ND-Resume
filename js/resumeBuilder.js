var model = {
	bio: {
		name: "Nodari Gogoberidze",
		role: "Web Developer",
		welcomeMessage: "I realize this looks horrendous, I'm working on cleaning up the code first. Skills below are just filler. Everything except for education needs updating.",
		contacts: {
			LinkedIn: "/in/gnodari",
			mobile: "407-401-2267",
			email: "gnodar01@gmail.com",
			gitHub: "/gnodar01",
			twitter: "@gnodar01",
			location: "Orlando, Florida"
		},
		skills: ["Front-End Web Development", "Entrepreneurship", "Financial Modeling", "Strategic Research", "Start-Up Consulting", "Lean Methodology", "Awesomeness"],
		bioPic: "images/profile_pic.jpg"
	},

	work: {
		jobs: [
			{
				title: "Market Research Analyst",
				employer: "University of Central Florida: Office of Research and Commercialization",
				yearsWorked: "1 year",
				location: "Oviedo, Florida",
				jobDescription: "Market research for strategic decision making"
			},
			{
				title: "Market Research Analyst",
				employer: "Invitation Homes - a subsidiary of The Blackstone Group",
				yearsWorked: "1 year",
				location: "Orlando, Florida",
				jobDescription: "Determine residential real estate market values, rent values, rehab estimates"
				+ " and overall optimal purchase price valuation"
			}
		]
	},

	projects: {
		projects: [
			{
				title: "one",
				dates: "2014",
				description: "first project",
				images: ["http://placehold.it/350x150", "http://placehold.it/350x150"]
			},
			{
				title: "two",
				dates: "2014",
				description: "second project",
				images: ["http://placehold.it/350x150", "http://placehold.it/350x150"]
			}
		]
	},

	education: {
		schools: [
			{
				name: "University of Central Florida",
				location: "Orlando, Florida",
				degree: "Bacholors of Science",
				major: "Finance",
				graduationDate: "2012",
				websiteUrl: "http://www.ucf.edu/"
			},
			{
				name: "Valencia",
				location: "Orlando, Florida",
				degree: "Assosicates of Science",
				major: "Business Administration",
				graduationDate: "2010",
				websiteUrl: "http://valenciacollege.edu/"
			}
		],
		onlineCourses: [
			{
				name: "Udacity",
				title: "Front-End Web Development Nano Degree",
				graduationDate: "2015",
				websiteUrl: "https://www.udacity.com"
			},
			{
				name: "Code School",
				title: "Javascript",
				graduationDate: "2014",
				websiteUrl: "https://www.codeschool.com"
			}
		]
	}
}

var view = {
	init: function() {
		this.HTMLheaderName = "<h1 id='name'>%data%</h1>";
		this.HTMLheaderRole = "<span>%data%</span><hr/>";

		this.HTMLcontactGeneric = "<li class='flex-item'><span class='orange-text'>%contact%</span><span class='white-text'>%data%</span></li>";
		this.HTMLmobile = "<li class='flex-item'><span class='orange-text'>mobile</span><span class='white-text'>%data%</span></li>";
		this.HTMLemail = "<li class='flex-item'><span class='orange-text'>email</span><span class='white-text'>%data%</span></li>";
		this.HTMLgithub = "<li class='flex-item'><span class='orange-text'>github</span><span class='white-text'>%data%</span></li>";
		this.HTMLtwitter = "<li class='flex-item'><span class='orange-text'>twitter</span><span class='white-text'>%data%</span></li>";
		this.HTMLblog = "<li class='flex-item'><span class='orange-text'>blog</span><span class='white-text'>%data%</span></li>";
		this.HTMLlocation = "<li class='flex-item'><span class='orange-text'>location</span><span class='white-text'>%data%</span></li>";

		this.HTMLbioPic = "<img src='%data%' class='biopic'>";
		this.HTMLWelcomeMsg = "<span class='welcome-message'>%data%</span>";

		this.HTMLskillsStart = "<h3 id='skillsH3'>Skills at a Glance:</h3><ul id='skills' class='flex-box'></ul>";
		this.HTMLskills = "<li class='flex-item'><span class='white-text'>%data%</span></li>";

		this.HTMLworkStart = "<div class='work-entry'></div>";
		this.HTMLworkEmployer = "<a href='#'>%data%";
		this.HTMLworkTitle = " - %data%</a>";
		this.HTMLworkDates = "<div class='date-text'>%data%</div>";
		this.HTMLworkLocation = "<div class='location-text'>%data%</div>";
		this.HTMLworkDescription = "<p><br>%data%</p>";

		this.HTMLprojectStart = "<div class='project-entry'></div>";
		this.HTMLprojectTitle = "<a href='#'>%data%</a>";
		this.HTMLprojectDates = "<div class='date-text'>%data%</div>";
		this.HTMLprojectDescription = "<p><br>%data%</p>";
		this.HTMLprojectImage = "<img src='%data%'>";

		this.HTMLschoolStart = "<div class='education-entry'></div>";
		this.HTMLschoolName = "<a href='#'>%data%";
		this.HTMLschoolDegree = " -- %data%</a>";
		this.HTMLschoolDates = "<div class='date-text'>%data%</div>";
		this.HTMLschoolLocation = "<div class='location-text'>%data%</div>";
		this.HTMLschoolMajor = "<em><br>Major: %data%</em>"

		this.HTMLonlineClasses = "<h3>Online Classes</h3>";
		this.HTMLonlineTitle = "<a href='#'>%data%";
		this.HTMLonlineSchool = " - %data%</a>";
		this.HTMLonlineDates = "<div class='date-text'>%data%</div>";
		this.HTMLonlineURL = "<br><a href='#'>%data%</a>";

		this.internationalizeButton = "<button>Caps</button>";
		this.googleMap = "<div id='map'></div>";


		this.render();
	},
	render: function() {
		// Display Header
		var formattedHeaderName = this.HTMLheaderName.replace("%data%", model.bio.name),
		formattedHeaderRole = this.HTMLheaderRole.replace("%data%", model.bio.role),
		fromattedHeader = formattedHeaderName + formattedHeaderRole;

		$("#header").prepend(fromattedHeader);

		var formattedContactGeneric = this.HTMLcontactGeneric.replace("%contact%",Object.keys(model.bio.contacts)[0]).replace("%data%", model.bio.contacts.LinkedIn),
		formattedMobile = this.HTMLmobile.replace("%data%", model.bio.contacts.mobile),
		formattedEmail = this.HTMLemail.replace("%data%", model.bio.contacts.email),
		formattedGithub = this.HTMLgithub.replace("%data%", model.bio.contacts.gitHub),
		formattedTwitter = this.HTMLtwitter.replace("%data%", model.bio.contacts.twitter),
		formattedLocation = this.HTMLlocation.replace("%data%", model.bio.contacts.location),
		formattedContactList = formattedMobile + formattedEmail + formattedGithub + formattedTwitter + formattedLocation;

		$("#topContacts").append(formattedContactGeneric).append(formattedContactList);
		$("#footerContacts").append(formattedContactGeneric).append(formattedContactList);

		var formattedWelcomeMessage = this.HTMLWelcomeMsg.replace("%data%", model.bio.welcomeMessage),
		formattedBioPic = this.HTMLbioPic.replace("%data%", model.bio.bioPic),
		formattedBio = formattedWelcomeMessage + formattedBioPic + this.HTMLskillsStart;

		$("#header").append(formattedBio);

		var formattedSkill;
		for (skill in model.bio.skills) {
			formattedSkill = this.HTMLskills.replace("%data%", model.bio.skills[skill]);
			$("#skills").append(formattedSkill);
		}

		// Display Work
		for (job in model.work.jobs) {
			$("#workExperience").append(this.HTMLworkStart);
			var formattedEmployer = this.HTMLworkEmployer.replace("%data%", model.work.jobs[job].employer);
			var formattedTitle = this.HTMLworkTitle.replace("%data%", model.work.jobs[job].title);
			var formattedEmployerTitle = formattedEmployer + formattedTitle;
			$(".work-entry:last").append(formattedEmployerTitle);
			var formattedWorkDates = this.HTMLworkDates.replace("%data%", model.work.jobs[job].yearsWorked);
			$(".work-entry:last").append(formattedWorkDates);
			var formattedWorkLocation = this.HTMLworkLocation.replace("%data%", model.work.jobs[job].location);
			$(".work-entry:last").append(formattedWorkLocation);
			var formattedJobDescription = this.HTMLworkDescription.replace("%data%", model.work.jobs[job].jobDescription);
			$(".work-entry:last").append(formattedJobDescription);
		}

		// Display Projects
		for (project in model.projects.projects) {
			$("#projects").append(this.HTMLprojectStart);

			var formattedProjectTitle = this.HTMLprojectTitle.replace("%data%", model.projects.projects[project].title);
			$(".project-entry:last").append(formattedProjectTitle);
			var formattedProjectDates = this.HTMLprojectDates.replace("%data%", model.projects.projects[project].dates);
			$(".project-entry:last").append(formattedProjectDates);
			var formattedProjectDescription = this.HTMLprojectDescription.replace("%data%", model.projects.projects[project].description);
			$(".project-entry:last").append(formattedProjectDescription);
			 if (model.projects.projects[project].images.length>0) {
			 	for (image in model.projects.projects[project].images) {
			 		var formattedProjectImage = this.HTMLprojectImage.replace("%data%", model.projects.projects[project].images[image]);
			 		$(".project-entry:last").append(formattedProjectImage);
			 	}
			 }
		}

		// Display Education
		$("#education").append(this.HTMLschoolStart);
		var formattedSchoolName, formattedSchoolDegree, formattedSchoolDates, formattedSchoolLocation, formattedSchoolMajor;
		for (school in model.education.schools) {
			formattedSchoolName = this.HTMLschoolName.replace("%data%", model.education.schools[school].name);
			formattedSchoolDegree = this.HTMLschoolDegree.replace("%data%", model.education.schools[school].degree);
			formattedSchoolDates = this.HTMLschoolDates.replace("%data%", model.education.schools[school].graduationDate);
			formattedSchoolLocation = this.HTMLschoolLocation.replace("%data%", model.education.schools[school].location);
			formattedSchoolMajor = this.HTMLschoolMajor.replace("%data%", model.education.schools[school].major);
			var formattedSchoolList = formattedSchoolName + formattedSchoolDegree + formattedSchoolDates + formattedSchoolLocation + formattedSchoolMajor;
			$(".education-entry").append(formattedSchoolList);
		}
		$("#education").append(this.HTMLonlineClasses);
		$("#education").append(this.HTMLschoolStart);
		var formattedOnlineTitle, formattedOnlineSchool, formattedOnlineDates, formattedOnlineURL;
		for (platform in model.education.onlineCourses) {
			formattedOnlineTitle = this.HTMLonlineTitle.replace("%data%", model.education.onlineCourses[platform].title);
			formattedOnlineSchool = this.HTMLonlineSchool.replace("%data%", model.education.onlineCourses[platform].name).replace("#", model.education.onlineCourses[platform].websiteUrl);
			formattedOnlineDates = this.HTMLonlineDates.replace("%data%", model.education.onlineCourses[platform].graduationDate);
			formattedOnlineURL = this.HTMLonlineURL.replace("%data%", model.education.onlineCourses[platform].websiteUrl).replace("#", model.education.onlineCourses[platform].websiteUrl);
			formattedOnlineList = formattedOnlineTitle + formattedOnlineSchool + formattedOnlineDates + formattedOnlineURL;
			$(".education-entry").last().append(formattedOnlineList);
		}

		// Display Internationalize Button
		$("#name").append(this.internationalizeButton);

		// Display Map
		$("#mapDiv").append(this.googleMap);

		this.listner();
	},
	listner: function() {
		// Turns name in header into "international" version (last name in all caps)
		this.inName = function inName(firstLast) {
			var splitName = firstLast.trim().split(" "),
			 changeFirstName = splitName[0].slice(0,1).toUpperCase() + splitName[0].slice(1).toLowerCase(),
			 changeLastName = splitName[1].toUpperCase(),
			 combineFirstLast = changeFirstName + " " + changeLastName;
			return combineFirstLast;
		}

		// Listener for inName
		$('button').click(function() {
		    var fullName = model.bio.name;
		    var iName = view.inName(fullName) || function(){};
		   	$('#name').html(iName);  
		});

		/*clickLocations = [];
		// Logs click x and y coordinates on the document
		function logClicks(x,y) {
		  clickLocations.push(
		    {
		      "x": x,
		      "y": y
		    }
		  );
		  console.log("x location: " + x + "; y location: " + y);
		}

		$(document).click(function(loc) {
		  var x = loc.pageX;
		  var y = loc.pageY;

		  logClicks(x,y);
		});*/
	}
}
view.init();