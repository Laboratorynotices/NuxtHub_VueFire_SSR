# Nuxt 3 VueFire SSR + NuxtHub Experiment

## Overview

This project is an experiment to investigate issues encountered when setting up a Nuxt 3 application with VueFire while enabling Server-Side Rendering (SSR) in NuxHub. The goal is to identify the root cause of the problem and find a working solution.

## Expected Challenges

- Deployment issues specific to NuxHub.

## Experiment Steps

1. **[Update Packages](https://github.com/Laboratorynotices/NuxtHub_VueFire_SSR/tree/b3e68d69c668d99c81131915aaf2d428b4471b1d)**

```Shell
sudo npm install -g npm@latest nuxi@latest
```

2. **[Install Nuxt 3](https://github.com/Laboratorynotices/NuxtHub_VueFire_SSR/tree/a535c70e811d33d19bdaa8f308f356750d3e04fb)**
   - Run the following command in the project directory:

```Shell
npx nuxi init . --package-manager npm --force --no-telemetry --no-git-init
```

3. **[Add NuxtHub to the project](https://github.com/Laboratorynotices/NuxtHub_VueFire_SSR/tree/1fb82c796744d79790778cbdc2affa6085ad5aab)**

- Following the instructions at https://hub.nuxt.com/docs/getting-started/installation#add-to-a-nuxt-project, execute the following commands in the project directory:

```Shell
npx nuxi module add hub
```

```Shell
npm install --save-dev wrangler
```

...
