# Enterprise React Architecture

A modern React application demonstrating **enterprise frontend architecture** using the latest React ecosystem. This project focuses on scalable folder structure, authentication, state management, routing, API integration, internationalization, and reusable UI patterns commonly found in large enterprise applications.

## Tech Stack

- React 19
- TypeScript
- Vite
- React Router 7
- TanStack Query v5
- Axios
- Material UI
- MSW (Mock Service Worker)
- i18next

## Features

- JWT Authentication
- Refresh Token Flow
- Protected Routes
- Dashboard
- Users Module
- Internationalization (English & French)
- Enterprise Folder Structure
- Shared Design System
- Error Boundaries
- TanStack Query
- Mock APIs with MSW

## Getting Started

### Install dependencies

```bash
npm install
```

### Start the frontend

```bash
npm run dev
```

Frontend runs at:

```text
http://localhost:3000
```

### Start the backend

```bash
cd server
npm install
npm start
```

Backend runs at:

```text
http://localhost:5000
```

## Default Login

```text
Username: johndoe
Password: JohnDoe@123
```

## Project Structure

```text
src
├── app
├── assets
├── design-system
├── features
├── layouts
├── lib
├── mocks
├── services
├── shared
└── types
```

## Purpose

This project serves as a reference implementation for building scalable, maintainable, and enterprise-ready React applications while following modern frontend architecture and best practices.
