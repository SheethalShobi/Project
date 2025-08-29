FROM python:3.11-slim

# Environment variables
ENV PYTHONDONTWRITEBYTECODE=1 \
    PYTHONUNBUFFERED=1 \
    PIP_NO_CACHE_DIR=1

# Set working directory
WORKDIR /app

# Copy requirements separately for caching
COPY requirements.txt .

# Install Python dependencies
RUN pip install --upgrade pip \
    && pip install --no-cache-dir -r requirements.txt

# Create a non-root user for security
RUN useradd --create-home appuser

# Copy application code **after creating user**
COPY --chown=appuser:appuser . .

# Expose the port defined in docker-compose.yml
EXPOSE 5001

# Switch to non-root user
USER appuser

# Run the app
CMD ["python", "app.py"]
