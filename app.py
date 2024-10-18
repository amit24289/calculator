# app.py (Python Backend)
from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/calculate', methods=['POST'])
def calculate():
    try:
        expression = request.form['expression']
        result = eval(expression)  # Dangerous in production, use with caution!
        return jsonify({'result': result})
    except Exception as e:
        return jsonify({'result': 'error'})

if __name__ == '__main__':
    app.run(debug=True)
