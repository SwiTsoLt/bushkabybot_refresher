from time import sleep
import requests

def start():
    x = requests.get('https://bushkabybot-refresher.onrender.com')
    y = requests.get('https://bushkabybot-b050.onrender.com')
    print(x.status_code, y.status_code)
    sleep(120)
    start()

start()