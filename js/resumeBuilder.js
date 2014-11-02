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
			"yearsWorked": 1,
			"workLocation": "Orlando, Florida",
			"description": "none"
		},
		{
			"title": "Market Research Analyst",
			"employer": "Invitation Homes - a subsidiary of The Blackstone Group",
			"yearsWorked": 1,
			"workLocation": "Orlando, Florida",
			"description": "none"
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

var formattedName = HTMLheaderName.replace("%data%", bio.name);
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
$("#header").append(formattedWelcomeMessage);