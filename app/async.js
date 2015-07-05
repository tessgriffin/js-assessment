exports = (typeof window === 'undefined') ? global : window;

exports.asyncAnswers = {
  async : function(value) {
    return new Promise(function(resolve, reject){
      resolve(value)
    })
  },

  manipulateRemoteData : function(url) {
    var return_arr = [];
    return $.get(url).then(function(people){
      people["people"].map(function(person){
        return_arr.push(person["name"]);
      });
      return return_arr.sort()
    });
  }
};
