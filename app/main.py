from fastapi import FastAPI, Request
from fastapi.responses import RedirectResponse

app = FastAPI()

@app.get("/")
async def root(request: Request):
    requestor_ip = request.client.host
    headers = dict(request.headers)

    user_agent = request.headers.get("user-agent")
    print(requestor_ip, headers, user_agent)
    return RedirectResponse(url="https://github.com/saxenavinayak")
