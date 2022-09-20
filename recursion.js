/** product: calculate the product of an array of numbers. */

function product(nums) {
  if (nums.length === 0) {
    return 1;
  }
  return nums[0] * product(nums.slice(1));
}

//product([2, 3, 4]);

/** longest: return the length of the longest word in an array of words. */

function longest(words) {
  if (words.length === 0) {
    return 0;
  }
  if (words[0].length > longest(words.slice(1))) {
    return words[0].length;
  } else {
    return longest(words.slice(1));
  }
}
//longest(["hi", "hello", "hola"])
/** everyOther: return a string with every other letter. */

function everyOther(str) {
  //base case would be an empty string
  //use slice again
  if (str.length === 0) {
    return "";
  }
  return str[0] + everyOther(str.slice(2));
}
//everyOther("hello")

/** find: return boolean depending on if val exists in array or not. */

function find(arr, val, i = 0) {
  if (arr.length === i) {
    return false;
  }

  if (arr[i] === val) {
    return true;
  } else {
    return find(arr, val, i + 1);
  }
}

/** isPalindrome: checks whether a string is a palindrome or not. */

// function isPalindrome(str) {
//   let reverse = '';

//   function reversesStr(str, i) {
//     if (i < 0) return;
//     reverse = reverse + str[i];
//     reversesStr(str, i - 1);
//   }

//   reversesStr(str, str.length - 1);
//   if (str === reverse) {
//     return true;
//   } else {
//     return false;
//   }
// }

function isPalindrome(str, i = 0, e = str.length - 1) {
  if (i === e) {
    return true;
  }
  if (i > e && str[i] === str[e]) {
    return true;
  }

  if (str[i] !== str[e]) {
    return false;
  } else {
    return isPalindrome(str, i + 1, e - 1);
  }
}

/** revString: return a copy of a string, but in reverse. */

function revString(str, i = str.length - 1) {
  if (i < 0) return "";

  return str[i] + revString(str, i - 1);
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

// function find(arr, val, i = 0) {

//   if (arr.length === i) {
//     return -1;
//   }

//   if (arr[i] === val) {
//     return i;
//   } else {
//     return find(arr, val, i + 1);
//   }
// }

function findIndex(arr, val, i = 0) {
  if (arr.length === i) {
    return -1;
  }
  if (arr[i] === val) {
    return i;
  } else {
    return findIndex(arr, val, i + 1);
  }
}
// let animals = ["duck", "cat", "cat", "pony"]
// findIndex(animals, "duck")
/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(ob, out = []) {
  for (let key in ob) {
    if (typeof ob[key] === "string") {
      out.push(ob[key]);
    } else {
      gatherStrings(ob[key], out);
    }
  }
  return out;
}
// let nestedObj = {
//   firstName: "Lester",
//   favoriteNumber: 22,
//   moreData: {
//     lastName: "Testowitz"
//   },
//   funFacts: {
//     moreStuff: {
//       anotherNumber: 100,
//       deeplyNestedString: {
//         almostThere: {
//           success: "you made it!"
//         }
//       }
//     },
//     favoriteString: "nice!"
//   }
// };
// gatherStrings(nestedObj);

// FURTHER STUDY
// function isPalindrome(str, i = 0, e = str.length - 1) {
//   if (i === e) {
//     return true;
//   }
//   if (i > e && str[i] === str[e]) {
//     return true;
//   }

//   if (str[i] !== str[e]) {
//     return false;
//   } else {
//     return isPalindrome(str, i + 1, e - 1);
//   }
/** binarySearch: given a sorted array of numbers, and a value,
 * return true if val is in array, false if not present). */

function binarySearch(arr, val, start = 0, end = arr.length - 1) {
  if (start === end) {
    if (arr[start] === val) {
      return true;
    } else {
      debugger;
      return false;
    }
  }
  if (start > end) {
    return false;
  }
  debugger;
  let mid = Math.floor((start + end) / 2);
  if (arr[mid] === val) {
    return true;
  } else if (arr[mid] < val) {
    return binarySearch(arr, val, (start = mid + 1), end);
  } else {
    return binarySearch(arr, val, start, (end = mid - 1));
  }
}
//binarySearch([1, 2, 3, 4], 4);


/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearchIndex(arr, val, start = 0, end = arr.length - 1) {
  if (start === end) {
    if (arr[start] === val) {
      return start;
    } else {
      debugger;
      return -1;
    }
  }
  if (start > end) {
    return -1;
  }
  debugger;
  let mid = Math.floor((start + end) / 2);
  if (arr[mid] === val) {
    return mid;
  } else if (arr[mid] < val) {
    return binarySearchIndex(arr, val, (start = mid + 1), end);
  } else {
    return binarySearchIndex(arr, val, start, (end = mid - 1));
  }

}

//binarySearchIndex([1, 2, 3, 4], 4)

// you might find the above two problems easier if you change the function signature to:
//
// function binarySearch(arr, val, left = 0, right = arr.length) {
//
// }

module.exports = {
  product,
  longest,
  everyOther,
  find,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch,
  binarySearchIndex,
};
