from collections.abc import Generator
from sqlmodel import Session

from backend.app.core.database import engine


def get_db() -> Generator[Session, None, None]:
    with Session(engine) as session:
        yield session
