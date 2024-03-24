from langchain.document_loaders import DirectoryLoader
from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain.embeddings import SentenceTransformerEmbeddings
from langchain.vectorstores import Chroma
from langchain.chat_models import ChatOpenAI
from langchain.chains.question_answering import load_qa_chain

# Function to load documents from a directory
def load_documents(directory):
    loader = DirectoryLoader(directory)
    documents = loader.load()
    return documents

# Function to split documents into chunks
def split_documents(documents, chunk_size=1000, chunk_overlap=20):
    text_splitter = RecursiveCharacterTextSplitter(chunk_size=chunk_size, chunk_overlap=chunk_overlap)
    docs = text_splitter.split_documents(documents)
    return docs

# Function to create a vector store from documents
def create_vector_store(docs, embeddings, persist_directory=None):
    if persist_directory:
        db = Chroma.from_documents(documents=docs, embedding=embeddings, persist_directory=persist_directory)
    else:
        db = Chroma.from_documents(documents=docs, embedding=embeddings)
    return db


# Function to load a language model
def load_language_model(model_name):
    llm = ChatOpenAI(model_name=model_name)
    return llm

# Function to create a QA chain
def create_qa_chain(llm, db):
    chain = load_qa_chain(llm, chain_type="stuff", verbose=True, retriever=db.as_retriever())
    return chain

# Function to answer a question using the QA chain
def answer_question(chain, query):
    answer = chain.run(question=query)
    return answer

# Example usage
if __name__ == "__main__":
    import os
    os.environ["OPENAI_API_KEY"] = "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"
    directory = '/Users/shehanfernando/Downloads/sdgpprojectv2/file_data'
    documents = load_documents(directory)
    docs = split_documents(documents)
    embeddings = SentenceTransformerEmbeddings(model_name="all-MiniLM-L6-v2")
    persist_directory = "chroma_db"
    db = create_vector_store(docs, embeddings, persist_directory=persist_directory)
    llm = load_language_model("gpt-3.5-turbo")
    chain = create_qa_chain(llm, db)

    query = "What is cloud computing?"
    matching_docs = db.similarity_search(query)
    answer = chain.run(input_documents=matching_docs, question=query)
    print(answer)
