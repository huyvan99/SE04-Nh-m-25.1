import fblogin
import crawler
import time
from selenium import webdriver

if __name__ == '__main__':
    chrome_options = webdriver.ChromeOptions()
    chrome_options.add_argument("--disable-notifications")
    browser = webdriver.Chrome(executable_path="./chromedriver", chrome_options=chrome_options)
    # browser.maximize_window()
    fblogin.login(browser)
    linklist = crawler.crawPostLink(browser)
    crawler.crawlcomment(browser, linklist)
