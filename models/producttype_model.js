var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var Objectid = mongoose.Schema.Types.ObjectId;

var ProductTypeSchema   = new Schema({
	name: { type: String, required: true, index: true },
	fire_action: String,
	_owner_id: Objectid,
	_deleted: { type: Boolean, default: false, index: true },
}, {
	timestamps: true
});

ProductTypeSchema.set("_perms", {
	admin: "crud",
	owner: "r",
	user: "r",
	all: "r"
});

ProductTypeSchema.index( { "$**": "text" } );

module.exports = mongoose.model('ProductType', ProductTypeSchema);
