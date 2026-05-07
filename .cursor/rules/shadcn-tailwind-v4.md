---
description: Règles pour utiliser shadcn-svelte avec Tailwind v4 dans ce projet Astro. Les composants shadcn fonctionnent correctement grâce à la configuration TypeScript spécifique.
globs: ["**/*.svelte", "**/*.astro"]
alwaysApply: true
---

# shadcn-svelte + Tailwind v4 - Configuration du projet Surf Center

## ✅ TOUS LES COMPOSANTS SHADCN FONCTIONNENT

Tous les composants shadcn-svelte (Select, Calendar, Dialog, Popover, etc.) fonctionnent dans ce projet. **Toujours préférer shadcn-svelte aux éléments HTML natifs**.

## 🔧 Configuration critique

Le bon fonctionnement repose sur ces points (NE PAS MODIFIER) :

### 1. `tsconfig.json` avec target moderne

```json
{
  "extends": "astro/tsconfigs/strict",
  "compilerOptions": {
    "target": "ESNext",
    "module": "ESNext",
    "moduleResolution": "bundler",
    "baseUrl": ".",
    "paths": {
      "$lib": ["./src/lib"],
      "$lib/*": ["./src/lib/*"]
    }
  }
}
```

**Pourquoi** : `svelte-preprocess` (utilisé en interne par `@tailwindcss/vite`) cherche un `tsconfig.json` pour déterminer la target TypeScript. Sans `target: "ESNext"` explicite, il utilise une vieille target qui transpile la syntaxe `...rest` et casse les composants `bits-ui` avec des erreurs comme `Invalid declaration: 'boxWith, mergeProps'`. Voir [tailwindcss issue #15250](https://github.com/tailwindlabs/tailwindcss/issues/15250).

### 2. `src/styles/global.css` avec `@source` et `@theme inline`

Le fichier doit contenir ces directives dans cet ordre :

```css
@import "shadcn-svelte/tailwind.css"; /* inclut @import "tailwindcss" */
@import "tw-animate-css";
@import "@fontsource-variable/inter";

/* CRITIQUE : scanner les fichiers src/lib et src/components pour compiler les classes Tailwind */
@source "../../src/lib/**/*.{svelte,ts}";
@source "../../src/components/**/*.svelte";

@custom-variant dark (&:is(.dark *));
```

**Pourquoi `@source` est nécessaire** : Tailwind v4 avec le plugin Vite détecte les classes via le module graph. Mais pour les composants Svelte en `src/lib` (shadcn-svelte), les classes dans les longues chaînes de `cn(...)` ne sont pas toujours correctement extraites. Les directives `@source` forcent Tailwind à scanner ces fichiers explicitement.

**Note** : Ces `@source` ne causent plus d'erreurs grâce au `target: "ESNext"` dans le `tsconfig.json`.

### 3. `astro.config.mjs` avec `@tailwindcss/vite`

```js
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  integrations: [svelte()],
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        '$lib': path.resolve(__dirname, './src/lib'),
      },
    },
  },
});
```

## 📦 Comment utiliser shadcn-svelte

### Imports

```svelte
<script lang="ts">
  // Composants simples (un seul export)
  import { Button } from "$lib/components/ui/button";
  import { Input } from "$lib/components/ui/input";
  import { Label } from "$lib/components/ui/label";
  import { Textarea } from "$lib/components/ui/textarea";
  import { Badge } from "$lib/components/ui/badge";
  import { Separator } from "$lib/components/ui/separator";
  import { Spinner } from "$lib/components/ui/spinner";

  // Composants composés (utiliser le namespace)
  import * as Select from "$lib/components/ui/select";
  import * as Dialog from "$lib/components/ui/dialog";
  import * as Sheet from "$lib/components/ui/sheet";
  import * as Card from "$lib/components/ui/card";
  import * as Tabs from "$lib/components/ui/tabs";
  import * as Accordion from "$lib/components/ui/accordion";
  import { Calendar } from "$lib/components/ui/calendar";
  import * as Carousel from "$lib/components/ui/carousel";
</script>
```

### Astro + Svelte : utiliser `client:load`

Dans les fichiers `.astro`, importer les composants Svelte avec une directive client :

```astro
---
import MySvelteComponent from "../components/MySvelteComponent.svelte";
---

<MySvelteComponent client:load />
```

### Exemple : Select avec value bindable

Le `Select.Root` de shadcn-svelte (basé sur bits-ui v2) renvoie un objet `{ value, label }` quand `type="single"`.

```svelte
<script lang="ts">
  import * as Select from "$lib/components/ui/select";

  type Option = { value: string; label: string };
  const options: Option[] = [
    { value: "a", label: "Option A" },
    { value: "b", label: "Option B" },
  ];

  let selected = $state<Option | undefined>(undefined);
</script>

<!-- Pour soumettre la valeur dans un form, utiliser un input hidden -->
<input type="hidden" name="my-field" value={selected?.value ?? ""} />

<Select.Root type="single" bind:value={selected}>
  <Select.Trigger class="w-full">
    {selected?.label ?? "Sélectionner..."}
  </Select.Trigger>
  <Select.Content>
    {#each options as opt}
      <Select.Item value={opt.value} label={opt.label}>{opt.label}</Select.Item>
    {/each}
  </Select.Content>
</Select.Root>
```

### Exemple : Calendar

```svelte
<script lang="ts">
  import { Calendar } from "$lib/components/ui/calendar";
  import type { DateValue } from "@internationalized/date";

  let value = $state<DateValue | undefined>(undefined);
</script>

<Calendar bind:value locale="fr-FR" />
```

### Exemple : Dialog

```svelte
<script lang="ts">
  import * as Dialog from "$lib/components/ui/dialog";
  import { Button } from "$lib/components/ui/button";
</script>

<Dialog.Root>
  <Dialog.Trigger>
    {#snippet child({ props })}
      <Button {...props}>Ouvrir</Button>
    {/snippet}
  </Dialog.Trigger>
  <Dialog.Content>
    <Dialog.Header>
      <Dialog.Title>Titre</Dialog.Title>
      <Dialog.Description>Description.</Dialog.Description>
    </Dialog.Header>
    <p>Contenu du dialog.</p>
  </Dialog.Content>
</Dialog.Root>
```

## 🎨 Mixer shadcn et le design system custom

Les composants shadcn utilisent les tokens Tailwind (`bg-primary`, `text-foreground`, etc.) qui sont mappés dans `@theme inline` de `global.css`. 

Pour utiliser les variables custom du projet (`--c-orange`, `--c-text`, etc.) directement, surcharger via `class` :

```svelte
<Button class="bg-[var(--c-orange)] hover:bg-[var(--c-orange-dark)]">
  Action
</Button>
```

Ou utiliser un wrapper Svelte avec `<style>` scoped :

```svelte
<div class="my-wrapper">
  <Button>Action</Button>
</div>

<style>
  .my-wrapper :global(button) {
    background: var(--c-orange);
  }
</style>
```

## 🚨 Si une erreur "Invalid declaration" apparaît

Si jamais le dev server crashe avec :
```
Invalid declaration: `boxWith, mergeProps`
File: ...node_modules/.../bits-ui/...
```

Vérifier dans cet ordre :
1. **`tsconfig.json`** contient bien `"target": "ESNext"` et `"module": "ESNext"`
2. **Redémarrer le dev server** (`npm run dev`) pour forcer la re-optimisation des dépendances Vite
3. **Vider le cache Vite** : supprimer `node_modules/.vite` et `node_modules/.cache`
4. **Vérifier les versions** : `@tailwindcss/vite >= 4.0.8`, `bits-ui >= 2.0`, `svelte >= 5.0`

## 📝 Variables CSS du design system

Disponibles dans `src/styles/global.css` :

```css
/* Couleurs marque */
--c-orange: #f77b46;       --c-orange-dark: #b55a33;
--c-blue: #26cfff;         --c-blue-dark: #1c9bbf;
--c-rose: #ed6775;         --c-rose-dark: #ad4b55;

/* Sémantique */
--c-bg: #ffffff;           --c-text: #1a1a1a;
--c-surface: #f7f7f5;      --c-text-secondary: #4a4a4a;
--c-surface-alt: #eeeee9;  --c-text-muted: #888888;
--c-border: #e2e2dd;       --c-border-light: #f0f0ec;

/* Radius */
--r-sm: 0.5rem;   --r-md: 0.875rem;
--r-lg: 1.25rem;  --r-xl: 1.75rem;

/* Transitions */
--t-fast: 200ms;  --t-normal: 400ms;  --t-slow: 600ms;
```
