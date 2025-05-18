from fastapi import APIRouter, Depends, HTTPException
from fastapi.security import OAuth2PasswordRequestForm, OAuth2PasswordBearer
from backend.app.core import auth
from backend.app.services import user_service
from pydantic import BaseModel

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="/v1/auth/login")

router = APIRouter()

class LoginRequest(BaseModel):
    username: str
    password: str

@router.post("/login", summary="Аутентификация пользователя")
async def login(credentials: LoginRequest):
    """
    Функция авторизации пользователя и создания токена \n
    :param: credentials: {username: str, password: str}\n
    :return: dict: {'access_token': str, 'token_type': str, user: str}
    """
    user = await user_service.authenticate_user(credentials.username, credentials.password)
    if not user:
        raise HTTPException(status_code=400, detail="Incorrect email or password")

    access_token = auth.create_access_token(user)
    return {
        "token": access_token,
        "token_type": "bearer",
        "user": user
    }

@router.get("/me", summary="Получение текущего авторизованного пользователя")
async def read_users_me(token: str = Depends(oauth2_scheme)):
    """
    Получения текущего пользователя по токену авторизации\n
    :param token: str\n
    :return: dict: {username: str, role: str}
    """
    try:
        payload = auth.decode_token(token)
        return {
            "username": payload.get("login"),
            "role": payload.get("role"),
        }
    except ValueError as e:
        raise HTTPException(status_code=401, detail=str(e))