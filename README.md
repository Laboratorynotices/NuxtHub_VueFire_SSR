# Nuxt 3 VueFire SSR + NuxtHub Experiment

## Overview

This project is an experiment to investigate issues encountered when setting up a Nuxt 3 application with VueFire while enabling Server-Side Rendering (SSR) in NuxHub. The goal is to identify the root cause of the problem and find a working solution.

## Expected Challenges

- Deployment issues specific to NuxHub.

## Experiment Steps

1. **Update Package Manager and Dependencies**

   ```bash
   sudo npm install -g npm@latest nuxi@latest
   ```

2. **Initialize Nuxt 3 Project**

   ```bash
   npx nuxi init . --package-manager npm --force --no-telemetry --no-git-init
   ```

3. **Add NuxtHub Integration**

   ```bash
   npx nuxi module add hub
   npm install --save-dev wrangler
   ```

4. **Configure NuxtHub**

   Update your `nuxt.config.ts` file with the following configuration:

   ```typescript
   export default defineNuxtConfig({
     modules: ["@nuxthub/core"],
     // Other configuration options...
   });
   ```

5. **Deploy the Application**

   ```bash
   npx nuxthub deploy
   ```

   > Note: Initial deployment may take several minutes before the application becomes accessible at its new URL.

6. **Enable SSR**

   ```typescript
   export default defineNuxtConfig({
     ssr: true,
     // Other configuration options...
   });
   ```

7. **First SSR Request**

   Create the file `server/api/hello.ts`:

   ```typescript
   export default defineEventHandler((event) => {
     return {
       hello: "world",
     };
   });
   ```

   In `app.vue`, add the following code to fetch and display the data:

   ```html
   <script setup lang="ts">
     const { data } = await useFetch("/api/hello");
   </script>
   <template>
     <pre>{{ data }}</pre>
   </template>
   ```

8. **Firebase Admin SDK**

   - Download the secret key from [Firebase Console](https://console.firebase.google.com/).
   - Rename the downloaded file to `service-account.json` and place it in the project root.
   - Add `service-account.json` to `.gitignore`.

9. **Install VueFire**

   ```bash
   npm install firebase
   npx nuxi@latest module add vuefire
   npm install firebase-admin firebase-functions @firebase/app-types
   ```

10. **Configure VueFire**

Update `nuxt.config.ts`:

```typescript
export default defineNuxtConfig({
  vuefire: {
    config: {
      apiKey: process.env.GOOGLE_FIREBASE_CONFIG_API_KEY,
      authDomain: process.env.GOOGLE_FIREBASE_CONFIG_AUTH_DOMAIN,
      projectId: process.env.GOOGLE_FIREBASE_CONFIG_PROJECT_ID,
      appId: process.env.GOOGLE_FIREBASE_CONFIG_APP_ID,
    },
  },
  // Other configuration options...
});
```

Add the following to `.env`:

```
GOOGLE_FIREBASE_CONFIG_API_KEY="..."
GOOGLE_FIREBASE_CONFIG_AUTH_DOMAIN="....firebaseapp.com"
GOOGLE_FIREBASE_CONFIG_PROJECT_ID="..."
GOOGLE_FIREBASE_CONFIG_APP_ID="..."
GOOGLE_APPLICATION_CREDENTIALS=/service-account.json
```

## Result

Deployment completes successfully, but the application shows a 500 error. Logs from [NuxtHub Admin](https://admin.hub.nuxt.com/) show:

```
GET 500 /
[nuxt] [request error] [unhandled] [500],Cannot read properties of undefined (reading 'isTTY')

[nuxt] [request error] [unhandled] [500],Cannot read properties of undefined (reading 'isTTY')
```
