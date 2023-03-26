import openai
from flask import Flask
from FAQ import faq

#open api key- put your own api key
# always remember to remove your ai key before you push the code
openai.api_key = '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'

faq_string = ""

for i, (question, answer) in enumerate(faq.items()):
    faq_string += f"{i+1}. FAQ: {question}\nResponse: {answer}\n\n"

print(faq_string)
request = openai.ChatCompletion.create(model = "gpt-3.5-turbo",
messages = [{"role":"system", "content":"Your name is Talk2bank. You are a helpful assistant that detects and communicates with any african language to the user. In addition to your main role, you are to answer any FAQ questions with the appropriate answer from faq_string"}, 
{"role":"user","content":messsage}]) #message is a variable that stores any request made by the customers.

print(request['choices'][0]['message']['content'])
@app.route('/json-example', methods=['POST'])
def json_example():
    request_data = request.get_json()

    message = None
    if request_data:
        if 'message' in request_data:
            language = request_data['message']
    return ''' The message is: {}'''.format(message)

#print(request.choices[0].message.content)