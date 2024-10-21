<!--
The index.md file is a compiled document. No edits should be made directly to this file.
README.md is created by running `npm run build:docs`.
This file is generated based on a template fetched from `./docs/partials/index.md`
-->

# Loader

<!-- AURO-GENERATED-CONTENT:START (FILE:src=./description.md) -->
<!-- The below content is automatically added from ./description.md -->
`<auro-loader>` is a [HTML custom element](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements) for the purpose of illustrating animated loaders.

Things take time. Sometimes we just need to take a second for some data to show up. For this Auro supports the `<auro-loader>` custom element. This powerful element supports multiple modes for use, `ringworm`, `orbit`, `pulse`, and `laser`.

And each of these modes support five size settings, `default`, `sm`, `md`, `lg`, and `xl`.

For color support `<auro-loader>` supports `currentColor`, this allows for any color set on the parent element to influence the color of the loader.

The `<auro-loader>` custom element also supports three pre-defined color modes, `onlight`, `ondark` and `white`.
<!-- AURO-GENERATED-CONTENT:END -->

## auro-loader use cases

<!-- AURO-GENERATED-CONTENT:START (FILE:src=./useCases.md) -->
<!-- The below content is automatically added from ./useCases.md -->
The `<auro-loader>` element should be used in situations where developers may need to illustrate a wait time for their users.
<!-- AURO-GENERATED-CONTENT:END -->

## Loader Gallery

See in the following examples the different loader modes that the `<auro-loader>` element supports.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/basic.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/basic.html -->
  <auro-loader ringworm></auro-loader>
  <auro-loader orbit></auro-loader>
  <auro-loader pulse></auro-loader>
  <auro-loader laser></auro-loader>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/basic.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/basic.html -->

```html
<auro-loader ringworm></auro-loader>
<auro-loader orbit></auro-loader>
<auro-loader pulse></auro-loader>
<auro-loader laser></auro-loader>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

## Loader sizes

The `<auro-loader>` element supports a scale of sizes. Options are `[sm, md, lg, xl]`.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/loader_sizes.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/loader_sizes.html -->
  <auro-loader ringworm xs></auro-loader>
  <auro-loader ringworm></auro-loader>
  <auro-loader ringworm sm></auro-loader>
  <auro-loader ringworm md></auro-loader>
  <auro-loader ringworm lg></auro-loader>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/loader_sizes.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/loader_sizes.html -->

```html
<auro-loader ringworm xs></auro-loader>
<auro-loader ringworm></auro-loader>
<auro-loader ringworm sm></auro-loader>
<auro-loader ringworm md></auro-loader>
<auro-loader ringworm lg></auro-loader>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

## Color support

The `<auro-loader>` element supports a scale of pre-defines color options. Options are `[onLight, onDark, white]`.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/loader_color.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/loader_color.html -->
  <auro-loader pulse onlight md></auro-loader>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/loader_color.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/loader_color.html -->

```html
<auro-loader pulse onlight md></auro-loader>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>
<div class="exampleWrapper--ondark">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/loader_color_ondark.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/loader_color_ondark.html -->
  <auro-loader pulse ondark md></auro-loader>
  <auro-loader pulse white md></auro-loader>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/loader_color_ondark.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/loader_color_ondark.html -->

```html
<auro-loader pulse ondark md></auro-loader>
<auro-loader pulse white md></auro-loader>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

## Custom color support

The `<auro-loader>` element supports any custom color defined at the root level of the element.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/custom_color.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/custom_color.html -->
  <auro-loader style="color: var(--ds-color-brand-tropical-300)" ringworm md></auro-loader>
  <auro-loader style="color: var(--ds-color-brand-goldcoast-300)" orbit md></auro-loader>
  <auro-loader style="color: var(--ds-color-brand-alpine-400)" pulse md></auro-loader>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/custom_color.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/custom_color.html -->

```html
<auro-loader style="color: var(--ds-color-brand-tropical-300)" ringworm md></auro-loader>
<auro-loader style="color: var(--ds-color-brand-goldcoast-300)" orbit md></auro-loader>
<auro-loader style="color: var(--ds-color-brand-alpine-400)" pulse md></auro-loader>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

## Custom animation speed support

The `<auro-loader>` custom element has a CSS shadow part included in it's API. Create a custom selector using `::part(element)` and easily adjust the `animation-duration` as seen in the examples below.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/custom_speed.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/custom_speed.html -->
  <style>
    .slow::part(element) {
      animation-duration: 8s;
    }
    .fast::part(element) {
      animation-duration: 1s;
    }
  </style>
  <auro-loader class="slow" orbit md></auro-loader>
  <auro-loader class="fast" orbit lg></auro-loader>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/custom_speed.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/custom_speed.html -->

```html
<style>
  .slow::part(element) {
    animation-duration: 8s;
  }
  .fast::part(element) {
    animation-duration: 1s;
  }
</style>
<auro-loader class="slow" orbit md></auro-loader>
<auro-loader class="fast" orbit lg></auro-loader>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

## Recommended Use and Version Control

There are two important parts of every Auro component. The <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes">class</a> and the custom element. The class is exported and then used as part of defining the Web Component. When importing this component as described in the <a href="#install">install</a> section, the class is imported and the `auro-loader` custom element is defined automatically.

To protect from versioning conflicts with other instances of the component being loaded, it is recommended to use our `AuroLoader.register(name)` method and pass in a unique name.

```js
import { AuroLoader } from './src/auro-loader.js';

AuroLoader.register('custom-loader');
```

This will create a new custom element that you can use in your HTML that will function identically to the `<auro-loader>` element.

<div class="exampleWrapper exampleWrapper--flex">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/custom.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/custom.html -->
  <custom-loader ringworm></custom-loader>
  <custom-loader orbit></custom-loader>
  <custom-loader pulse></custom-loader>
  <custom-loader laser></custom-loader>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/custom.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/custom.html -->

```html
<custom-loader ringworm></custom-loader>
<custom-loader orbit></custom-loader>
<custom-loader pulse></custom-loader>
<custom-loader laser></custom-loader>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>
