# Accessing Selfhosted LLM-Models from Servoy
german Version forther down
## Prerequisites

### Docker/Podman

### OLLAMA / Open WebUI


## Deutsche Fassung

## Voraussetzungen

Als Erstes brauchen wir mal eine selbstgehosteten Server, auf dem die LLMs laufen.

Am schnellsten hat man so einen Server mit von OLLAMA und Open WebUI augesetzt, dann hat man die  LLMs  und eine Weboberfläche, um die grundlegende Funktion zu testen und auch ohne Servoy Fragen zu stellen.

### Docker/Podman

Am einfachsten kann beides mithilfe eines Container-Stacks, der beides enthält, starten, da sind dann gleich alle Voraussetzungen mitinstalliert.

Wenn man z.B. unter Windows eine Container-Umgebung braucht, kann man dies mit den Installern von Docker (https://docs.docker.com/desktop/install/windows-install/) oder Podman (https://podman.io/docs/installation) einrichten, der nötige Linux-Teil wird dabei auch eingerichtet.

Alternativ kann auch eine virtuelle Maschine verwendet werden, wenn man die Installation mit dem dem WSL belasten möchte.

Unter MacOS gibt es ebenfalls Installer für Docker (https://docs.docker.com/desktop/install/mac-install/) bzw. Podman (https://podman.io/docs/installation).

### OLLAMA/Open WebUI

Um die beiden Container einzurichten, verwenden Sie einfach folgende Definition:

```YAML
version: "3.8"
services:
  webui:
    image: ghcr.io/open-webui/open-webui:main
    expose:
      - 8080/tcp
    ports:
      - 18080:8080/tcp
    environment:
      - USE_OLLAMA_DOCKER=true
      - WEBUI_AUTH=false
      - OLLAMA_BASE_URL=http://localhost:11434
    volumes:
      - ./openwebui:/app/backend/data
    depends_on:
      - ollama
    restart: unless-stopped
  ollama:
    image: ollama/ollama
    expose:
      - 11434/tcp
    ports:
      - 11434:11434/tcp
    healthcheck:
      test: ollama --version || exit 1
    command: serve
    volumes:
      - ./ollama:/root/.ollama
    restart: unless-stopped
```

Um die beiden Server zu starten legen Sie einfach einen Ordner an, erstellen Sie dort eine Datei docker-compose.yaml und fügen Sie den Code dort ein.

Dann können Sie in dem Ordner mit dem Befehl `docker compose up -d` bzw. `podman compose up -d`die Server starten

Mit diesem Stack steht eine Weboberfläche unter http://localhost:18080 und die API unter http://localhost:11434 zur Verfügung.


