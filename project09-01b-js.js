"use strict";
/*    JavaScript 7th Edition
      Chapter 9
      Project 09-01

      Project to read field values from a query string
      Author: Alex
      Date:   08/25/2025

      Filename: project09-01b.js
*/

// Step 4: Apply slice() method to location.search, storing text after first character
let query = location.search.slice(1);

// Step 5: Replace + characters with spaces and decode URI components
query = query.replace(/\+/g, " ");
query = decodeURIComponent(query);

// Step 6: Split the query string at & characters into cardFields array
let cardFields = query.split("&");

// Step 7: Create for...of loop to process each field
for (let field of cardFields) {
    // Step 7a: Split each item at = character
    let nameValue = field.split("=");
    
    // Step 7b: Store name and value
    let name = nameValue[0];
    let value = nameValue[1];
    
    // Step 7c: Set text content of element with matching id
    document.getElementById(name).textContent = value;
}