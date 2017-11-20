// converts date (like dd/mm/yyyY) into hash (int array index) like mmddY
// 01/12/2017 -> 12017
function GetDateHash(dateStr) {
	let dateArr = dateStr.split("/");
	let indexStr = dateArr[1] + dateArr[0] + dateArr[2].charAt(3);
	return parseInt(indexStr);
}

module.exports.GetDateHash = GetDateHash;