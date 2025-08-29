from flask import Flask, request, jsonify
from flask_cors import CORS
from pymongo import MongoClient
import os

app = Flask(__name__)
CORS(app)

mongo_uri = os.getenv("MONGO_URI", "mongodb://flight-mongo:27017/")
client = MongoClient(mongo_uri)
db = client.flightdb
flights = db.flights

@app.route('/flights', methods=['GET'])
def get_flights():
    return jsonify(list(flights.find({}, {'_id': 0})))

@app.route('/book', methods=['POST'])
def book_flight():
    data = request.json
    flights.insert_one(data)
    return jsonify({"message":"Flight booked successfully"})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5003, debug=True)
