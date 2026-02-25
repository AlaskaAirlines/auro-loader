<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../docs/api.md) -->
<!-- The below content is automatically added from ./../docs/api.md -->

# auro-loader

The `auro-loader` element displays a loading animation to indicate a loading state to users.

### Properties & Attributes

| Properties | Attributes | Modifiers | Type                              | Default   | Description                                                                                                                                 |
| ---------- | ---------- | --------- | --------------------------------- | --------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| appearance | appearance |           | `default` \| `inverse` \| `brand` | `default` | Defines whether the loader is intended for lighter or darker backgrounds, or if it should use the brand color regardless of the background. |
| laser      | laser      |           | boolean                           |           | Sets loader to laser type.                                                                                                                  |
| lg         | lg         |           | boolean                           |           | Sets size to large.                                                                                                                         |
| md         | md         |           | boolean                           |           | Sets size to medium.                                                                                                                        |
| onDark     | onDark     |           | boolean                           |           | DEPRECATED - use `appearance="inverse"`.                                                                                                    |
| onLight    | onLight    |           | boolean                           |           | DEPRECATED - use `appearance="brand"`.                                                                                                      |
| orbit      | orbit      |           | boolean                           |           | Sets loader to orbit type.                                                                                                                  |
| pulse      | pulse      |           | boolean                           |           | Sets loader to pulse type.                                                                                                                  |
| ringworm   | ringworm   |           | boolean                           |           | Sets loader to ringworm type.                                                                                                               |
| sm         | sm         |           | boolean                           |           | Sets size to small.                                                                                                                         |
| xs         | xs         |           | boolean                           |           | Sets size to extra small.                                                                                                                   |

### Methods

| Name     | Parameters                                                           | Return | Description                                       |
| -------- | -------------------------------------------------------------------- | ------ | ------------------------------------------------- |
| register | `name` (string) - The name of the element that you want to register. |        | This will register this element with the browser. |

### Slots

| Name      | Description                                                                                                         |
| --------- | ------------------------------------------------------------------------------------------------------------------- |
| (default) | Default slot for text that replaces `auro-loader` component when user has the "Reduce Motion" a11y feature enabled. |

### CSS Shadow Parts

| Name    | Description                               |
| ------- | ----------------------------------------- |
| element | Apply style to adjust speed of animation. |
<!-- AURO-GENERATED-CONTENT:END -->

## Basic Loaders

The following example illustrates the different loader types that the `<auro-loader>` element supports. The `laser` example is shown at the top of the page due to its fixed positioning.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/basic.html) -->
  <!-- The below content is automatically added from ./../apiExamples/basic.html -->
  <auro-loader ringworm></auro-loader>
  <auro-loader orbit></auro-loader>
  <auro-loader pulse></auro-loader>
  <auro-loader laser></auro-loader>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/basic.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/basic.html -->

```html
<auro-loader ringworm></auro-loader>
<auro-loader orbit></auro-loader>
<auro-loader pulse></auro-loader>
<auro-loader laser></auro-loader>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

## Property & Attribute Examples

### Appearance

The `<auro-loader>` element supports three appearance options via the `appearance` attribute. Options are `default`, `inverse` and `brand`. 

**Note**: Type `laser` is supported, but not shown due to fixed positioning.

#### Brand

Use the `appearance="brand"` attribute for a brand color. Type `laser` is supported, but not shown due to fixed positioning.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/brand-appearance.html) -->
  <!-- The below content is automatically added from ../apiExamples/brand-appearance.html -->
  <auro-loader ringworm appearance="brand"></auro-loader>
  <auro-loader orbit appearance="brand"></auro-loader>
  <auro-loader pulse appearance="brand"></auro-loader>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/brand-appearance.html) -->
<!-- The below code snippet is automatically added from ../apiExamples/brand-appearance.html -->

```html
<auro-loader ringworm appearance="brand"></auro-loader>
<auro-loader orbit appearance="brand"></auro-loader>
<auro-loader pulse appearance="brand"></auro-loader>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

#### Inverse

Use the `appearance="inverse"` attribute for a pre-defined color.

<div class="exampleWrapper--ondark">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/inverse-appearance.html) -->
  <!-- The below content is automatically added from ../apiExamples/inverse-appearance.html -->
  <auro-loader ringworm appearance="inverse"></auro-loader>
  <auro-loader orbit appearance="inverse"></auro-loader>
  <auro-loader pulse appearance="inverse"></auro-loader>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/inverse-appearance.html) -->
<!-- The below code snippet is automatically added from ../apiExamples/inverse-appearance.html -->

```html
<auro-loader ringworm appearance="inverse"></auro-loader>
<auro-loader orbit appearance="inverse"></auro-loader>
<auro-loader pulse appearance="inverse"></auro-loader>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Size

The `<auro-loader>` element supports a scale of sizes. Options are `[xs, sm, md, lg]`. 

**Note**: Type `laser` does not support a size attribute.

#### Extra Small

Use the `xs` boolean attribute for a pre-defined size.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/xs.html) -->
  <!-- The below content is automatically added from ../apiExamples/xs.html -->
  <auro-loader ringworm xs></auro-loader>
  <auro-loader orbit xs></auro-loader>
  <auro-loader pulse xs></auro-loader>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/xs.html) -->
<!-- The below code snippet is automatically added from ../apiExamples/xs.html -->

```html
<auro-loader ringworm xs></auro-loader>
<auro-loader orbit xs></auro-loader>
<auro-loader pulse xs></auro-loader>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

#### Small

Use the `sm` boolean attribute for a pre-defined size.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/sm.html) -->
  <!-- The below content is automatically added from ../apiExamples/sm.html -->
  <auro-loader ringworm sm></auro-loader>
  <auro-loader orbit sm></auro-loader>
  <auro-loader pulse sm></auro-loader>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/sm.html) -->
<!-- The below code snippet is automatically added from ../apiExamples/sm.html -->

```html
<auro-loader ringworm sm></auro-loader>
<auro-loader orbit sm></auro-loader>
<auro-loader pulse sm></auro-loader>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

#### Medium

Use the `md` boolean attribute for a pre-defined size.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/md.html) -->
  <!-- The below content is automatically added from ../apiExamples/md.html -->
  <auro-loader ringworm md></auro-loader>
  <auro-loader orbit md></auro-loader>
  <auro-loader pulse md></auro-loader>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/md.html) -->
<!-- The below code snippet is automatically added from ../apiExamples/md.html -->

```html
<auro-loader ringworm md></auro-loader>
<auro-loader orbit md></auro-loader>
<auro-loader pulse md></auro-loader>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

#### Large

Use the `lg` boolean attribute for a pre-defined size.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/lg.html) -->
  <!-- The below content is automatically added from ../apiExamples/lg.html -->
  <auro-loader ringworm lg></auro-loader>
  <auro-loader orbit lg></auro-loader>
  <auro-loader pulse lg></auro-loader>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/lg.html) -->
<!-- The below code snippet is automatically added from ../apiExamples/lg.html -->

```html
<auro-loader ringworm lg></auro-loader>
<auro-loader orbit lg></auro-loader>
<auro-loader pulse lg></auro-loader>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

## Slot Examples

### Static Label

Use the `staticLabel` slot to provide custom text that replaces the `auro-loader` component when the user has the `prefers-reduced-motion` accessibility feature enabled.
The default text is `Loading...`

In order to see the example in action, please enable your system's "Reduce Motion" accessibility setting.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/static-label.html) -->
  <!-- The below content is automatically added from ../apiExamples/static-label.html -->
  <auro-loader ringworm>Ringworm</auro-loader>
  <auro-loader orbit>Orbit</auro-loader>
  <auro-loader pulse>Pulse</auro-loader>
  <auro-loader laser>Laser</auro-loader>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/static-label.html) -->
<!-- The below code snippet is automatically added from ../apiExamples/static-label.html -->

```html
<auro-loader ringworm>Ringworm</auro-loader>
<auro-loader orbit>Orbit</auro-loader>
<auro-loader pulse>Pulse</auro-loader>
<auro-loader laser>Laser</auro-loader>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

## CSS Shadow Part Examples

### Element

Use the `::part(element)` with your CSS as illustrated to effect things like the speed of the animation.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/custom-speed.html) -->
  <!-- The below content is automatically added from ../apiExamples/custom-speed.html -->
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
<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/custom-speed.html) -->
<!-- The below code snippet is automatically added from ../apiExamples/custom-speed.html -->

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

## Common Usage Patterns & Functional Examples

### Custom Color Support

The `<auro-loader>` element supports any custom color defined at the root level of the element.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/custom-color.html) -->
  <!-- The below content is automatically added from ../apiExamples/custom-color.html -->
  <auro-loader style="color: var(--ds-color-brand-tropical-300)" ringworm md></auro-loader>
  <auro-loader style="color: var(--ds-color-brand-goldcoast-300)" orbit md></auro-loader>
  <auro-loader style="color: var(--ds-color-brand-alpine-400)" pulse md></auro-loader>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/custom-color.html) -->
<!-- The below code snippet is automatically added from ../apiExamples/custom-color.html -->

```html
<auro-loader style="color: var(--ds-color-brand-tropical-300)" ringworm md></auro-loader>
<auro-loader style="color: var(--ds-color-brand-goldcoast-300)" orbit md></auro-loader>
<auro-loader style="color: var(--ds-color-brand-alpine-400)" pulse md></auro-loader>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

## Restyle Component with CSS Variables

The component may be restyled by changing the values of the following token(s).

<!-- Remove section if component does not have any component specific tokens -->
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../src/styles/tokens.scss) -->
<!-- The below code snippet is automatically added from ./../src/styles/tokens.scss -->

```scss
:host {
  --ds-auro-loader-background-color: currentcolor;
  --ds-auro-loader-border-color: currentcolor;
  --ds-auro-loader-color: currentcolor;
}
```
<!-- AURO-GENERATED-CONTENT:END -->
