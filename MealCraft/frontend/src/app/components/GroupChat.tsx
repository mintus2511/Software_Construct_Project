import { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Avatar, AvatarFallback } from './ui/avatar';
import { ChevronLeft, Info, Send, Clock } from 'lucide-react';
import { useNavigate, useParams } from 'react-router'; // Added useParams
import { groupChatData, defaultMessages, Message } from './data/chatMessages';
import { availableGroups } from './data/FoodGroup';

export function GroupChat() {
  const navigate = useNavigate();
  const { groupId } = useParams<{ groupId: string }>(); // Get ID from URL
  
  // Find group info for the header
  const groupInfo = availableGroups.find(g => g.id === groupId);
  
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState('');

  // Load messages based on ID
  useEffect(() => {
    if (groupId && groupChatData[groupId]) {
      setMessages(groupChatData[groupId]);
    } else {
      setMessages(defaultMessages);
    }
  }, [groupId]);

  const sendMessage = () => {
    if (!newMessage.trim()) return;

    const message: Message = {
      id: Date.now().toString(),
      user: 'Bạn',
      text: newMessage,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      isMe: true,
    };

    setMessages([...messages, message]);
    setNewMessage('');
  };

  return (
    <div className="h-full flex flex-col bg-white">
      {/* Header */}
      <div className="bg-white border-b px-4 py-3 flex items-center justify-between sticky top-0 z-10">
        <div className="flex items-center gap-3">
          <button onClick={() => navigate(-1)} className="p-1 hover:bg-gray-100 rounded-full transition-colors">
            <ChevronLeft className="w-6 h-6" />
          </button>
          <div>
            <h3 className="font-bold text-base leading-tight">
              {groupInfo?.title || "Nhóm Đặt Món"}
            </h3>
            <p className="text-[11px] text-green-600 font-medium">
              {groupInfo?.category || "Ẩm thực"} • {groupInfo?.memberCount || 0} người
            </p>
          </div>
        </div>
        <button className="p-1">
          <Info className="w-6 h-6 text-gray-400" />
        </button>
      </div>

      {/* Deadline Banner */}
      <div className="bg-orange-50 border-b border-orange-100 px-4 py-2 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Clock className="w-4 h-4 text-orange-500" />
          <span className="text-xs text-orange-700 font-semibold uppercase tracking-wider">
            Chốt đơn lúc {groupInfo?.time || "12:00 PM"}
          </span>
        </div>
        <span className="text-[10px] bg-orange-200 text-orange-800 px-2 py-0.5 rounded-full font-bold">
          SẮP HẾT HẠN
        </span>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4">
        <div className="flex items-center justify-center my-4">
          <div className="h-[1px] bg-gray-100 flex-1" />
          <span className="text-[10px] text-gray-400 font-bold uppercase px-3 tracking-widest">Hôm nay</span>
          <div className="h-[1px] bg-gray-100 flex-1" />
        </div>

        {messages.map((message) => (
          <div key={message.id} className={`flex ${message.isMe ? 'justify-end' : 'justify-start'} animate-in fade-in slide-in-from-bottom-2`}>
            {!message.isMe && (
              <Avatar className="w-8 h-8 mr-2 mt-1">
                <AvatarFallback className="bg-green-100 text-green-700 text-[10px] font-bold">
                  {message.user.charAt(0)}
                </AvatarFallback>
              </Avatar>
            )}
            <div className={`max-w-[75%] ${message.isMe ? 'items-end' : 'items-start'}`}>
              {!message.isMe && (
                <span className="text-[11px] text-gray-500 ml-1 mb-1 block font-medium">
                  {message.user}
                </span>
              )}
              <div className={`px-4 py-2.5 rounded-2xl text-sm leading-relaxed shadow-sm
                ${message.isMe 
                  ? 'bg-green-500 text-white rounded-tr-none' 
                  : 'bg-gray-100 text-gray-800 rounded-tl-none'}`}
              >
                {message.text}
              </div>
              <span className={`text-[10px] text-gray-400 mt-1 block ${message.isMe ? 'text-right' : 'text-left'}`}>
                {message.timestamp}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Input Area */}
      <div className="bg-white border-t px-4 py-4 pb-8">
        <div className="flex gap-2 items-center bg-gray-50 rounded-full px-4 border border-gray-200 focus-within:border-green-500 focus-within:ring-1 focus-within:ring-green-500 transition-all">
          <Input
            placeholder="Nhập tin nhắn..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
            className="flex-1 border-none bg-transparent shadow-none focus-visible:ring-0 h-12 text-sm"
          />
          <Button
            onClick={sendMessage}
            disabled={!newMessage.trim()}
            className="bg-green-500 hover:bg-green-600 rounded-full w-8 h-8 p-0 shrink-0 shadow-md transition-transform active:scale-90"
          >
            <Send className="w-4 h-4 text-white" />
          </Button>
        </div>
      </div>
    </div>
  );
}