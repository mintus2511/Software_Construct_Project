export interface FoodGroup {
  id: string;
  category: string;
  title: string;
  location: string;
  time: string;
  memberCount: number;
  memberAvatars: string[];
}

export const availableGroups: FoodGroup[] = [
  {
    id: '1',
    category: 'Món Việt • Phở',
    title: 'Nhóm ăn phở',
    location: 'Toà nhà Keangnam, Mễ Trì',
    time: '12:30 PM',
    memberCount: 25,
    memberAvatars: ['M', 'A', 'T'],
  },
  {
    id: '2',
    category: 'Món Ý • Pizza',
    title: 'Trưa nay ăn Pizza ko a?',
    location: 'Lotte Center, Liễu Giai',
    time: '01:15 PM',
    memberCount: 13,
    memberAvatars: ['L', 'H'],
  },
  {
    id: '3',
    category: 'Ăn nhanh • Bánh mì',
    title: 'Cho đi thêm Bánh Mì Huỳnh Hoa',
    location: 'Vincom Center Bà Triều',
    time: '12:00 PM',
    memberCount: 58,
    memberAvatars: ['K', 'N', 'P', 'Q'],
  },
  {
    id: '4',
    category: 'Món Hàn • Gà rán',
    title: 'Gà rán Hàn Quốc ăn trưa nay',
    location: 'Tòa nhà FPT, Duy Tân',
    time: '12:45 PM',
    memberCount: 34,
    memberAvatars: ['S', 'D', 'E'],
  },
  {
    id: '5',
    category: 'Món Nhật • Sushi',
    title: 'Ăn sushi trưa nay ai tham gia?',
    location: 'Tòa nhà VTC, Nguyễn Chí Thanh',
    time: '01:00 PM',
    memberCount: 22,
    memberAvatars: ['R', 'F', 'G'],
  },
  {
    id: '6',
    category: 'Cơm tấm • Cơm sườn',
    title: 'Ai muốn ăn cơm tấm trưa nay?',
    location: 'Cresent Mall, Nguyễn Văn Linh',
    time: '12:30 PM',
    memberCount: 40,
    memberAvatars: ['U', 'V', 'W', 'X'],
  }
];