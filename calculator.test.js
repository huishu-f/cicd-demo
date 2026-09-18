// 自动化测试：验证 calculator.js 的每个函数是否正确
// 使用 Node.js 内置 test runner（node --test），零第三方依赖

const test = require('node:test');
const assert = require('node:assert');
const { add, subtract, multiply, divide } = require('./calculator.js');

test('加法：1 + 2 应该等于 3', () => {
  assert.strictEqual(add(1, 2), 3);
});

test('加法：负数相加', () => {
  assert.strictEqual(add(-1, -2), -3);
});

test('减法：5 - 3 应该等于 2', () => {
  assert.strictEqual(subtract(5, 3), 2);
});

test('乘法：4 * 3 应该等于 12', () => {
  assert.strictEqual(multiply(4, 3), 12);
});

test('除法：10 / 2 应该等于 5', () => {
  assert.strictEqual(divide(10, 2), 5);
});

test('除法：除数为 0 应该抛出错误', () => {
  assert.throws(() => divide(10, 0), /除数不能为 0/);
});
