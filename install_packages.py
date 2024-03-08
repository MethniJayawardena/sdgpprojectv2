import subprocess

# Define the commands to install packages
commands = [
    "pip install openai langchain sentence_transformers -q",
    "pip install chromadb -q",
    "pip install unstructured -q"
]

# Execute each command using subprocess
for command in commands:
    subprocess.run(command, shell=True)
