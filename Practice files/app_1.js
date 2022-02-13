// from data.js - import the data from data.js
// Comments are taken predominantly from Module 11
const tableData = data;

// get table references - Reference the HTML table using d3
var tbody = d3.select("tbody");

function buildTable(data) {
  // First, clear out any existing data
  tbody.html("");

  // Next, loop through each object in the data
  // and append a row and cells for each value in the row
  data.forEach((dataRow) => {
    // Append a row to the table body
    let row = tbody.append("tr");

    // Loop through each field in the dataRow and add
    // each value as a table cell (td)
    Object.values(dataRow).forEach((val) => {
      let cell = row.append("td");
      cell.text(val);
     }
    );
  });
}

// Start a new function. We'll name this one "handleClick" because it will be handling what to do after an input
// is given, such as filtering the table by date.
function handleClick() {
   // Grab the datetime value from the filter
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData;

    // Add an if statement that checks for a date. If one is present, we want it to return only the data with that date.
    if (date) {
    // Apply `filter` to the table data to only keep the
    // rows where the `datetime` value matches the filter value
        filteredData = filteredData.filter(row => row.datetime === date);
  }

    // Rebuild the table using the filtered data
    // @NOTE: If no date was entered, then filteredData will
    // just be the original tableData.
    buildTable(filteredData);
}

// Listen for an event - Another aspect of D3.js is that it can listen for events that occur on a webpage,
// such as a button click. The below code ill be tied to the filter button we'll build on our webpage.
d3.selectAll("#filter-btn").on("click", handleClick);

// Build the table when the page loads
buildTable(tableData);

// 1. Create a variable to keep track of all the filters as an object.
//var filters = {}

// 3. Use this function to update the filters. 
// function updateFilters() {

    // 4a. Save the element that was changed as a variable.
    // Referenced code from Devin Greenzang's "app.js" file in GitHub for syntax error correction.
    //let changedElement = d3.select(this)

    // 4b. Save the value that was changed as a variable.
    //let elementValue = changedElement.property("value")
    //console.log(elementValue)

    // 4c. Save the id of the filter that was changed as a variable.
    //let filterId = changedElement.attr("id")
  
    // 5. If a filter value was entered then add that filterId and value
    // to the filters list. Otherwise, clear that filter from the filters object.
    //if (elementValue) {
      //  filters[filterId] = elementValue;
    //}
    //else {
      //  delete filters[filterId]

  
    // 6. Call function to apply all filters and rebuild the table
//    filterTable();
  
//  }
  
  // 7. Use this function to filter the table when data is entered.
//  function filterTable() {
  
    // 8. Set the filtered data to the tableData.
    
  
    // 9. Loop through all of the filters and keep any data that
    // matches the filter values
    
  
    // 10. Finally, rebuild the table using the filtered data
    
  
  
  // 2. Attach an event to listen for changes to each filter
  
  
  // Build the table when the page loads
//  buildTable(tableData);
