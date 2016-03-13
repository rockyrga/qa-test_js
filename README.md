# QA test
The test is for QA role of RGA.

### Introduce
We are using Protractor to simulate users' actions to check whether the application satisfies all user stories.


### Target page for test
You will find our sample web page: [Target Page] (http://ec2-52-48-95-132.eu-west-1.compute.amazonaws.com/property-details). The page provides a form to collect the insured property details.

### Test cases
There are four test cases in propertyDetailsSpec.js:
Case 1: number of bedrooms should have 7 options
This case is to verify whether the number of bedrooms dropdownlist includes 7 options on the list.

Case 2: number of bedrooms should include "Please Select", "1", "2", "3", "4", "5" and "over 5" options
This case is to verify whether the number of bedrooms dropdownlist includes the options that are described at the description above on the list.

Case 3: number of bedrooms options should be in "Please Select", "1", "2", "3", "4", "5" and "over 5" order
This case is to verify whether the options of number of bedrooms dropdownlist are in order as the description above.

Case 4: should show "Please provide bedroom number" error message when the choose nothing with the number of bedrooms
This case is to verify when user doesn't choose any options from the number of bedrooms dropdownlist, then application should display an error message next to the dropdownlist.

### To do
Cases 1 and 4 are already implemented.  What we want you to do is to complete cases 2 and 3.


### Reference:
You might find the following instruction to trigger Protractor and execute all test cases.


## Installation
### Install Java SDK
Download and install Java SE Development Kit for your OS:
(better install the version of 7)
[http://www.oracle.com/technetwork/java/javase/downloads/jdk7-downloads-1880260.html](http://www.oracle.com/technetwork/java/javase/downloads/jdk7-downloads-1880260.html)

### Install Protractor
Use npm to install Protractor globally with:
```
npm install -g protractor
```

### Update webdriver-manager
Download the necessary selenium tools with:
```
webdriver-manager update
```
Start up a server with:
```
webdriver-manager start
```

### Install other needed npm modules
```
npm install
```

## Run the test!
Now you can test all flow of the assessment:
```
protractor protractor.conf.js
```
Or if you want to test a single spec file:
```
protractor --specs=runOnlyThisFile.js
```

## To modify the settings
Config file is placed at ```protractor.conf.js```

---
* Reference:
    * [https://angular.github.io/protractor/#/](https://angular.github.io/protractor/#/)





Good luck!
