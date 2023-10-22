import requests

#visit this website to get a soup commands <https://www.crummy.com/software/BeautifulSoup/bs4/doc/>

def fetchAndSaveToFile(url, path):
    r = requests.get(url)
    with open(path  , "w") as f:
        f.write(r.text)

url="https://www.learncbse.in/ncert-solutions-for-class-10-english-literature/"

fetchAndSaveToFile(url , "data/Learncbse.html")