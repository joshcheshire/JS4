
var victimNumber = prompt(" How many disaster victims?")

var victName =  []
var victPhone = []
var victStreet =[]


console.log(victimNumber)

for(i =1; i <= victimNumber; i++){
	console.log(i);

	var vicname = prompt(" Victim's Name?") 
		victName.push(vicname)  
		console.log(victName)

	var vicphone = prompt("Victim's phone number?")
		victPhone.push(vicphone)
		console.log(victPhone)

	var vicstreet= prompt("Victim's Street ?")
		victStreet.push(vicstreet)
		console.log(victStreet)

		

}

var victimInfo = "\nVictims Name: " + victName + "\nVictim's phone: " + victPhone + "\nVictim's Street: " + victStreet


var volunteerNumber = prompt( "How many Volunteers?")

var volunteerName =[]
var volunteerPhone=[]
var volunteerStreet =[]

console.log(volunteerNumber)

	for( i = 1; i <= volunteerNumber; i++){
		console.log(i);

	var volname= prompt( "Volunteer's name")
		volunteerName.push(volname)
		console.log(volname)


	var volnumber = prompt("Volunteer's phone number" )
		volunteerPhone.push(volnumber)
		console.log(volnumber)

	var volstreet = prompt("Volunteer's Street?")
		volunteerStreet.push(volstreet)
		console.log(volstreet)


	}



var volunteerInfo = "\nVolunteer's name:  " + volunteerName + "\nVolunteer's phone: " + volunteerPhone + "\n Volunteer's street: " + volunteerStreet


alert( victimInfo + volunteerInfo)



