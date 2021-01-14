# Maestro Language Learning App

Maestro is Spanish for 'teacher' which makes it the perfect name for an application designed to teach the user Spanish using a spaced repetition algorithm. 

[Enjoy the live app here!](https://maestro-liard.vercel.app/)

## How it works
Users visiting the app should be able to register for an account, log in, and then start learning with an initial set of twenty beginner Spanish words. 

The app is designed with the concept of spaced repetitiong for language learning in mind. Users will be able to access a Language Dashboard where they will be able see the words they are learning as well as how many times they have gotten each word correct and incorrect. The app will also display the user's total overall score. 

Once the user presses the button to start practicing, they will be shown their next Spanish word based off of where they left off last. They will have the ability to type in a translation for that word, and if they answer correctly the app will congratulate them and update their scores accordingly. They will not see that word as frequently going forward as long as they continue to answer it correctly. 

For words that the user is unable to answer, they will get a message telling them that they got it wrong and giving them the correct translation. Their scores will be updated accordingly and they will continue to see that word on a repeating basis until they are able to answer it correctly. 


## Stack

This app was designed using a Test Driven Development style and React as the framework for the front-end. Testing was done using a Cypress testing suite. Styling is basic CSS.

The code for the api can be found [here](https://github.com/alannabouloy/spaced-repetition-api) and the api was built using Express and Node.

This is a `create-react-app` project so `npm start` will start the project in development mode with hot reloading by default.

