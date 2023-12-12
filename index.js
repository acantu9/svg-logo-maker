// Runs the application using imports from lib/

const fs = require('fs');
const inquirer = require('inquirer');
const { Shape, Triangle, Circle, Square } = require('./lib/shapes');

// Prompt the user for input
inquirer
    .prompt([
    {
      type: 'input',
      name: 'text',
      message: 'Enter up to three characters:',
      validate: function (input) {
        return input.length <= 3 ? true : 'Please enter up to three characters.';
      },
    },
    {
      type: 'input',
      name: 'textColor',
      message: 'Enter the text color:',
    },
    {
      type: 'list',
      name: 'shape',
      message: 'Choose a shape:',
      choices: ['circle', 'triangle', 'square'],
    },
    {
      type: 'input',
      name: 'shapeColor',
      message: 'Enter the shape color:',
    },
  ])
  .then((answers) => {
        // Create an instance of the chosen shape class
        let shape = Shape;
        switch (answers.shape) {
            case 'circle':
                shape = new Circle();
            break;
            
            case 'triangle':
                shape = new Triangle();
            break;
            
            case 'square':
                shape = new Square();
            break;
        }

        // Set the shape color
        shape.setColor(answers.shapeColor);

        // Generate the SVG string
        const svg = shape.render(answers.text, answers.textColor);

        // Save the SVG string to a file
        fs.writeFile('examples/logo.svg', svg, (err) => {
        if (err) throw err;
        console.log('Generated logo.svg');
    });
})
.catch((error) => {
    console.error(error);
});