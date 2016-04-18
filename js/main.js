//add toDoListItem
    //user submits form
      //select input
      //get the value of input & save value as a variable

//once we have the value saved, we need to display the value
    //create list item
    //place value in list item
    //append list item to display new value

//******************************************//

//update # of items
var countItems = 0

$("#inputItems").on("submit", addNew);
  function addNew (event) {
  event.preventDefault();
  var newItem = $("#addNew").val();
  $("#todos").append('<li><span class="item">' + newItem + '</span><a class="remove">Remove</a><a class="edit">Edit</a></li>');

  newItemCount();

}

//remove item//
$("#todos").on("click", '.remove', function RemoveItem(){
  console.log("Hello")
  $(this).parent().remove();
  newItemCount();

});

$("#todos").on("click", '.edit', function EditItem(){

  var oldItem = $(this).siblings('span').text();
  console.log(oldItem)
  $(this).parent().html("<input class='changeItem' value='" + oldItem + "'>");
});

$("#todos").on("blur", ".changeItem", function() {
  var newSave = $(".changeItem").val();

  $(this).parent().html('<span class="item">' + newSave + '</span><a class="remove">Remove</a><a class="edit">Edit</a>');

});

$("#todos").on("click", ".item", function(){
$(this).toggleClass("complete");
 newItemCount();
});

function newItemCount() {
  countItems= $('.item').not(".complete").length;
  $('#totalItems').html(countItems);
}

$("#reset").click(function(){
  $("#todos").html("");
  newItemCount();
})
//update # of items
// set var count to 0
//count changes when user adds item - decrease when remove
//function to update count

