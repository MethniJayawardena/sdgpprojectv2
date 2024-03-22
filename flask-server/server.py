import sys
from flask import Flask, request, jsonify, render_template

# Add the directory containing the RAG model to the Python path
sys.path.append('/Users/shehanfernando/Downloads/sdgpprojectv2/RageModel.ipynb')

# Import the RAG model from the directory
from RageModel import MyRAGModel  # Replace with the appropriate import statement for your RAG model

app = Flask(__name__)

# Route to serve the HTML file
@app.route('/')
def index():
    return render_template('index.html')

# Route to handle question and return answer
@app.route('/ask', methods=['POST'])
def ask_question():
    data = request.json
    question = data.get('query')

    # Initialize and use the RAG model to answer the question
    rag_model = MyRAGModel('/path/to/rag_model_checkpoint')  # Initialize the RAG model with appropriate parameters
    answer = rag_model.answer_question(question)

    return jsonify({"answer": answer})

if __name__ == '__main__':
    app.run(debug=True)
