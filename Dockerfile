FROM python:3.11
COPY --from=ghcr.io/astral-sh/uv:0.9.2 /uv /bin/

RUN mkdir tracker
WORKDIR  /tracker


COPY pyproject.toml /tracker/


RUN uv sync 

COPY . .

CMD ["uv", "run", "fastapi", "run", "app/main.py", "--port", "8080"]