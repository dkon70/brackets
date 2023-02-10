module.exports = function check(str, bracketsConfig) {
  let stack = [];
  let pair = {};
  for (let i = 0; i < bracketsConfig.length; i++) {
    pair[bracketsConfig[i][0]] = bracketsConfig[i][1];
  }
  for (let i = 0; i < str.length; i++) {
    if (str[i] === pair[stack[stack.length - 1]]) {
      stack.pop();
    } else if (Object.keys(pair).includes(str[i])) {
      stack.push(str[i]);
    }
  }
  return(stack.length === 0);
}
