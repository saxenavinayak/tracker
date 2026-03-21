from sqlalchemy import Column, Integer, String, DateTime
from datetime import datetime
from .db_setup import Base

class records(Base):
    __tablename__ = "visits"

    id = Column(Integer, primary_key=True, index=True)
    ip_address = Column(String)
    requester = Column(String)
    timestamp = Column(DateTime, default=datetime.utcnow)

