import { UserEntity } from 'src/user/entities/user.entity';
import { VideoEntity } from 'src/video/entities/video.entity';
import { Repository } from 'typeorm';

const data = [
  {
    id: '8069d9ba-5108-4b94-9f04-7dc3c1b65ae7',
    title:
      'NHẠC NGHE TRÊN BAR - MIXTAPE HOUSE LAK & DEEP HOUSE CỰC HAY - NHẠC REMIX DEEP HOUSE HAY NHẤT 2024',
    url: 'https://www.youtube.com/watch?v=eqOl9zqc2BA',
    thumbnailUrl: 'https://i.ytimg.com/vi/eqOl9zqc2BA/default.jpg',
    videoId: 'eqOl9zqc2BA',
    description: null,
    createdAt: '2024-08-31T11:51:03.072Z',
    updatedAt: '2024-08-31T11:51:03.072Z',
  },
  {
    id: 'dd90d61a-5463-4693-8441-d653213f9174',
    title:
      'Lân Nhã ĐỐN TIM KHÁN GIẢ Với 13 Bài Hát Live Đỉnh Cao - Đôi Bờ, Tình Nồng, Chỉ Cần Em Hạnh Phúc,..',
    url: 'https://www.youtube.com/watch?v=nIph7PUoVzo&t=1866s',
    thumbnailUrl: 'https://i.ytimg.com/vi/nIph7PUoVzo/default.jpg',
    videoId: 'nIph7PUoVzo',
    description: null,
    createdAt: '2024-08-31T11:51:03.072Z',
    updatedAt: '2024-08-31T11:51:03.072Z',
  },
  {
    id: '1deaee2c-ea9f-4433-bd89-674eacb43f91',
    title:
      'Hà Nhi Khai Xuân Live 10 Bài Hát Tuyển Chọn Hay Nhất Sự Nghiệp " Vẫn Nhớ, Ai Rồi Cũng Sẽ Khác "',
    url: 'https://www.youtube.com/watch?v=ZbF6sO7E4IU&t=2062s',
    thumbnailUrl: 'https://i.ytimg.com/vi/ZbF6sO7E4IU/default.jpg',
    videoId: 'ZbF6sO7E4IU',
    description:
      'Hà Nhi Khai Xuân Live 10 Bài Hát Tuyển Chọn Hay Nhất Sự Nghiệp " Vẫn Nhớ, Ai Rồi Cũng Sẽ Khác "\nMây Sài Gòn Full : https://bit.ly/3f7t7BA\nHồ Văn Cường Mới Nhất : https://bit.ly/3JrJIxg\nQuách Tuấn Du Tuyển Chọn : https://bit.ly/3Wba5Ks\nThuỳ Chi: https://bit.ly/3z81lMI\nTăng Phúc Live: https://bit.ly/3gDRI21\nLương Bích Hữu Live : https://bit.ly/3qVYlyw\nĐăng Ký Xem Video Mới Nhất của Mây Saigon Live Stage : https://bit.ly/3UtZDOw\n_______________________________________________________________________________\n𝗠𝗮̂𝘆 𝗦𝗮𝗶𝗴𝗼𝗻 \n🎤Sân khấu của âm nhạc “chỉn chu” cho những tín đồ mê nhạc-sống🎹\n📌Địa điểm biểu diễn: Mây Saigon -  Nhà Hát Thanh Niên - 4 Phạm Ngọc Thạch, phường Bến Nghé, quận 1\n☎️ Hotline: 096 165 6601 - 090 145 6601\n🏷Booking các đêm diễn của Mây Saigon qua trang web chính thức (chọn chỗ ngồi ưng ý & xịn sò như cinema) http://maysaigon.net',
    createdAt: '2024-08-31T11:51:03.072Z',
    updatedAt: '2024-08-31T11:51:03.072Z',
  },
  {
    id: '842f7a45-678f-4d84-ac40-f5ae45b61563',
    title:
      'Nhà thơ Trần Đăng Khoa - Tập 6: Con chó ấy đã cứu mạng cả nhà tôi | Diễn Giả Phan Đăng',
    url: 'https://www.youtube.com/watch?v=D7BhcgR898Q',
    thumbnailUrl: 'https://i.ytimg.com/vi/D7BhcgR898Q/default.jpg',
    videoId: 'D7BhcgR898Q',
    description:
      '-Trong tập 6 cuộc đối thoại với Diễn giả Phan Đăng, Nhà thơ Trần Đăng Khoa chia sẻ về những ký ức tuổi thơ ly kỳ, trong đó có câu chuyện một chú chó đã cứu mạng cả nhà mình. Sau này chú chó ấy bỏ nhà ra đi, Trần Đăng Khoa vừa khóc, vừa viết bài: "Sao không về vàng ơi" mà thê hệ trẻ em nào đọc cũng vô cùng xúc động. \nLiên hệ với Diễn giả Phan Đăng:\n☞Trợ lý công việc: Mrs Ly: Zalo: 0933321866.\n☞ Facebook chính thức: https://www.facebook.com/phandangnhabao\n☞ Fanpage chính thức: https://www.facebook.com/Nhabaophandang\n☞ TikTok chính thức: https://www.tiktok.com/@nhabaophandang\n☞ Đừng quên đăng ký/theo dõi kênh YouTube chính thức của Diễn giả Phan Đăng để không bỏ lỡ những video về tỉnh thức - chữa lành qua link sau: https://www.youtube.com/@Nhabaophandang\n☞ Đăng ký kênh "Đọc thơ 21H" để thanh rửa đầu óc và tâm hồn sau một ngày làm việc mệt mỏi (https://www.youtube.com/channel/UCkbO5hAZ3jQd1w3HrXwlPVg?sub_confirmation=1)\n\n#NhaBaoPhanDang #PhanDang #DienGiaPhanDang #SuViet #LichSuVietNam \n\n-------------------------------------------\n© Bản quyền thuộc về Nhà Báo Phan Đăng\n© Copyright by Nhà Báo Phan Đăng ☞ Do not Reup\'',
    createdAt: '2024-08-31T11:51:03.072Z',
    updatedAt: '2024-08-31T11:51:03.072Z',
  },
  {
    id: '903a9891-66ae-4dad-aa82-290dc123eaef',
    title:
      'NHẠC NGHE TRÊN BAR - MIXTAPE HOUSE LAK & DEEP HOUSE CỰC HAY - NHẠC REMIX DEEP HOUSE HAY NHẤT 2024',
    url: 'https://www.youtube.com/watch?v=h-Zk7MHn_Cc',
    thumbnailUrl: 'https://i.ytimg.com/vi/h-Zk7MHn_Cc/default.jpg',
    videoId: 'h-Zk7MHn_Cc',
    description:
      'NHẠC NGHE TRÊN BAR - MIXTAPE HOUSE LAK & DEEP HOUSE CỰC HAY - NHẠC REMIX DEEP HOUSE HAY NHẤT 2024\n\n#houselak #deephouse #nhacremix #nhachouselak #chillbass #chillhouse \n\n" nhạc nghe trên bar. " là một kênh âm nhạc làm về nhạc Deep House, House Lak,.. thuộc hệ thống của H2O MUSIC. Kênh " nhạc nghe trên bar. " sẽ mang lại cho quý khán giả những bản Deep House, House Lak hay nhất trên thị trường hiện nay, tạo năng lượng tích cực cho mọi người. Cảm ơn quý khán giả đã ghé qua " nhạc nghe trên bar. " và chúc quý khán giả nghe nhạc vui vẻ ^^\n\n🎵 More about H2O Music\n• Fanpage: https://www.fb.com/H2OMusicc\n\n✉ Hợp tác, quảng cáo, khiếu nại các vấn đề về bản quyền liên hệ chúng tôi qua mail: contact@1991s.vn\n\n© Bản quyền thuộc về nhạc nghe trên bar. & H2O MUSIC\n© Copyright by nhạc nghe trên bar. & H2O MUSIC ☞ Do not Reup',
    createdAt: '2024-08-31T11:51:03.072Z',
    updatedAt: '2024-08-31T11:51:03.072Z',
  },
  {
    id: 'b39c56cf-f944-481b-ad09-dd7c63e14c51',
    title:
      '(Black Myth: Wukong #3) Thiên mệnh nhân Mixikong gặp nạn Tiểu Lôi Âm, đối đầu Hoàng Mi Lão Quái.',
    url: 'https://www.youtube.com/watch?v=hAp8SKcE_5k',
    thumbnailUrl: 'https://i.ytimg.com/vi/hAp8SKcE_5k/default.jpg',
    videoId: 'hAp8SKcE_5k',
    description:
      "#mixigaming #Domixi #restream #mixi #wukong #blackmyth #gameplay \nChúc các bạn xem stream vui vẻ.\n\n(Black Myth: Wukong #3) Thiên mệnh nhân Mixikong gặp nạn Tiểu Lôi Âm, đối đầu Hoàng Mi Lão Quái.\n►Lịch Live:\n* 22:15-23:59 hàng ngày trên Youtube.\n* 0:01-03:00 hàng ngày trên: https://svip.nimo.tv/mixi\n(Chủ Nhật chỉ live bên nimo.tv/mixi vào 23:00 )\n\n-------------------------------------------------------------------------------------------------------------\n\n► DONATE:\n*  https://streamlabs.com/mixigamingofficial\n*  https://playerduo.net/mixigaming\n*  https://qr.wescan.vn/Mixi\n\n►Trang web chính thức để các bạn xem lại video và livestream: https://mixigaming.com/\n\n► Fanpage chính thức: https://www.facebook.com/MixiGaming/\n► Facebook cá nhân: https://www.facebook.com/dophung89\n► Instagram: https://www.instagram.com/dochet1989\n► Link Discord giao lưu: https://discord.gg/mixigaming\n► Link Group FB:  https://www.facebook.com/groups/mixigaming/\n► Email liên hệ công việc: vanphongvotri.mixicorp@gmail.com\n\n-----------------------------------------------------------------------------------------------------------------\n\n► Shop game bản quyền số 1 Việt Nam: divineshop.vn\n(Nhập Code: mixigaming để giảm 5% tất cả game Steam trên DivineShop)\n\n-----------------------------------------------------------------------------------------------------------------\n\nmixigaming pubg gameplay lien minh 2017 lmht liên minh,pubg,battleground,battlegrounds,mixigaming\nTags: Mixigaming, Mixi, Độ Tày, Streamer Mixigaming, Funny, Mixigaming Funny Stream, Funny Stream, Streamer Việt Nam, Stream Việt Nam, Stream Việt, PUBG, Player Unknown's Battle Ground VN, PUBG VN, CSGO, CSGO VN, mixigaming talkshow, mixigaming reaction, mixigaming độ tộc 2, mixigaming mất youtube, mixigaming steam, mixigaming bị hack, độ mixi hack youtube",
    createdAt: '2024-08-31T11:51:03.072Z',
    updatedAt: '2024-08-31T11:51:03.072Z',
  },
  {
    id: 'a93664b9-adcc-4810-b7be-e2af7a1b9ac5',
    title:
      '3 Hours Relaxing Sleep Music with Rain Sounds - Peaceful Music in the Warm Bedroom, Stress Relief',
    url: 'https://www.youtube.com/watch?v=35AdtzquJYg',
    thumbnailUrl: 'https://i.ytimg.com/vi/35AdtzquJYg/default.jpg',
    videoId: '35AdtzquJYg',
    description:
      "3 Hours Relaxing Sleep Music with Rain Sounds - Peaceful Music in the Warm Bedroom, Stress Relief\n-----------------------------------------\nWelcome to the Relaxing Rain Sleep Music channel!\n\nAre you looking for a great relaxing space to relieve stress, regain good sleep and heal your mind? Come to us and discover the peaceful atmosphere created by the sound of relaxing piano music and the gentle sound of rain falling outside the bedroom.\n\nRelaxing Rain Sleep Music channel is where you can enjoy peaceful music and immerse yourself in beautiful natural space with quiet rain sounds. Gentle and soothing piano melodies will put you in a relaxed state, helping you relieve stress and find balance in your mind and spirit.Besides, the sound of rain falling from outside the window will increase relaxation and create a peaceful space for you to study, meditate or simply relax after a stressful day at work.\n\nOur channel is committed to bringing you unique music experiences and enjoying a good night's sleep, helping you relax and feel peace in life. We hope that the music that heals the mind and the sound of rain for relaxation on the Relaxing Rain Sleep Music channel will become a reliable source of inspiration and support for you.\n\nDon't forget to subscribe to the Relaxing Rain Sleep Music channel and turn on notifications so you don't miss the latest relaxing piano music and wonderful falling rain sounds : https://www.youtube.com/@RelaxingRainSleepMusic/featured?sub_confirmation=1\n#relaxingrain #sleepmusic #rainsounds #relaxingpiano\n---------------------------------------------------\nTake time for yourself and enjoy relaxing moments and immerse yourself in music and the sound of rain to find peace and balance in life.\nThank you very much for your support on Relaxing Rain Sleep Music channel!",
    createdAt: '2024-08-31T11:52:36.418Z',
    updatedAt: '2024-08-31T11:52:36.418Z',
  },
  {
    id: '3ff65ac2-c5f6-49ed-9031-d20ee1af87be',
    title: 'Giỏi nói chuyện dễ tìm thấy thành công - Thầy Thích Pháp Hòa',
    url: 'https://www.youtube.com/watch?v=t4PeRueNqjs',
    thumbnailUrl: 'https://i.ytimg.com/vi/t4PeRueNqjs/default.jpg',
    videoId: 't4PeRueNqjs',
    description:
      'Nếu có điều gì đáng làm, hãy làm điều đó bằng cả trái tim  I  Thầy Pháp Hòa\n--------------------------------------------\nSen búp xin tặng người\nMột vị Phật tương lai.\n𝐊ê𝐧𝐡 𝐘𝐨𝐮𝐭𝐮𝐛𝐞 đă𝐧𝐠 𝐭ả𝐢 𝐯𝐢𝐝𝐞𝐨 𝐜𝐡í𝐧𝐡 𝐭𝐡ứ𝐜 về tất cả bài giảng của 𝐓𝐡ầ𝐲 𝐓𝐡í𝐜𝐡 𝐏𝐡á𝐩 𝐇ò𝐚\nMời đại chúng bấm 𝗟𝗜𝗞𝗘 - 𝗦𝗨𝗕𝗦𝗖𝗥𝗜𝗕𝗘 - 𝗦𝗛𝗔𝗥𝗘 - 𝗖𝗢𝗠𝗠𝗘𝗡𝗧 để nhận video mới nhất.\nNếu có điều gì đáng làm, hãy làm điều đó bằng cả trái tim  I  Thầy Pháp Hòa\n--------------------------------------------\n𝐊ê𝐧𝐡 𝐘𝐨𝐮𝐭𝐮𝐛𝐞 đă𝐧𝐠 𝐭ả𝐢 𝐯𝐢𝐝𝐞𝐨 𝐜𝐡í𝐧𝐡 𝐭𝐡ứ𝐜 về tất cả bài giảng của 𝐓𝐡ầ𝐲 𝐓𝐡í𝐜𝐡 𝐏𝐡á𝐩 𝐇ò𝐚\nMời đại chúng bấm 𝗟𝗜𝗞𝗘 - 𝗦𝗨𝗕𝗦𝗖𝗥𝗜𝗕𝗘 - 𝗦𝗛𝗔𝗥𝗘 - 𝗖𝗢𝗠𝗠𝗘𝗡𝗧 để nhận video mới nhất.\n#PhapThoaiThichPhapHoa #ThayThichPhapHoa #ThichPhapHoa\n#ThichPhapHoa #PhapThoaiThichPhapHoa #BaiGiangThichPhapHoa #ThayThichPhapHoa #PhapHoaCanada #NghePhapThichPhapHoa #NghePhapthayThichPhapHoa #ThichPhapHoaMoiNhat #PhapThoaiPhapHoa #PhatGiaoThichPhapHoa #ThichPhapHoaTrucLam #PhapHoaGiangPhap #PhapHoaVanDap #ThayPhapHoa  #PhapHoaThuyetPhap #phậtpháp #xuhướng #viralvideo #viral',
    createdAt: '2024-08-31T11:55:48.805Z',
    updatedAt: '2024-08-31T11:55:48.805Z',
  },
  {
    id: '7b2d5918-3e7e-4f2c-b4a4-b5a6674997ce',
    title:
      'Cùng các mentors từ BigTech review CV của các bạn nhé (Review lần 23)',
    url: 'https://www.youtube.com/watch?v=mhVLWHEg6Ms',
    thumbnailUrl: 'https://i.ytimg.com/vi/mhVLWHEg6Ms/default.jpg',
    videoId: 'mhVLWHEg6Ms',
    description:
      'Fanpage: https://www.facebook.com/EngineerPro.Official\nCác bạn quan tâm thêm khoá học về Backend, FrontEnd, Thuật toán, System Design bên EngineerPro vui lòng truy cập FB fanpage ở trên.\n#CV #resumereview #bigtech',
    createdAt: '2024-08-31T11:59:22.490Z',
    updatedAt: '2024-08-31T11:59:22.490Z',
  },
  {
    id: 'c2b2299f-9a75-465f-9976-fa67f23eceb8',
    title:
      'Thời sự quốc tế: Sợ Nga phát hiện, Ukraine cho báu vật F-16 cất cánh “khổ sở” chưa từng thấy',
    url: 'https://www.youtube.com/watch?v=kEuDrzowpYc',
    thumbnailUrl: 'https://i.ytimg.com/vi/kEuDrzowpYc/default.jpg',
    videoId: 'kEuDrzowpYc',
    description:
      'Toàn cảnh 24h | Thời sự quốc tế: Sợ Nga phát hiện, Ukraine cho báu vật F-16 cất cánh “khổ sở” chưa từng thấy\nGiới phân tích cho rằng Ukraine dùng xa lộ để cất và hạ cánh các máy bay chiến đấu F-16 nhằm tránh bị Nga phát hiện, dù chấp nhận rủi ro về đường băng.\n#toancanh24h #tinvietnam #tinthegioi\n--------------------------------------------------------\nToàn cảnh 24h, toan canh 24h, tin tức, tin tuc, tin tuc moi nhat, tin tức toàn cảnh, tin mới nhất, tin the gioi moi nhat, tin thế giới, tin quốc tế,  toàn cảnh thế giới,  toàn cảnh quốc tế, thời sự quốc tế, điểm nóng, điểm nóng quốc tế, tin thế giới hôm nay, the gioi hom nay, tin tức nga ukraine mới nhất, nga ukraine tin moi nhat, nga  mới nhất, Nga Ukraine, Israel Hamas, israel Palestine, iran Israel, israel hamas mới nhất, bầu cử mỹ, tin tức vtv,chiến sự trung đông, chiến sự iran israel',
    createdAt: '2024-08-31T12:07:42.091Z',
    updatedAt: '2024-08-31T12:07:42.091Z',
  },
  {
    id: '426d3a60-d7bf-496d-887d-483cd4d0ed1a',
    title:
      'MÀN FARM HƠN 20 MẠNG SIÊU KHÉT  CỦA MORDERKAISER 25 SÁCH MEJAI TRONG TAY XIAOCHAOMENG',
    url: 'https://www.youtube.com/watch?v=LA3r822Cb30',
    thumbnailUrl: 'https://i.ytimg.com/vi/LA3r822Cb30/default.jpg',
    videoId: 'LA3r822Cb30',
    description:
      'MÀN FARM HƠN 20 MẠNG SIÊU KHÉT  CỦA MORDERKAISER 25 SÁCH MEJAI TRONG TAY XIAOCHAOMENG KHI GẶP KÈO TỦ VỚI AATROX\n\n💥 Credit:  huya-小超梦 \n\n🔔 Đừng bỏ lỡ:\nKênh Siêu Cấp Trung thứ 2 của Văn Tùng: Theo dõi ngay để không bỏ lỡ những nội dung hấp dẫn: https://www.youtube.com/@VanTungRankTrung?sub_confirmation=1\nPlaylist dành cho bạn:\nhttps://www.youtube.com/playlist?list=PLe3zvc_HqZKmhNjEoRa2xxRkEeD2nK0xR\n\n🔔 Lịch Livestream Văn Tùng:\nYouTube: 22:30 - 23:30 hàng ngày\n🔔 Kết nối với Văn Tùng:\nHạm Đội Toxic: https://www.facebook.com/groups/thuyentruongvantung\nFacebook: https://www.facebook.com/le.vantung.777\nFanpage: https://www.facebook.com/BLVVanTung.Box\n\n➥ Box Studio \n» Liên hệ công việc: booking@box.studio\n» Web: https://www.box.studio/\n» Hotline: 098 842 88 15',
    createdAt: '2024-08-31T12:08:30.226Z',
    updatedAt: '2024-08-31T12:08:30.226Z',
  },
  {
    id: '6fad576f-0215-48e5-9c06-26dca673164a',
    title: 'Thời tiết cả nước 4 ngày nghỉ lễ Quốc khánh',
    url: 'https://www.youtube.com/watch?v=7U_P9Fk8o9M',
    thumbnailUrl: 'https://i.ytimg.com/vi/7U_P9Fk8o9M/default.jpg',
    videoId: '7U_P9Fk8o9M',
    description:
      'Trong kỳ nghỉ lễ 4 ngày dịp Quốc khánh (31/8-3/9), miền Bắc nắng ráo và oi nóng, trong khi Tây Nguyên và Nam Bộ có thể mưa rào kèm dông xuyên suốt kỳ nghỉ.\n\n🔔 Đăng Ký Kênh và Bật Thông Báo cho kênh VIDEO ALOBACSI 👉 https://bit.ly/VideoAlobacsi\n📌 Tham gia làm hội viên của kênh để được hưởng đặc quyền: https://bit.ly/3WGX9hX\n\nTheo dõi VIDEO ALOBACSI thêm tại đây:\n► Facebook: https://www.facebook.com/alobacsihoibacsitraloi/\n► TikTok: https://www.tiktok.com/@alobacsi.com \n► Email: video.alobacsi@gmail.com\n► Zalo - SĐT: 08983 08983\n► Website: https://alobacsi.com/\n\nHợp tác nội dung: \n► SĐT: 0903 696 357\n► Email: info@alobacsi.vn\n\n#alobacsi #bacsi #tinnong #tintucsuckhoe #suckhoe\n\nCác bạn đừng quên Đăng Ký Kênh, Like và Chia Sẻ nếu yêu thích video nhé!\n\n----------------------------------\n© Bản quyền thuộc về VIDEO ALOBACSI, vui lòng không reup dưới mọi hình thức\n© Copyright by VIDEO ALOBACSI ☞ Do not Reup',
    createdAt: '2024-08-31T19:48:51.328Z',
    updatedAt: '2024-08-31T19:48:51.328Z',
  },
  {
    id: 'c12757a7-ef3d-49e8-b40e-e45c354a7083',
    title:
      'Đừng rước hoạ vào thân bằng 4 kiểu niềm tin độc hại này! | Diễn Giả Phan Đăng',
    url: 'https://www.youtube.com/watch?v=2rPDfHj-TXQ',
    thumbnailUrl: 'https://i.ytimg.com/vi/2rPDfHj-TXQ/default.jpg',
    videoId: '2rPDfHj-TXQ',
    description:
      '-Rất nhiều khi ta đau khổ là do những niềm tin độc hại ta nuôi dưỡng. Nhận diện 4 kiểu niềm tin độc hại này, thoát khỏi nó là chìa khoá thoát ra ngoài đau khổ. \n-Liên hệ với Diễn giả Phan Đăng:\n☞Trợ lý công việc: Mrs Ly: Zalo: 0933321866.\n☞ Facebook chính thức: https://www.facebook.com/phandangnhabao\n☞ Fanpage chính thức: https://www.facebook.com/Nhabaophandang\n☞ TikTok chính thức: https://www.tiktok.com/@nhabaophandang\n☞ Đừng quên đăng ký/theo dõi kênh YouTube chính thức của Diễn giả Phan Đăng để không bỏ lỡ những video về tỉnh thức - chữa lành qua link sau: https://www.youtube.com/@Nhabaophandang\n☞ Đăng ký kênh "Đọc thơ 21H" để thanh rửa đầu óc và tâm hồn sau một ngày làm việc mệt mỏi (https://www.youtube.com/channel/UCkbO5hAZ3jQd1w3HrXwlPVg?sub_confirmation=1)\n\n#NhaBaoPhanDang #PhanDang #DienGiaPhanDang #SuViet #LichSuVietNam \n\n-------------------------------------------\n© Bản quyền thuộc về Nhà Báo Phan Đăng\n© Copyright by Nhà Báo Phan Đăng ☞ Do not Reup\'',
    createdAt: '2024-08-31T19:49:07.043Z',
    updatedAt: '2024-08-31T19:49:07.043Z',
  },
  {
    id: 'd22e66b5-b5fd-4ea7-9b1f-d6fd28e2a0b7',
    title: 'Creation (Full Episode) | The Story of God with Morgan Freeman',
    url: 'https://www.youtube.com/watch?v=gwIb6S8suSs',
    thumbnailUrl: 'https://i.ytimg.com/vi/gwIb6S8suSs/default.jpg',
    videoId: 'gwIb6S8suSs',
    description:
      'Morgan Freeman travels the globe to ask: Where did we come from, and what happened “in the beginning”?\n\n➡ Subscribe: http://bit.ly/NatGeoSubscribe\n➡ Get more Nat Geo Full Episodes: https://youtube.com/playlist?list=PLivjPDlt6ApSiD2mk9Ngp-5dZ9CDDn72O\n➡ Get more Nat Geo Wild Full Episodes: https://youtu.be/qAG2SkTPltw\n\nAnd check out more National Geographic series and specials here:\n➡ Disney Plus: https://www.disneyplus.com\n➡ Hulu: https://www.hulu.com/welcome\n➡ NGTV app: https://www.nationalgeographic.com/tv/\n➡ ABC app: https://abc.com/\n\nAbout The Story of God with Morgan Freeman:\nAcademy Award winner Morgan Freeman explores the meaning of life, God, and many big questions in between in an effort to understand how religion has evolved and shaped society. A different divine subject is covered in each hourlong episode, titles of which include "Creation," "The Devil Inside," "Afterlife," "Apocalypse," and "Who Is God?" To explore these topics, host and narrator Freeman visits nearly 20 cities in seven countries to see some of the world\'s greatest religious sites, among them Jerusalem\'s Wailing Wall, India\'s Bodhi Tree, Mayan temples in Guatemala, and the pyramids of Egypt, and he immerses himself in religious experiences and rituals. "In some places I found answers, and others led to more questions. The constant through it all is that we\'re all looking to be part of something bigger than us. If there\'s one thing I\'ve learned, it\'s that we certainly are," Freeman says.\n\n#MorganFreeman #TheStoryofGod #NationalGeographic  \n\nGet More National Geographic:\nOfficial Site: http://bit.ly/NatGeoOfficialSite\nFacebook: http://bit.ly/FBNatGeo\nTwitter: http://bit.ly/NatGeoTwitter\nInstagram: http://bit.ly/NatGeoInsta\nTikTok: http://www.tiktok.com/@natgeo\nTenor: http://on.natgeo.com/31b3Koc\n\nAbout National Geographic:\nNational Geographic is the world\'s premium destination for science, exploration, and adventure. Through their world-class scientists, photographers, journalists, and filmmakers, Nat Geo gets you closer to the stories that matter and past the edge of what\'s possible.\n\nCreation (Full Episode) | The Story of God with Morgan Freeman\nhttps://youtu.be/gwIb6S8suSs\n\nNational Geographic\nhttps://www.youtube.com/natgeo',
    createdAt: '2024-08-31T20:19:09.979Z',
    updatedAt: '2024-08-31T20:19:09.979Z',
  },
  {
    id: '3935859e-f245-4f23-8491-c9f3749818b0',
    title:
      '8 Hours Relaxing Sleep Music with Rain Sounds on the Windows - Healing Music, Stress Relief, Calming',
    url: 'https://www.youtube.com/watch?v=xRXxs-RvEI4',
    thumbnailUrl: 'https://i.ytimg.com/vi/xRXxs-RvEI4/default.jpg',
    videoId: 'xRXxs-RvEI4',
    description:
      '8 Hours Relaxing Sleep Music with Rain Sounds on the Windows - Healing Music, Stress Relief, Calming\n---------------------------\n► Welcome to the Youtube channel "Healing Soft Rain Music"! Here, we bring you relaxing piano music at night, combined with the gentle sound of falling rain, to create an ideal space for good sleep and stress relief.\n\n⭐  If you enjoyed this channel please LIKE & SUBSCRIBE, it would help our channel a lot! Thank you for your support! : \n https://www.youtube.com/channel/UCeFgfsq5C3_ZwJlNXc7juMA?sub_confirmation=1\n► Watch more latest videos here: https://youtube.com/playlist?list=PLIeAm7PwU7Bs7V9rc1DcYXcDouwrGDRig&si=U06he_Oxw24Pdze2\n#relaxingpiano #soundforsleep #rainforsleep\n---------------------------\nImmerse yourself in the soothing piano music and feel the sound of rain falling like cool dew drops outside the window. The channel "Healing Soft Rain Music" was created with the goal of bringing healing to your mind and body.\n\nWith delicate piano melodies and gentle falling rain sounds, we hope to bring you a state of relaxation, relieve stress and create ideal conditions for a good night\'s sleep. These sounds not only soothe the soul but also help you find peace and balance in life.\n\n"Healing Soft Rain Music" is not simply a music channel, but a journey of self-discovery and understanding. Let the piano melodies and the gentle sound of rain soothe your worries and bring you to a state of calm and peace.\n\nPlease press the "Subscribe" button and turn on notifications so you don\'t miss the latest relaxing piano music from the "Healing Soft Rain Music" channel. Join us to experience music that heals the mind and find peace in today\'s hustle and bustle of life.\n\nThank you for choosing to join us on the "Healing Soft Rain Music" channel!',
    createdAt: '2024-08-31T20:20:36.298Z',
    updatedAt: '2024-08-31T20:20:36.298Z',
  },
  {
    id: '71fc88b4-bf82-462b-89be-98745a2e4167',
    title: 'Phỏng vấn Coding interview tại Meta sẽ như thế nào?',
    url: 'https://www.youtube.com/watch?v=ZTrl_L0T-d4',
    thumbnailUrl: 'https://i.ytimg.com/vi/ZTrl_L0T-d4/default.jpg',
    videoId: 'ZTrl_L0T-d4',
    description: '',
    createdAt: '2024-08-31T20:21:03.099Z',
    updatedAt: '2024-08-31T20:21:03.099Z',
  },
  {
    id: 'e436f1bf-7a20-4d84-9ee7-25ace5368ec3',
    title:
      'ジブリメドレーピアノ🔱ジブリのベストピアノ曲🔱ベストジブリコレクション🔱千と千尋の神隠し, 崖の上のポニョ, ルージュの伝言, 世界の約束, となりのトトロ',
    url: 'https://www.youtube.com/watch?v=QfN_EONaBsU',
    thumbnailUrl: 'https://i.ytimg.com/vi/QfN_EONaBsU/default.jpg',
    videoId: 'QfN_EONaBsU',
    description:
      "ジブリメドレーピアノ🔱ジブリのベストピアノ曲🔱ベストジブリコレクション🔱千と千尋の神隠し, 崖の上のポニョ, ルージュの伝言, 世界の約束, となりのトトロ\nジブリメドレーピアノ🔱ジブリのベストピアノ曲🔱ベストジブリコレクション🔱千と千尋の神隠し, 崖の上のポニョ, ルージュの伝言, 世界の約束, となりのトトロ\nジブリメドレーピアノ🔱ジブリのベストピアノ曲🔱ベストジブリコレクション🔱千と千尋の神隠し, 崖の上のポニョ, ルージュの伝言, 世界の約束, となりのトトロ\n👉:  https://youtu.be/Z9P9bYo4quU\n使用楽曲:\n[00:00:00] 海の見える街　「魔女の宅急便」 ( A Town with an Ocean View From the Movie Kiki's Delivery Service)\n[00:04:33] 世界の約束　「ハウルの動く城」 (The Promise of the World - Howl's Moving Castle)\n[00:09:49] いのちの名前　「千と千尋の神隠し」 (The Name of Life - Spirited Away)\n[00:15:29] いつも何度でも　「千と千尋の神隠し」 (Always With Me - From the Movie Spirited Away)\n[00:20:14] テルーの唄　「ゲド戦記」 (Terru's Song)\n[00:25:20] 崖の上のポニョ　「崖の上のポニョ」 ( Ponyo on the Cliff by the Sea From the Movie Ponyo on the Cliff by the Sea)\n[00:28:59] 鳥の人　「風の谷のナウシカ」 (The Bird Man - Nausicaa of the Valley of the Wind)\n[00:33:16] 君をのせて　「天空の城ラピュタ」 (Carrying you - Castle in the Sky)\n[00:38:34] となりのトトロ　「となりのトトロ」 (My Neighbor Totoro From the Movie My Neighbor Totoro)\n[00:42:39] 風の谷のナウシカ　「風の谷のナウシカ」 (Nausicaa of the valley of the wind)\n[00:47:17] Arrietty's Song　「借りぐらしのアリエッティ」 (Arrietty's Song)\n[00:51:55] さんぽ　「となりのトトロ」 (Stroll - From the Movie My Neighbor Totoro)\n[00:56:28] アシタカせっ記　「もののけ姫」 (The Legend of Ashitaka - Princess Mononoke)\n[01:01:50] ひこうき雲　「風立ちぬ」 (Hikoki Gumo - The Wind Rises)\n[01:05:54] もののけ姫　「もののけ姫」 (Princess Mononoke)\n[01:07:25] カントリー・ロード　「耳をすませば」 (Take Me Home, Country Roads  - Whisper of the heart)\n[01:12:56] やさしさに包まれたなら　「魔女の宅急便」 (Yasashisa Ni Tsutsumareta Nara - Kiki's Delivery Service)\n[01:18:04] ルージュの伝言　「魔女の宅急便」 (Message by Rouge - Kiki's Delivery Service)\n[01:22:39] ふたたび　「千と千尋の神隠し」 (Reprise - Spirited Away)\n[01:28:21] 風のとおり道　「となりのトトロ」 (The Path of the Wind - From the Movie My Neighbor Totoro)\n[01:33:41] さよならの夏～コクリコ坂から～　「コクリコ坂から」 (Sayonara No Natsu - From Up On Poppy Hill)\n[01:38:49] ナウシカ・レクイエム　「風の谷のナウシカ」 (Nausicaa Requiem - Nausicaa of the Valley of the Wind)\n[01:42:53] 風になる　「猫の恩返し」 (Kaze ni Naru - The Cat Returns)\n[01:47:41] 時には昔の話を　「紅の豚」より (Once in a While Talk of the Old Days)\n[01:53:18] もののけ姫「もののけ姫」 (Princess Mononoke)\n[01:55:28] Don't disturb me ～映画　アーヤと魔女より (Don't disturb me)\n[02:00:01] 地球儀 「君たちはどう生きるか」 (Globe from - The Boy and the Heron)\n[02:04:49] ワラワラ 「君たちはどう生きるか」 (Wara wara from - The Boy and the Heron)\n\n\n皆様がここにいる間、私たちは最高で最新、そして最も感動的なジブリのピアノ音楽をお届けできるよう努めてまいります。\n\nジブリ チャンネルでは、スタジオ ジブリのアニメーション アートと素晴らしい音楽の素晴らしい組み合わせをお楽しみいただけます。 優しく深みのあるピアノ音楽の数々で、誰もがくつろげるロマンチックな空間を演出します。\n\nジブリチャンネルでは、「となりのトトロ」「ちひろと惑星」「ハウルの動く城」などの名作アニメ映画のメロディーを体験できます。スタジオジブリの音楽はリラックスするだけでなく、豊かで色彩豊かな世界へと誘うロマンチックな旅でもあります。\n\nイージーリスニングからソウルフルな音楽まで幅広いプレイリストを備えたジブリ チャンネルは、高品質のアニメや音楽の愛好家にとって理想的な場所です。 ジブリの音楽があなたを想像力豊かで感情的な旅へ連れて行きましょう!\n\n    ❤ 私のチャンネルを訪問していただきありがとうございます。\n    ➨ 史上最高の曲を聴くために購読することを忘れないでください。\n    ※リラックスできる心地よい音楽をお楽しみください。\n🔔 www.youtube.com/@Ghibli.PianoCollection\n\n#ghiblipianoCollection\n#bgm\n#睡眠用\n#勉強用\n#作業用\n#ジブリのピアノ\n#ジブリスタジオ\n#リラックスできるジブリ音楽\n#ジブリのベストピアノ曲\n#ピアノ ジブリ\n#ピアノ音楽ミックス\n#ピアノチルプレイリスト\n#ジブリの最高のピアノ音楽\n#リラックスできる曲のプレイリスト\n#リラックスジブリ\n#リラックスできるジブリミックス\n#ピアノベストコレクション\n#ジブリのプレイリスト音楽\n#ジブリの癒し音楽\n#ジブリミックスピアノ\n#リラックスできるジブリの曲\n#ジブリのプレイリストの曲\n#ジブリ音楽の勉強\n#ジブリミックスコレクション\n#千と千尋の神隠し\n#となりのトトロ\n#魔女の宅急便\n#ハウルの動く城\n#もののけ姫\n#天空の城ラピュタ",
    createdAt: '2024-08-31T20:25:29.924Z',
    updatedAt: '2024-08-31T20:25:29.924Z',
  },
  {
    id: '651f7b82-9f60-4cc9-a494-73b7b130e1b6',
    title:
      '퇴근길 노래와 노을지는 도시 ✨ 저녁에 듣기좋은 잔잔한 감성 팝송 | Design making tutorial',
    url: 'https://www.youtube.com/watch?v=cG_2ZSvaE0Y',
    thumbnailUrl: 'https://i.ytimg.com/vi/cG_2ZSvaE0Y/default.jpg',
    videoId: 'cG_2ZSvaE0Y',
    description:
      "해당 영상은 제작과정과 설명 자막을 포함하고 있습니다.\n03:16 부터 Design making tutorial 영상이 시작됩니다.\n\n제 채널의 이미지 배경화면과 영상물은 \n상업적으로 100% 사용 가능한 이미지를 직접 2차 가공, 디자인한 것입니다.\n\n저는 어도비 포토샵, 일러스트, 에프터이펙트, 프리미어를 사용해서\n영상을 제작합니다.\n\nBlue rain 채널에서는 원저작물에 새로운 창작성을 가한 2차 창작물의 경우, \n라이센스를 해소한 음원과 영상을 통해 변형·각색하여 제작하고 있습니다. \n이는 '공정 이용'의 범위에 속하며 저작권법에 위배되지 않습니다.",
    createdAt: '2024-08-31T20:28:31.265Z',
    updatedAt: '2024-08-31T20:28:31.265Z',
  },
  {
    id: 'eb3ea4f9-bbed-4803-951f-d8e4f8ab73b1',
    title:
      '4-Hour Study with Me / Pomodoro Timer 60-10 / Lo-Fi Relaxing Music / Day 136',
    url: 'https://www.youtube.com/watch?v=vC4dLeqnvAw',
    thumbnailUrl: 'https://i.ytimg.com/vi/vC4dLeqnvAw/default.jpg',
    videoId: 'vC4dLeqnvAw',
    description:
      "🤗 Welcome! I hope you enjoy studying with me!\n📖 My everyday study are reading papers, coding, or writing.\n🌠 I would constantly upload videos to record my study and life.\n\nMy Desk Setup: https://kit.co/SeansHome/desk-setup\nThe Atmosphere Lamp I used: https://bit.ly/seanshome_lamp\n\n✍️ Sessions\n00:00:00 Start\n00:00:30 Study 1/4\n01:00:30 Break\n01:10:30 Study 2/4\n02:10:30 Break\n02:20:30 Study 3/4\n03:20:30 Break\n03:30:30 Study 4/4\n04:30:30 Outro\n\n\n🎵 Background music - Provided by Lofi Records\n\n- Purrple Cat – Time Stands Still\n- Watch: https://youtu.be/aUbcVitWiLY\n- Download/Stream: https://fanlink.to/AdventureIsland\n\n- Swink – afternoon in the park\n- Watch: https://youtu.be/Oz3DCwlwe9M\n- Download/Stream: https://fanlink.to/NotesFromYesterday\n\n- Bert – soul gem\n- Watch: https://youtu.be/0TZaaytvi-k\n- Download/Stream: https://fanlink.to/offlineEP\n\n- Hevi x no one’s perfect – Ghosts\n- Watch: https://youtu.be/i5YSVkQ06Ro\n- Download/Stream: https://fanlink.to/BeforeItsLatePt2\n\n- Purrple Cat – Storm Clouds\n- Watch: https://youtu.be/SO1TiP9bunQ\n- Download/Stream: https://fanlink.to/AdventureIsland\n\n- Bcalm x Purrple Cat - Quiet Thoughts\n- Watch: https://youtu.be/05xeTySUNWk\n- Download/Stream: https://fanlink.to/ForYouEP\n\n- Kainbeats - Still Waters \n- Watch: https://youtu.be/n0dv2rCw3LA\n- Download/Stream: https://fanlink.to/AtlantisEP\n\n- Purrple Cat - Yesteryear\n- Watch: https://youtu.be/f9U5slmGRsk\n- Download/Stream: https://fanlink.to/DistantWorldsII\n\n- goodnyght – early morning\n- Watch: https://youtu.be/ur5_VCpxVfQ\n- Download/Stream: https://fanlink.to/SleepCyclesEP\n\n- Peak Twilight x no one’s perfect – Lunar Shores\n- Watch: https://youtu.be/-T1BFTnde5I\n- Download/Stream: https://fanlink.to/DepartureEp\n\n- Kudo – Builder Home\n- Watch: https://youtu.be/Rod11CoyKgQ\n- Download/Stream: https://fanlink.to/LoveYouTwo\n\n- Krynoze x Goson - Crackling Woods\n- Watch: https://youtu.be/fbkPq2oqyIk\n- Download/Stream: https://fanlink.to/AWorldAfter\n\n- BVG x møndberg – Dreams Can Come True\n- Watch: https://youtu.be/PLU09K2LUYc\n- Download/Stream: https://fanlink.to/FloatingDreams\n\n- Krynoze x Devon Rea - Ripples\n- Watch: https://youtu.be/mOrMArg9PO4\n- Download/Stream: https://fanlink.to/AWorldAfter\n\n- Tibeauthetraveler – miss you\n- Watch: https://youtu.be/UWQrF1C5rD4\n- Download/Stream: https://fanlink.to/DistanceLove\n\n- Lilac – Perfume\n- Watch: https://youtu.be/g9zDqj1gIkc\n- Download/Stream: https://fanlink.to/WhenIDreamtofYou\n\n- Laffey – A Walk In The Park\n- Watch: https://youtu.be/ozytPSYGFEk\n- Download/Stream: https://fanlink.to/summernightsEP\n\n- Kainbeats - clear eyes, blind sight\n- Watch: https://youtu.be/44dRkHBI8sA\n- Download/Stream: https://fanlink.to/BlindSighted\n\n- Kainbeats x Sleepermane  - where light can't reach\n- Watch: https://youtu.be/pXTu3nRol4w\n- Download/Stream: https://fanlink.to/BlindSighted\n\n- Kainbeats x cxlt. - The Clouds Stood Still\n- Watch: https://youtu.be/yfliURatNsM\n- Download/Stream: https://fanlink.to/AWalkThroughtheSky\n\n- Yasumu – Searching for Answers\n- Watch: https://youtu.be/M1MsUMyL-gw\n- Download/Stream: https://fanlink.to/MirrorOfTime\n\n- Towerz x edelwize - follow me\n- Watch: https://youtu.be/VTsDmlert6g\n- Download/Stream: https://fanlink.to/AtLongLast\n\n- amies x cxlt. – Blue Moon\n- Watch: https://youtu.be/39vz5IsVKmw\n- Download/Stream: https://fanlink.to/NocturneEP\n\n- no one's perfect ft. cxlt. - Waking Dream\n- Watch: https://youtu.be/jWXIMlO7Gp4\n- Download/Stream: https://fanlink.to/DiscreteLandscapes\n\n- Jhove x fourwalls x Towerz – Dreams We Shared\n- Watch: https://youtu.be/-dWIzh6K-D8\n- Download/Stream: https://fanlink.to/GoldenHourEp\n\n- Ky akasha – Yerba Mate\n- Watch: https://youtu.be/0N7dNo9Vc4c\n- Download/Stream: https://fanlink.to/MemoryWithinADream\n\n- Charlee Nguyen x Mondo Loops x Purrple Cat - Orion's Belt\n- Watch: https://youtu.be/nR6dIlJn3WY\n- Download/Stream: https://fanlink.to/AmidsttheSevenSeas\n\n- Hoogway – Rivage\n- Watch: https://youtu.be/1wJ5aODmz4Y\n- Download/Stream: https://fanlink.to/BeautyInAllForms\n\n- Hoogway - Greenn Fields\n- Watch: https://youtu.be/F6MUk0LZIUA\n- Download/Stream: https://fanlink.to/ThinLines\n\n- BVG - The Path You Choose\n- Watch: https://youtu.be/8wQDsl9QH2A\n- Download/Stream: https://fanlink.to/SoothingBreeze",
    createdAt: '2024-08-31T20:31:52.181Z',
    updatedAt: '2024-08-31T20:31:52.181Z',
  },
  {
    id: 'b927e8b2-3632-41c3-8773-2798a7fc1bf1',
    title:
      'VIET DEEP 2024 - NHẠC  DEEP HOUSE REMIX HAY NHẤT 2024 - MIXTAPE VIET BASS & HOUSE LAK TIKTOK',
    url: 'https://www.youtube.com/watch?v=be6r69Gq-n8',
    thumbnailUrl: 'https://i.ytimg.com/vi/be6r69Gq-n8/default.jpg',
    videoId: 'be6r69Gq-n8',
    description:
      'VIET DEEP 2024 - NHẠC  DEEP HOUSE REMIX HAY NHẤT 2024 - MIXTAPE VIET BASS & HOUSE LAK TIKTOK\n#houselak #deephouse #nhacremix #nhachouselak #chillbass #chillhouse #vietdeep \n\n" DEEPHOUSE MUSIC. " là một kênh âm nhạc làm về nhạc Deep House, House Lak,.. thuộc hệ thống của H2O MUSIC. Kênh " DEEPHOUSE MUSIC. " sẽ mang lại cho quý khán giả những bản Deep House, House Lak hay nhất trên thị trường hiện nay, tạo năng lượng tích cực cho mọi người. Cảm ơn quý khán giả đã ghé qua " DEEPHOUSE MUSIC. " và chúc quý khán giả nghe nhạc vui vẻ ^^\n\n🎵 More about H2O Music\n• Fanpage: https://www.fb.com/H2OMusicc\n\n✉ Hợp tác, quảng cáo, khiếu nại các vấn đề về bản quyền liên hệ chúng tôi qua mail: contact@1991s.vn\n\n© Bản quyền thuộc về nhạc nghe trên bar. & H2O MUSIC\n© Copyright by nhạc nghe trên bar. & H2O MUSIC ☞ Do not Reup',
    createdAt: '2024-08-31T20:37:55.052Z',
    updatedAt: '2024-08-31T20:37:55.052Z',
  },
  {
    id: 'c9747103-1c5e-43fc-ae97-97ca2515ce7e',
    title:
      'Tại sao ngày 2/9/1945 - Bác Hồ nhất định phải đọc tuyên ngôn độc lập?',
    url: 'https://www.youtube.com/watch?v=lT42tHfrP7c',
    thumbnailUrl: 'https://i.ytimg.com/vi/lT42tHfrP7c/default.jpg',
    videoId: 'lT42tHfrP7c',
    description:
      'Tại sao ngày 2/9/1945 - Bác Hồ nhất định phải đọc tuyên ngôn độc lập?\n\nThông tin liên hệ:\nĐịa chỉ: V6B, ô số 03, khu Văn Phú, phường Phú La, quận Hà Đông, tp Hà Nội.\nHotline: 0786 457 222\n\nBell Home cam kết:\n- Sản phẩm được sản xuất trên dây chuyền chuẩn Đức 100% \n- Sản phẩm an toàn, giá tận gốc từ nhà máy\n- Chính sách, dịch vụ chăm sóc khách hàng sau mua chuyên nghiệp\nWebsite: https://bellhome.vn/\n\n■ Gmail: phianhtuan1993@gmail.com\n■ Spotify: https://canvato.net/sl/0g2Zw\n■ Facebook : https://www.facebook.com/phianhtuan2911\n■ Instagram: https://www.instagram.com/phianhtuan2911\n\nNhạc nền bản tin - Sơn Beat\n#tuantienti\n------------------------------------------------------------------------------\nTags: tuấn tiền tỉ, tổ buôn 247, vlog tuấn tiền tỉ, tuấn tiền tỉ chém gió, tuấn tiền tỉ tin tức, tổ buôn, tin tức 247, tuấn tiền tỉ bản tin, đàm đạo lịch sử, tuấn tiền tỉ mới nhất, tuấn tiền tỉ bình luận bóng đá, tuấn tiền tỉ putin, tuấn tiền tỉ hải dớ, tuấn tiền tỉ lịch sử việt nam, tuấn tiền tỉ tin mới nhất, tuấn tiền tỉ lịch sử, lê đức thọ tuấn tiền tỉ, tổng hợp tuấn tiền tỉ, tuấn tiền tỉ mới nhất hôm nay, bản tin 247 tuấn tiền tỉ',
    createdAt: '2024-08-31T20:45:50.077Z',
    updatedAt: '2024-08-31T20:45:50.077Z',
  },
];

export const seedingForVideos = async (
  repository: Repository<VideoEntity>,
  users: UserEntity[],
) => {
  const videos: VideoEntity[] = data.map((item) => ({
    ...item,
    user: {
      id: users[Math.floor(Math.random() * users.length)].id,
    } as UserEntity,
    createdAt: new Date(item.createdAt),
    updatedAt: new Date(item.updatedAt),
  }));

  return repository.save(videos);
};
