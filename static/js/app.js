// from data.js
var tableData = data;

//Create Variable for Table
var table = d3.select("tbody");

//Check weather data input from data.js file
console.log(data);

//Table Function 
function buildTable(data){
    table.html("");
    data.forEach(function(ufoData) {
        console.log(ufoData);
        var row = table.append("tr");
        Object.entries(ufoData).forEach(function([key, value]) {
            // Append a cell to the row for each value
            var cell = row.append("td");
            cell.text(value);
          });
    })
}

//Click function
function click(){
    var date = d3.select("#datetime").property("value");
    var filterData = tableData;
    if(date){
        filterData = filterData.filter(x => x.datetime === date);
    }
    console.log(filterData);
    buildTable(filterData);
}

// filter button for runClick
d3.select("#filter-btn").on("click", click);

buildTable(table);
