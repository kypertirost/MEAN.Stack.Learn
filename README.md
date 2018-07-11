# Getting MEAN application code

This is the code for the sample 'Loc8r' application that is built through the course of book [Getting MEAN](https://www.manning.com/books/getting-mean-with-mongo-express-angular-and-node).All credit goes to
the author Simon.

#Below are things that cause me really hard time.
<h1> Deploy to heroku</h1>
  <p> Heroku is actually really easy to install and run. However, after I push my code to heroku, there was always a "Application Error", and I double checked my code (chapter 4) to original without any clues. I
  tried change heroku account, retype my code, reinstall npm, but these are not work. </p>
  <br>Solution </br>
    <p> Check with package.json files. There are some crucial dependecies that need to be declared in order to
    run on heroku. The followings are my dependecies.
    <pre> <code>
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
    </code> </pre>
    </p>
<h1> No <code><i> MONGOLAB_URI</i></code> output </h1>
  <p> This is not hard to fix actually, but I still struggle for an hour. </p>
  <p> <br> In terminal, set your <i>MONGOLAB_URI</i> by </br> <code> heroku config:set MONGOLAB_URI= &ltyour_data_base&gt </code></p>

<h1> Use <code>.id</code> Method Without Correct Result </h1>
  <p> In chapter 6, <code>reviewsReadOne</code> cannot give me correct output. I search stackoverflow, and
  gives me a really good answer that the book has a type when inputting database.</p>
  <br>Solution</br>
  <p/> Check your <code>locations</code> collection. In reviews, the "id" shoule be "_id"
