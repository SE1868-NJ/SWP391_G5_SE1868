import React from "react";
import "./chatadmin.css"; // Đảm bảo bạn tạo file CSS để định dạng

const ChatUI = () => {
  return (
    <div className="chat-ui-container">
      {/* Sidebar */}
      <div className="chat-sidebar-icons">
          <div className="icon">💬</div>
          <div className="icon">👤</div>
          <div className="icon">🔔</div>
          <div className="icon">⚙️</div>
        </div>
      <div className="chat-sidebar">
        
        <div className="chat-user-list">
          <div className="user"></div>
          <div className="user"></div>
          <div className="user"></div>
        </div>
        <div className="chat-history">
          <div className="history-item">
            <span className="username">Tran Van Binh</span>
            <span className="message">can I help you ...</span>
            <span className="time">12:02 PM</span>
          </div>
          <div className="history-item">
            <span className="username">Tran Van Binh</span>
            <span className="message">this is ok right ...</span>
            <span className="time">12:02 PM</span>
          </div>
        </div>
      </div>

      {/* Chat Area */}
      <div className="chat-main">
        <div className="chat-header">
          <div className="chat-header-user">Đức Việt</div>
          <div className="chat-header-actions">
            <span>🔍</span>
            <span>📞</span>
            <span>⋮</span>
          </div>
        </div>

        <div className="chat-messages">
          <div className="message">Message 1</div>
          <div className="message">Message 2</div>
        </div>

        <div className="chat-input">
          <input type="text" placeholder="Typing ..." />
          <button>➤</button>
        </div>
      </div>
    </div>
  );
};

export default ChatUI;
