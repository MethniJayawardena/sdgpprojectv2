# Import necessary libraries
from flask import Flask, request, jsonify
from langchain.chains import RetrievalQA
from langchain.document_loaders import DirectoryLoader
from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain.embeddings import SentenceTransformerEmbeddings
from langchain.vectorstores import Chroma
from langchain.chat_models import ChatOpenAI

# Initialize Flask app
app = Flask(__name__, static_url_path='')

# Load documents from file_data directory
directory = '/content/file_data'
loader = DirectoryLoader(directory)
documents = loader.load()

# Split documents into chunks
text_splitter = RecursiveCharacterTextSplitter(chunk_size=1000, chunk_overlap=20)
docs = text_splitter.split_documents(documents)

# Initialize SentenceTransformer for embeddings
embeddings = SentenceTransformerEmbeddings(model_name="all-MiniLM-L6-v2")

# Create Chroma vector store
db = Chroma.from_documents(docs, embeddings)

# Initialize OpenAI Chat model
model_name = "gpt-3.5-turbo"
llm = ChatOpenAI(model_name=model_name)

# Initialize RetrievalQA chain
retrieval_chain = RetrievalQA.from_chain_type(llm, chain_type="stuff", retriever=db.as_retriever())

@app.route('/')
def index():
    # Return the HTML file for the frontend
    return app.send_static_file('index.html')

@app.route('/question', methods=['POST'])
def ask_question():
    data = request.json
    query = data['query']
    
    # Use the retrieval chain to get the answer
    answer = retrieval_chain.run(query)
    
    return jsonify({'answer': answer})

if __name__ == '__main__':
    # Run the app
    app.run(debug=True)
