<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../docs/api.md) -->
<!-- The below content is automatically added from ./../docs/api.md -->

# auro-loader

The `auro-loader` element displays a loading animation to indicate a loading state to users.

### Properties & Attributes

| Properties      | Attributes       | Modifiers | Type                                   | Default   | Description                                                                                                                                                          |
| --------------- | ---------------- | --------- | -------------------------------------- | --------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| appearance      | appearance       |           | `default` \| `inverse` \| `brand`      | `default` | Defines whether the loader is intended for lighter or darker backgrounds, or if it should use the brand color regardless of the background.                          |
| laser           | laser            |           | boolean                                |           | Sets loader to laser type. Note: the default and `message` slots are not shown for this type, in any motion state — `laser` has no room for accompanying text.       |
| lg              | lg               |           | boolean                                |           | Sets size to large.                                                                                                                                                  |
| md              | md               |           | boolean                                |           | Sets size to medium.                                                                                                                                                 |
| messageInterval | message-interval |           | number                                 | `5000`    | Sets the interval, in milliseconds, between automatic rotations of the messages slotted into the `message` slot. Only applies when more than one message is slotted. |
| messagePosition | message-position |           | `top` \| `right` \| `bottom` \| `left` | `bottom`  | Sets the position of the `message` slot content relative to the loading animation. An invalid value falls back to `bottom`.                                          |
| orbit           | orbit            |           | boolean                                |           | Sets loader to orbit type.                                                                                                                                           |
| pulse           | pulse            |           | boolean                                |           | Sets loader to pulse type.                                                                                                                                           |
| ringworm        | ringworm         |           | boolean                                |           | Sets loader to ringworm type.                                                                                                                                        |
| sm              | sm               |           | boolean                                |           | Sets size to small.                                                                                                                                                  |
| xs              | xs               |           | boolean                                |           | Sets size to extra small.                                                                                                                                            |
| onDark          | ondark           |           | boolean                                |           | DEPRECATED - use `appearance="inverse"`.                                                                                                                             |
| onLight         | onlight          |           | boolean                                |           | DEPRECATED - use `appearance="brand"`.                                                                                                                               |

### Methods

| Name     | Parameters                                                           | Return | Description                                       |
| -------- | -------------------------------------------------------------------- | ------ | ------------------------------------------------- |
| register | `name` (string) - The name of the element that you want to register. |        | This will register this element with the browser. |

### Slots

| Name      | Description                                                                                                                                                                         |
| --------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| (default) | Fallback text shown under `prefers-reduced-motion: reduce`. Not shown for the `laser` type.                                                                                         |
| message   | Optional message(s) to show alongside the animation, rotating at `messageInterval` when more than one is provided. Not shown for `laser`. See the docs for reduced-motion behavior. |

### CSS Shadow Parts

| Name    | Description                                                    |
| ------- | -------------------------------------------------------------- |
| element | Apply style to adjust speed of animation.                      |
| message | Apply style to the message region wrapping the `message` slot. |
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

### Cycling Messages

Use the `message` slot to display one or more messages alongside the animation. Any element type is supported. When more than one is slotted, they rotate at the interval (in milliseconds) set by the `message-interval` attribute (default `5000`).

**Note**: Typography, spacing and color for this slot are placeholder values pending Design sign-off.

**Note**: not supported on the `laser` type — no room for accompanying text in any motion state.

A few things to know:

- The component toggles `hidden` on your slotted elements to rotate them — don't also manage `hidden` on those elements yourself.
- An invalid `message-interval` (`0`, negative, or non-numeric) falls back to `5000`.
- Rotation stops under `prefers-reduced-motion: reduce`; it freezes on whichever message was active when the preference took effect, so each message should be able to stand on its own.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/cycling-messages.html) -->
  <!-- The below content is automatically added from ../apiExamples/cycling-messages.html -->
  <auro-loader orbit message-interval="4000">
    <span slot="message">Checking your bags...</span>
    <span slot="message">Confirming your seat...</span>
    <span slot="message">Almost there...</span>
  </auro-loader>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/cycling-messages.html) -->
<!-- The below code snippet is automatically added from ../apiExamples/cycling-messages.html -->

```html
<auro-loader orbit message-interval="4000">
  <span slot="message">Checking your bags...</span>
  <span slot="message">Confirming your seat...</span>
  <span slot="message">Almost there...</span>
</auro-loader>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Message Position

Use the `message-position` attribute to control where the `message` slot content renders relative to the animation. Options are `top`, `right`, `bottom` and `left`; an invalid value falls back to `bottom`.

#### Static Message

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/message-position-static.html) -->
  <!-- The below content is automatically added from ../apiExamples/message-position-static.html -->
  <auro-loader orbit message-position="left">
    <span slot="message">Loading...</span>
  </auro-loader>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/message-position-static.html) -->
<!-- The below code snippet is automatically added from ../apiExamples/message-position-static.html -->

```html
<auro-loader orbit message-position="left">
  <span slot="message">Loading...</span>
</auro-loader>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

#### Cycling Messages

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/message-position-cycling.html) -->
  <!-- The below content is automatically added from ../apiExamples/message-position-cycling.html -->
  <auro-loader orbit message-position="top" message-interval="4000">
    <span slot="message">Checking your bags...</span>
    <span slot="message">Confirming your seat...</span>
    <span slot="message">Almost there...</span>
  </auro-loader>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/message-position-cycling.html) -->
<!-- The below code snippet is automatically added from ../apiExamples/message-position-cycling.html -->

```html
<auro-loader orbit message-position="top" message-interval="4000">
  <span slot="message">Checking your bags...</span>
  <span slot="message">Confirming your seat...</span>
  <span slot="message">Almost there...</span>
</auro-loader>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Reduced Motion

The following examples relate to the `prefers-reduced-motion` accessibility feature. In order to see them in action, please enable your system's "Reduce Motion" accessibility setting.

#### Static Label

Use the default slot to provide custom text that replaces the `auro-loader` animation when the user has the `prefers-reduced-motion` accessibility feature enabled.
The default text is `Loading...`

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

#### Message Slot Only

If only the `message` slot is populated, `prefers-reduced-motion: reduce` shows its content instead of the generic `Loading...` fallback (frozen on whichever message was active).

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/reduced-motion-message-only.html) -->
  <!-- The below content is automatically added from ../apiExamples/reduced-motion-message-only.html -->
  <auro-loader orbit>
    <span slot="message">Checking your bags...</span>
    <span slot="message">Confirming your seat...</span>
  </auro-loader>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/reduced-motion-message-only.html) -->
<!-- The below code snippet is automatically added from ../apiExamples/reduced-motion-message-only.html -->

```html
<auro-loader orbit>
  <span slot="message">Checking your bags...</span>
  <span slot="message">Confirming your seat...</span>
</auro-loader>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

#### Default Slot and Message Slot Together

If both slots are populated, only `message` shows under normal motion. Under `prefers-reduced-motion: reduce`, the default slot's content takes over and `message` is hidden — only one piece of text is ever shown at a time.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/reduced-motion-combined.html) -->
  <!-- The below content is automatically added from ../apiExamples/reduced-motion-combined.html -->
  <auro-loader orbit>
    Please wait while we retrieve your reservation.
    <span slot="message">Checking your bags...</span>
    <span slot="message">Confirming your seat...</span>
  </auro-loader>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/reduced-motion-combined.html) -->
<!-- The below code snippet is automatically added from ../apiExamples/reduced-motion-combined.html -->

```html
<auro-loader orbit>
  Please wait while we retrieve your reservation.
  <span slot="message">Checking your bags...</span>
  <span slot="message">Confirming your seat...</span>
</auro-loader>
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

  // Safety net for `@aurodesignsystem/webcorestylesheets` >=11, where
  // `.body-default`'s `font-weight: var(--wcss-body-default-weight, )` has
  // an empty fallback — the concrete value (450) moved to that package's
  // theme stylesheet, which this component does not import. Without this,
  // consumers who don't load that theme get the browser's default
  // font-weight on the fallback/message text instead of 450.
  --wcss-body-default-weight: 450;

  // TODO(design): placeholder pending Figma/typography sign-off
  --ds-auro-loader-message-color: currentcolor;

  // TODO(design): placeholder pending Figma/typography sign-off
  --ds-auro-loader-message-spacing: 0.5rem;
}
```
<!-- AURO-GENERATED-CONTENT:END -->
