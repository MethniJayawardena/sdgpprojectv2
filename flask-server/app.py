# Import necessary modules
import os
from flask import Flask, jsonify
from langchain.chains import RetrievalQA
from langchain.document_loaders import DirectoryLoader
from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain.embeddings import SentenceTransformerEmbeddings
from langchain.chains.question_answering import load_qa_chain
from langchain.vectorstores import Chroma
from langchain.chat_models import ChatOpenAI

# Initialize Flask app
app = Flask(__name__)

# Load documents
directory = '/Users/shehanfernando/Downloads/sdgpprojectv2/file_data'
loader = DirectoryLoader(directory)
documents = loader.load()

# Split documents
text_splitter = RecursiveCharacterTextSplitter(chunk_size=1000, chunk_overlap=20)
docs = text_splitter.split_documents(documents)

# Initialize embeddings
embeddings = SentenceTransformerEmbeddings(model_name="all-MiniLM-L6-v2")

# Create Chroma vector store
db = Chroma.from_documents(docs, embeddings)

# Set up language model
os.environ["OPENAI_API_KEY"] = "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"
model_name = "gpt-3.5-turbo"
llm = ChatOpenAI(model_name=model_name)
chain = load_qa_chain(llm, chain_type="stuff", verbose=True)

# Define route to get data
@app.route('/data')
def get_data():
    query = "what are oop concepts?"
    matching_docs = db.similarity_search(query)
    answer = chain.run(input_documents=matching_docs, question=query)
    
    # Return the answer along with other data
    return {
        'answer': answer, 
        "query":query,
        
        }

# Run the app
if __name__ == '__main__':
    app.run(debug=True)