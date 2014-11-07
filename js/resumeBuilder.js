var bio = {
	"name": "Nodari Gogoberidze",
	"role": "Web Developer",
	"welcomeMessage": "Welcome to my resume!",
	"contacts": {
		"mobile": "407-401-2267",
		"email": "gnodar01@gmail.com",
		"gitHub": "gnodar01",
		"city": "Orlando, Florida"
	},
	"skills": ["awesomeness", "programming", "teaching", "JS"],
	"bioPic": "images/profile_pic.jpg"
}

var work = {
	"jobs": [
		{
			"title": "Market Research Analyst",
			"employer": "University of Central Florida: Office of Research and Commercialization",
			"yearsWorked": "1 year",
			"workLocation": "Orlando, Florida",
			"jobDescription": "Market research for strategic decision making"
		},
		{
			"title": "Market Research Analyst",
			"employer": "Invitation Homes - a subsidiary of The Blackstone Group",
			"yearsWorked": "1 year",
			"workLocation": "Orlando, Florida",
			"jobDescription": "Determine residential real estate market values, rent values, rehab estimates"
			+ " and overall optimal purchase price valuation"
		}
	]
}

var projects = {
	"projects": [
		{
			"title": "one",
			"dates": "2014",
			"description": "first project",
			"images": ["http://placehold.it/350x150", "http://placehold.it/350x150"]
		},
		{
			"title": "two",
			"dates": "2014",
			"description": "second project",
			"images": ["http://placehold.it/350x150", "http://placehold.it/350x150"]
		}
	]
}

var education = {
	"schools": [
		{
			"name": "University of Central Florida",
			"city": "Orlando, Florida",
			"degree": "Bacholors of Science",
			"major": "Finance",
			"graduationDate": "2012",
			"websiteUrl": "http://www.ucf.edu/"
		},
		{
			"name": "Valencia",
			"city": "Orlando, Florida",
			"degree": "Assosicates of Science",
			"major": "Business Administration",
			"graduationDate": "2010",
			"websiteUrl": "http://valenciacollege.edu/"
		}
	],
	"onlineCourses": [
		{
			"name": "Udacity",
			"city": "Online",
			"degree": "Nano Degree",
			"major": "Front-End Web Development",
			"graduationDate": "In progress",
			"websiteUrl": "https://www.codeschool.com/"
		},
		{
			"name": "Code School",
			"city": "Online",
			"degree": "none",
			"major": "Javascript",
			"graduationDate": "In progress",
			"websiteUrl": "https://www.udacity.com"
		}
	]
}

function displayWork() {
	for (job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		$(".work-entry:last").append(formattedEmployerTitle);
		var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[job].yearsWorked);
		$(".work-entry:last").append(formattedWorkDates);
		var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].workLocation);
		$(".work-entry:last").append(formattedWorkLocation);
		var formattedJobDescription = HTMLworkDescription.replace("%data%", work.jobs[job].jobDescription);
		$(".work-entry:last").append(formattedJobDescription);
	}
}
displayWork();


projects.display = function() {
	for (project in projects.projects) {
		$("#projects").append(HTMLprojectStart);

		var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedProjectTitle);
		var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedProjectDates);
		var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedProjectDescription);
		 if (projects.projects[project].images.length>0) {
		 	for (image in projects.projects[project].images) {
		 		var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
		 		$(".project-entry:last").append(formattedProjectImage);
		 	}
		 }
	}
}
projects.display();

$(document).click(function(loc) { 
	var x = loc.pageX;
	var y = loc.pageY;

	logClicks(x,y);
});

function inName(firstLast) {
	var splitName = firstLast.trim().split(" "),
	 changeFirstName = splitName[0].slice(0,1).toUpperCase() + splitName[0].slice(1).toLowerCase(),
	 changeLastName = splitName[1].toUpperCase(),
	 combineFirstLast = changeFirstName + " " + changeLastName;
	return combineFirstLast;
}

$("#main").append(internationalizeButton);
