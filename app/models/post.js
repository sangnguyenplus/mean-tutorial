'use strict';

var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;

var schema = mongoose.Schema({
   title:         {type: 'String', required: true, index:true},
   description:   {type: 'String', required: true},
   content:       {type: 'String', required: true},
   creationDate:  {type: 'Date',   required: true}

});

module.exports = mongoose.model('Post', schema);