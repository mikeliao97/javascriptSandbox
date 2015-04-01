//My Max


sampleArray = [1, 3, 53, 4, 23];
function my_max(array){
    var max = -100000;
    for(var x in array){
        if(sampleArray[x] > max){
            max = sampleArray[x];
        }
	}
    return max;
}

console.log(my_max(sampleArray));

//vowel account
var sampleVowel = "AEIOUaeiou"
function vowel_count(str){
	var vowels = 0;
	var allVowels = "aeiou";
	str = str.toLowerCase();

	for(var x in str){
		if(allVowels.indexOf(x) > -1){
			vowels++;
		}
	}
	return vowels;
}

vowel_count(sampleVowel);


//
var sampleString = "I am the perfect palindrom";
function reverse(str){
	var tempString = "";
	for(var i = str.length -1; i >= 0; i--){
		tempString += str.charAt(i);
	}
}
console.log(reverse(sampleString));

