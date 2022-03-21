var mongoose = require('mongoose');
//mongoose.connect('mongodb://localhost:27017/hotelcrown', {useNewUrlParser: true, useUnifiedTopology: true});
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost:27017/PortfolioDB', {useNewUrlParser: true, useUnifiedTopology: true});
}

var mongocon = mongoose.connection;
var contactSchema =  new mongoose.Schema({
    name: String,
    email: String,
    weburl: String,
    message: String
});

var DataCollection = mongoose.model('PortfolioDB',contactSchema);

module.exports = {
  DataCollection : DataCollection,
}

// var mongoose = require('mongoose');

// var contactSchema = mongoose.Schema({
//     _id: mongoose.Schema.Types.ObjectId,
//     name: {
//         type: String,
//         required: true
//     },
//     email: { 
//         type: Number, 
//         required: true
//     },
//     weburl: {
//       type: String,
//       required: true
//     },
//     message: { 
//         type: Number, 
//         required: true
//     }
// });

// var DataCollection = mongoose.model('PortfolioDB', contactSchema);

// //****outputs to console, all the data I have****
// DataCollection.find(function (err, contacts){
//   console.log(contacts);
// });

// // make this available to our users in our Node applications
// module.exports = DataCollection;