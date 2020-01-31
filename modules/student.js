const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://sunnytyagi19:oFcZ8Q7kmxpoPoV6@cluster1-i2jgp.mongodb.net/test?retryWrites=true&w=majority', {useNewUrlParser: true});
var conn =mongoose.Collection;

var studentSchema =new mongoose.Schema({
	firstName:String,
	lastName:String,
	email:String,
	
});

var studentModel = mongoose.model('student', studentSchema);
module.exports=studentModel;