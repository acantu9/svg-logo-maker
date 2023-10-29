 // Exports `Triangle`, `Circle`, and `Square` classes

 class Shape {
    constructor(color) {
       this.color = color;
    }
   }
   
   class Triangle extends Shape {
    render() {
       // Code to generate the SVG for a triangle
    }
   }
   
   class Circle extends Shape {
    render() {
       // Code to generate the SVG for a circle
    }
   }
   
   class Square extends Shape {
    render() {
       // Code to generate the SVG for a square
    }
   }
   
   module.exports = { Shape, Triangle, Circle, Square };