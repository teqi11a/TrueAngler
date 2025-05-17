# app/main.py
from fastapi import FastAPI
from app.core.config import settings
from app.api.v1.api import api_router

def create_application() -> FastAPI:
    # Создаем экземпляр приложения
    app = FastAPI(
        title=settings.PROJECT_NAME,
        version=settings.VERSION,
        openapi_url=f"{settings.API_PREFIX}/openapi.json"
    )

    # Подключаем CORS (если нужно)
    configure_cors(app)

    # Подключаем роутеры
    app.include_router(api_router, prefix=settings.API_PREFIX)

    return app

def configure_cors(app: FastAPI):
    from fastapi.middleware.cors import CORSMiddleware
    app.add_middleware(
        CORSMiddleware,
        allow_origins=["*"],
        allow_credentials=True,
        allow_methods=["*"],
        allow_headers=["*"],
    )

app = create_application()

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)