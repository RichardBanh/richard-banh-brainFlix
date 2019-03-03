// initialize Express in project
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const videodescriptive = require("./videodescriptive");
const videosuggestedlist = require("./videosuggestedlist");
const uuid = require("uuid");
const cors = require("cors");

app.use(cors());
app.use(express.static("public"));
app.use(bodyParser.json());

// start Express on port 8080
app.listen(8080, () => {
  console.log("Server Started on http://localhost:8080");
  console.log("Press CTRL + C to stop server");
});

// tells if being pinged
app.use((req, res, next) => {
  console.log("Incoming request");
  next();
});

//sends all videosuggested list
app.get("/videos/", (req, res) => {
  console.log("/videos sent");
  res.json(videosuggestedlist);
});

//sends descriptive video details
app.get("/videos/:id", (req, res) => {
  console.log("/videos/:id sent");
  const id = req.params.id;
  console.log(id);
  const videodescriptivedata = videodescriptive.find(videodescriptive => {
    return videodescriptive.id === id;
  });
  console.log(videodescriptivedata);
  res.json(videodescriptivedata);
});

//adds video details
app.post("/videos", (req, res) => {
  console.log(req.body + " recieved");
  const newVideo = {
    id: uuid.v4(),
    title: req.body.title,
    channel: "Mohan Muruge",
    image: "https://i.imgur.com/q4dnUxr.jpg",
    description: req.body.description
  };
  const newVideodescriptive = {
    id: newVideo.id,
    title: req.body.title,
    channel: "Mohan Muruge",
    image: "https://i.imgur.com/q4dnUxr.jpg",
    description: req.body.description,
    views: "0",
    likes: "0",
    duration: "6:12",
    video: "https://project-2-api.herokuapp.com/stream",
    timestamp: Date.now(),
    comments: []
  };
  if (!newVideo.title || !newVideo.description) {
    return res.status(400).send("Please include title and or description");
  }
  videosuggestedlist.push(newVideo);
  videodescriptive.push(newVideodescriptive);
  res.send("success");
});
