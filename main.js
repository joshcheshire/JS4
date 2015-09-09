
var victimNumber = prompt(" How many disaster victims?")

var victName =  []
var victPhone = []
var victStreet =[]


console.log(victimNumber)

for(i =0; i <= victimNumber; i++){
	console.log(i);

	var name = prompt(" Victim's Name?") 
		victName.push(name)
		console.log(victName)

	var phone = prompt("Victim's phone number?")
		victPhone.push(phone)
		console.log(victPhone)

	var street= prompt("Victim's Street ?")
		victStreet.push(street)
		console.log(victStreet)

		

}

