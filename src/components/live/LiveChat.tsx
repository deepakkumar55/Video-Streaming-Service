import React, { useState, useEffect } from 'react';
import Image from 'next/image';

interface LiveChatProps {
  webinarId: string;
}

interface ChatMessage {
  id: string;
  user: {
    name: string;
    avatar: string;
    isInstructor?: boolean;
    isModerator?: boolean;
  };
  message: string;
  timestamp: Date;
}

const LiveChat: React.FC<LiveChatProps> = ({ webinarId }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [newMessage, setNewMessage] = useState('');
  const [isExpanded, setIsExpanded] = useState(true);
  
  // Mock data for chat messages
  useEffect(() => {
    const initialMessages: ChatMessage[] = [
      {
        id: '1',
        user: {
          name: 'Rahul Sharma',
          avatar: '/images/avatars/user-1.jpg',
          isInstructor: true
        },
        message: 'Welcome everyone! We\'ll be starting in a few minutes. Feel free to introduce yourselves in the chat.',
        timestamp: new Date(Date.now() - 5 * 60 * 1000)
      },
      {
        id: '2',
        user: {
          name: 'Priya Patel',
          avatar: '/images/avatars/user-2.jpg'
        },
        message: 'Hi everyone! Excited to be here!',
        timestamp: new Date(Date.now() - 4 * 60 * 1000)
      },
      {
        id: '3',
        user: {
          name: 'Amit Kumar',
          avatar: '/images/avatars/user-3.jpg'
        },
        message: 'Looking forward to learning about this topic.',
        timestamp: new Date(Date.now() - 3 * 60 * 1000)
      },
      {
        id: '4',
        user: {
          name: 'Neha Singh',
          avatar: '/images/avatars/user-4.jpg',
          isModerator: true
        },
        message: 'Remember to keep the chat respectful and on-topic, everyone!',
        timestamp: new Date(Date.now() - 2 * 60 * 1000)
      },
      {
        id: '5',
        user: {
          name: 'Vikram Thapar',
          avatar: '/images/avatars/user-5.jpg'
        },
        message: 'Is this session being recorded for later viewing?',
        timestamp: new Date(Date.now() - 1 * 60 * 1000)
      }
    ];
    
    setMessages(initialMessages);
    
    // Simulate incoming messages
    const interval = setInterval(() => {
      const users = [
        { name: 'Anjali Gupta', avatar: '/images/avatars/user-6.jpg' },
        { name: 'Rohan Mehta', avatar: '/images/avatars/user-7.jpg' },
        { name: 'Deepa Verma', avatar: '/images/avatars/user-8.jpg' }
      ];
      
      const randomMessages = [
        'This is exactly what I needed to learn!',
        'Could you please explain that concept again?',
        'Great explanation, thanks!',
        'How does this compare to the other approach?',
        'Is there a resource you recommend for learning more?'
      ];
      
      const randomUser = users[Math.floor(Math.random() * users.length)];
      const randomMessage = randomMessages[Math.floor(Math.random() * randomMessages.length)];
      
      const newMsg: ChatMessage = {
        id: Date.now().toString(),
        user: randomUser,
        message: randomMessage,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, newMsg]);
    }, 15000);
    
    return () => clearInterval(interval);
  }, [webinarId]);
  
  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!newMessage.trim()) return;
    
    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      user: {
        name: 'You',
        avatar: '/images/avatars/user-default.jpg'
      },
      message: newMessage,
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setNewMessage('');
  };
  
  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };
  
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden">
      <div className="flex items-center justify-between p-4 border-b border-gray-100 dark:border-gray-700">
        <h3 className="font-bold text-lg flex items-center">
          <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
          Live Chat
        </h3>
        <button 
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
        >
          {isExpanded ? (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" />
            </svg>
          )}
        </button>
      </div>
      
      {isExpanded && (
        <>
          <div className="h-80 overflow-y-auto p-4 space-y-4">
            {messages.map((msg) => (
              <div key={msg.id} className="flex items-start space-x-2">
                <div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0">
                  <Image
                    src={msg.user.avatar}
                    alt={msg.user.name}
                    width={32}
                    height={32}
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="flex items-center space-x-1">
                    <span className={`font-medium text-sm ${
                      msg.user.isInstructor 
                        ? 'text-indigo-600 dark:text-indigo-400' 
                        : msg.user.isModerator 
                          ? 'text-green-600 dark:text-green-400'
                          : 'text-gray-800 dark:text-gray-200'
                    }`}>
                      {msg.user.name}
                    </span>
                    {msg.user.isInstructor && (
                      <span className="bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 text-xs px-1.5 py-0.5 rounded">
                        Instructor
                      </span>
                    )}
                    {msg.user.isModerator && (
                      <span className="bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 text-xs px-1.5 py-0.5 rounded">
                        Mod
                      </span>
                    )}
                    <span className="text-gray-400 dark:text-gray-500 text-xs">
                      {formatTime(msg.timestamp)}
                    </span>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 text-sm mt-1">
                    {msg.message}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          <form onSubmit={handleSendMessage} className="p-4 border-t border-gray-100 dark:border-gray-700">
            <div className="flex items-center space-x-2">
              <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 py-2 px-3 bg-gray-100 dark:bg-gray-700 border-none rounded-lg text-gray-700 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <button
                type="submit"
                disabled={!newMessage.trim()}
                className="p-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </form>
        </>
      )}
    </div>
  );
};

export default LiveChat;
