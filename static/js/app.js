//From data.js Assign to Local Variable
var tableData = data;

//Create Variable for Table & Connect to D3
var tbody = d3.select("tbody");

//Check Weather Input From data.js File
console.log(data);

//Table Function 
function buildTable(data){
    tbody.html("");
    data.forEach(function(ufoData) {
        console.log(ufoData);
        var row = tbody.append("tr");
        Object.entries(ufoData).forEach(function([key, value]) {
            // Append A Cell To Row For Each Value
            var cell = row.append("td");
            cell.text(value);
          });
    })
}

//Click Function For Filter By Date
function runClick(){
    var date = d3.select("#datetime").property("value");
    var filterData = tableData;
    if(date){
        filterData = filterData.filter(x => x.datetime === date);
    }
    console.log(filterData);
    buildTable(filterData);
}

//Filter Button for RunClick Function
d3.select("#filter-btn").on("click", runClick);

//Call BuildTable Function; Initialize
buildTable(tableData);
