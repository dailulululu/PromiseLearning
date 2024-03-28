/* 
// 公有字段
class MyClass {
  publicField = "I'm a public field";

  printPublicField() {
    console.log(this.publicField); // 可以在类内部通过 this 访问
  }
}

let myInstance = new MyClass();
console.log(myInstance.publicField);  */// 可以在类外部通过实例访问

/* 
// 私有字段
class MyClass {
  #privateField = "I'm a private field";

  printPrivateField() {
    console.log(this.#privateField); // 可以在类内部访问
  }
}

let myInstance = new MyClass();
console.log(myInstance.privateField); // 在类外部访问会报错 undefined */

// 静态字段
/* class MyClass {
  static staticField = "I'm a static field";
}

console.log(MyClass.staticField); // 通过类名访问静态字段
let myInstance = new MyClass();
console.log(myInstance.staticField); // 试图通过实例访问静态字段会报错  undefined */

// 静态私有字段
class MyClass {
  static #privateStaticField = "I'm a private static field";

  printPrivateStaticField() {
    console.log(MyClass.#privateStaticField); // 类内部访问静态私有字段
  }
}

console.log(MyClass.privateStaticField); // 这将会报错 undefined
