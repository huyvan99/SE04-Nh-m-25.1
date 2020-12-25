import random
from time import sleep


def crawlcomment(browser, linklist):
    # 1. Khai báo browser
    # browser = webdriver.Chrome(executable_path="./chromedriver")
    for link in linklist:
        # 2. Mở URL của post
        browser.get(link)
        sleep(random.randint(5, 10))

        # 3. Lấy link hiện comment
        # showcomment_link = browser.find_element_by_xpath("/html/body/div[1]/div/div[1]/div/div[3]/div/div/div[1]/div[1]/div[4]/div/div/div/div/div/div[1]/div/div/div/div/div/div/div/div/div[2]/div/div[4]/div/div/div/div/div[1]/div/div[2]/div[1]/div/span")
        # showcomment_link.click()
        # sleep(5)

        # 4. Lấy comment
        # showmore_link = browser.find_element_by_xpath("/html/body/div[1]/div/div[1]/div/div[3]/div/div/div[1]/div[1]/div[4]/div/div/div/div/div/div[1]/div/div/div/div/div/div/div/div/div[2]/div/div[4]/div/div/div[2]/div[2]/div/div[2]/span/span")
        # showmore_link.click()
        # sleep(random.randint(5,10))
        #
        # showmore_link.click()
        # sleep(5)

        # LẤY NỘI DUNG BÀI POST
        print("Post Content")
        postcontent = browser.find_element_by_xpath("//div[@class='_5rgt _5nk5']")
        print(postcontent.text)

        # 5. Tìm tất cả các comment và ghi ra màn hình (hoặc file)
        # -> lấy all thẻ div có thuộc tính aria-label='Bình luận'
        print("Comment Content")
        comment_list = browser.find_elements_by_xpath("//div[@data-sigil='comment']")
        # Lặp trong tất cả các comment và hiển thị nội dung comment ra màn hình
        # for comment in comment_list:
        #     # hiển thị tên người và nội dung, cách nhau bởi dấu :
        #     poster = comment.find_element_by_class_name("_2b05")
        #     # content = comment.find_element_by_class_name("_6cuy")
        #     print("*", poster.text)

        commentContent = browser.find_elements_by_xpath("//div[@data-sigil='comment-body']")
        # for comment1 in commentContent:
        #     print(comment1.text)

        for i in range(len(comment_list)):
            poster = comment_list[i].find_element_by_class_name("_2b05")
            print("*", poster.text, ": ",commentContent[i].text)
        sleep(5)


def crawPostLink(browser):
    browser.get("http://m.facebook.com/ChuyencuaHaNoi")
    sleep(random.randint(5, 10))
    browser.execute_script("window.scrollTo(0,document.body.scrollHeight)")
    sleep(random.randint(3, 5))
    posts = browser.find_elements_by_xpath("//div[@class='_52jc _5qc4 _78cz _24u0 _36xo']")
    linklist = []
    for post in posts:
        a = post.find_element_by_tag_name('a')
        # crawlcomment(browser,a.get_attribute('href'))
        linklist.append(a.get_attribute('href'))
    for link in linklist:
        print(link)
    return linklist
