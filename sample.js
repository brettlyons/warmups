var sampleData = "165561786121789797";

console.log(sampleData.split('7').map(function (element) {
  if(element == '9') {
    return "77";
  }
  return "7" + element;
}).join(''), "to equal: 16556178612178977");
