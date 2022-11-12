--Readme document for *author(s)*, *email(s)*, *UCI id(s)*--

1. How many assignment points do you believe you completed (replace the *'s with your numbers)?

16/15
- 2/2 Communicating with the webserver
- 2/2 Populating information about the user
- 3/3 Populating the search component
- 3/3 Artist page
- 2.5/2.5 Album page
- 2.5/2.5 Track page
- 1/0 Extra credit

2. How long, in hours, did it take you to complete this assignment?
around 40 hours of research and work time


3. What online resources did you consult when completing this assignment? (list specific URLs)
// https://stackoverflow.com/questions/63111018/how-to-trigger-button-by-pressing-enter-in-angular-9
// https://www.w3schools.com/tags/att_option_selected.asp
// https://devcenter.heroku.com/articles/deploying-nodejs#prerequisites
// https://stackoverflow.com/questions/64905924/angular-npm-run-prod-error-npm-err-missing-script-prod
// https://stackoverflow.com/questions/13333221/how-to-change-value-of-process-env-port-in-node-js
// stackoverflow, w3schools, heroku documentation, npm guide


4. What classmates or other individuals did you consult as part of this assignment? What did you discuss?
- N/A


5. Did you add a bonus feature to your submission? If so, what is it and how should we see it?
- Yes. I completed the following extra credit option:
"Moving the Express webserver to a publicly visible URL rather than running on localhost."
- through the use of Heroku


6. Is there anything special we need to know in order to run your code?
- I was runnning into errors like the below:
"Port 5000 is already in use 
npm ERR! code ELIFECYCLE
npm ERR! errno 1"
- so I changed the environment variable $PORT to 1234 using the commands
export PORT=1234
node app.js
