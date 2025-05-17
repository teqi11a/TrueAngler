from pydantic import BaseModel


class Settings(BaseModel):
    POSTGRES_USER: str = "user"
    POSTGRES_PASSWORD: str = "password"
    POSTGRES_DB: str = "database"
    POSTGRES_HOST: str = "localhost"
    PROJECT_NAME: str = "Angler"
    VERSION: str = "0.0.1"
    API_PREFIX: str = "/v1"

    class Config:
        env_file = ".env"


settings = Settings()