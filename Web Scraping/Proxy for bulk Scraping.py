#This Section is used to change the proxy of network or simply change the IP Address 

import requests

proxies = {
  "http": "http://10.10.1.10:3128",
  "https": "https://10.10.1.10:1080",
}

r = requests.get("https://api64.ipify.org?format=json")
print(r.json())