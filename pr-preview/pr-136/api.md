<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../docs/api.md) -->
<!-- The below content is automatically added from ./../docs/api.md -->

# auro-loader

An animated loading indicator that shows people a task is in progress, with optional messages that rotate beside the animation.

**Key capabilities**
- **Loader types**: Set `orbit`, `ringworm`, `pulse`, or `laser` to choose the animation.
- **Sizes**: Set `xs`, `sm`, `md`, or `lg` to scale the loader and its text.
- **Appearance**: Set `appearance="inverse"` for dark backgrounds or `appearance="brand"` for the brand color.
- **Rotating messages**: Slot more than one `message` to cycle through them every `message-interval` milliseconds.
- **Reduced motion**: Always replaces the animation with text for people who turn on reduced motion.

**Example**
<pre class="language-html"><code class="language-html">&lt;auro-loader orbit&gt;
  &lt;span slot="message"&gt;Hang tight...&lt;/span&gt;
&lt;/auro-loader&gt;</code></pre>

### Properties and attributes

| Properties      | Attributes       | Modifiers | Type                                   | Default   | Description                                                                                                                                                                                                                         |
| --------------- | ---------------- | --------- | -------------------------------------- | --------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| appearance      | appearance       |           | `default` \| `inverse` \| `brand`      | `default` | Sets the loader's color. Use `default` to match the surrounding text color, `inverse` on dark backgrounds, and `brand` for the brand color on any background.                                                                       |
| laser           | laser            |           | boolean                                |           | Shows a thin bar at the top of the page that moves across its width instead of a circular animation. The default and `message` slots aren't shown, because the bar has no room for text.                                            |
| lg              | lg               |           | boolean                                |           | Sets the loader to its largest size, bigger than `md`. The message text scales up with it.                                                                                                                                          |
| md              | md               |           | boolean                                |           | Sets the loader to a medium size, bigger than `sm`. The message text scales up with it.                                                                                                                                             |
| messageInterval | message-interval |           | number                                 | `5000`    | Sets how long each message shows before the next one appears, in milliseconds. Applies only when more than one message is in the `message` slot.<br>Values that aren't a positive number up to 2147483647 fall back to the default. |
| messagePosition | message-position |           | `top` \| `right` \| `bottom` \| `left` | `bottom`  | Sets the position of the `message` slot content relative to the loading animation. An invalid value falls back to `bottom`.                                                                                                         |
| orbit           | orbit            |           | boolean                                |           | Shows a faint ring with a brighter arc that circles it.                                                                                                                                                                             |
| pulse           | pulse            |           | boolean                                |           | Shows three dots that pulse in turn.                                                                                                                                                                                                |
| ringworm        | ringworm         |           | boolean                                |           | Shows a ring that rotates while its arc grows and shrinks.                                                                                                                                                                          |
| sm              | sm               |           | boolean                                |           | Sets the loader to a small size, bigger than the default. The message text scales up with it.                                                                                                                                       |
| xs              | xs               |           | boolean                                |           | Sets the loader to its smallest size, smaller than the default. The message text scales down with it.                                                                                                                               |
| onDark          | ondark           |           | boolean                                |           | Deprecated: Use `appearance="inverse"` instead.<br>Sets the loader color for dark backgrounds.                                                                                                                                      |
| onLight         | onlight          |           | boolean                                |           | Deprecated: Use `appearance="brand"` instead.<br>Sets the loader to the brand color.                                                                                                                                                |

### Methods

| Name     | Parameters                                                    | Return | Description                                              |
| -------- | ------------------------------------------------------------- | ------ | -------------------------------------------------------- |
| register | `name` (string) - The tag name to register the element under. |        | Registers the element with the browser under a tag name. |

### Slots

| Name      | Description                                                                                                                                                                                                         |
| --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| (default) | Text shown in place of the animation for people who turn on reduced motion, for example "Loading your reservation". Defaults to "Loading..." unless the `message` slot has content. Not shown for the `laser` type. |
| message   | Optional message(s) to show alongside the animation, rotating at `messageInterval` when more than one is provided. Not shown for `laser`. See the docs for reduced-motion behavior.                                 |

### CSS shadow parts

| Name    | Description                                                                                                                            |
| ------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| element | Each animated shape of the loader, a `<span>` or, for `ringworm`, an `<svg>`. Use it to change things like the speed of the animation. |
| message | The region that wraps the `message` slot content. Hidden for the `laser` type.                                                         |

### CSS custom properties

| Name                              | Description                                                                                                                                           |
| --------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| --ds-auro-loader-color            | Color of the loader animation and the default slot text.                                                                                              |
| --ds-auro-loader-background-color | Fill color of the animation's shapes. Doesn't apply to `orbit` or `ringworm`.                                                                         |
| --ds-auro-loader-border-color     | Color of the animation's shape borders. Has no visible effect today, because `orbit`, the only type with visible borders, sets its own border colors. |
| --ds-auro-loader-message-color    | Color of the text in the `message` slot.                                                                                                              |
| --ds-auro-loader-message-spacing  | Space between the animation and the `message` slot content.                                                                                           |
<!-- AURO-GENERATED-CONTENT:END -->

## Basic

This example shows the `ringworm`, `orbit`, `pulse`, and `laser` loader types. The `laser` loader is fixed to the top of the page, so it doesn't sit beside the others.

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

<pre class="language-html"><code class="language-html">&lt;auro-loader ringworm&gt;&lt;/auro-loader&gt;
&lt;auro-loader orbit&gt;&lt;/auro-loader&gt;
&lt;auro-loader pulse&gt;&lt;/auro-loader&gt;
&lt;auro-loader laser&gt;&lt;/auro-loader&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

## Property and attribute examples

### Appearance

Set `appearance` to `default`, `inverse`, or `brand`. Type `laser` is supported but not shown, because it's fixed to the top of the page.

#### Brand

Use `appearance="brand"` to show the loader in the brand color on any background.

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

<pre class="language-html"><code class="language-html">&lt;auro-loader ringworm appearance="brand"&gt;&lt;/auro-loader&gt;
&lt;auro-loader orbit appearance="brand"&gt;&lt;/auro-loader&gt;
&lt;auro-loader pulse appearance="brand"&gt;&lt;/auro-loader&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

#### Inverse

Use `appearance="inverse"` on dark backgrounds.

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

<pre class="language-html"><code class="language-html">&lt;auro-loader ringworm appearance="inverse"&gt;&lt;/auro-loader&gt;
&lt;auro-loader orbit appearance="inverse"&gt;&lt;/auro-loader&gt;
&lt;auro-loader pulse appearance="inverse"&gt;&lt;/auro-loader&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Size

Options are `xs`, `sm`, `md`, and `lg`.

**Note**: On `laser`, `sm`, `md`, and `lg` change the length of the moving bar, not the height of the loader.

#### Extra small

Use `xs` for the smallest loader.

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

<pre class="language-html"><code class="language-html">&lt;auro-loader ringworm xs&gt;&lt;/auro-loader&gt;
&lt;auro-loader orbit xs&gt;&lt;/auro-loader&gt;
&lt;auro-loader pulse xs&gt;&lt;/auro-loader&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

#### Small

Use `sm` for a loader bigger than the default.

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

<pre class="language-html"><code class="language-html">&lt;auro-loader ringworm sm&gt;&lt;/auro-loader&gt;
&lt;auro-loader orbit sm&gt;&lt;/auro-loader&gt;
&lt;auro-loader pulse sm&gt;&lt;/auro-loader&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

#### Medium

Use `md` for a loader bigger than `sm`.

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

<pre class="language-html"><code class="language-html">&lt;auro-loader ringworm md&gt;&lt;/auro-loader&gt;
&lt;auro-loader orbit md&gt;&lt;/auro-loader&gt;
&lt;auro-loader pulse md&gt;&lt;/auro-loader&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

#### Large

Use `lg` for the largest loader.

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

<pre class="language-html"><code class="language-html">&lt;auro-loader ringworm lg&gt;&lt;/auro-loader&gt;
&lt;auro-loader orbit lg&gt;&lt;/auro-loader&gt;
&lt;auro-loader pulse lg&gt;&lt;/auro-loader&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

## Slot examples

### Cycling messages

Use the `message` slot to display one or more messages alongside the animation. Any element type is supported. When more than one is slotted, they rotate at the interval (in milliseconds) set by the `message-interval` attribute (default `5000`).

**Note**: The `laser` type doesn't support messages, because it has no room for text.

**Note**: Typography, spacing, and color for this slot are placeholder values pending Design sign-off.

- The component toggles `hidden` on your slotted elements to rotate them. Don't also manage `hidden` on those elements yourself.
- A `message-interval` of `0`, a negative number, a non-number, or a value above 2147483647 falls back to `5000`.
- Rotation stops under `prefers-reduced-motion: reduce`; it freezes on whichever message was active when the preference took effect, so each message should be able to stand on its own.

<div class="exampleWrapper">
<!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/cycling-messages.html) -->
<!-- The below content is automatically added from ../apiExamples/cycling-messages.html -->
<auro-loader orbit message-interval="4000">
<span slot="message">Hang tight...</span>
<span slot="message">Thanks for your patience...</span>
<span slot="message">This may take a moment...</span>
</auro-loader>
<!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
<span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/cycling-messages.html) -->
<!-- The below code snippet is automatically added from ../apiExamples/cycling-messages.html -->

<pre class="language-html"><code class="language-html">&lt;auro-loader orbit message-interval="4000"&gt;
  &lt;span slot="message"&gt;Hang tight...&lt;/span&gt;
  &lt;span slot="message"&gt;Thanks for your patience...&lt;/span&gt;
  &lt;span slot="message"&gt;This may take a moment...&lt;/span&gt;
&lt;/auro-loader&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Message position

Use the `message-position` attribute to control where the `message` slot content renders relative to the animation. Options are `top`, `right`, `bottom`, and `left`; an invalid value falls back to `bottom`.

#### Static message

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

<pre class="language-html"><code class="language-html">&lt;auro-loader orbit message-position="left"&gt;
  &lt;span slot="message"&gt;Loading...&lt;/span&gt;
&lt;/auro-loader&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

#### Cycling messages

<div class="exampleWrapper">
<!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/message-position-cycling.html) -->
<!-- The below content is automatically added from ../apiExamples/message-position-cycling.html -->
<auro-loader orbit message-position="top" message-interval="4000">
<span slot="message">Hang tight...</span>
<span slot="message">Thanks for your patience...</span>
<span slot="message">This may take a moment...</span>
</auro-loader>
<!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
<span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/message-position-cycling.html) -->
<!-- The below code snippet is automatically added from ../apiExamples/message-position-cycling.html -->

<pre class="language-html"><code class="language-html">&lt;auro-loader orbit message-position="top" message-interval="4000"&gt;
  &lt;span slot="message"&gt;Hang tight...&lt;/span&gt;
  &lt;span slot="message"&gt;Thanks for your patience...&lt;/span&gt;
  &lt;span slot="message"&gt;This may take a moment...&lt;/span&gt;
&lt;/auro-loader&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Message size

The text in the `message` and default slots scales with the loader size, from small text on `xs` to large text on `md` and `lg`. The default loader is smaller than `sm`.

<div class="exampleWrapper">
<!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/message-size.html) -->
<!-- The below content is automatically added from ../apiExamples/message-size.html -->
<div style="display: flex; flex-wrap: wrap; align-items: flex-end; gap: var(--ds-size-400, 2rem);">
<auro-loader orbit xs>
<span slot="message">Extra small</span>
</auro-loader>
<auro-loader orbit>
<span slot="message">Default</span>
</auro-loader>
<auro-loader orbit sm>
<span slot="message">Small</span>
</auro-loader>
<auro-loader orbit md>
<span slot="message">Medium</span>
</auro-loader>
<auro-loader orbit lg>
<span slot="message">Large</span>
</auro-loader>
</div>
<!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
<span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/message-size.html) -->
<!-- The below code snippet is automatically added from ../apiExamples/message-size.html -->

<pre class="language-html"><code class="language-html">&lt;div style="display: flex; flex-wrap: wrap; align-items: flex-end; gap: var(--ds-size-400, 2rem);"&gt;
  &lt;auro-loader orbit xs&gt;
    &lt;span slot="message"&gt;Extra small&lt;/span&gt;
  &lt;/auro-loader&gt;
  &lt;auro-loader orbit&gt;
    &lt;span slot="message"&gt;Default&lt;/span&gt;
  &lt;/auro-loader&gt;
  &lt;auro-loader orbit sm&gt;
    &lt;span slot="message"&gt;Small&lt;/span&gt;
  &lt;/auro-loader&gt;
  &lt;auro-loader orbit md&gt;
    &lt;span slot="message"&gt;Medium&lt;/span&gt;
  &lt;/auro-loader&gt;
  &lt;auro-loader orbit lg&gt;
    &lt;span slot="message"&gt;Large&lt;/span&gt;
  &lt;/auro-loader&gt;
&lt;/div&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Reduced motion

The following examples relate to the `prefers-reduced-motion` accessibility feature. To see these in action, turn on your system's reduced motion setting.

#### Static label

When people turn on reduced motion, the loader shows text instead of the animation. Use the default slot to set that text. The default is "Loading...".

<div class="exampleWrapper">
<!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/static-label.html) -->
<!-- The below content is automatically added from ../apiExamples/static-label.html -->
<auro-loader ringworm>Ringworm</auro-loader>
<auro-loader orbit>Orbit</auro-loader>
<auro-loader pulse>Pulse</auro-loader>
<!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
<span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/static-label.html) -->
<!-- The below code snippet is automatically added from ../apiExamples/static-label.html -->

<pre class="language-html"><code class="language-html">&lt;auro-loader ringworm&gt;Ringworm&lt;/auro-loader&gt;
&lt;auro-loader orbit&gt;Orbit&lt;/auro-loader&gt;
&lt;auro-loader pulse&gt;Pulse&lt;/auro-loader&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

#### Message slot only

When only the `message` slot has content and reduced motion is on, the loader shows that content instead of the "Loading..." fallback, frozen on whichever message was active.

<div class="exampleWrapper">
<!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/reduced-motion-message-only.html) -->
<!-- The below content is automatically added from ../apiExamples/reduced-motion-message-only.html -->
<auro-loader orbit>
<span slot="message">Hang tight...</span>
<span slot="message">Thanks for your patience...</span>
</auro-loader>
<!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
<span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/reduced-motion-message-only.html) -->
<!-- The below code snippet is automatically added from ../apiExamples/reduced-motion-message-only.html -->

<pre class="language-html"><code class="language-html">&lt;auro-loader orbit&gt;
  &lt;span slot="message"&gt;Hang tight...&lt;/span&gt;
  &lt;span slot="message"&gt;Thanks for your patience...&lt;/span&gt;
&lt;/auro-loader&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

#### Default slot and message slot together

If both slots have content, only `message` shows under normal motion. When people turn on reduced motion, the default slot's content takes over and `message` is hidden, so only one piece of text shows at a time.

<div class="exampleWrapper">
<!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/reduced-motion-combined.html) -->
<!-- The below content is automatically added from ../apiExamples/reduced-motion-combined.html -->
<auro-loader orbit>
    Please wait while we retrieve your reservation.
<span slot="message">Hang tight...</span>
<span slot="message">Thanks for your patience...</span>
</auro-loader>
<!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
<span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/reduced-motion-combined.html) -->
<!-- The below code snippet is automatically added from ../apiExamples/reduced-motion-combined.html -->

<pre class="language-html"><code class="language-html">&lt;auro-loader orbit&gt;
  Please wait while we retrieve your reservation.
  &lt;span slot="message"&gt;Hang tight...&lt;/span&gt;
  &lt;span slot="message"&gt;Thanks for your patience...&lt;/span&gt;
&lt;/auro-loader&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

## CSS shadow part examples

### Element

Use `::part(element)` in your CSS to change things like the speed of the animation.

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

<pre class="language-html"><code class="language-html">&lt;style&gt;
  .slow::part(element) {
    animation-duration: 8s;
  }
  .fast::part(element) {
    animation-duration: 1s;
  }
&lt;/style&gt;
&#10;&lt;auro-loader class="slow" orbit md&gt;&lt;/auro-loader&gt;
&lt;auro-loader class="fast" orbit lg&gt;&lt;/auro-loader&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

## Common usage patterns

### Custom color

To use a custom color, set the CSS `color` property on `<auro-loader>`. The loader draws itself in its current text color.

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

<pre class="language-html"><code class="language-html">&lt;auro-loader style="color: var(--ds-color-brand-tropical-300)" ringworm md&gt;&lt;/auro-loader&gt;
&lt;auro-loader style="color: var(--ds-color-brand-goldcoast-300)" orbit md&gt;&lt;/auro-loader&gt;
&lt;auro-loader style="color: var(--ds-color-brand-alpine-400)" pulse md&gt;&lt;/auro-loader&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

## Restyle with CSS custom properties

Restyle the component by changing the values of the following tokens.

<!-- Remove section if component does not have any component specific tokens -->
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../src/styles/tokens.scss) -->
<!-- The below code snippet is automatically added from ./../src/styles/tokens.scss -->

<pre class="language-scss"><code class="language-scss">:host {
  --ds-auro-loader-background-color: currentcolor;
  --ds-auro-loader-border-color: currentcolor;
  --ds-auro-loader-color: currentcolor;
&#10;  // TODO(design): placeholder pending Figma/typography sign-off
  --ds-auro-loader-message-color: currentcolor;
&#10;  // TODO(design): placeholder pending Figma/typography sign-off
  --ds-auro-loader-message-spacing: 0.5rem;
}</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
