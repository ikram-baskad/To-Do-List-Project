# Sparkle Todos

A small, static todo web app with a light-pink, white and black theme. It stores todos in your browser (localStorage).

Files
- `index.html` — main page
- `css/styles.css` — styling (light pink / white / black)
- `js/app.js` — todo logic (add / toggle / delete / persist)

How to use

- Option A — open directly
  - Double-click `index.html` in your file explorer or open it in your browser (file://).

- Option B — run a simple local server (recommended for some browser features)
  - From PowerShell, in the project folder (`todolist2`), run:

```powershell
python -m http.server 8000

# then open http://localhost:8000 in your browser
```

Notes
- Todos are saved in your browser under the key `sparkle-todos-v1` and will persist between page reloads.
- This is intentionally small and dependency-free. If you want enhancements (user accounts, sync, animations, tests), tell me which direction you prefer.
