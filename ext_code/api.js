// AWS Rekognition Processing
// Send base64 encoded image to AWS Rekognition for recognition

import Amplify, { API } from "aws-amplify";
import awsExports from "./aws-exports";

Amplify.configure({
  ...awsExports,
  API: {
    endpoints: [
      {
        name: "rekognition",
        endpoint: "rekognition.us-east-1.amazonaws.com",
        service: "rekognition",
        region: "us-east-1"
      }
    ]
  }
});

async function detectText(bytes) {
  const apiName = "rekognition";
  const path = "/detect-text";
  const body = { Image: { Bytes: bytes } };

  const headers = {
    "X-Amz-Target": "RekognitionService.DetectText",
    "Content-Type": "application/x-amz-json-1.1"
  };

  const init = {
    body: body,
    headers: headers
  };

  return await API.post(apiName, path, init);
}

export { detectText };