 // Exports `Triangle`, `Circle`, and `Square` classes

 class Shape {
    constructor(color) {
       this.color = color;
    }
   }
   
   class Triangle extends Shape {
    constructor(width, height, color) {
        super(width, height, color);
    }

    render() {
       // Code to generate the SVG for a triangle
       let svg = `<svg width="${this.width}" height="${this.height}" viewBox="0 0 ${this.width} ${this.height}" fill="${this.color}">`;
        
       svg += `<path d="M ${this.width / 2} 0 L ${this.width} ${this.height} L 0 ${this.height} Z"/>`;
        
       svg += `</svg>`;
        
       return svg;
    }
   }
   
   class Circle extends Shape {
    constructor(width, height, color) {
        super(width, height, color);
    }

    render() {
       // Code to generate the SVG for a circle
       let svg = `<svg width="${this.width}" height="${this.height}" viewBox="0 0 ${this.width} ${this.height}" fill="${this.color}">`;
        
       svg += `<path d="M ${this.width / 2} 0 L ${this.width} ${this.height} L 0 ${this.height} Z"/>`;
        
       svg += `</svg>`;
        
       return svg;
    }
   }
   
   class Square extends Shape {
    constructor(width, height, color) {
        super(width, height, color);
    }
    
    render() {
       // Code to generate the SVG for a square
       let svg = `<svg width="${this.width}" height="${this.height}" viewBox="0 0 ${this.width} ${this.height}" fill="${this.color}">`;
        
       svg += `<path d="M ${this.width / 2} 0 L ${this.width} ${this.height} L 0 ${this.height} Z"/>`;
        
       svg += `</svg>`;
        
       return svg;
    }
   }
   
   module.exports = { Shape, Triangle, Circle, Square };