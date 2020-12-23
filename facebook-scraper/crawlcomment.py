import random

from selenium import webdriver
from time import sleep
from selenium.webdriver.common.keys import Keys

# 1. Khai báo browser
browser = webdriver.Chrome(executable_path="./chromedriver")

# 2. Mở URL của post
browser.get("https://www.facebook.com/groups/miaigroup/permalink/730028114435130/")

sleep(5)

# 3. Lấy link hiện comment
showcomment_link = browser.find_element_by_xpath("/html/body/div[1]/div/div[1]/div/div[3]/div/div/div[1]/div[1]/div[4]/div/div/div/div/div/div[1]/div/div/div/div/div/div/div/div/div[2]/div/div[4]/div/div/div/div/div[1]/div/div[2]/div[1]/div/span")
showcomment_link.click()
sleep(5)

# 4. Lấy comment
showmore_link = browser.find_element_by_xpath("/html/body/div[1]/div/div[1]/div/div[3]/div/div/div[1]/div[1]/div[4]/div/div/div/div/div/div[1]/div/div/div/div/div/div/div/div/div[2]/div/div[4]/div/div/div[2]/div[2]/div/div[2]/span/span")
showmore_link.click()
sleep(random.randint(5,10))

showmore_link.click()
sleep(5)

# 5. Tìm tất cả các comment và ghi ra màn hình (hoặc file)
# -> lấy all thẻ div có thuộc tính aria-label='Bình luận'

comment_list = browser.find_elements_by_xpath("//div[@role='article']")

# Lặp trong tất cả các comment và hiển thị nội dung comment ra màn hình
for comment in comment_list:
    # hiển thị tên người và nội dung, cách nhau bởi dấu :
    poster = comment.find_element_by_class_name("_680y")
    content = comment.find_element_by_class_name("_6cuy")
    print("*", poster.text,":", content.text)

sleep(5)

# 6. Đóng browser
browser.close()
