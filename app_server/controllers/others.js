

/* Get About Page*/
module.exports.about = function(req, res){
  res.render('generic-text', {
    title: 'About',
    about: "Loc8r was created to help people find places to sit down and get a bit of work done. \n\n This is only for the purpose of learning MEAN stack. Right now I know how to related external files to the layout and let them appear on the website. The logic is quite simple: app.js require routes; routes require controllers(.js) where res.render() function compiles your template, inserts locals there, and creates html output out of those two things."
  });
};
