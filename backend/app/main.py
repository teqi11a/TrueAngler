from fastapi import FastAPI
import uvicorn
from backend.app.core.config import settings
from backend.app.api.v1.api import api_router

def create_application() -> FastAPI:
    api_app = FastAPI(
        title=settings.PROJECT_NAME,
        version=settings.VERSION,
        openapi_url=f"{settings.API_PREFIX}/openapi.json"
    )

    configure_cors(api_app)

    api_app.include_router(api_router, prefix=settings.API_PREFIX)

    return api_app

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
    uvicorn.run(app, host="0.0.0.0", port=8000)