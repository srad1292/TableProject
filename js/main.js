window.onload = function() {
  
var table_data = [ { first_name : 'Rose',
                     last_name  : 'Tyler',
                     home       : 'Earth' },
                   { first_name : 'Zoe',
                     last_name  : 'Heriot',
                     home       : 'Space Station W3'},
                   { first_name : 'Jo',
                     last_name  : 'Grant',
                     home       : 'Earth'},
                   { first_name : 'Leela',
                     last_name  : null,
                     home       : 'Unspecified'},
                   { first_name : 'Romana',
                     last_name  : null,
                     home       : 'Gallifrey'},
                   { first_name : 'Clara',
                     last_name  : 'Oswald',
                     home       : 'Earth'},
                   { first_name : 'Adric',
                     last_name  : null,
                     home       : 'Alzarius'},
                   { first_name : 'Susan',
                     last_name  : 'Foreman',
                     home       : 'Gallifrey'} ];


createTable("basicDisplay");
//Bonus function
setOnClickListeners();

/**
  function: createTable
  This function creates a table element,
  creates a row of headings with the keys from an object in the array,
  then creates rows for each object with their data in table data elements.
  The table is then appended to the passed in element
*/
function createTable(element_id){
    var data_table = elt("table","data_display");
    var headings = elt("tr","headings");
    var keys = Object.keys(table_data[0]);
    //Create the headings for the table
    for(var ind = 0; ind < keys.length; ind++){
        var h1 = elt("th");
        var node = document.createTextNode(keys[ind]);
        h1.appendChild(node);
        headings.appendChild(h1);  
    }
    data_table.appendChild(headings);
    //Create the rows of data for the table
    for(var inc = 0; inc < table_data.length; inc++){
      var row = elt("tr");
      for(var ind = 0; ind < keys.length; ind++){
          var data = elt("td");
          if(table_data[inc][keys[ind]] !== null){
            var node = document.createTextNode(table_data[inc][keys[ind]]);
          }
          else{
            var node = document.createTextNode("");
          }
          data.appendChild(node);
          row.appendChild(data);
      }
      data_table.appendChild(row);
    }
    //Append the table to the specified element
    var placement = document.getElementById(element_id);
    placement.appendChild(data_table);
}

/**
  function: createElm
  Given an element name and optional classname
  this function creates a new element and returns it
*/
function elt(name, className) {
    var elt = document.createElement(name);
    if(className){
      elt.className = className;
    }
    return elt;
  }



/**
  function: setOnClickListeners
  Bonus - Place the table in other elements on the page -
  Just include any element you want to be able to add the table to
  in this function by setting the onclick for the element to placeTableInElement
*/
function setOnClickListeners(){
  document.getElementById("tableHolder1").onclick = function(){createTable("tableHolder1")};
  document.getElementById("tableHolder2").onclick = function(){createTable("tableHolder2")};
}


};