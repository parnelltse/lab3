import React, { useState } from 'react';

const Story = ({ stories, setStories }) => {
    const [clickedStories, setClickedStories] = useState(new Set()); 

    const handleRemoveStory = (index) => {
        const updatedStories = stories.filter((_, i) => i !== index);
        setStories(updatedStories);
        
        
        clickedStories.delete(index);
        setClickedStories(new Set(clickedStories));
    };

    const handleStoryClick = (link, index) => {
        window.open(link, '_blank');

        
        if (clickedStories.has(index)) {
            clickedStories.delete(index);
        } else {
            clickedStories.add(index);
        }
        setClickedStories(new Set(clickedStories));
    };

    return (
        <div>
            {stories.map((story, index) => (
                <div key={index} className='feed'>
                    <div>
                        <h1
                            onClick={() => handleStoryClick(story.link, index)}
                            className={`story-link ${clickedStories.has(index) ? 'clicked' : ''}`} 
                            style={{ cursor: 'pointer' }}>
                            {story.title}
                        </h1>
                        <img
                            className='story_image'
                            src={story.image_url ? story.image_url : 'https://placehold.co/600x400?text=News Story'}
                            alt='story'
                        />
                        <p>By: {story.creator || 'Unknown'}</p> 
                        <p>{story.description}</p>
                    </div>
                    <button
                        className='button'
                        onClick={() => handleRemoveStory(index)}>
                        x
                    </button>
                </div>
            ))}
        </div>
    );
};

export default Story;
