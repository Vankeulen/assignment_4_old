
/////////////////////////////////////////////////////////
///dbtools

///Mapping of collections
collections = {};

///Create a collection named (name)=>name.toLowerCase()
///Stores collection in mapping
///Returns the created collection
function makeCollection(name) {
	collections[name] = new Mongo.Collection(name.toLowerCase());
	return collections[name];
}

/////////////////////////////////////////////////////////
///Collections

ProfessorInfo = makeCollection("ProfessorInfo");
CourseInfo = makeCollection("CourseInfo");
SectionInfo = makeCollection("SectionInfo");
