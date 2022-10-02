
// 1. Example ----------------------

const Sales = "Toyota";

function CarTypes(name) {
  if (name === "Honda") {
    return name;
  } else {
    return `Sorry, we don't sell ${name}.`;
  }
}

const car = { myCar: "Saturn", getCar: CarTypes("Honda"), special: Sales };

console.log(car.special);



// 2. Tests ----------------------

function Product(name, price) {
  this.name = name;
  this.price = price;

  if (price < 0) {
    throw RangeError(`Cannot create product ${this.name} with a negative price`);
  }
}

function Food(name, price) {
  Product.call(this, name, price);
  this.category = 'food';
}

function Toy(name, price) {
  Product.call(this, name, price);
  this.category = 'toy';
}

const cheese = new Food('feta', 5);
const fun = new Toy('robot', 40);



// 3. Sample javascript from xui ----------------------

var undefined,
    xui,
    window     = this,
    string     = new String('string'),
    document   = window.document,
    simpleExpr = /^#?([\w-]+)$/,
    idExpr     = /^#/,
    tagExpr    = /<([\w:]+)/,
    slice      = function (e) { return [].slice.call(e, 0); };
    try { var a = slice(document.documentElement.childNodes)[0].nodeType; }
    catch(e){ slice = function (e) { var ret=[]; for (var i=0; e[i]; i++)
        ret.push(e[i]); return ret; }; }

window.x$ = window.xui = xui = function(q, context) {
    return new xui.fn.find(q, context);
};
