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
			"title": "none",
			"dates": "none",
			"description": "none",
			"images": ["none","none"]
		},
		{
			"title": "none",
			"dates": "none",
			"description": "none",
			"images": ["none","none"]
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

		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer),
		 formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title),
		 formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[job].yearsWorked),
		 formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].workLocation),
		 formattedJobDescription = HTMLworkDescription.replace("%data%", work.jobs[job].jobDescription),
		 formattedEmployerTitle = formattedEmployer + formattedTitle;

		$(".work-entry:last").append(formattedEmployerTitle);
		$(".work-entry:last").append(formattedWorkDates);
		$(".work-entry:last").append(formattedWorkLocation);
		$(".work-entry:last").append(formattedJobDescription);
	}

	$("#skillsChart").append(HTMLskillsStart);
	for (skill in bio.skills) {
		var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
		$(".flex-box").append(formattedSkill);
	}
}
displayWork();

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

console.log(inName("nodari gogoberidze"));

$("#main").append(internationalizeButton);

/*var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedContact = HTMLcontactGeneric.replace("%data", bio.contacts);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.gitHub);
var formattedCity = HTMLlocation.replace("%data%", bio.contacts.city);
var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
var formattedWelcomeMessage = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);



$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#letsConnect").append(formattedEmail);
$("#letsConnect").append(formattedMobile);
$("#letsConnect").append(formattedGithub);
$("#letsConnect").append(formattedCity);
$("#header").append(formattedBioPic);
$("#header").append(formattedWelcomeMessage);*/