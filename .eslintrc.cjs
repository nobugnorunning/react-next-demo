const fabric = require("@umijs/fabric");

module.exports = {
  ...fabric.eslint,
  "extends": "next/core-web-vitals",
  "rules": {
    "object-curly-spacing": ["error", "always"], // 对象的前后空格
    "quotes": ["error", "double"], // 字符串使用双引号
    "no-multiple-empty-lines": ["error", { "max": 1 }], // 空行最多不能超过1行
    "no-unused-expressions": ["error", { "allowShortCircuit": true }]
  },
}
