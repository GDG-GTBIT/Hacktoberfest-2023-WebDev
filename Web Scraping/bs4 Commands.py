import requests
from bs4 import BeautifulSoup

with open("Landing Page.html", "r") as f: #Insert the name of html file which you want to read 
    html_doc = f.read() 

soup = BeautifulSoup(html_doc, 'html.parser') # Here beautiful soap is going to convert the html file which is easily readable by it.

#COMMANDS FOR BS4 

print(soup.prettify())  # The file is read by this command 

print(soup.title.string, type(soup.title.string))  # Gives the title of html file - type gives the type of title 

print (soup.div)  # This only gives the first Div also you can replace the word div with any element like a , p  etc 

print (soup.find_all("div"))  # To get all the divs and element entered in bracket 

for link in soup.find_all('a'):
    print(link.get("href"))         # To get all the links in html file
    
for link in soup.find_all('a'):
    print(link.get_text())          # To get the text enclosed in anchor tag 

print(soup.find_all(class_="icon"))     
                                    # To find the data related to particular class and adding all to find we get all the classes 

for child in soup.find(class_="container").children:
    print(child)                    # To get child boxes in div classes       
   
for parent in soup.find(class_="box").parents:
    print(parent)                   # To Print all the parent classes in html file 
    
cont=soup.find(class_="container")

cont.name="span"                    # To change the name of container tag to span 
cont["class"] = "myclass"           # To change the class name               
cont.string = "i am a string"       # To insert the string in the class  
print(cont)                   

ulTag = soup.new_tag("ul")

liTag = soup.new_tag("li")
liTag,string = "Home"
ulTag.append(liTag)

liTag = soup.new_tag("li")
liTag,string = "About"
ulTag.append(liTag)                     # This is used to append any list into the existing list of html file 

soup.html.body.insert(0, ulTag)
with open("Landing Page.html", "w") as f:
    f.write(str(soup))
    
cont = soup.find(class_="container")
print(cont.has_attr("class"))           # This statement will return whether the entered parent class has the following attribute or not 

def has_class_but_not_id(tag):
    return tag.has_attr("class") and not tag.has_attr("id")   # It will only return the attributes which has class but not ID 

results = soup.find_all(has_class_but_not_id)
print(results)                          # This give only those elements which gives the answer true to the above definition.