<!-- markdownlint-disable first-line-h1 -->
<!-- markdownlint-disable html -->
<!-- markdownlint-disable no-duplicate-header -->

<div align="center">
  <img src="https://i.ibb.co/ns0wZdtj/I-20250310-004605-0000-1-removebg-preview.png/" width="30%" alt="Talem AI" />
</div>
<hr>
<div align="center" style="line-height: 1;">
  <a href="https://talem.org/ai"><img alt="Demo"
    src="https://img.shields.io/badge/🚀%20Live%20Demo-Talem%20AI-2F80ED?color=2F80ED&logoColor=white"/></a>
  <a href="https://huggingface.co/microsoft/Phi-3.5-mini-instruct"><img alt="Model Hub"
    src="https://img.shields.io/badge/🧠%20Model%20Hub-Talem%20AI-8E44AD?color=8E44AD&logoColor=white"/></a>
  <br>
  <a href="https://twitter.com/talem_ai"><img alt="Twitter"
    src="https://img.shields.io/badge/Twitter-@talem__ai-1DA1F2?logo=x&logoColor=white"/></a>
  <br>
  <a href="LICENSE-CODE"><img alt="Code License"
    src="https://img.shields.io/badge/Code%20License-Apache%202.0-00BFFF?color=00BFFF"/></a>
  <br>
</div>

## Table of Contents

1. [Introduction](#1-introduction)  
2. [Key Technologies](#2-key-technologies)  
3. [Developer Credits](#3-developer-credits)  
4. [Demo](#4-demo)

## 1. Introduction

Talem AI is a RAG application. This codebase holds the code for the REST API mircoservice hosting the backend functions. It's main purpose is to act like a Q&A chatbot who provides answers to prompts about different college programs. To gain specialized context within this domain, we vectorize college information brochours and through **Langchain**, this information is retrieved based on it's similarity to the user's prompt and given as **context** to the prompt into MistralAI LLM hosted on HuggingFace

## 2. Key Technologies

- Python 🐍
- LangChain 👨‍🔬
- AstraDB 💽
- Groq REST API
- LLAMA model hosted through Groq infrastructure
- sentence-transformers model (for vector embeddings) provided by HuggingFace
- FastAPI to build the REST API mircoservice

## 3. Developer Credits

The following people are recognized for their contribution to the Talem AI project. A huge thanks from the staff at Talem!

- Hemit Patel (Chief Technology Officer)

## 4. Demo

Here is a picture of a demo of Talem AI at work!

![image](https://github.com/user-attachments/assets/52d6cff6-cc5d-4621-a112-3777cc324ded)
