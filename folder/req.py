from flask import Flask, render_template, request, jsonify
import requests

app = Flask(__name__)

# Define the IP address or hostname of the Python PC (replace with the actual IP)
python_pc_ip = 'localhost'


@app.route('/')
def index():
    # Display the web page
    return render_template('index.html')

@app.route('/get_images', methods=['GET'])
def get_images():
    # Request the images from the Python PC
    response = requests.get(f'http://{python_pc_ip}:80/get_images').json()
    return jsonify(response)

if __name__ == '__main__':
    app.run(host='127.0.0.1',port = 5001, debug=True)
