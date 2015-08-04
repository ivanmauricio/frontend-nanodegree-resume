/*
This is empty on purpose! Your code to build the resume will go here.
 */

var bio = {
 	"name": "Ivan Gonzalez",
 	"role": "Web Developer",
 	"contacts": {
 		"mobile": "07939656431",
 		"email": "ivangonzalez@rocketmail.com",
 		"twitter": "ivaanmauricioo",
 		"github": "ivanmauricio",
 		"location": "London"
 	},
 	"pictureURL": "images/picture.jpg",
 	"welcome message": "Hello, I'm Ivan, Welcome to my Resume!",
 	"skills": ["HTML", "CSS", "JavaScript", "Speed Reading", "Spanish Speaking"]
}

bio.display = function () {

	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

	$("#header").prepend(formattedRole);
	$("#header").prepend(formattedName);

	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
	var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
	var formattedGitHub = HTMLgithub.replace("%data%", bio.contacts.github);
	var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

	$("#topContacts").append(formattedMobile);
	$("#topContacts").append(formattedEmail);
	$("#topContacts").append(formattedTwitter);
	$("#topContacts").append(formattedGitHub);
	$("#topContacts").append(formattedLocation);

	$("#footerContacts").append(formattedMobile);
	$("#footerContacts").append(formattedEmail);
	$("#footerContacts").append(formattedTwitter);

	var formattedPic = HTMLbioPic.replace("%data%", bio.pictureURL);
	var formattedMessage = HTMLwelcomeMsg.replace("%data%", bio["welcome message"]);

	$("#header").append(formattedPic);
	$("#header").append(formattedMessage);

	$("#header").append(HTMLskillsStart);

	for (skill in bio.skills) {
		var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
		$("#skills").append(formattedSkill);
	}
}

bio.display();

var work = {
 	"jobs":[
 	{
 		"employer": "South Kensington Books",
 		"title": "Bookseller",
 		"location": "South Kensington, London",
 		"dates": "2012 - present",
 		"description": "Bookseller at independent bookshop where my responsibilities include greeting and serving customers, ordering, receiving and booking in new stock and managing the shop’s website and social media pages."
 	},
 	{
 		"employer": "Balham Kitchen",
 		"title": "Chef",
 		"location": "Balham, London",
 		"dates": "2014 - present",
 		"description": "Helping school friend who has set up his own business, a breakfast food stall. I help out at weekends, preparing the food and serving customers. I have also helped him automate some aspects of the business using my computer skills."
 	}
 	]
}

work.display = function() {
	for(job in work.jobs) {

		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);

		$("#workExperience").append(HTMLworkStart);
		$(".work-entry:last").append(formattedEmployer + formattedTitle);
		$(".work-entry:last").append(formattedDates + formattedLocation);
		$(".work-entry:last").append(formattedDescription);
 }
}

work.display();

var projects = {
	"projects": [
	{
		"title": "Make Portfolio Page",
		"dates": 2015,
		"description": "Never in all their history have men been able truly to conceive of the world as one: a single sphere, a globe, having the qualities of a globe, a round earth in which all the directions eventually meet, in which there is no center because every point, or none, is center — an equal earth which all men occupy as equals. The airman's earth, if free men make it, will be truly round: a globe in practice, not in theory.",
		"images": ["images/notebook.jpg", "images/forest.jpg"]
 	},
 	{
 		"title": "Make Portfolio Page",
		"dates": 2015,
		"description": "We choose to go to the moon in this decade and do the other things, not because they are easy, but because they are hard, because that goal will serve to organize and measure the best of our energies and skills, because that challenge is one that we are willing to accept, one we are unwilling to postpone, and one which we intend to win.",
		"images": ["images/forest.jpg", "images/notebook.jpg"]
 	}
 	]
}

projects.display = function() {
	for (project in projects.projects) {

		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);

		$("#projects").append(HTMLprojectStart);
		$(".project-entry:last").append(formattedTitle);
		$(".project-entry:last").append(formattedDates);
		$(".project-entry:last").append(formattedDescription);

		for (image in projects.projects[project].images) {
			var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
			$(".project-entry:last").append(formattedImage);
		}
	}
}

projects.display();

var education = {
	"schools":[
	{
		"name": "Imperial College",
		"location": "London",
		"degree": "Physics BSci",
		"dates": "2009 - 2013",
		"major": "Physics"
	},
	{
		"name": "d'Overbroeck's College",
		"location": "Oxford",
		"degree": "A-levels",
		"dates": "2006 - 2008",
		"major": "Dossing"
	}
	]
}

education.display = function() {
	for (school in education.schools) {

		var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
		var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
		var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
		var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
		var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);

		$("#education").append(HTMLschoolStart);
		$(".education-entry:last").append(formattedName + formattedDegree);
		$(".education-entry:last").append(formattedDates);
		$(".education-entry:last").append(formattedLocation);
		$(".education-entry:last").append(formattedMajor);
	}
}

education.display();

var oldName = $("#name").text();

function inName() {
  var newName = oldName;
  var nameArray = newName.split(" ");
  nameArray[1] = nameArray[1].toUpperCase();
  newName = nameArray.join(" ");
  return newName;
}

$("#main").append(internationalizeButton);

$("#map-div").append(googleMap);



