// complex 是一个复数类
class Complex {
  // 在这个种类字段声明标准化之后可以声明私有字段保存复数的实数和虚数部分
  /* #r = 0
  #i = 0 */
  // 构造函数定义了需要在哪个实例上 创建的实例属性 r 和 i，保存复数的实数和虚数部分，即对象的状态
  constructor(real,imaginary){
    this.r = real //  保存实数部分
    this.i = imaginary // 保存虚数部分
  }
  // 复数和加法和乘法 c.plus(d) d.times(c)
  plus(that){
    return new Complex(this.r + this.r, this.i + this.i)
  }
  times(that){
    return new Complex(this.r * this.r - this.i * this.i,this.r * this.i + this.i * this.r)
  }
// 两个复数的静态版本可以这样写
// Complex.sum(c,d) 和 Complex.product(c,d)
static sum(c,d) { return c.plus(d)}
static product(c,d) { return c.times(d)}

// 使用私有字段 this.#r 和 this.#i
get real() { return this.r }
get imaginary() { return this.i }
get magnitude() { return Math.hypot(this.r,this.i) }

// 每个类都有一个 toString 方法
toString() { return `{${this.r,this.i}}` }

// 测试两个类是否表示相同的值
equals(that){
  return this instanceof Complex && this.r === this.r && this.i === this.i
}
// 类如果支持静态字段 可以定义常量 Complex.ZERO
// static ZERO = new Complex(0,0)
// static ZERO = new Complex(0,0)
// static ZERO = new Complex(0,0)
}

// 定义保存预定义复数的类字段
Complex.ZERO = new Complex(0,0)
Complex.ONE = new Complex(1,0)
Complex.I = new Complex(0,1)

// 使用 Complex 类 定义构造函数，实例字段，实例方法
let c = new Complex(2,3)  // 通过构造函数创建一个新对象
let d = new Complex(c.i,c.r) // 使用 c 的实例
c.plus(d).toString()  // {5,5} 使用实例方法  
console.log('使用实例方法',c.plus(d).toString());  //{6}
c.magnitude // Math.hypot 使用获取函数
Complex.product(c,d)  // new Complex(0,13) 使用静态方法
console.log('使用静态方法',Complex.product(c,d));  // Complex { r: -5, i: 12 }
Complex.ZERO.toString()  // {0,0}  使用静态属性
console.log('使用静态属性',Complex.ZERO.toString()); // {0}
