
const getTimeStamp = function()
	{
        const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
        const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
		let date = new Date();
		let day = date.getDate();
		let month = months[date.getMonth()];
		let year = date.getFullYear();
		let hour = date.getHours() > 12 ? date.getHours() - 12 : date.getHours();
		let minute = date.getMinutes() > 9 ? date.getMinutes() : "0"+date.getMinutes();
		let period = date.getHours() >= 12 ?"pm":"am";
		let today = days[date.getDay()];
		return [today,month,day,year,hour,minute,period];
    }
    
export default getTimeStamp;
