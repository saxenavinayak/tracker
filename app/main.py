from fastapi import FastAPI, Request
from fastapi.responses import RedirectResponse, HTMLResponse

app = FastAPI()

@app.get("/")
async def root(request: Request):

    requestor_ip = request.client.host
    headers = dict(request.headers)

    user_agent = request.headers.get("user-agent")
    print(requestor_ip, headers, user_agent)
    
    content = """
    <html>
        <head>
            <meta http-equiv="refresh" content="3;url=https://github.com/saxenavinayak" />
        </head>
        <body>
            <h1>Hello from Waterloo!</h1>
            <p> Redirecting in 3 seconds...</p>
        </body>
    </html>
    """
    return HTMLResponse(content=content)


