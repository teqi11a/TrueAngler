from sqlmodel import Session, create_engine, select
from sqlmodel import SQLModel

from backend.app.core.config import settings


engine = create_engine(str(settings.POSTGRES_HOST))

def init_db() -> None:

    SQLModel.metadata.create_all(engine)