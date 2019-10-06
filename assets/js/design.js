require('../css/design.css');

(function(){
    alert("design.js working")
})();
//
// function initCalc(){
//
//     // VARIABLES /////
//     //// Get Draggable List
//     var draggableList = document.getElementById('draggableList')
//     //// Get the list items inside of the dragable list
//     var draggableListItems = draggableList.getElementsByTagName('li')
//     //// Item to move
//     var pick;
//     //// Where to drop item
//     var target;
//     //// Save CSS style of picked up item
//     var lastStyle;
//     // END VARIABLES //
//
//     // Add an event listener to each item in the draggableList
//     for (let x=0; x<draggableListItems.length; x++) {
//         draggableListItems[x].onmousedown = pickItem
//         draggableListItems[x].onmouseover = moveItem
//     }
//
// }
//
// initCalc();
//
// // Moves the item
// function moveItem () {
//     target = this
//     target.location = event.clientY;
//     if(pick)
//         if(pick.location > target.location) // Insert before if moving up
//             target.parentNode.insertBefore(pick, target)
//         else  // Insert after if moving down
//             target.parentNode.insertBefore(pick, target.nextSibling)
// }
//
// // Selects the item to move
// function pickItem () {
//     pick = this;
//     lastStyle = pick.style;
//     // Used to see if moving up or down the list
//     pick.location = event.clientY;
//
//     // Stop text from being selected when dragging
//     document.body.classList.add("noSelect");
//
//     // Adds an event to the DOM when an item is picked up
//     document.onmouseup = dropItem;
// }
//
// // Places the item and clears the pick and event listeners
// function dropItem () {
//     pick.style = lastStyle;
//     pick = '';
//     document.body.classList.remove("noSelect");
//     document.removeEventListener("onmouseup", dropItem)
// }


$( "input.form-check-input" ).click(function(exerciseInput) {
    var exerciseDraggable = exerciseInput.target.id.slice(0, -5);


   var exerciseDraggableUS = exerciseDraggable.split(" ").join("_");

    if ($("#"+exerciseDraggableUS).length){
        $("#"+exerciseDraggableUS).remove();
    } else {
        $( "#draggableList" ).append( "<li class=\"draggableList\" id=\""+exerciseDraggableUS+"\">"+exerciseDraggable+"</li>" );
    }
    // initCalc();
});

