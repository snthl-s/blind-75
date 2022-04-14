/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
 const wordBreak = (s, wordDict) => {
    if (wordDict == null || wordDict.length === 0) return false;
  
    const set = new Set(wordDict);
    const dp = Array(s.length + 1).fill(false);
    dp[0] = true;
  
    for (let end = 1; end <= s.length; end++) {
      for (let start = 0; start < end; start++) {
        const w = s.substring(start, end);
        if (dp[start] === true && set.has(w)) {
          dp[end] = true;
          break;
        }
      }
    }
    return dp[s.length];
  };

console.log(wordBreak("catsandog", ["cats","dog","sand","and","cat"]));
console.log(wordBreak("applepenapple", ["apple","pen"]));
console.log(wordBreak("leetcode", ["leet","code"]));
console.log(wordBreak("bb", ["a","b","bbb","bbbb"]));
console.log(wordBreak("cars", ["car","ca","rs"]));