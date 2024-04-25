import inquirer from 'inquirer';

// var qr = require('qr-image');


inquirer
  .prompt([
    /* Pass your questions in here */
    {message: "Type in your URL",
     name:"URL",
    }
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    // console.log(answers);
    const url=answers.URL;
    var qr_svg = qr.image(url);
    qr_svg.pipe(require('fs').createWriteStream('qr_img.png'));
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });