'use client';
import React, { useState } from 'react';

const ChatPage = () => {
  const [messages, setMessages] = useState([
    { text: "Hello, how can I help you?", timestamp: "12:34 PM" },
    // Add more initial messages as needed
  ]);
  const [message, setMessage] = useState("");

  const handleSendMessage = async () => {
    const userInput = message;
    setMessage(""); // Get the user's input from the input field or any other source

    // Add the user's message to the state
    const newMessage = {
      text: userInput,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };
    setMessages([...messages, newMessage]);

    try {
      const response = await fetch('your-api-endpoint', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userMessage: userInput }),
      });

      if (response.ok) {
        const apiResponse = await response.json();

        // Add the API response to the state
        const apiMessage = {
          text: apiResponse.text,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        };
        setMessages([...messages, apiMessage]);
      } else {
        console.error('API request failed');
      }
    } catch (error) {
      console.error('Error making API request:', error);
    }
  };

  return (
    <div className="flex">
      {/* Chat Container */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Chat Messages */}
        <div className="flex-1 overflow-x-hidden overflow-y-scroll bg-white p-4 pb-24">
          {/* Render messages from the state */}
          {messages.map((message, index) => (
            <div key={index} className={`flex ${index % 2 === 0 ? 'items-end' : 'items-start'} mb-4`}>
              <div className={`max-w-xs mx-2 ${index % 2 === 0 ? 'bg-blue-500 text-white' : 'bg-gray-300'} p-2 rounded-lg`}>
                <p>{message.text}</p>
              </div>
              <span className={`text-xs text-gray-500 ${index % 2 === 0 ? 'ml-2' : 'ml-auto mr-2'}`}>
                {message.timestamp}
              </span>
            </div>
          ))}
        </div>

        {/* Input Box */}
        <div className="bg-gray-200 p-4">
          <div className="flex items-center">
            <input
              type="text"
              placeholder="Type a message..."
              className="flex-1 border-none focus:outline-none p-2 bg-white rounded-md"
              value={message}
              onChange={(e)=>setMessage(e.target.value)}
            />
            <button onClick={handleSendMessage} className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-md">
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
