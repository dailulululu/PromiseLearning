class Range {
constructor(from,to){
  // 保存新范围对象的起点和终点（状态）
  // 这些属性是当前对象独有的，不会继承
  this.from = from
  this.to = to
}

// 所有 Range 对象都能继承这个对象 属性必须命名 prototype
  // 在 x 范围内返回 true 不在就返回 false
  // 可用于 文本 日期和数值范围
  includes(x) {
    return this.from <= x && x <= this.to
  }
  // 只适用于数值范围
  // 生成器函数让这个类的实例可迭代
  *[Symbol.iterator]() {
    // Math.ceil JavaScript的math对象 向上取整
    for (let x = Math.ceil(this.from); x <= this.to; x++) yield x
  }
  // 返回范围的字符串表示
  toString() {
    return '(' + this.from + '...' + this.to + ')'
  }
}

// 使用 Range 类的示例
let r = new Range(1,3)
r.includes(2)   // true 2 在范围内
console.log('判断是否在范围内',r.includes(2));
r.toString()  // [1...3] 返回范围的字符串表示
console.log('通过迭代器转换成数组',[...r]);


// 定义一个继承另一个类的类，使用 extends 和 class 关键字
// Span 和 Range 类似，初始化使用
// 不是起点和终点 是起点和长度
class Span extends Range {
  constructor(start,length){
    if(length >= 0){
      super(start,start + length)
    } else {
      super(start + length,start)
    }
  }
}

// 类声明有两种形式，语句和表达式
let square = function(x){ return x * x }
square(3)  // 9
// 与函数表达式一样，类定义表达式也可以包含可选的类名，提供名字只能在类内部访问到
// 只有在需要以类作为参数且返回其子类的函数时常用，其他情况基本不用
let Square = class { constructor(x) { this.area = x * x } }
new Square(3).area // 9

