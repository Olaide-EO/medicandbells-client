


export default function DecimalToHour(val){
	
	let dig = Math.floor(val).toString();
	let n;
	if(val < 10){
	     n = `0${dig}:00`;
	}else{
		n = `${dig}:00`
	}

    
   
    return n;

}




