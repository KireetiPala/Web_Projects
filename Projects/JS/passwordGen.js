
var psdString = "abcdefghigklmnopqrstuvwxyz1234567890!@#$%^&*ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var tempPsd = '';
function createPassword(length){
    tempPsd = '';
    for(var i = 0; i < length; i++) {
        tempPsd += psdString.charAt(Math.floor(Math.random() * psdString.length));
    }
    return tempPsd;
}

function generatePsd(enterlength){
    document.genratePsd.displayPsd.value = createPassword(enterlength);
}