from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import json
import os
from datetime import datetime

app = FastAPI(title="DataFlow Solutions API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_methods=["*"],
    allow_headers=["*"],
)

CONTACTS_FILE = "contacts.json"


class ContactForm(BaseModel):
    name: str
    email: str
    phone: str = ""
    service: str = ""
    message: str


def save_contact(data: dict):
    contacts = []
    if os.path.exists(CONTACTS_FILE):
        with open(CONTACTS_FILE, "r") as f:
            contacts = json.load(f)
    contacts.append(data)
    with open(CONTACTS_FILE, "w") as f:
        json.dump(contacts, f, indent=2)


@app.post("/api/contact")
async def submit_contact(form: ContactForm):
    entry = {
        **form.dict(),
        "submitted_at": datetime.now().isoformat(),
        "status": "new",
    }
    save_contact(entry)
    # In production: send email notification to admin here
    print(f"\n📬 NEW CONTACT: {form.name} | {form.email} | Service: {form.service}\n")
    return {"success": True, "message": "Thank you! We will get back to you shortly."}


@app.get("/api/contacts")
async def get_contacts():
    if not os.path.exists(CONTACTS_FILE):
        return []
    with open(CONTACTS_FILE, "r") as f:
        return json.load(f)


@app.get("/")
async def root():
    return {"status": "DataFlow Solutions API running"}
