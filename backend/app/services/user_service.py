
async def authenticate_user(login: str, password: str):
    if login.lower() == "admin" and password.lower() == "admin":
        return {
            "id": 1,
            "login": "admin",
            "role": "admin"
        }
    return None
