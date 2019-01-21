# gARden

An Augmented Reality (AR) garden design app, letting the user visualise different plants and flowers in their own garden in real-time.  

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

* You will need Node Js installed
* You will need an account for Google FireBase
* Create a FireBase project (you will utilise cloud firestore database, storage and authentication)
* You should enable FireBAse:
      Authentication> Email Authentication
      Database> Cloud Fire Store
* Create an account with Here https://developer.here.com/ and get api credentials
* Sign up for a viro developer account and obtain an api Key https://viromedia.com/signup/

### Installing

You will be installing react,react-navigation, react-native, react-viro, axios, ngrok using supplied package.json

* git clone this repo https://github.com/harpalgupta/gARden
* npm install (this will install all required modules)


## Running the tests

to run jest run ""npm test""


## Deployment



## Authors

* **TEAM THID** - [githubuser](github url)



## Acknowledgments

* NorthCoders who provided the knowledge
* Background Photo by Erda Estremera on Unsplash

## App Structure

├── android
│   ├── app
│   │   ├── BUCK
│   │   ├── build.gradle
│   │   ├── proguard-rules.pro
│   │   └── src
│   │       └── main
│   │           ├── AndroidManifest.xml
│   │           ├── java
│   │           │   └── com
│   │           │       └── garden
│   │           │           ├── MainActivity.java
│   │           │           └── MainApplication.java
│   │           └── res
│   │               ├── mipmap-hdpi
│   │               │   └── ic_launcher.png
│   │               ├── mipmap-mdpi
│   │               │   └── ic_launcher.png
│   │               ├── mipmap-xhdpi
│   │               │   └── ic_launcher.png
│   │               ├── mipmap-xxhdpi
│   │               │   └── ic_launcher.png
│   │               └── values
│   │                   ├── strings.xml
│   │                   └── styles.xml
│   ├── build.gradle
│   ├── gradle
│   │   └── wrapper
│   │       ├── gradle-wrapper.jar
│   │       └── gradle-wrapper.properties
│   ├── gradle.properties
│   ├── gradlew
│   ├── gradlew.bat
│   ├── keystores
│   │   ├── BUCK
│   │   └── debug.keystore.properties
│   └── settings.gradle
├── App.js
├── app.json
├── bin
│   └── ViroFBX
├── config
│   └── index.js
├── getip.sh
├── index.android.js
├── index.ios.js
├── index.js
├── ios
│   ├── gARden
│   │   ├── AppDelegate.h
│   │   ├── AppDelegate.m
│   │   ├── Base.lproj
│   │   │   └── LaunchScreen.xib
│   │   ├── Images.xcassets
│   │   │   ├── AppIcon.appiconset
│   │   │   │   └── Contents.json
│   │   │   └── Contents.json
│   │   ├── Info.plist
│   │   └── main.m
│   ├── gARdenTests
│   │   ├── gARdenTests.m
│   │   └── Info.plist
│   ├── gARden-tvOS
│   │   └── Info.plist
│   ├── gARden-tvOSTests
│   │   └── Info.plist
│   └── gARden.xcodeproj
│       ├── project.pbxproj
│       └── xcshareddata
│           └── xcschemes
│               ├── gARden-tvOS.xcscheme
│               └── gARden.xcscheme
├── js
│   ├── api
│   │   └── index.js
│   ├── components
│   │   ├── FadeInView.js
│   │   ├── GardenARScene.js
│   │   ├── InfoCard.js
│   │   ├── PlantCard.js
│   │   ├── PlantMenu.js
│   │   ├── PlantObject.js
│   │   ├── ShoppingList.js
│   │   ├── StoreCard.js
│   │   └── Stores.js
│   └── res
│       ├── addButton.png
│       ├── backButton.png
│       ├── background.jpg
│       ├── deleteButton.png
│       ├── empty.png
│       ├── gARden.png
│       ├── homeButton.png
│       ├── infoButton.png
│       ├── menuButton.png
│       ├── resetButton.png
│       ├── saveButton.png
│       ├── screenshotButton.png
│       └── wateringCanGif.gif
├── metro.config.js
├── package.json
├── package-lock.json
├── ReadMe.md
├── rn-cli.config.js
├── screens
│   ├── AR.js
│   ├── Home.js
│   ├── SIgnIn.js
│   ├── SignUp.js
│   ├── Welcome.js
│   └── WishList.js
├── setup-ide.sh
├── __tests__
│   └── index.js
├── tree
└── utils
    └── index.js

36 directories, 81 files

