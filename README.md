# Portfolio

A small FastAPI portfolio site. The homepage records a visit in a local SQLite
database by default and does not need any other service to run.

## Run locally

```bash
uv sync
uv run fastapi run app/main.py --port 8080
```

Open `http://localhost:8080`.

## Run with Docker

```bash
docker build -t portfolio .
docker run --rm -p 8080:8080 portfolio
```

To preserve visit records between containers, mount a volume at `/tracker` or
provide `DATABASE_URL` for PostgreSQL.

## Update portfolio content

Edit the `experience` and `projects` lists in `app/static/app.js`. Each entry
is rendered as a timeline item, so adding, removing, or reordering an item is
just a small data change. Update the LinkedIn URL in `app/static/index.html`
when you are ready to add your profile.
