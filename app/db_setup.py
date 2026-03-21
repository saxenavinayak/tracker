from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

# This creates a local file named 'test.db' in your project folder
SQLALCHEMY_DATABASE_URL = "sqlite:///./test.db"

# SQLite specific: 'check_same_thread' is needed because FastAPI is async
engine = create_engine(
    SQLALCHEMY_DATABASE_URL, connect_args={"check_same_thread": False}
)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()
