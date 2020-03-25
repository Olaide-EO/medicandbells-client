
export default function StringToTime(str){
	      
         
	      let myTime = str;
          var d = new Date();
           let stripMin = myTime.slice(0,2);
           d.setHours(stripMin);
           d.setMinutes(0);

            return d;
}