var insertionSort = function(array){
	var i = 1, j, temp;
	for(i; i < array.length; i++){
		temp = array[i];
		for (j = i - 1; j >= 0, temp < array[j]; j--){
			array[j + 1] = array[j];
		}
		array[j + 1] = temp;
		console.log(array);
	}
	return array;
}
insertionSort([5,6,1,2,4,3]);
