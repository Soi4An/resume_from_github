# Resume from GitHub

This two-page app is a service for getting information about public GitHub accounts in the form of a resume.

The project contains 3 pages:
- The Home page with a form that accepts a GitHub nickname and a button to make a request.
- The Resume page with the following data: avatar, name, repositories quantity, authtorized date, languages in percentage, the last 10 edited public repos (with names, dates, links);
- The NotFound page with a title and a 'Go to home' button for all incorrect links.

For calculating pecentage of all your languages is using calculateLanguages function, which do requests about each repository. At this time, the loader is displayed.

Project architecture:
- api folder, to get data from GitHub API;
- pages folder;
- components folder;
- styles folder (only for universal classes);
- types folder (for complex or frequently used types);
- utils folder with functions for big calculations;

## Tecnologies:
[TypeScript, React, JS, SASS, HTML, CSS, OOP, BEM, semantice, React-router-dom, Axios, screens adaptability].

## DEMO:
https://soi4an.github.io/resume_from_github/

## Example:
http://resume.github.io/
