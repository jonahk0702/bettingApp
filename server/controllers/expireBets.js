 const handleExpireBets = (req, res, db) => {   
 	//const { } = req.body;
 	let expiredBets = [];
 	let expiredBetIds = [];
	let expiredOfferId = [];
 	let currentDate;
 	let currentYear;
 	let currentMonth;
 	let currentDay;
 	let currentHour;

 	let message;
 	let today = new Date();

 	let expired = false;


	db.select('*').from('matchedbets')
	.then(data => {
		 for (let i = 0; i < data.length; i++) {
		 	expired = false;
		 	
		 	currentDate = data[i].expires;

			currentYear = parseInt((currentDate.substring(6, 11)));
			message = "-1-" ;
			if(currentYear > today.getFullYear()){

		 		
			}else if(currentYear == today.getFullYear()){
				currentMonth = parseInt((currentDate.substring(3, 6)));

				if(currentMonth < (today.getMonth() + 1)){
					expired = true;
					message += "-1-";

				}
				if(currentMonth == (today.getMonth() + 1)){
					currentDay = parseInt((currentDate.substring(0, 3)));

					if(currentDay < today.getDate()){
						expired = true;
						message += "-2-";
					}
					if(currentDay == today.getDate()){
						currentHour = parseInt((currentDate.substring(11)));

						if(currentHour > (today.getHours() + 1)){
							
						}
						else{
							expired = true;
							message += "-3-";
						}
						
					}
				}

			}else{
				expired = true
				message += "-4-";
			}

		 		
		 	if(expired){
		 		expiredBets.push(data[i])
		 		expiredBetIds.push(data[i].betid)
			}
		}

		db('expiredmatched')
		.insert(expiredBets) 		
		
		.then(data => {
			db("matchedbets")
			.whereIn('betid', expiredBetIds)
			.del()
			.then(data => {




				db.select('*').from('matchingoffers')
				.then(data => {
					message = data;
					for (let i = 0; i < data.length; i++) {
			 			expired = false;
			 		 	currentDate = data[i].expires;

						currentYear = parseInt((currentDate.substring(6, 11)));
						message = "-1-" ;
						if(currentYear > today.getFullYear()){
			 		
						}else if(currentYear == today.getFullYear()){
							currentMonth = parseInt((currentDate.substring(3, 6)));

							if(currentMonth < (today.getMonth() + 1)){
								expired = true;
								message += "-1-";

							}
							if(currentMonth == (today.getMonth() + 1)){
							currentDay = parseInt((currentDate.substring(0, 3)));

								if(currentDay < today.getDate()){
									expired = true;
									message += "-2-";
								}
								if(currentDay == today.getDate()){
									currentHour = parseInt((currentDate.substring(11)));

									if(currentHour > (today.getHours() + 1)){
									
									}else{
										expired = true;
										message += "-3-";
									}
							
								}
							}
						}else{
							expired = true
							message += "-4-";
						}
						if(expired){
			 				expiredOfferId.push(data[i].betid);
						}
					}
					db("matchingoffers")
					.whereIn('betid', expiredOfferId)
					.del()
					.then(data => {
						res.json("noice");
				})
			})

		})
	})
	.catch(err => res.status(400).json('wrong mesup'))
})
}
module.exports = {
	handleExpireBets:handleExpireBets
}