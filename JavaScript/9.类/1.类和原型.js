// 类是基于原型继承的，两个对象从同一个原型上继承属性，这些对象是一个类的实例
// 类是一组对象从同一个原型对象继承属性，原型对象是类的核心特性

/* 一个简单的 JavaScript 类  工厂函数会返回一个新的范围对象 */
function range(from, to) {
  /* 
  使用 object.create() 创建一个对象 继承下面的定义
  原型对象保存为这个函数的一个属性，为所有范围对象定义共享方法（行为）
   */
  let r = Object.create(range.methods)
  // 保存新范围对象的起点和终点（状态）
  // 这些属性是当前对象独有的，不会继承
  r.from = from
  r.to = to
  // 返回对象
  return r
}

// 原型对象定义的是所有范围对象继承的方法
range.methods = {
  // 在 x 范围内返回 true 不在就返回 false
  // 可用于 文本 日期和数值范围
  includes(x) {
    return this.from <= x && x <= this.to
  },
  // Symbol.iterator 生成器函数让这个类的实例可以进行迭代
  // 只适用于数值范围
  *[Symbol.iterator]() {
    // Math.ceil JavaScript的math对象 向上取整
    for (let x = Math.ceil(this.from); x <= this.to; x++) yield x
  },
  // 返回范围的字符串表示
  toString() {
    return '(' + this.from + '...' + this.to + ')'
  },
}


// 创建一个范围对象
let r = range(1,3)
r.includes(2)   // true 2 在范围内
console.log('判断是否在范围内',r.includes(2));
r.toString()  // [1...3] 返回范围的字符串表示
console.log('通过生代器转换成数组',[...r]);


// isPrototypeOf() 判断是否是原型对象
console.log('判断 range.methods 是 r 的原型对象',range.methods.isPrototypeOf(r))


/* 
1. 这段代码定义了一个 range 函数，用于创建新的 range 对象
2. range() 函数的 methods 属性保存定义这个类的原型对象
3. range() 函数为每个 range 对象定义了 from 和 to 属性，这两个属性是非共享 非继承的，定义每个范围对象独有的状态
4. range.methods 是 es6 的简写语法
5. Symbol.iterator 为 range 对象定义了一个迭代器，前面有个星号 * 代表是生代器函数，让 range 类的实例可以与 for/of 循环和扩展运算符...一起使用
6. 定义在 range.methods 中的共享方法都会用在 range() 工厂函数中初始化 from 和 to 属性，通过 this 关键字引用调用他们的对象，使用 this 是所有类方法的基本特征
*/
