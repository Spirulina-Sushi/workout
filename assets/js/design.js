// require('../css/design.css');
//
// document.onclick = function(){checkboxes()};
//
// console.log('js is working');
// function checkboxes()
// {
//     var inputElems = document.getElementsByTagName("input"),
//         count = 0;
//
//     for (var i=0; i<inputElems.length; i++) {
//         if (inputElems[i].type == "checkbox" && inputElems[i].checked == true){
//             count++;
//         }
//     }
//     document.getElementById("totalExercises").value = count;
//
//     document.getElementById("totalTime").value = document.getElementById("totalExercises").value * (document.getElementById("work").value + document.getElementById("rest").value)
//
//     console.log(document.getElementById("work").value)
// }
//
// //dragable list
// $( init );
//
// function init() {
//     $( ".droppable-area1" ).sortable({
//         connectWith: ".connected-sortable",
//         stack: '.connected-sortable ul'
//     }).disableSelection();
// }