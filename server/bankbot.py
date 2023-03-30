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

request = openai.ChatCompletion.create(model = "gpt-3.5-turbo",
messages = [
    {"role":"system", "content":f"Your name is Talk2bank. You are a helpful assistant that detects and communicates with any african language to the user. In addition to your main role, you are to answer any FAQ questions with the appropriate answer from {faq_string}"}, 
    {"role":"user","content":message}
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