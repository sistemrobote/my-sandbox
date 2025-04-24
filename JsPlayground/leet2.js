// https://leetcode.com/problems/first-unique-character-in-a-string/
var firstUniqChar = function (s) {
  const hash = {};

  for (let i = 0; i < s.length; i++) {
    const letter = s[i];

    if (!hash[letter]) {
      hash[letter] = 1;
    } else {
      hash[letter]++;
    }
  }
  for (let key in hash) {
    console.log(" firstUniqChar key::>>>", key);
    if (hash[key] === 1) {
      return s.indexOf(key);
    }
  }
};

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// console.log("RESULT", duplicate([1, 2, 3, 4, 5]));
const window = {};

(window.foo || (window.foo = "bar"))

console.log(window.foo)
