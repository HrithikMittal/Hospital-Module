var mongodb = require("mongodb");
var mongoClient = mongodb.MongoClient;
var express = require("express");
var router = express.Router();
var app = new express();
var bodyParser = require("body-parser");
var url = "mongodb://localhost:27017/";
var fs = require("fs");

// make the csv file
var json2csv = require('json2csv').Parser;
// fields in csv file


app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({
    extended: true
}));

router.all("/", function (request, response) {
    var received = request.body;
    console.log(received);
    var obj = {
        hospital_name: received.hname,
        h_address: received.address,
        h_phone: received.pno,
        h_id: received.id,
        password: received.pwd
    };
    console.log(obj.hospital_name);
    //console.log(obj);
    mongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db("devsoc");

        var obj = {
            doctor_id: received.id,
            doctor_name: received.name,
            doctor_spec: received.specialization,
            doctor_time: received.timings,
            doctor_hospital: "Null"
        };

        // console.log(obj);
        // var csv = json2csvParser.parse(obj);
        // console.log(csv);

        json2csv({
            data: obj,
            fields: ["doctor_id",
                "doctor_name",
                "doctor_spec",
                "doctor_time",
                "doctor_hospital"
            ]
        }, function (err, csv) {
            if (err) console.log(err);
            fs.writeFile('file.csv', csv, function (err) {
                if (err) throw err;
                console.log('file saved');
            });
        });


        dbo.collection("doctorsdata").insertOne(obj, function (err, res) {
            if (err) throw err;
            // console.log(res);
            dbo.collection("doctorsdata").find({}).toArray(function (err, res) {
                if (err) throw err;
                var obj = res;
                // console.log(obj);
                response.render("hospital_add_remove.ejs", {
                    data: obj
                });
            });
        });
    });
});

module.exports = router;