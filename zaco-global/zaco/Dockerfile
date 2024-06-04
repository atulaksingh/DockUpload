# Use an official Python runtime as a parent image
FROM python:3.9-slim

# The working directory
WORKDIR /app

# Copy requirements.txt 
COPY requirments.txt requirments.txt

# Running the requirements.txt file
RUN pip3 install -r requirments.txt

# Copy all the folders
COPY . .

# Run the commands
CMD ["python3", "manage.py", "runserver", "0.0.0.0:8000"]