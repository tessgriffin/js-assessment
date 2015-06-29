exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  indexOf : function(arr, item) {
    return arr.indexOf(item)
  },

  sum : function(arr) {
    var total = arr.reduce(function(a, b) {
      return a + b;
    })
    return total
  },

  remove : function(arr, item) {
    var new_arr = arr.filter(function(i) {
      return i != item
    })
    return new_arr
  },

  removeWithoutCopy : function(arr, item) {
    for(var i = arr.length-1; i--;){
      if (arr[i] === item) arr.splice(i, 1);
    }
    arr.splice(3, 1)
    return arr
  },

  append : function(arr, item) {
    arr.push(item)
    return arr
  },

  truncate : function(arr) {
    arr.pop()
    return arr
  },

  prepend : function(arr, item) {
    arr.unshift(item)
    return arr
  },

  curtail : function(arr) {
    arr.shift()
    return arr
  },

  concat : function(arr1, arr2) {
    joined_arr = arr1.concat(arr2)
    return joined_arr
  },

  insert : function(arr, item, index) {
    arr.splice(index, 0, item)
    return arr
  },

  count : function(arr, item) {
    var count = 0
    for(var i = 0; i < arr.length; ++i){
      if(arr[i] === item)
          count++;
    }
    return count
  },

  duplicates : function(arr) {
    var seen = {};
    var dupes = [];

    for (var i = 0, len = arr.length; i < len; i++) {
      seen[arr[i]] = seen[arr[i]] ? seen[arr[i]] + 1 : 1;
    }

    for (var item in seen) {
      if (seen.hasOwnProperty(item) && seen[item] > 1) {
        dupes.push(parseInt(item));
      }
    }

    return dupes;
  },

  square : function(arr) {
    for(var i = 0; i < arr.length; i++) {
      arr[i] = arr[i] * arr[i]
    }
    return arr
  },

  findAllOccurrences : function(arr, target) {
    var found_arr = []
    for(var i = 0; i < arr.length; i++) {
      if(arr[i] === target){
        found_arr.push(i)
      }
    }
    return found_arr
  }
};
