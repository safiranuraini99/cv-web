const txtElement = ['Mahasiswa', 'Freelancer'];
let count = 0;
let txtIndex = 0;
let currentTxt = '';
let words = '';

(function ngetik(){
	if(count == txtElement.length){
		count = 0;
	}
	currentTxt = txtElement[count];
	
	words = currentTxt.slice(0, ++txtIndex);
	

	})();