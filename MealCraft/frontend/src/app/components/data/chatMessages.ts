// src/data/chatMessages.ts

export interface Message {
  id: string;
  user: string;
  text: string;
  timestamp: string;
  isMe: boolean;
}

export const groupChatData: Record<string, Message[]> = {
  '1': [
    { id: '1', user: 'Minh Anh', text: 'Phở Thìn nhé mọi người? Đang thèm nước béo.', timestamp: '10:30', isMe: false },
    { id: '2', user: 'Hoàng Long', text: 'Cho mình 1 tái lăn nhiều hành!', timestamp: '10:32', isMe: false },
    { id: '3', user: 'Bạn', text: 'Ok, mình đặt 5 suất nhé. Ai ăn quẩy không?', timestamp: '10:35', isMe: true },
  ],
  '2': [
    { id: '1', user: 'Linh Chi', text: 'Pizza Company đang có mua 1 tặng 1 thứ 4 nè!', timestamp: '11:00', isMe: false },
    { id: '2', user: 'Hải Đăng', text: 'Lấy 2 cái Seafood Deluxe đi, đế mỏng nhé.', timestamp: '11:05', isMe: false },
    { id: '3', user: 'Bạn', text: 'Đã thêm vào giỏ hàng. Tổng 340k nha.', timestamp: '11:10', isMe: true },
  ],
  '3': [
    { id: '1', user: 'Khánh', text: 'Bánh mì Huỳnh Hoa không? Chia đôi 1 ổ là no xỉu.', timestamp: '09:30', isMe: false },
    { id: '2', user: 'Ngọc', text: 'Cho mình 1 ổ không cay, nhiều bơ nha.', timestamp: '09:45', isMe: false },
    { id: '3', user: 'Bạn', text: 'Ship đang đến, mọi người chuẩn bị nhận hàng.', timestamp: '10:15', isMe: true },
  ],
  '4': [
    { id: '1', user: 'Sơn', text: 'Gà rán Popeyes hay KFC đây mọi người?', timestamp: '11:15', isMe: false },
    { id: '2', user: 'Diệp', text: 'Popeyes đi, đang có combo gia đình lợi hơn.', timestamp: '11:20', isMe: false },
    { id: '3', user: 'Bạn', text: 'Chốt Popeyes nhé. Mình chọn gà cay.', timestamp: '11:25', isMe: true },
  ],
  '14': [
    { id: '1', user: 'Bảo', text: 'Bún đậu mắm tôm Cầu Giấy thôi anh em!', timestamp: '10:45', isMe: false },
    { id: '2', user: 'Dương', text: 'Nhiều mắm tôm, không ăn lòng nhé.', timestamp: '10:50', isMe: false },
    { id: '3', user: 'Thắng', text: 'Thêm 2 trà quất nữa cho giải nhiệt.', timestamp: '10:55', isMe: false },
    { id: '4', user: 'Bạn', text: 'Đã đặt 4 mẹt đầy đủ. 20p nữa có.', timestamp: '11:00', isMe: true },
  ],
  '21': [
    { id: '1', user: 'Kim', text: 'Hôm nay trời mưa, ăn mì cay Sasin đi!', timestamp: '11:30', isMe: false },
    { id: '2', user: 'Lan', text: 'Mình ăn cấp độ 0.5 thôi, không ăn cay được.', timestamp: '11:35', isMe: false },
    { id: '3', user: 'Bạn', text: 'Mình chơi cấp độ 4 nhé. Có ai thách đấu không?', timestamp: '11:40', isMe: true },
  ],
  // ... Add more entries for IDs 5-20 following this pattern
};

// Fallback messages for any group ID not defined above
export const defaultMessages: Message[] = [
  { id: 'd1', user: 'Hệ thống', text: 'Chào mừng bạn đến với nhóm đặt món! Hãy cùng thảo luận món ăn nhé.', timestamp: '10:00', isMe: false },
  { id: 'd2', user: 'Thành viên', text: 'Mọi người định ăn gì chưa?', timestamp: '10:05', isMe: false },
];