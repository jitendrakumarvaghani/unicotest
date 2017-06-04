var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var jwt = require('jsonwebtoken');
var payload = {
   "products":[
      {
         "recommendation":{
            "currentLevel":79,
            "maxLevel":100
         },
         "items":[
            {
               "id":"10600",
               "title":"PP woodland bowl",
               "category":"BOWLS",
               "imageUrl": "assets/images/bowl.png",
               "unitsInCartons": 10,
               "unitCost":4.52,
               "packSize":10,
               "secondaryCategory":"Chairs"
            }
         ]
      },
      {
         "recommendation":{
            "currentLevel":79,
            "maxLevel":100
         },
         "items":[
            {
               "id":"10870",
               "title":"MELAMINE CUP",
               "category":"CUPS",
               "imageUrl":"assets/images/cup.png",
               "unitsInCartons":6,
               "unitCost":0.93,
               "packSize":5,
               "secondaryCategory":"Kids Home"
            },
            {
               "id":"10820",
               "title":"PP YUM YUM CUP",
               "category":"CUPS",
               "imageUrl":"assets/images/yumcup.png",
               "unitsInCartons":12,
               "unitCost":0.7,
               "packSize":25,
               "secondaryCategory":"Kids Home"
            }
         ]
      }
   ]
};
app.use(bodyParser.json());
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, x-Requested-With, Content-Type, Accept");
    next();
});
var api = express.Router();
api.get('/products', (req, res) => {
    res.json(payload.products);
});
app.use('/api', api);
app.listen(1234);
