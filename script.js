// complete this js code
function Person(name, age) {
	greet = function()
	{
			return `Hello, my name is $name. I am $age years old`
	}
}

function Employee(name, age, jobTitle) {
	Car.call(this, name,age);
	this.jobTitle = jobTitle
	
}
Employee.prototype = Object.create(Person.prototype)}

// Do not change code below this line
window.Person = Person;
window.Employee = Employee;
Employee.prototype.jobGreet = function() {
	return Hello, my name is + " " + this.name + " " + , I am + " " + this.age + years old, and my job title is + " " + this.jobTitle.
}
