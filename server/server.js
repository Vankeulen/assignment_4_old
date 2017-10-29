import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
	console.log("Meteor.Startup actually called here");
});


// Methods that can be called on the server by the client
Meteor.methods({
	addProfessor: function(profParams) {

		console.log("addProfessor was called!");
		console.log(profParams);
		
		
		if (profParams.firstname.length > 0
				&& profParams.lastname.length > 0
				&& profParams.department.length > 0) {

			profParams.createdAt = new Date();
			ProfessorInfo.insert(profParams);

			console.log("Added to DB!");
		} else {

			console.log("Not added to DB!");
		}

	},
	resetDB: function() {
		console.log("ResetDB called. Goodbye");
		ProfessorInfo.remove({});
		CourseInfo.remove({});
		SectionInfo.remove({});
	}

});


// Publish all elements in a table:
Meteor.publish("professors", function() {
	return ProfessorInfo.find();
})

// If you want a subset of a table:
Meteor.publish("mathprofessors", function() {
	return ProfessorInfo.find( { department: "math" });
})