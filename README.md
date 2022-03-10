# Github Typeahead
Typeahed - created with React, where visitors can type in names of github users and get the matched results dynamicly.

# Bug
While working on the project, I had some problem with fetching data from github API. 
As searching process shoud be dynamic, app sends fetch request everytime the user input changes.
This provides a way to update the list of matched results dynamicly, but if the user types fast, 
so the app sends many requests in a small amount of time and triggers an error 
(Failed to load resource: the server responded with a status of 403 ())
