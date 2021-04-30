$(document).ready(function(){
$('.demo').viewportChecker({

// Class to add to the elements when they are visible
classToAdd: 'visible', 

// Class to remove before adding 'classToAdd' to the elements
classToRemove : 'invisible',

// The offset of the elements (let them appear earlier or later)
offset: 100, 

// Add the possibility to remove the class if the elements are not visible
repeat: false,

// Add the offset as a negative number to the element's bottom
invertBottomOffset: true,

// Callback to do after a class was added to an element. 
// Action will return "add" or "remove", depending if the class was added or removed
callbackFunction: function(elem, action){},

// Set to true if your website scrolls horizontal instead of vertical.
scrollHorizontal: false

});
});