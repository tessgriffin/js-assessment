exports = (typeof window === 'undefined') ? global : window;

exports.recursionAnswers = {
  listFiles: function(data, dirName) {
    var listOfFiles = [];
    var dirs = [];

    processDir(data);

    function processDir(dir) {
      var i, len, file;
      var files = dir.files;

      dirs.push( dir.dir );

      for (i = 0, len = files.length; i < len; i++) {
        file = files[i];
        if (typeof file === 'string') {
          if (!dirName || dirs.indexOf(dirName) > -1) {
            listOfFiles.push(files[i]);
          }
        } else {
          processDir(files[i]);
        }
      }

      dirs.pop();
    }

    return listOfFiles;
  },

  permute: function(arr) {
    var temp = [];
    var answer = [];

    return doIt(arr);

    function doIt(a) {
      var i, len, item;

      for (i = 0, len = arr.length; i < len; i++) {
        item = arr.splice(i, 1)[0];
        temp.push(item);

        if (arr.length) {
          doIt(arr);
        } else {
          logResult();
        }

        arr.splice(i, 0, item);
        temp.pop();
      }

      return answer;
    }

    function logResult() {
      answer.push(
        temp.slice()
      );
    }
  },

  fibonacci: function(n) {
    var i;
    var fib = [];

    fib[0] = 0;
    fib[1] = 1;
    for( i = 2; i <= n; i++ ){
      fib[i] = fib[i-2] + fib[i-1];
    }
    return fib[n];
  },

  validParentheses: function(n) {

  }
};
