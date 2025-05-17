from pydantic import BaseModel


class Settings(BaseModel):
    POSTGRES_USER: str
    POSTGRES_PASSWORD: str
    POSTGRES_DB: str
    POSTGRES_HOST: str = "localhost"

    class Config:
        env_file = ".env"


settings = Settings()