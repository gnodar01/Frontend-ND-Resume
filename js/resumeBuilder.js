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
				websiteUrl: "udacity.com"
			},
			{
				name: "Code School",
				title: "Javascript",
				graduationDate: "2013",
				websiteUrl: "codeschool.com"
			}
		]
	}
}

var displayBio = (function() {
	var formattedHeaderName = HTMLheaderName.replace("%data%", model.bio.name);
	var formattedHeaderRole = HTMLheaderRole.replace("%data%", model.bio.role);
	var fromattedHeader = formattedHeaderName + formattedHeaderRole;
	$("#header").prepend(fromattedHeader);

	var formattedContactGeneric = HTMLcontactGeneric.replace("%contact%",Object.keys(model.bio.contacts)[0]).replace("%data%", model.bio.contacts.LinkedIn)
	var formattedMobile = HTMLmobile.replace("%data%", model.bio.contacts.mobile);
	var formattedEmail = HTMLemail.replace("%data%", model.bio.contacts.email);
	var formattedGithub = HTMLgithub.replace("%data%", model.bio.contacts.gitHub);
	var formattedTwitter = HTMLtwitter.replace("%data%", model.bio.contacts.twitter);
	var formattedLocation = HTMLlocation.replace("%data%", model.bio.contacts.location);
	var formattedContactList = formattedMobile + formattedEmail + formattedGithub + formattedTwitter + formattedLocation;
	$("#topContacts").append(formattedContactGeneric).append(formattedContactList);
	$("#footerContacts").append(formattedContactGeneric).append(formattedContactList);

	var formattedWelcomeMessage = HTMLWelcomeMsg.replace("%data%", model.bio.welcomeMessage);
	var formattedBioPic = HTMLbioPic.replace("%data%", model.bio.bioPic);
	var formattedBio = formattedWelcomeMessage + formattedBioPic + HTMLskillsStart;
	$("#header").append(formattedBio);
	var formattedSkill;
	for (skill in model.bio.skills) {
		formattedSkill = HTMLskills.replace("%data%", model.bio.skills[skill]);
		$("#skills").append(formattedSkill);
	}


}());

var displayWork = (function() {
	for (job in model.work.jobs) {
		$("#workExperience").append(HTMLworkStart);
		var formattedEmployer = HTMLworkEmployer.replace("%data%", model.work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", model.work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		$(".work-entry:last").append(formattedEmployerTitle);
		var formattedWorkDates = HTMLworkDates.replace("%data%", model.work.jobs[job].yearsWorked);
		$(".work-entry:last").append(formattedWorkDates);
		var formattedWorkLocation = HTMLworkLocation.replace("%data%", model.work.jobs[job].location);
		$(".work-entry:last").append(formattedWorkLocation);
		var formattedJobDescription = HTMLworkDescription.replace("%data%", model.work.jobs[job].jobDescription);
		$(".work-entry:last").append(formattedJobDescription);
	}
}());

var displayProjects = (function() {
	for (project in model.projects.projects) {
		$("#projects").append(HTMLprojectStart);

		var formattedProjectTitle = HTMLprojectTitle.replace("%data%", model.projects.projects[project].title);
		$(".project-entry:last").append(formattedProjectTitle);
		var formattedProjectDates = HTMLprojectDates.replace("%data%", model.projects.projects[project].dates);
		$(".project-entry:last").append(formattedProjectDates);
		var formattedProjectDescription = HTMLprojectDescription.replace("%data%", model.projects.projects[project].description);
		$(".project-entry:last").append(formattedProjectDescription);
		 if (model.projects.projects[project].images.length>0) {
		 	for (image in model.projects.projects[project].images) {
		 		var formattedProjectImage = HTMLprojectImage.replace("%data%", model.projects.projects[project].images[image]);
		 		$(".project-entry:last").append(formattedProjectImage);
		 	}
		 }
	}
}());

var diplayEducation = (function() {
	$("#education").append(HTMLschoolStart);
	var formattedSchoolName, formattedSchoolDegree, formattedSchoolDates, formattedSchoolLocation, formattedSchoolMajor;
	for (school in model.education.schools) {
		formattedSchoolName = HTMLschoolName.replace("%data%", model.education.schools[school].name);
		formattedSchoolDegree = HTMLschoolDegree.replace("%data%", model.education.schools[school].degree);
		formattedSchoolDates = HTMLschoolDates.replace("%data%", model.education.schools[school].graduationDate);
		formattedSchoolLocation = HTMLschoolLocation.replace("%data%", model.education.schools[school].location);
		formattedSchoolMajor = HTMLschoolMajor.replace("%data%", model.education.schools[school].major);
		var formattedSchoolList = formattedSchoolName + formattedSchoolDegree + formattedSchoolDates + formattedSchoolLocation + formattedSchoolMajor;
		$(".education-entry").append(formattedSchoolList);
	}
	$("#education").append(HTMLonlineClasses);
	$("#education").append(HTMLschoolStart);
	var formattedOnlineTitle, formattedOnlineSchool, formattedOnlineDates, formattedOnlineURL;
	for (platform in model.education.onlineCourses) {
		formattedOnlineTitle = HTMLonlineTitle.replace("%data%", model.education.onlineCourses[platform].title);
		formattedOnlineSchool = HTMLonlineSchool.replace("%data%", model.education.onlineCourses[platform].name).replace("#", model.education.onlineCourses[platform].websiteUrl);
		formattedOnlineDates = HTMLonlineDates.replace("%data%", model.education.onlineCourses[platform].graduationDate);
		formattedOnlineURL = HTMLonlineURL.replace("%data%", model.education.onlineCourses[platform].websiteUrl).replace("#", model.education.onlineCourses[platform].websiteUrl);
		formattedOnlineList = formattedOnlineTitle + formattedOnlineSchool + formattedOnlineDates + formattedOnlineURL;
		$(".education-entry").last().append(formattedOnlineList);
	}
}());



function inName(firstLast) {
	var splitName = firstLast.trim().split(" "),
	 changeFirstName = splitName[0].slice(0,1).toUpperCase() + splitName[0].slice(1).toLowerCase(),
	 changeLastName = splitName[1].toUpperCase(),
	 combineFirstLast = changeFirstName + " " + changeLastName;
	return combineFirstLast;
}

$("#main").append(internationalizeButton);
$("#mapDiv").append(googleMap);
