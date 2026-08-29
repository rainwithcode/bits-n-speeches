# Bits ’N Speeches

A modern web application for managing a Toastmasters club.

The project consists of:

- A **public website** for guests and prospective members.
- A **member portal** for managing meetings, RSVPs, roles, and club resources.
- An **administration portal** for officers to manage the club.

---

## Tech Stack

| Technology      | Purpose                                      |
| --------------- | -------------------------------------------- |
| Next.js         | Builds the website and club portal.          |
| TypeScript      | Provides static type checking.               |
| Tailwind CSS    | Styles the user interface.                   |
| shadcn/ui       | Provides reusable UI components.             |
| Supabase        | Authentication, database, storage, and APIs. |
| PostgreSQL      | Stores application data.                     |
| TanStack Query  | Fetches and caches server data.              |
| React Hook Form | Builds and manages forms.                    |
| Zod             | Validates user input.                        |
| Vitest          | Unit and component testing.                  |
| Vercel          | Deployment and hosting.                      |

---

## Features

### Public Website

- Home
- About
- Meetings
- Membership
- Contact
- Member Login

### Club Portal

- Authentication
- Dashboard
- Meeting Management
- Member Directory
- Resources
- Account Management

### Administration

- Meeting Management
- Member Management
- Role Assignments
- Resource Management
- Club Settings

---

## Project Structure

```text
src/
├── app/
├── components/
├── features/
├── lib/
├── hooks/
├── types/
├── utils/
└── styles/
```

---

## Getting Started

### Prerequisites

- Node.js
- pnpm

### Installation

```bash
pnpm install
```

### Start the development server

```bash
pnpm dev
```

Open your browser at:

```
http://localhost:3000
```

---

## Available Scripts

| Command      | Description                   |
| ------------ | ----------------------------- |
| `pnpm dev`   | Start the development server. |
| `pnpm build` | Create a production build.    |
| `pnpm start` | Start the production server.  |
| `pnpm lint`  | Run ESLint.                   |
| `pnpm test`  | Run Vitest.                   |

---

## Roadmap

### Public Website

- [ ] Home
- [ ] About
- [ ] Meetings
- [ ] Membership
- [ ] Contact

### Club Portal

- [ ] Authentication
- [ ] Dashboard
- [ ] Meetings
- [ ] Members
- [ ] Resources
- [ ] My Account

### Administration

- [ ] Meeting Management
- [ ] Member Management
- [ ] Role Assignments
- [ ] Resource Management
- [ ] Club Settings

---

## License

This project is licensed under the MIT License.
