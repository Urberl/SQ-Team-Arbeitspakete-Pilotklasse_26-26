# SQ-Team-Projekt 26/27: Pilotklasse

Responsive Web-App für das SQ-Team der FOSBOS Weilheim.

## Funktionen

- 12 Arbeitspakete
- Verantwortliche
- Ziel
- Aufgabe
- Deadline
- Ampelstatus: 🟢 Im Plan / 🟡 Achtung / 🔴 Kritisch
- Nächste Schritte
- Speichern
- PDF-Export über den Browser
- optimiert für Smartphone, Tablet und PC
- das **von der Schule bereitgestellte Logo** ist als `logo.jpg` eingebunden

## GitHub Pages

1. Neues GitHub-Repository anlegen.
2. Alle Dateien dieses Ordners hochladen.
3. `Settings → Pages` öffnen.
4. `Deploy from a branch` auswählen.
5. Branch `main` und Ordner `/ (root)` wählen.
6. Speichern.
7. Nach dem Deployment ist die App über den GitHub-Pages-Link erreichbar.

## Gemeinsame Bearbeitung

Die aktuelle Version speichert im Browser (`localStorage`). Damit alle Lehrkräfte über denselben Link dieselben Einträge sehen und bearbeiten, benötigt die App zusätzlich eine gemeinsame Datenbank, z. B. Firebase Realtime Database.

Für eine schulische Nutzung mit personenbezogenen Daten sollte außerdem ein geeignetes Anmelde- und Berechtigungskonzept verwendet werden.
