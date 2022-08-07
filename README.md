# pets-automation

## stack
- Docker
- Javascript
- npm  
- jest  
- superagent  
- eslint  
- allure  

This repository contains automated tests for a RESTfull api  
This is a basic and small framework just for challenge purposes. The same could be extended and improved as project requirements.  
Automated test cases are only for PET service due to lack of the time. Only happy and positive scenarios were automated. More scenarios like negative will be added if it's requrested.  
The test data used by this test cases are the test provided data by running the local swagger application. A new module for handling test data with integrations will be added as per requirements.  
I choose the mentioned stack since it's a simply and powerfull tech stack to start to build a robust automation framework.  
As the application has services written in nodeJS, this stack will integrate with development perfectly and in an easy way

## setup
1. Checkout repository  
```git clone git@github.com:andrelo86/pets-automation.git```
2. Install **npm** if you don't have it installed
3. At project root level execute: ```npm install```
4. Run docker-compose build
5. Run docker-compose up -> All tests will be expected
