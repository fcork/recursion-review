// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  if(typeof obj === 'number' || obj === null){
    return '' + obj;
  }
  if(typeof obj === 'string'){
    return '"' + obj + '"';
  }
  if(Array.isArray(obj)){
    var arr = [];
    _.each(obj,function(item){
      arr.push(stringifyJSON(item));
    })
    return '[' + arr.join(',') + ']';
  }
  if(typeof obj === 'object'){
    var arr2 = [];
    _.each(obj,function(value,key){
      if (stringifyJSON(key) && stringifyJSON(value))
      arr2.push(stringifyJSON(key) + ':' + stringifyJSON(value))
    })
    return '{' + arr2.join(',') + '}';
  }
  if (typeof obj === 'function' || obj === undefined){
  return undefined;
  }
  return ''+obj;
};
