# Introduction

The application to be developed is a github resume creator. Check http://resume.github.io/ as an example. It must be a responsive react SPA. It’s up to the developer to pick components pack/framework (e.g. material-ui, foundation, bootstrap). It should look nice and be easily useable. Sass/Scss preferable but CSS usage is acceptable. Don’t put much effort on the design sacrificing functionality but good UI/UX decisions will be taken into account.

# Application structure

Application should consist of two functional screens “Home page” and “Resume” accessible via ‘/’ and ‘/:username’ routes accordingly.

## Home page

Landing page with one input that expects GitHub username and a submit button. 

User stories:
1.	As a user I would like to see self-describing user interface that allows me to understand what input expects and what this application for.
2.	As a user I would like to be able to use the application with a mobile device.
3.	As a user I would like to enter value to the username input and be redirected after submit (either with “Submit” button click or “Enter” press).

## Resume page

Resume page that contains info about the github user and his repositories. Main information that should be displayed is an information about used programming languages for the user’s repositories and a list of last ten updated repositories sorted by date descending. 

	User stories:
1.	As a user I would like to be presented with resume page following the “/<username>” route.
2.	As a user I would like to be notified if user with given username doesn’t exist following the “/<username>” route.
3.	As a user I would like to see brief information of an existing user on a page that contains first and last name of a user, number of public repositories and since when he is a member.
4.	As a user I would like to see the list of used programming languages that are used in his public repositories (e.g. HTML 15%, JavaScript 45%, CSS 35%, Bash 5%). It may be a plain list or a pie/bar chart with the legend.
5.	As a user I would like to see the list of most recently edited public repositories of the user with active links to according GitHub repositories.
6.	As a user I would like to be able to use the application with a mobile device.

# Criteria

Following points will be considered during application examination:
1.	Application should provide expected functionality for both screens.
2.	Code quality is a must. This criteria includes: 
  a.	project structure check;
  b.	if code is well organized;
  c.	if it’s developed in ‘react’ way;
  d.	if code is readable and self-explanatory;
3.	Application should be responsive and easy to use on mobile devices.
