// Question 1: Clean the room function: given an input of[1,2,4,591,392,391,2,5,10,2,1,1,1,20,20], make a function that
// organizes these into individual array that is ordered. For example answer(ArrayFromAbove) should return: [[1,1,1,1],
// [2,2,2], 4,5,10,[20,20], 391, 392,591]. Bonus: Make it so it organizes strings differently from number types. i.e.
// [1, "2", "3", 2] should return [[1,2],["2", "3"]]


//ANS
function cleanRoom(arr){
	let refArr = arr.sort((a,b) => a - b); // [1,1,1,1,2,2,2,4,5,10,20,20,391,392,591]
	let ansArr = [];
	let depthFlag = false;

	for (let i=0; i < refArr.length; i++){
		let nextNum = refArr[i];

		if (depthFlag == false && nextNum !== refArr[i+1]){
			ansArr.push(nextNum);
		}
		if (depthFlag == true && nextNum !== refArr[i-1]){
			if (nextNum !== refArr[i+1]){
				ansArr.push(nextNum);
			}
			depthFlag = false;
		}
		
		if (depthFlag == false && nextNum == refArr[i+1]){
			depthFlag = true;
			tempArr = [];
			tempArr.push(nextNum);
			ansArr.push(tempArr);
		}

		if (depthFlag == true && nextNum == refArr[i-1]){
			ansIndex = ansArr.length - 1;
			ansArr[ansIndex].push(nextNum);
		}
	}
	return ansArr;
}


// above is definitely a brute force solution (though it is time optimal at O(n)). I'm missing some method or function that should make this 
// much easier and cleaner, if not asymptotically faster. Filter() might be it

//ANS 2
function cleanRoomBetter(arr){
	let refArr = arr.sort((a,b) => a - b); // [1,1,1,1,2,2,2,4,5,10,20,20,391,392,591]
	let ansArr = [];

	for (let i=0; i < refArr.length; i++){
		let curNum = refArr[i];	
		tempArr = refArr.filter(num => num == curNum);
		if (tempArr.length == 1){
			ansArr.push(curNum);
		} else{
			ansArr.push(tempArr);
			refArr = refArr.filter(num => num !== curNum);
			i--; //accounting for the off-by-one in index caused by refArr being filtered down
		}
	}
	return ansArr;
}

//this second solution looks a bit cleaner and uses filter() but is asymptotically slower



// Question 2: Write a javascript function that takes an array of numbers and a target number. The function should find two
// different numbers in the array that, when added together, give the target number. For example: answer([1,2,3], 4)should
// return [1,3]

// ANS
// step through array
// for each index, target num- arr[i]
// store difference in hash map, KV as follows: Key: difference, Value: index
// check if value at each index exists in hash map
// if it does, you have your answer: the value at current index, and the index returned from hash map using value as a key
function findDiffTarget(arr, targetNum){
	let refDict = {};
	let	ansArr = [];
	for (let i=0; i < arr.length; i++){
		let curNum = arr[i];
		refDict[targetNum-curNum] = i;

		if (refDict[curNum] != undefined){
			ansArr.push(curNum);
			ansArr.push(arr[refDict[curNum]]);
			return ansArr;
		}
	}
	return ansArr;
}





// Question 3: Write a function that converts HEX to RGB. Then Make that function auto-dect the formats so that if you
// enter HEX color format it returns RGB and if you enter RGB color format it returns HEX.


//HEX format: #64C832 
//RGB format: rgb(0,0,0)
function flipHexAndRGB(input){

}

// .toString(16); applied to a number will turn into into a Hexadecimal string
// eg, let num = 99; num.toString(16) evaluates to 63
