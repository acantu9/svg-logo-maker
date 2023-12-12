class Shape {
    setColor(color) {
       this.color = color;
    }
}
   
class Triangle extends Shape {
    constructor(width, height, color) {
        super(width, height, color);
    }

    render() {
        const halfWidth = 300 / 2;
        const halfHeight = 200 / 2;
        let svg = `<svg width="300px" height="200px" viewBox="0 0 300 200" fill="${this.color}">`;
        
        svg += `<path d="M ${halfWidth} 0 L ${halfWidth + halfHeight} ${halfHeight + halfWidth} L ${halfWidth - halfHeight} ${halfHeight + halfWidth} Z"/>`;
        
        svg += `</svg>`;
        
        return svg;
    }
}

class Circle extends Shape {
    constructor(width, height, color) {
        super(width, height, color);
    }

    render() {
        const radius = Math.min(300, 200) / 2;
        let svg = `<svg width="300px" height="200px" viewBox="0 0 300 200" fill="${this.color}">`;
        
        svg += `<circle cx="${300 / 2}" cy="${200 / 2}" r="${radius}"/>`;
        
        svg += `</svg>`;
        
        return svg;
    }
}

class Square extends Shape {
    constructor(width, height, color) {
        super(width, height, color);
    }

    render() {
        const sideLength = Math.min(300, 200);
        let svg = `<svg width="300px" height="200px" viewBox="0 0 300 200" fill="${this.color}">`;
        
        svg += `<rect x="${(300 - sideLength) / 2}" y="${(200 - sideLength) / 2}" width="${sideLength}" height="${sideLength}"/>`;
        
        svg += `</svg>`;
        
        return svg;
    }
}
   
module.exports = { Shape, Triangle, Circle, Square };