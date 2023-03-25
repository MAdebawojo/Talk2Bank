import openai

#open api key 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
openai.api_key = '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'

request = openai.ChatCompletion.create(model = "gpt-3.5-turbo",
messages = [{"role":"system", "content":"Your name is Talk2bank. You are a helpful assistant that detects and communicates with any african language to the user."}, 
{"role":"user","content":message}]) #message is a variable that stores any request made by the customers.

@app.route('/json-example', methods=['POST'])
def json_example():
    request_data = request.get_json()

    message = None
    if request_data:
        if 'message' in request_data:
            language = request_data['message']
    return ''' The message is: {}'''.format(message)

#print(request.choices[0].message.content)