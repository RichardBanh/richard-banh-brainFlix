import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter} from 'react-router-dom'

const sideVideo = [{
 id: 'Scotty Cranmer', 
 title: 'Become A Travel Pro In One Easy Lesson...', 
 channel: '', 
 image: './Images/video-list-0.jpg' 
},
{
 id: 'Scotty Cranmer', 
 title: 'Les Houches The Hidden Gem Of The...', 
 channel: '', 
 image: './Images/video-list-2.jpg' 
},
{
 id: 'Scotty Cranmer', 
 title: 'Travel Health Useful Medical Information...', 
 channel: '', 
 image: './Images/video-list-3.jpg' 
},
{
 id: 'Emily Harper', 
 title: 'Cheap Airline Tickets Great Ways To Save', 
 channel: '', 
 image: './Images/video-list-4.jpg' 
},
{
 id: 'Ethan Owen', 
 title: 'Take A Romantic Break In A Boutique Hotel', 
 channel: '', 
 image: './Images/video-list-5.jpg' 
},
{
 id: 'Lydia Perez', 
 title: 'Choose The Perfect Accommodations', 
 channel: '', 
 image: './Images/video-list-6.jpg' 
},
{
 id: 'Timothy Austin', 
 title: 'Cruising Destination Ideas', 
 channel: '', 
 image: './Images/video-list-7.jpg' 
},
{
 id: 'Scotty Cranmer', 
 title: 'Train Travel On Track For Safety', 
 channel: '', 
 image: './Images/video-list-8.jpg' 
}
];

const mainVideo = [{
 id: 'Red Cow',
 title:" BMX Rampage: 2018 Highlights",
 description: 'On a gusty day in Southern Utah, a group of 25 daring mountain bikers blew the doors off what is possible on two wheels, unleashing some of the biggest moments the sport has ever seen. While mother nature only allowed for one full run before the conditions made it impossible to ride, that was all that was needed for event veteran Kyle Strait, who won the event for the second time -- eight years after his first Red Cow Rampage title',
 channel: '',
 image: './Images/video-list-0.jpg',
 views: '1,001,023',
 likes: '110,985',
 duration: '',
 video: '',
 timestamp: '12/18/2018',
 comments: 
 [
  {
   name : 'Micheal Lyons',
   date : '12/18/2018',
   comment : 'They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of a concert I have EVER witnessed.', 
  },
  {
   name : 'Gary Wong',
   date : '12/18/2018',
   comment : 'Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!',
  },
  {
   name : 'Theodore Duncan',
   date : '11/15/2018',
   comment : 'How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!',
  }
 ]
 },
 ];

ReactDOM.render(
<BrowserRouter>
 <App mainVideo={mainVideo} sideVideo={sideVideo}/>
</BrowserRouter>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
