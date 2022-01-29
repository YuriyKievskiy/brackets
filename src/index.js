module.exports = function check(str, bracketsConfig) {
  const open_brackets = ['(', '[', '{', '|', '1', '3', '5', '7', '8'];
  const bad_brackets = ['|', '7', '8']
  let stack = [];
  let OBJ_BRACKETS = {};

  for (let i = 0; i < bracketsConfig.length; i++){
    OBJ_BRACKETS[bracketsConfig[i][1]] = bracketsConfig[i][0];
   }

  for (let i = 0; i < str.length; i++) {
    let symbl = str[i];

    if(open_brackets.includes(symbl)) {
      if(bad_brackets.includes(symbl)){
        if(stack[stack.length -1] === symbl){
          stack.pop();
        }else{
          stack.push(symbl);
        }
      }else{
        stack.push(symbl);
      }
    }else{
      if(stack.length === 0) {
        return false;
      }

      let topElem = stack[stack.length - 1];
      
      if(OBJ_BRACKETS[symbl] === topElem) {
        stack.pop();
      }else{
        return false
      }
    }
  }
  return stack.length === 0;
}