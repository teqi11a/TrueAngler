from datetime import datetime, timedelta, timezone
from typing import Any
import jwt
from passlib.context import CryptContext

from backend.app.core.config import settings


pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")


ALGORITHM = "HS256"

access_token_expires = timedelta(minutes=settings.ACCESS_TOKEN_EXPIRE_MINUTES)

def create_access_token(subject: str | Any) -> str:
    expire = datetime.now(timezone.utc) + access_token_expires
    to_encode = {"exp": expire, "sub": str(subject)}
    encoded_jwt = jwt.encode(to_encode, settings.SECRET_KEY, algorithm=ALGORITHM)
    return encoded_jwt

def decode_token(token: str):
    try:
        payload = jwt.decode(token, settings.SECRET_KEY, algorithms=[ALGORITHM])
        return payload
    except jwt.ExpiredSignatureError:
        raise ValueError("Token expired")
    except jwt.InvalidTokenError:
        raise ValueError("Invalid token")

def verify_password(plain_password: str, hashed_password: str) -> bool:
    return pwd_context.verify(plain_password, hashed_password)


def get_password_hash(password: str) -> str:
    return pwd_context.hash(password)