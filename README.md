<div align="center">

<img src="./public/images/icon.png" width="120" alt="helloNova"/>

# helloNova

### Your AI Phone Assistant.

Answer calls intelligently. Filter spam. Understand conversations.
Never miss what matters.

<p align="center">
  <a href="https://hudo.co.in">
    <img src="https://img.shields.io/badge/Website-hudo.co.in-2563EB?style=for-the-badge">
  </a>
  <img src="https://img.shields.io/badge/Status-Building-0EA5E9?style=for-the-badge">
  <img src="https://img.shields.io/badge/Made%20with-Next.js-black?style=for-the-badge">
</p>

</div>

---

## Overview

helloNova is an AI-powered phone assistant that answers incoming calls on your behalf, understands conversations in real time, filters spam, summarizes important discussions, and remembers what matters.

Instead of interrupting your day, helloNova decides whether a call deserves your attention.

# Why helloNova?

Today's phones demand attention.

- Unknown callers
- Spam calls
- Missed opportunities
- Endless interruptions

helloNova changes that.

It listens first.

You decide later.

---

# Features

### AI Call Answering

Natural human-like conversations with callers.

---

### Spam Detection

Automatically filters unwanted callers before they waste your time.

---

### Live Call Understanding

Real-time speech recognition and AI reasoning.

---

### Smart Memory

Remembers previous conversations and caller context.

---

### AI Call Summary

Receive concise summaries after every call.

---

### Privacy First

Your conversations remain secure and encrypted.

---

# Tech Stack

| Frontend | Backend | AI | Infrastructure |
|-----------|----------|----|---------------|
| Next.js 16 | Node.js | Claude / GPT | AWS |
| React | Express | Deepgram | Redis |
| Tailwind CSS | PostgreSQL | Cartesia | Qdrant |
| Framer Motion | WebSockets | Embeddings | Docker |

---

# Architecture

```text
Caller

     │

Twilio Voice

     │

Voice Pipeline

     │

Speech → LLM → Speech

     │

Context Builder

     │

Memory Engine

     │

Automation Engine

     │

Summary
```

---

# Product Vision

helloNova isn't another voice assistant.

It becomes your communication layer.

Instead of answering every phone call,
you simply receive the important ones.

---

# Project Structure

```
src
│
├── app
│   ├── api
│   ├── components
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
│
├── lib
│
└── public
```

---

# Getting Started

Clone the repository

```bash
git clone https://github.com/hrithikksham/hellonova.git
```

Install dependencies

```bash
npm install
```

Run locally

```bash
npm run dev
```

Build production

```bash
npm run build
```

---

# Environment Variables

```env
RESEND_API_KEY=

TWILIO_ACCOUNT_SID=
TWILIO_AUTH_TOKEN=

OPENAI_API_KEY=

DEEPGRAM_API_KEY=

DATABASE_URL=

REDIS_URL=
```

---

# Contributing

Contributions, ideas and feedback are always welcome.

If you'd like to help shape helloNova, feel free to open an issue or submit a pull request.

---

# Built by

### HUDO

Building the future of AI communication.

https://hudo.co.in

---

<div align="center">

### Less interruption.

### More focus.

## helloNova

</div>
