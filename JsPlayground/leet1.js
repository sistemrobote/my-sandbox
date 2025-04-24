// https://leetcode.com/problems/valid-palindrome/
function isPalindrome(s) {
  const newS = s.replace(/[^a-z0-9]+/gi, "").toLowerCase();
  let leftP = 0;
  let rightP = newS.length - 1;
  let isPalindrom = true;

  while (leftP < rightP) {
    if (newS[leftP] !== newS[rightP]) {
      return (isPalindrom = false);
    } else {
      leftP++;
      rightP--;
    }
  }

  return isPalindrom;
}
// https://leetcode.com/problems/two-sum/description/
// function twoSum(nums, target) {
//   const map = new Map();
//   for (let i = 0; i < nums.length; i++) {
//     const missingNum = target - nums[i];
//     if (map.has(missingNum)) {
//       return [map.get(missingNum), i];
//     } else {
//       map.set(nums[i], i);
//     }
//   }
// }
// https://leetcode.com/problems/move-zeroes/submissions/1554355667/
var moveZeroes = function (nums) {//[0,1,0,3,12]  //[1,3,0,0,12] => [1,3,12,0,0]
  let l = 0;
  let r = 1;

  while (r < nums.length) {
    if (nums[l] === 0 && nums[r] === 0) {
      r++;
    } else if (nums[l] === 0 && nums[r] !== 0) {
      [nums[l], nums[r]] = [nums[r], nums[l]];
      r++;
      l++;
    } else {
      r++;
      l++;
    }
  }
  return nums;
}

// https://leetcode.com/problems/container-with-most-water/
var maxArea = function (height) {
  let l = 0;
  let r = height.length - 1;
  let area = 0;
  while (l < r) {
    const col = Math.min(height[l], height[r]);
    const nArea = (r - l) * col;
    if (nArea > area) area = nArea;

    height[l] > height[r] ? r-- : l++;
  }
  return area;
};
//https://leetcode.com/problems/longest-substring-without-repeating-characters/description/
var lengthOfLongestSubstring = function (s) {
  let length = 0;
  let l = 0;
  let r = 0;
  const set = new Set();

  while (r < s.length - 1) {
    if (!set.has(s[r])) {
      set.add(s[r]);
      length = Math.max(length, set.size);
      r++;
    } else {
      set.delete(s[l]);
      l++;
    }
  }
  return length;
};

// https://leetcode.com/problems/contains-duplicate-ii/?envType=problem-list-v2&envId=sliding-window
var containsNearbyDuplicate = function (nums, k) {
  const map = new Map();

  for (let l = 0; l < nums.length; l++) {
    if (map.has(nums[l]) && l - map.get(nums[l]) <= k) {
      return true;
    }
    map.set(nums[l], l);
  }
  return false;
};

// https://leetcode.com/problems/minimum-size-subarray-sum/?envType=problem-list-v2&envId=sliding-window
var minSubArrayLen = function (target, nums) {
  let l = 0;
  let summ = 0;
  let length = 0;

  for (let i = 0; i < nums.length; i++) {
    summ = summ + nums[i];
    while (summ >= target) {
      length = length ? Math.min(length, i - l + 1) : i - l + 1;
      summ = summ - nums[l];
      l++;
    }
  }
  return length;
};

//https://leetcode.com/problems/maximum-average-subarray-i/?envType=problem-list-v2&envId=sliding-window
var findMaxAverage = function (nums, k) {
  let sum = 0;
  for (let i = 0; i < k; i++) {
    sum += nums[i];
  }
  let maxAvg = sum / k;
  for (let i = k; i < nums.length; i++) {
    sum = sum - nums[i - k] + nums[i];
    maxAvg = Math.max(maxAvg, sum / k);
  }
  return maxAvg;
};
// https://leetcode.com/problems/two-sum/
var twoSum = function (nums, target) {
  const obj = {};

  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    let missing = target - num;

    if (missing in obj) {
      return [obj[missing], i];
    }
    obj[num] = i;
  }
};

//https://leetcode.com/problems/roman-to-integer/?envType=problem-list-v2&envId=hash-table
var romanToInt = function (s) {
  const obj = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let res = 0;
  for (let i = 0; i < s.length; i++) {
    const romanNum = s[i];
    const prevRomanNum = s[i - 1];
    if (obj[prevRomanNum] < obj[romanNum]) {
      res = res - obj[prevRomanNum] + obj[romanNum] - obj[prevRomanNum];
      i = i++;
    } else {
      res = res + obj[romanNum];
    }
  }
  return res;
};
// https://leetcode.com/problems/letter-combinations-of-a-phone-number/?envType=problem-list-v2&envId=hash-table
var letterCombinations = function (digits) {
  const keypad = {
    2: ["a", "b", "c"],
    3: ["d", "e", "f"],
    // 4: ['a', 'b', 'c']
    // 5: ['a', 'b', 'c']
    // 6: ['a', 'b', 'c']
    // 7: ['a', 'b', 'c']
    // 8: ['a', 'b', 'c']
    // 9: ['a', 'b', 'c']
  };
  let res = [];

  for (let i = 0; i < digits.length; i++) {
    const currArr = keypad[i];
    for (let j = 0; j < currArr.length; j++) {
      res.push("");
    }
  }
};

//https://leetcode.com/problems/fizz-buzz/
var fizzBuzz = function (n) {
  const res = [];

  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      res.push("FizzBuzz");
    } else if (i % 3 === 0) {
      res.push("Fizz");
    } else if (i % 5 === 0) {
      res.push("Buzz");
    } else res.push(`${i}`);
  }
  return res;
};
//https://leetcode.com/problems/remove-element/
var removeElement = function (nums, val) {
  let k = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[k] = nums[i];
      k++;
    }
  }
  return k++;
};

// https://leetcode.com/problems/jump-game-ii/?envType=problem-list-v2&envId=greedy
var jump = function (nums) {
  let count = 0;
  let i = 1;
  while (i < nums.length - 1) {
    let j = nums[i];
    if (i + nums[j] >= nums.length - 1) {
      return count;
    } else {
      for (let k = i; k < j; k++) {
        let max;
        if (nums[k] > max) {
          max = nums[k];
        }
        i = i + k;
      }
      count++;
    }
  }

  return count;
};
//https://leetcode.com/problems/coin-change/
var coinChange = function (coins, amount) {
  let result;
  let res = amount;
  for (let i = coins.length; i > 0; i++) {
    if (amount - coins[i] > 0) {
    }
  }
};
var groupAnagrams = function (strs) {
  const sortedStrs = strs.map((el) => el.split("").sort().join(""));
  const hash = {};
  for (let j = 0; j < sortedStrs.length; j++) {
    const i = sortedStrs[j];
    if (!hash?.[i]) {
      hash[i] = [strs[j]];
    } else {
      hash[i].push(strs[j]);
    }
  }
  return Object.values(hash);
};
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

console.log(
  "RESULT",
  moveZeroes([0, 1, 0, 3, 12])
);
