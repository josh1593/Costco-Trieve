import requests

url = "https://api.trieve.ai/api/chunk_group/group_oriented_search"

payload = {
    "query": "milk",
    "search_type": "semantic"
}
headers = {
    "TR-Dataset": "f047ddb1-6320-428d-93f2-16b5079ae94b",
    "Authorization": "tr-2DFX9IlzSlnHjaTbADtZFGBr1yuBjPVf",
    "Content-Type": "application/json"
}

response = requests.request("POST", url, json=payload, headers=headers)

print(response.text)