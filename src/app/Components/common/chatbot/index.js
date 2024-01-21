'use client' 
import React, { useState, useEffect } from 'react';
import './chatbot.css'; // Make sure to adjust the path based on your project structure

const ChatBot = () => {
    const [messages, setMessages] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [isInputDisabled, setIsInputDisabled] = useState(false);

    const generateMessage = (msg, type) => {
        const newIndex = messages.length + 1;

        const newMessage = {
            id: `cm-msg-${newIndex}`,
            type: type,
            avatar: 'https://image.crisp.im/avatar/operator/196af8cc-f6ad-4ef7-afd1-c45d5231387c/240/?1483361727745',
            text: msg,
        };

        setMessages([...messages, newMessage]);

        if (type === 'self') {
            setInputValue('');
        }

        setIsInputDisabled(type === 'self');
    };

    const generateButtonMessage = (msg, buttons, handleButtonClick) => {
        const newIndex = messages.length + 1;

        const buttonElements = buttons.map((button) => (
            <li className="button" key={button.value}>
                <a href="javascript:;" className="btn btn-primary chat-btn" onClick={() => handleButtonClick(button.value)}>
                    {button.name}
                </a>
            </li>
        ));

        const newMessage = {
            id: `cm-msg-${newIndex}`,
            type: 'user',
            avatar: 'https://image.crisp.im/avatar/operator/196af8cc-f6ad-4ef7-afd1-c45d5231387c/240/?1483361727745',
            text: msg,
            buttons: buttonElements,
        };

        setMessages([...messages, newMessage]);
        setIsInputDisabled(true);
    };

    const handleButtonClick = (value) => {
        generateMessage(value, 'self');
    };

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleChatSubmit = (e) => {
        e.preventDefault();

        if (inputValue.trim() === '') {
            return;
        }

        generateMessage(inputValue, 'self');

        const buttons = [
            {
                name: 'Existing User',
                value: 'existing',
            },
            {
                name: 'New User',
                value: 'new',
            },
        ];

        setTimeout(() => {
            generateButtonMessage(inputValue, buttons, handleButtonClick);
        }, 1000);
    };

    const toggleChatBox = () => {
        setIsInputDisabled(false);
    };

    useEffect(() => {
        try {
            const chatLogs = document.querySelector('.chat-logs');
            if (chatLogs) {
                chatLogs.scrollTop = chatLogs.scrollHeight;
            }
        } catch (error) {
            console.error('Error handling chat logs:', error);
        }
    }, [messages]);

    return (
        <div>
            <div id="chat-circle" className="btn btn-raised">
                <div id="chat-overlay"></div>
                <i className="material-icons">speaker_phone</i>
            </div>

            <div className="chat-box">
                <div className="chat-box-header">
                    ChatBot
                    <span className="chat-box-toggle" onClick={toggleChatBox}><i className="material-icons">close</i></span>
                </div>
                <div className="chat-box-body">
                    <div className="chat-box-overlay"></div>
                    <div className="chat-logs">
                        {messages.map((msg) => (
                            <div key={msg.id} className={`chat-msg ${msg.type}`}>
                                <span className="msg-avatar">
                                    <img src={msg.avatar} alt="Avatar" />
                                </span>
                                <div className="cm-msg-text">{msg.text}</div>
                                {msg.buttons && (
                                    <div className="cm-msg-button">
                                        <ul>{msg.buttons}</ul>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="chat-input">
                    <form onSubmit={handleChatSubmit}>
                        <input type="text" id="chat-input" placeholder="Send a message..." value={inputValue} onChange={handleInputChange} disabled={isInputDisabled} />
                        <button type="submit" className="chat-submit" id="chat-submit"><i className="material-icons">send</i></button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ChatBot;
