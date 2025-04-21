import React from 'react';

interface LivePlayerProps {
  streamUrl: string;
  title: string;
  viewerCount: number;
}

const LivePlayer: React.FC<LivePlayerProps> = ({ streamUrl, title, viewerCount }) => {
  return (
    <div className="bg-black rounded-xl aspect-video relative overflow-hidden">
      {/* In a real app, this would use an actual video player component */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-white text-lg">Live Stream is Playing</div>
      </div>
      
      {/* Live indicator */}
      <div className="absolute top-4 left-4 bg-red-600 text-white text-sm font-bold px-3 py-1 rounded-full flex items-center">
        <span className="w-2 h-2 bg-white rounded-full animate-pulse mr-2"></span>
        LIVE
      </div>
      
      {/* Viewer count */}
      <div className="absolute top-4 right-4 bg-black/70 text-white text-sm px-3 py-1 rounded-full">
        {viewerCount.toLocaleString()} watching
      </div>
      
      {/* Video controls - simplified placeholder */}
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
        <div className="flex items-center justify-between text-white">
          <div>
            <h3 className="font-medium">{title}</h3>
          </div>
          <div className="flex items-center space-x-4">
            <button className="p-2 hover:bg-white/20 rounded-full transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
              </svg>
            </button>
            <button className="p-2 hover:bg-white/20 rounded-full transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LivePlayer;
