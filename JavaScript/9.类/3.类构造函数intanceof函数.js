// 当且仅当两个对象继承同一个原型对象时，他们才是同一个类的函数
function Range(from,to){
  this.from = from
  this.to = to
}

Range.prototype = {
  includes(x) {
    return this.from <= x && x <= this.to
  },
  [Symbol.iterator]: function*() {
    for (let x = Math.ceil(this.from); x <= this.to; x++) yield x
  },
  toString() {
    return '(' + this.from + '...' + this.to + ')'
  },
}

let r = new Range(1,3)
console.log(r instanceof Range)  // r 继承 Range 的 prototype

function Strange(){}
Strange.prototype = Range.prototype // Strange 的原型对象等于 Range 的原型对象
console.log(new Strange() instanceof Range);  // true



