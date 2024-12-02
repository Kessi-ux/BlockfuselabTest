function longestCommonPrefix(string) {
    if (string.length === 0) {
      return "";
    }
    let prefix = string[0];
    for (let i = 1; i < string.length; i++) {
      while (string[i].indexOf(prefix) !== 0) {
        prefix = prefix.substring(0, prefix.length - 1);
        if (prefix === "") {
          return "";
        }
      }
    }
    return prefix;
  }

const strs = ["flower", "flow", "flight"] 

console.log(longestCommonPrefix(strs))