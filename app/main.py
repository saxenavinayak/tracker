from pathlib import Path

from fastapi import FastAPI, Request, Depends
from fastapi.responses import HTMLResponse
from fastapi.staticfiles import StaticFiles
from sqlalchemy.orm import Session
from . import models, db_setup


models.Base.metadata.create_all(bind=db_setup.engine)

STATIC_DIRECTORY = Path(__file__).parent / "static"
app = FastAPI(title="Vinayak Saxena | Portfolio")
app.mount("/static", StaticFiles(directory=STATIC_DIRECTORY), name="static")

# Dependency to get a DB session
def get_db():
    db = db_setup.SessionLocal()
    try:
        yield db
    finally:
        db.close()


@app.get("/")
@app.get("/experience")
@app.get("/projects")
@app.get("/education")
async def portfolio(request: Request, db: Session = Depends(get_db)):

    requestor_ip = request.client.host
    user_agent = request.headers.get("user-agent")
    # headers = dict(request.headers)

    new_visit = models.records(ip_address=requestor_ip, requester=user_agent)
    db.add(new_visit)
    db.commit()

    
    
    with (STATIC_DIRECTORY / "index.html").open(encoding="utf-8") as page:
        content = page.read()
    return HTMLResponse(content=content)
