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
    image:
      "https://images.unsplash.com/photo-1526346093155-a601c2cbe917?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3300&q=80"
  };
  const newVideodescriptive = {
    id: newVideo.id,
    title: req.body.title,
    channel: "Mohan Muruge",
    image:
      "https://images.unsplash.com/photo-1526346093155-a601c2cbe917?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3300&q=80",
    description: req.body.description,
    views: "0",
    likes: "0",
    duration: "6:12",
    video: "https://project-2-api.herokuapp.com/stream",
    timestamp: Date.now(),
    comments: [
      {
        name: "Micheal Lyons",
        comment:
          "They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of acconcert I have EVER witnessed.",
        id: "1ab6d9f6-da38-456e-9b09-ab0acd9ce818",
        likes: 0,
        timestamp: 1545162149000
      },
      {
        name: "Gary Wong",
        comment:
          "Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!",
        id: "cc6f173d-9e9d-4501-918d-bc11f15a8e14",
        likes: 0,
        timestamp: 1544595784046
      },
      {
        name: "Theodore Duncan",
        comment:
          "How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!",
        id: "993f950f-df99-48e7-bd1e-d95003cc98f1",
        likes: 0,
        timestamp: 1542262984046
      }
    ]
  };
  videosuggestedlist.push(newVideo);
  videodescriptive.push(newVideodescriptive);
  res.send("successfully posted");
});
