const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.use(express.json())

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.post('/', function (req, res) {
  const {polygonCoords, point} = req.body;
  if(!(polygonCoords.length >= 3 && point.length === 2 )){
    res.json({message:"please provide, polygonCoords : [cords], point : [lat,long]"});
  }
  const polygon = turf.polygon([polygonCoords]);

  if (turf.booleanPointInPolygon(point, polygon)) {
    res.json({message:"The point is inside the polygon"});
  } else {
    res.json({message:"The point is outside the polygon"});
  }
  
})

app.listen(port, function () {
  console.log('Listening on port 3000...')
})
