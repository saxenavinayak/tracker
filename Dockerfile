FROM python:3.11-slim
COPY --from=ghcr.io/astral-sh/uv:0.9.2 /uv /bin/

WORKDIR /tracker

COPY . .
RUN uv sync --no-dev

EXPOSE 8080
CMD ["uv", "run", "fastapi", "run", "app/main.py", "--host", "0.0.0.0", "--port", "8080"]
