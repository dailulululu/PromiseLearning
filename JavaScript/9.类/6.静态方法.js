// static 关键字放在方法声明前面可以定义静态方法
// 静态方法是作为构造函数而非原型对象的属性定义的
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

    static parse(s){
      let matches = s.match(/^\((\d+)\.\.\.(\d+)\)$/)
      if(!matches){
        throw new TypeError(`Cannot parse Range from "${s}"`)
      }
      return new Range(parseInt(matches[1]),parseInt(matches[2]))
    }
  }


let r = Range.parse ('(1...10') // 返回一个新的 Range 对象
r.parse('(1...10)')
console.log(r.parse('(1...10)'))
