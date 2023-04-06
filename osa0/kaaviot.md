# osa0 - Web-sovelluksen toimintaperiaatteita

## 0.4: uusi muistiinpano

```mermaid
sequenceDiagram
    participant browser
    participant server
    
    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note
    Note right of browser: Selain lähettää uuden noten palvelimelle
    activate server
    server-->> browser: HTTP 302, Uudelleenohjauspyyntö (redirect) osoitteeseen /exampleapp/notes
    Note left of server: Palvelin pyytää latamaan notes sivun uudestaan    
    deactivate server
    
     browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/notes
    activate server
    server-->>browser: html tiedosto
    deactivate server
    
    
    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    activate server
    server-->>browser: css tiedosto
    deactivate server
    
    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.js
    activate server
    server-->>browser: JavaScript tiedosto
    deactivate server
    
    Note right of browser: Selain suorittaa JS koodin joka noutaa JSONin palvelimelta
    
    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    activate server
    server-->>browser: [{ "content": "HTML is easy", "date": "2023-1-1" }, ... ]
    deactivate server    

    Note right of browser: The browser executes the callback function that renders the notes 
```

## 0.5: Single Page App

```mermaid
sequenceDiagram
    participant browser
    participant server
    
    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa
    activate server
    server-->> browser: HTML tiedosto
    deactivate server
    
     browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    activate server
    server-->>browser: css tiedosto
    deactivate server
    
    
    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa.js
    activate server
    server-->>browser: js tiedosto
    deactivate server
    
    browser->>server: https://studies.cs.helsinki.fi/exampleapp/data.json
    activate server
    server-->>browser: [{"content":"I love MEN","date":"2023-03-17T13:32:46.556Z"},{"content":"I KISS BOYS","date":"2023-03-17T13:32:53.176Z"}
    deactivate server
        
    browser->>server: GET https://studies.cs.helsinki.fi/favicon.ico
    activate server
    server-->>browser: favicon linkki
    deactivate server    

```

## 0.6: Uusi muistiinpano *(SAP)*

```mermaid
sequenceDiagram
    participant browser
    participant server
    
    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    Note right of browser: Selain lähettää uuden noten JSON muodossa
    activate server
    server-->> browser: Status 201, viesti note created   
    deactivate server
    
    
    Note left of server: Enempää HTTP pyyntöjä ei lähetetä
