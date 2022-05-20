/*----------------------------*/
/*----------------------------*/
BLUE PROFICIENCY PROJECTS


/*----------------------------*/ Pounds => Ounces
function poundsToOunces (pounds){
    var conversion = 16;
    var output = pounds * conversion;
    return output + " Ounces"; 
}
var result = poundsToOunces(6);
console.log(result); // 96 Ounces


/*----------------------------*/ Weather App 
function showWeather(high, low) {
    console.log("Today's Weather:");
    console.log("High: " + high);
    console.log("Low: " + low);
}
showWeather(45, 32);


/*----------------------------*/ File Size Checker
https://dev.getmimo.com/project/1747?track=50&course=1747&chapter=11622&lesson=1
function checkSize(fileSize){
    var maxSize = 5;
    var minSize = 1;
    console.log("Upload Permitted?");

    var overMaxSize = fileSize > maxSize;
    console.log("The file is too large: " + overMaxSize);
    var underMinSize = fileSize < minSize;
    console.log("The file is too small: " + underMinSize);
}

var newSize = 6;
checkSize(newSize);


