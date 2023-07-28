# G-Sneaker

## Technologies

-   Front-end: ReactJS, TailwindCSS
-   Back-end: ExpressJS, MongoDB

## Installation

### Front-end

```bash
yarn create vite . --template react
```

```bash
yarn add -D tailwindcss postcss autoprefixer
yarn tailwindcss init -p
```

```bash
yarn add axios
```

### Back-end

```bash
yarn add express zod mongoose pino pino-pretty nodemon dayjs dotenv nanoid@3
```

Setup environment variables in `.env`:
- `PORT`: port number
- `MONGO_URI`: MongoDB URI
