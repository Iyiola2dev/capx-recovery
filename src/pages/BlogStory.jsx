
import  { useEffect, useState } from 'react';

// Array of stories (replace with actual image paths or URLs)
const stories = [
  'https://res.cloudinary.com/dtlejpoxq/image/upload/v1726398207/Bitcoin/block-chain-5997667_1920_l6bfqr.jpg',
  'https://res.cloudinary.com/dtlejpoxq/image/upload/v1726268958/Bitcoin/Decentralized-Finance-DeFi-Scams_btkbfu.webp',
  'https://res.cloudinary.com/dtlejpoxq/image/upload/v1726233597/Bitcoin/romance-scam-recovery_fbr2ht.jpg',
  'https://res.cloudinary.com/dtlejpoxq/image/upload/v1726255655/Bitcoin/Why-us-1_i9kkhk.webp',
  'https://res.cloudinary.com/dtlejpoxq/image/upload/v1726268958/Bitcoin/Decentralized-Finance-DeFi-Scams_btkbfu.webp',
];

const BlogStory = () => {
  const [currentStory, setCurrentStory] = useState(0);
  const [progress, setProgress] = useState(0);
  const storyDuration = 5000; // Duration for each story in milliseconds
  const isLastStory = currentStory === stories.length - 1;

  // Function to move to the next story and reset the progress
  useEffect(() => {
    if (!isLastStory) {
      const timer = setTimeout(() => {
        setCurrentStory((prevStory) => (prevStory + 1) % stories.length);
        setProgress(0); // Reset progress when moving to the next story
      }, storyDuration);

      return () => clearTimeout(timer);
    }
  }, [currentStory, isLastStory]);

  // Function to update progress bar
  useEffect(() => {
    if (!isLastStory) {
      const interval = setInterval(() => {
        setProgress((prevProgress) => prevProgress + 1);
      }, storyDuration / 100); // Divide storyDuration into 100 steps for smooth progress

      return () => clearInterval(interval);
    }
  }, [currentStory, isLastStory]);

  return (
    <div className='bg-green-900 h-screen w-screen flex justify-center items-center px-4 py-10'>
        <div className='flex flex-col justify-center items-center w-fit border p-3'>
     <div className='flex flex-col text-yellow-400 text-lg'>
            <h1>Defi Scams 2024</h1>
            <p>capxrecovery / September 13, 2024
            </p>
        </div>
    <div className=" bg-white text-white flex items-center justify-center">
    
      <div className="h-[300px] w-[300px] max-w-sm border border-gray-700 rounded-lg overflow-hidden relative">
        {/* Progress Bar Container */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gray-500">
          <div
            className="h-full bg-blue-400"
            style={{ width: `${progress}%` }} // Dynamic width of progress bar
          ></div>
        </div>

        {/* Story Content */}
        <div className="flex items-center justify-center h-full">
          <img
            src={stories[currentStory]}
            alt={`story-${currentStory}`}
            className="h-full object-cover"
          />
        </div>
      </div>
    </div>
    </div>
    </div>
  );
};

export default BlogStory;
