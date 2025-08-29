from flask import Flask, request, jsonify
from flask_cors import CORS
import boto3
from langchain_aws import ChatBedrock

app = Flask(__name__)
CORS(app)

# Initialize AWS Bedrock client
bedrock_client = boto3.client("bedrock-runtime", region_name="us-east-1")

# Initialize LangChain Bedrock wrapper (Claude v2 model)
llm = ChatBedrock(
    client=bedrock_client,
    model_id="anthropic.claude-v2"
)

@app.route('/recommendation', methods=['POST'])
def recommendation():
    try:
        data = request.json
        user_query = data.get("query", "")

        if not user_query:
            return jsonify({"error": "Query is required"}), 400

        # Invoke Bedrock via LangChain
        response = llm.invoke(user_query)

        return jsonify({"recommendation": response.content})
    except Exception as e:
        return jsonify({"error": str(e)}), 500


@app.route('/', methods=['GET'])
def health():
    return "Recommendation Service is running", 200


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5005, debug=True)

