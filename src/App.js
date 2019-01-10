import React, { Component } from 'react';
import Video from './Video/Video';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">

        <h1>Cloudinary Video Player Implemented as a React Component</h1>

        <Video
          id="cld-video-player"
          cloudName="demo"
          controls
          muted
          width={960}
          config={{
            autoShowRecommendations: true
          }}
          source={{
            publicId: "snow_deer_short",
            info: {
              title: "Cloudinary Video Player",
              subtitle: "JavaScript-based HTML5 video player bundled with many valuable customization and integration capabilities"
            },
            recommendations: [
              {
                publicId: "snow_deer_short",
                info: {
                  title: "Lorem ipsum",
                  subtitle: "Dolor sit amet, consectetuer",
                  description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit."
                }
              }, {
                publicId: "finish_line",
                info: {
                  title: "Cras dapibus"
                }
              }, {
                publicId: "snow_horses",
                info: {
                  title: "Donec quam felis"
                }
              }, {
                publicId: "dirt_bike",
                info: {
                  title: "Lorem ipsum"
                }
              }
            ]
          }}
        />
        <p>See <a href="https://github.com/t-a-y/cld-react-video">https://github.com/t-a-y/cld-react-video</a></p>
      </div>
    );
  }
}

export default App;
