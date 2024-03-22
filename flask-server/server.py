from msilib import Directory
import sys
from flask import Flask, request, jsonify, render_template

# Add the directory containing the RAG model to the Python path
sys.path.append('/Users/shehanfernando/Downloads/sdgpprojectv2/flask-server/rag_model.py')

# Import the RAG model from the directory
from rag import MyRAGModel, load_documents, split_documents, SentenceTransformerEmbeddings, create_vector_store  # Replace with the appropriate import statement for your RAG model

app = Flask(__name__)

# Load documents, split into chunks, and create vector store
persist_directory = "chroma_db"  # Define the persist directory here
documents = load_documents(Directory)
docs = split_documents(documents)
embeddings = SentenceTransformerEmbeddings(model_name="all-MiniLM-L6-v2")
db = create_vector_store(docs, embeddings, persist_directory=persist_directory)

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
    rag_model = MyRAGModel('/Users/shehanfernando/Downloads/sdgpprojectv2/flask-server/rag_model.py')  # Initialize the RAG model with appropriate parameters
    answer = rag_model.answer_question(question)

    return jsonify({"answer": answer})

if __name__ == '__main__':
    app.run(debug=True)
