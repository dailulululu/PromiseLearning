// 构造函数专门用初始化新对象的函数 使用 new 调用构造函数会自动创建新对象
// 构造函数的关键在与构造函数的 prototype 属性江北用作新对象的原型
// 只有函数对象才有 prototype 属性，同一个构造函数创建的所有对象都继承同一个对象，是同一个类的成员

// 初始化 Range 对象，不创建和返回对象，只初始化 this
function Range(from,to){
  // 保存新范围对象的起点和终点（状态）
  // 这些属性是当前对象独有的，不会继承
  this.from = from
  this.to = to
}

// 所有 Range 对象都能继承这个对象 属性必须命名 prototype
Range.prototype = {
  // 在 x 范围内返回 true 不在就返回 false
  // 可用于 文本 日期和数值范围
  includes(x) {
    return this.from <= x && x <= this.to
  },
  // 只适用于数值范围
  // 生成器函数让这个类的实例可迭代
  [Symbol.iterator]: function*() {
    // Math.ceil JavaScript的math对象 向上取整
    for (let x = Math.ceil(this.from); x <= this.to; x++) yield x
  },
  // 返回范围的字符串表示
  toString() {
    return '(' + this.from + '...' + this.to + ')'
  },
}

// 使用 Range 类的示例
let r = new Range(1,3)
r.includes(2)   // true 2 在范围内
console.log('判断是否在范围内',r.includes(2));
r.toString()  // [1...3] 返回范围的字符串表示
console.log('通过迭代器转换成数组',[...r]);
