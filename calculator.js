// 计算器模块：项目里最核心的"业务代码"
// CI 中自动测试的主角就是它

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    throw new Error('除数不能为 0');
  }
  return a / b;
}

module.exports = { add, subtract, multiply, divide };
