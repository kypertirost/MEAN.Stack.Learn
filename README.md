# Getting MEAN application code

This is the code for the sample 'Loc8r' application that is built through the course of book [Getting MEAN](https://www.manning.com/books/getting-mean-with-mongo-express-angular-and-node).All credit goes to
the author Simon.

#Below are things that cause me really hard time.
<h1> Deploy to heroku</h1>
  <h2> Hard Time and Methods I tried </h2>
    <p> Heroku is actually really easy to install and run. However, after I push my code to heroku, there was always a "Application Error", and I double checked my code (chapter 4) to original without any clues. I
    tried change heroku account, retype my code, reinstall npm, but these are not work. </p>
  <h2>Solution </h2>
    <p> Check with package.json files. There are some crucial dependecies that need to be declared in order to
    run on heroku. The followings are my dependecies.
    <code>   
    "dependencies": {
        "body-parser": "^1.18.3",
        "cookie-parser": "~1.4.3",
        "debug": "~2.6.9",
        "express": "~4.16.0",
        "http-errors": "~1.6.2",
        "jade": "~1.11.0",
        "mongoose": "^4.9.1",
        "morgan": "~1.9.0",
        "serve-favicon": "~2.5.0",
        "uglify-js": "^3.4.3"
      },
    </code>
