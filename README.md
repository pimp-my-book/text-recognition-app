# Text Recognition Application

This is a basic [React Native](https://facebook.github.io/react-native/) application utilizing the [AWS Rekognition API](https://aws.amazon.com/rekognition/) for text recognition using the built in device camera. Built using [Expo](https://expo.io/)🛸


# Services and Libraries used

 - [Create React Native](https://github.com/react-community/create-react-native-app)
 - [AWS Amplify](https://github.com/aws/aws-amplify)
 - [AWS Rekognition](https://aws.amazon.com/rekognition/)

# Prerequisites

 1. [AWS Account](https://aws.amazon.com/)
 2. [NodeJS and NPM](https://nodejs.org/en/)
 3. [Yarn](https://yarnpkg.com/en/)
 4. [Expo-CLI](https://expo.io/tools#cli)
 5. Device with Camera

# Getting Started

## 1. Configuration

**Clone repository into project directory**

    $ git clone 

 **Move into project folder**

    $ cd text-recognition-app

**Install dependencies**

	$ npm install
	$ yarn install

**Install AWS Mobile CLI**
		
	$ npm i awsmobile-cli -g

**Configure the AWS Mobile CLI to use your AWS Credentials**

    $ awsmobile configure

**Now setup your backend**

    $ awsmobile init

*Source Directory* - ext_code
*Distribution Directory* - build
*Build Command* - npm run-script build
*Start Command* - npm run-script start
*AWS Mobile project name* - **choose-a-name**

Above details required for later use👨🏾‍🏫

**Enable the Cloud API**

    $ awsmobile cloud-api enable

**Push AWS Mobile Configuration**

    $ awsmobile push

**Set the appropriate permissions for your app**

In your AWS Management Console:

IAM -> Select Roles -> Select created Role Name -> Permissions -> Search: *Rekognition* -> Add: *AmazonRekognitionFullAccess* -> Attach Policy

Permissions Added!!!🚀

## 2. AWS Rekognition API

**In folder** ext_code **edit file** api.js

**The following fields need to be changed in order to align with the region you have chosen to use when setting up your backend:**

endpoints: "*endpoint matching the region chosen in backend setup*"
region: "*region chosen in backend setup*"

## 3. Ready to Run

Run the application🧙‍♂️

    $ yarn run start

<p align="center">
<img height="150" src="https://ui-ex.com/images/gif-transparent-3.gif">
</p>

