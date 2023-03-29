import openai
from flask import Flask
from FAQ import faq
app = Flask(__name__)

#open api key- put your own api key
# always remember to remove your ai key before you push the code
openai.api_key = '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'

faq_string = ""

for i, (question, answer) in enumerate(faq.items()):
    faq_string += f"{i+1}. FAQ: {question}\nResponse: {answer}\n\n"

message = 'How do I register on ALAT?'
language = input("What language do you want? ") # the user can communicate in any language

request = openai.ChatCompletion.create(model = "gpt-3.5-turbo",
messages = [
    {"role":"system", "content":f"Your name is Talk2bank." + 
        "You are a helpful assistant that communicates with a user in" + 
        "any specified african language. In addition to your main role, " + 
        "you are to answer any FAQ questions in the specified language " + "with the appropriate answer from {faq_string}"}, 
    {"role":"user","content":f"Communicate with me in {language}"},
    {"role":"user","content":message},
]) #message is a variable that stores any request made by the customers.

print(request['choices'][0]['message']['content'])
@app.route('/chat', methods=['POST'])
def chat():
    request_data = request.get_json()
    message = None
    if request_data:
        if 'message' in request_data:
            language = request_data['message']
    return ''' The message is: {}'''.format(message)

#print(request.choices[0].message.content)