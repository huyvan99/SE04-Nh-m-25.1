from time import sleep
from selenium.webdriver.common.keys import Keys


def login(browser):
    # 1. Khai bao bien browser
    #     browser = webdriver.Chrome(executable_path="./chromedriver")

    # 2. Mở thử một trang web
    browser.get("http://m.facebook.com")

    # 2a. Điền thông tin vào ô user và pass

    txtUser = browser.find_element_by_id("m_login_email")
    txtUser.send_keys("0918175879")  # <---  Điền username thật của các bạn vào đây

    txtPass = browser.find_element_by_id("m_login_password")
    txtPass.send_keys("memilao1")

    # 2b. Submit form

    txtPass.send_keys(Keys.ENTER)

    # 3. Dừng chương trình 5 giây
    sleep(5)
