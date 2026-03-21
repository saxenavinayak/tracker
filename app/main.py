from fastapi import FastAPI, Request, Depends
from fastapi.responses import HTMLResponse
from sqlalchemy.orm import Session
from . import models, db_setup


models.Base.metadata.create_all(bind=db_setup.engine)

app = FastAPI()

# Dependency to get a DB session
def get_db():
    db = db_setup.SessionLocal()
    try:
        yield db
    finally:
        db.close()


@app.get("/")
async def root(request: Request, db: Session = Depends(get_db)):

    requestor_ip = request.client.host
    user_agent = request.headers.get("user-agent")
    # headers = dict(request.headers)

    new_visit = models.records(ip_address=requestor_ip, requester=user_agent)
    db.add(new_visit)
    db.commit()

    
    
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


