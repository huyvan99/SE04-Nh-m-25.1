# SOCIAL LISTENING
Mentor: Lê Công Thành

InfoRe Technology Company

https://www.facebook.com/inforetechnology 

Teacher: Bùi Sỹ Nguyên

Students: 
- Nguyễn Đình Nguyên
- Vũ Trung Kiên
- Chu Việt Long
- Nguyễn Văn Huy
          
## Ý tưởng dự án
- Social Listening (Lắng nghe mạng xã hội) thực chất là một bài toán thu thập (Crawl) các loại dữ liệu theo yêu cầu của người sử dụng và từ dữ liệu đó đưa ra các đánh giá, phân tích phục vụ các mục đích khác.
- VD1: Chưa bao giờ trên mạng xã hội xuất hiện nhiều bài viết kêu cứu như mùa lũ vừa qua, mỗi khi nước dâng, bà con chỉ có thể trông mong bài kêu cứu của mình được lực lượng cứu hộ, tổ chức nào đó xem được và đến ứng cứu. Để giảm tải cho tổng đài của BCH Phòng Chống Thiên Tai và Tìm Kiếm Cứu Nạn TP Hồ Chí Minh, các dự án Social Listening được sử dụng để thu thập các bài viết đó, phân loại đâu là tin cầu cứu, đâu là tin đi cứu trợ... Hỗ trợ rất nhiều cho công việc cứu nạn và hỗ trợ người dân Miền Trung. 
- VD2: Gần đây Trung Quốc cho ra mắt mẫu xe Beijing X7, bạn đang muốn biết những thông tin đến chiếc xe hay quan trọng hơn là đánh giá, trải nghiệm khi lái thử mà không muốn phải tìm từ quá nhiều nguồn. Chỉ cần sử dụng Social Listening với Key Search "Beijing X7, lái thử". Tất cả thông tin bài viết, ưu nhược điểm sẽ xuất hiện trước mắt bạn.

- Trong phạm vi thực hiện nhóm tiến hành tạo 2 module:
  - Crawl dữ liệu từ Facebook người dùng
  - Phân loại theo chủ đề dựa vào từ khóa chính
          
 ## Kiến trúc hệ thống 
 - Dữ liệu được thu thập từ Facebook bằng Chrome Extension, đưa ra dưới dạng Json Object
 - Sử dụng Elasticsearch để tiến hành xử lý dữ liệu
 
 ## Cài Đặt
 - Chrome Extension
   - Download tệp chrome_extension 
   - Trên trình duyệt Google mở tiện ích Extensions
   - Chọn Developer Mode
   - Load unpacked: file nén của chrome_extension 
   - Bật lên và sử dụng như các tiện ích khác 
   
 - Elasticsearch: 7.10.1
 - Kibana: 7.10.1
 
 - Python:
   - Thư viện: Selenium
