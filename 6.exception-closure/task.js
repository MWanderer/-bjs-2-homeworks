// Task 1 - number formatter

function parseCount(userValue) {
    let parseResult = Number.parseInt(userValue, 10);
    if (Number.isNaN(parseResult)) throw new Error('Невалидное значение');

    return parseResult;
}

function validateCount(userValue2) {
    try {
        return parseCount(userValue2);
    } catch (err) {
        return err;
    }
}

// Task 1 - triangle

class Triangle {

    constructor(a,b,c) {
        this.a = a;
        this.b = b;
        this.c = c;

        if ((a + b) < c || (b + c) < a || (a + c) < b || a === undefined || b === undefined || c === undefined) {
            
            throw new Error("Треугольник с такими сторонами не существует");
        }       
    }

    getPerimeter() {
        return this.a + this.b + this.c
    }

    getArea() {
        let halfPerimeter = this.getPerimeter() / 2;
        let areaTR = Math.sqrt(halfPerimeter * (halfPerimeter - this.a) * (halfPerimeter - this.b)* (halfPerimeter - this.c));

        return Number((areaTR).toFixed(3));
    }
}

    function getTriangle(a,b,c) {
        try {
            return new Triangle(a,b,c);
        } catch (err) {
            return {
                getArea() {
                    return "Ошибка! Треугольник не существует";
                },
                getPerimeter() {
                    return "Ошибка! Треугольник не существует";
                }
            }
        }
    }