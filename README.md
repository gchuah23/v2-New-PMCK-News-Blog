# PMCK Health News Blog

This project is a Vite + React application integrated with Supabase. It is configured for automatic deployment on Netlify.

## Features

- **React + Vite**: Fast development and bundling with modern ES modules.
- **Supabase**: Uses a hard-coded Supabase project URL and anonymous key in `src/lib/supabaseClient.ts`. Row-level security policies on your Supabase tables ensure that only authorized data is accessible.
- **Netlify**: Includes a `netlify.toml` file so that when you connect this repository to Netlify, it will automatically build and deploy the app.

## Getting Started

1. Install dependencies:

   ```sh
   npm install
   ```

2. Start the development server:

   ```sh
   npm run dev
   ```

   Visit `http://localhost:5173/` to view the site locally.

3. Build the project:

   ```sh
   npm run build
   ```

   The optimized production assets will be output to the `dist` folder.

## Deployment

To deploy on Netlify:

1. Push this code to your GitHub repository.
2. In Netlify, create a new site by connecting it to your GitHub repository.
3. In the build settings, Netlify will detect the `netlify.toml` file and automatically use `npm run build` and publish the `dist` directory.

Once deployed, the site will connect to your Supabase backend using the credentials embedded in `src/lib/supabaseClient.ts`.

## Notes

- Do **not** commit any sensitive keys (other than the public anonymous Supabase key) to version control. Only the anonymous key is included here.
- If you need additional environment variables (for example, secret API keys), you should set them in the Netlify dashboard under **Site settings → Environment variables**.

