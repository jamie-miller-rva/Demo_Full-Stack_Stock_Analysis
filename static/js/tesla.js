// access csv file saved in repository and available via url using github raw 
const url = "https://raw.githubusercontent.com/jamie-miller-rva/Demo_Full-Stack_Stock_Analysis/main/static/data/all_stocks_5yr.csv";

// Fetch the JSON data and console log it
d3.csv(url).then(function(data) {
    console.log(data);
});