var Schema = mongoose.Schema
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/myappdatabase');

//define
var bookSchema = new Schema({
	title: String,
	description: String,
	author: String
})