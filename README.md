

# clean architecture boilerplate

## Developer Info
 - Alex Peh (ahpeh@hotmail.com)
 
## Requirements
- npm
- any db of your choice

## Install
- Run "npm install" to download dependencies
- Install any db of your choice

## Run
- npm start

## Test
- Not yet included

## Routes
- localhost:3000/sample

## Others
This is a nodejs code base adopting a clean architecture design. Use this to start off your project in nodejs using clean coding.

**Folders**
- application
-- contracts: contains abstract definition for your project custom implementation 
-- use_cases: contains user defined use cases implementations of your implementation

- config
-- dependencies: wire up and link your custom codes

- controllers
-- contains all your nodejs controllers and handle your request and response here

- cronjob
-- if you have custom cron jobs to run, implement it here.

- infrastructure
-- contains the specifics implementation. eg. the type of database use, token service, encryption etc...

- models
-- model entity goes here

- routes
-- routes definition goes here

## Credits
This boilerplate is referenced from the below contributor. You can learn more about it from there.
https://github.com/royib/clean-architecture-node.git