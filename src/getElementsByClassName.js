// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  // your code here
  var results = [];
  var searchNodes = function(node){
     if(_.contains(node.classList, className)){
      results.push(node);
    }
    _.each(node.childNodes, function(child){
      searchNodes(child);
    })

  }
  searchNodes(document.body);
  return results;
};
