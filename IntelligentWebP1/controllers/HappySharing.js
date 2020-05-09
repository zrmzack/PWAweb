var HappySharing = require('../models/HappySharing');


exports.insert = function (req, res) {
    var userData = req.body;
    if (userData == null) {
        res.status(403).send('no data sent')
    }
    try {
        var happySharing = new HappySharing({
            user_name: userData.username,
            stories: userData.story,
            date:new Date().toLocaleString(),
            image1:userData.img1_url,
            image2:userData.img2_url,
            image3:userData.img3_url,
            image4:userData.img4_url,
        });


        happySharing.save(function (err, results) {
            // console.log(results._id);
            if (err)
                res.status(500).send('Invalid data!');
            res.setHeader('Content-Type', 'application/json');
            res.send(JSON.stringify(happySharing));
        });
    } catch (e) {
        res.status(500).send('error ' + e);
    }

}