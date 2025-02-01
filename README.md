# Nuxt 3 VueFire SSR + NuxtHub Experiment

## Overview

This project is an experiment to investigate issues encountered when setting up a Nuxt 3 application with VueFire while enabling Server-Side Rendering (SSR) in NuxHub. The goal is to identify the root cause of the problem and find a working solution.

## Expected Challenges

- Deployment issues specific to NuxHub.

## Experiment Steps

1. **[Update Package Manager and Dependencies](https://github.com/Laboratorynotices/NuxtHub_VueFire_SSR/tree/b3e68d69c668d99c81131915aaf2d428b4471b1d)**

   ```bash
   sudo npm install -g npm@latest nuxi@latest
   ```

2. **[Initialize Nuxt 3 Project](https://github.com/Laboratorynotices/NuxtHub_VueFire_SSR/tree/a535c70e811d33d19bdaa8f308f356750d3e04fb)**

   ```bash
   npx nuxi init . --package-manager npm --force --no-telemetry --no-git-init
   ```

3. **[Add NuxtHub Integration](https://github.com/Laboratorynotices/NuxtHub_VueFire_SSR/tree/1fb82c796744d79790778cbdc2affa6085ad5aab)**

   Following the [official NuxtHub documentation](https://hub.nuxt.com/docs/getting-started/installation#add-to-a-nuxt-project), execute:

   ```bash
   npx nuxi module add hub
   npm install --save-dev wrangler
   ```

4. **[Configure NuxtHub](https://github.com/Laboratorynotices/NuxtHub_VueFire_SSR/tree/806fdfaae022b8f7951f201d1826516b80a22376)**

   Update your `nuxt.config.ts` file with the following configuration:

   ```typescript
   export default defineNuxtConfig({
     modules: ["@nuxthub/core"],
     // Other configuration options...
   });
   ```

5. **Deploy the Application**

   Now we can deploy the project:

   ```bash
   npx nuxthub deploy
   ```

   > Note: Initial deployment may take several minutes before the application becomes accessible at its new URL.

6. **[Enable SSR](https://github.com/Laboratorynotices/NuxtHub_VueFire_SSR/tree/88f829fb5ec220a949bb09ccd2c61f57ef328ea3)**

   Enable SSR by updating the `nuxt.config.ts` file with the following configuration:

   ```typescript
   export default defineNuxtConfig({
     ssr: true,
     // Other configuration options...
   });
   ```

7. **[First SSR Request](https://github.com/Laboratorynotices/NuxtHub_VueFire_SSR/tree/8e2f6c8e34d28a09c0b4ecb1caeec2413a520147)**

   Following the instructions from [Nuxt Documentation](https://nuxt.com/docs/guide/directory-structure/server), create the file `server/api/hello.ts`:

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

...
