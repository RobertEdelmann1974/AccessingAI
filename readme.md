# Accessing Selfhosted LLM-Models from Servoy
german Version forther down
## Prerequisites

First, we need a self-hosted server where the LLMs run.
The fastest way to set up such a server is with OLLAMA and Open WebUI, then you have the LLMs and a web interface to test the basic function and ask no questions without Servoy

### Docker/Podman

The easiest way to do both is by using a container stack that contains both, since all the necessary prerequisites are then already installed.


For example, if you need a container environment under Windows, you can set this up with the installers from Docker (https://docs.docker.com/desktop/install/windows-install/) or Podman (https://podman.io/docs/installation), which will also set up the required Linux part in the process.


Alternatively, you can also use a virtual machine if you want to load the installation onto the WSL.


Under macOS, there are installers available for Docker (https://docs.docker.com/desktop/install/mac-install/) and Podman (https://podman.io/docs/installation) as well.

### OLLAMA / Open WebUI

To set up both containers, simply use the following definition:

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
      - OLLAMA_BASE_URL=http://ollama:11434
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

And to start both servers, simply create a folder, create a file called docker-compose.yml within it, and add the code there.


Then you can start the servers in that folder using the command docker compose up -d or podman compose up -d


This stack provides a web interface at http://localhost:18080 and an API at http://localhost:11434.

# Deutsche Fassung

## Voraussetzungen

Als Erstes brauchen wir eine selbstgehosteten Server, auf dem die LLMs laufen.

Am schnellsten hat man so einen Server mit von OLLAMA und Open WebUI aufgesetzt, dann hat man die  LLMs  und eine Weboberfläche, um die grundlegende Funktion zu testen und auch ohne Servoy Fragen zu stellen.

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
      - OLLAMA_BASE_URL=http://ollama:11434
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

Um die beiden Server zu starten legen Sie einfach einen Ordner an, erstellen Sie dort eine Datei docker-compose.yml und fügen Sie den Code dort ein.

Dann können Sie in dem Ordner mit dem Befehl `docker compose up -d` bzw. `podman compose up -d`die Server starten

Mit diesem Stack steht eine Weboberfläche unter http://localhost:18080 und die API unter http://localhost:11434 zur Verfügung.


