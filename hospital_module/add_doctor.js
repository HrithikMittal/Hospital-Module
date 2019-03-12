var mongodb = require("mongodb");
var mongoClient = mongodb.MongoClient;
var express = require("express");
var router = express.Router();
var app = new express();
var bodyParser = require("body-parser");
var url = "mongodb://localhost:27017/";
var fs = require("fs");

// for appending data
var csvWriter = require('csv-write-stream')
var writer = csvWriter()



//new csv convertor
var csv = require('fast-csv');
// file name
var ws = fs.createWriteStream('doctor.csv');

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
            doctor_hospital: received.hospital,
        };

        obj_id = obj.doctor_id;
        obj_hos = obj.doctor_hospital;
        obj_name = obj.doctor_name;
        obj_tim = obj.doctor_time;
        obj_spec = obj.doctor_spec;

        // try {
        //     csv.write([
        //         [obj_id, obj_hos, obj_name, obj_tim, obj_spec]
        //     ], {
        //         headers: true
        //     }).pipe(ws);
        // } catch (err) {
        //     console.log(err);
        //     console.log("THIS IS FUCKING ASSHOLE..........");
        // }

        try {
            writer.pipe(fs.createWriteStream('out.csv'));
            writer.write(obj);
        } catch (error) {
            console.log(err);
            console.log("THIS IS FUCKING ASSHOLE..........");
        }


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