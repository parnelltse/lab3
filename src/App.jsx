import React, { useState } from 'react';
import news_feed from './sample_news_stories.json';
import Story from './assets/Story';

function App() {
  // Use state to manage the stories
  const [stories, setStories] = useState(news_feed.results); 

  return (
    <div className="App">
      <Story stories={stories} setStories={setStories} />
    </div>
  );
}

export default App;
