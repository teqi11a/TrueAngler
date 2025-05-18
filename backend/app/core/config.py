import os
from pathlib import Path
from dotenv import load_dotenv
from pydantic import BaseModel

BASE_DIR = Path(__file__).resolve().parent.parent.parent
ENV_PATH = BASE_DIR / ".env"

load_dotenv(ENV_PATH)

class Settings(BaseModel):
    POSTGRES_USER: str = "user"
    POSTGRES_PASSWORD: str = "password"
    POSTGRES_DB: str = "database"
    POSTGRES_HOST: str = "localhost"
    PROJECT_NAME: str = "Angler"
    VERSION: str = "0.0.1"
    API_PREFIX: str = "/v1"
    SECRET_KEY: str = os.getenv("SECRET_KEY")

    class Config:
        env_file = ENV_PATH


settings = Settings()