module.exports = function check(str, bracketsConfig) {
  let stack = [];
  let pair = {};
  for (let i = 0; i < bracketsConfig.length; i++) {
    pair[bracketsConfig[i][1]] = bracketsConfig[i][0];
  }
  for (let i = 0; i < str.length; i++) {
    if (stack[stack.length - 1] === pair[str[i]]) {
      stack.pop();
    } else if (Object.values(pair).includes(str[i])) {
      stack.push(str[i]);
    }
  }
  return (stack.length === 0);
}
