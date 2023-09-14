# pollingAPI

### how to run file

* download zip file
* extract zip file in your sytem
* open file in VS code
* open terminal in Vs code
* run command npm i
* run command nodemon index.js


## How to call API

#### open PostMan Application and try running these commands

* INSERT QUESTION method - POST url - localhost:9000/question/create
  KEY - title  VALUE - what question you like

* DELETE QUESTION method - DELETE url - localhost:9000/question/:id/delete

* CREATING OPTION method - POST url - localhost:9000/question/:id/options/create
  KEY - text VALUE - Options
  if you add more options then at one time you can add only one options to the particular questions

* SEE QUESTIONS AND OPTIONS method - GET url - localhost:9000/question/:id

* DELETE PARTICULAR OPTIONS method - GET url - localhost:9000/option/:id/delete

* ADD VOTE method - POST url - localhost:9000/option/:id/add_vote




