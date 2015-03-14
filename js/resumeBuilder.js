var model = {
	bio: {
		name: "Nodari Gogoberidze",
		role: "Web Developer",
		welcomeMessage: "Welcome to my resume!",
		contacts: {
			mobile: "407-401-2267",
			email: "gnodar01@gmail.com",
			gitHub: "gnodar01",
			location: "Orlando, Florida"
		},
		skills: ["awesomeness", "programming", "teaching", "JS"],
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
				location: "Online",
				degree: "Nano Degree",
				major: "Front-End Web Development",
				graduationDate: "In progress",
				websiteUrl: "https://www.codeschool.com/"
			},
			{
				name: "Code School",
				location: "Online",
				degree: "none",
				major: "Javascript",
				graduationDate: "In progress",
				websiteUrl: "https://www.udacity.com"
			}
		]
	}
}

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



projects.display = (function() {
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



function inName(firstLast) {
	var splitName = firstLast.trim().split(" "),
	 changeFirstName = splitName[0].slice(0,1).toUpperCase() + splitName[0].slice(1).toLowerCase(),
	 changeLastName = splitName[1].toUpperCase(),
	 combineFirstLast = changeFirstName + " " + changeLastName;
	return combineFirstLast;
}

//$("#main").append(internationalizeButton);
$("#mapDiv").append(googleMap);
