<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../docs/api.md) -->
<!-- AURO-GENERATED-CONTENT:END -->

## Basic

This example shows the `ringworm`, `orbit`, `pulse`, and `laser` loader types. The `laser` loader is fixed to the top of the page, so it doesn't sit beside the others.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/basic.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/basic.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

## Property and attribute examples

### Appearance

Set `appearance` to `default`, `inverse`, or `brand`. Type `laser` is supported but not shown, because it's fixed to the top of the page.

#### Brand

Use `appearance="brand"` to show the loader in the brand color on any background.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/brand-appearance.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/brand-appearance.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

#### Inverse

Use `appearance="inverse"` on dark backgrounds.

<div class="exampleWrapper--ondark">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/inverse-appearance.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/inverse-appearance.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

### Size

Options are `xs`, `sm`, `md`, and `lg`.

**Note**: On `laser`, `sm`, `md`, and `lg` change the length of the moving bar, not the height of the loader.

#### Extra small

Use `xs` for the smallest loader.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/xs.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/xs.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

#### Small

Use `sm` for a loader bigger than the default.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/sm.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/sm.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

#### Medium

Use `md` for a loader bigger than `sm`.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/md.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/md.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

#### Large

Use `lg` for the largest loader.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/lg.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/lg.html) -->
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
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/cycling-messages.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

### Screen reader announcements

The animation itself is silent for screen reader users. The `message` slot is a polite live region (`role="status"`), so screen readers announce its content as it changes without interrupting what they're reading. The default slot isn't read under normal motion. It shows only when people turn on reduced motion. The `laser` type has no text, so it's silent too.

Add a `message` so screen reader users know the loader is working.

### Message position

Use the `message-position` attribute to control where the `message` slot content renders relative to the animation. Options are `top`, `right`, `bottom`, and `left`; an invalid value falls back to `bottom`.

#### Static message

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/message-position-static.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/message-position-static.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

#### Cycling messages

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/message-position-cycling.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/message-position-cycling.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

### Message size

The text in the `message` and default slots scales with the loader size, from small text on `xs` to large text on `md` and `lg`. The default loader is smaller than `sm`.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/message-size.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/message-size.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

### Reduced motion

The following examples relate to the `prefers-reduced-motion` accessibility feature. To see these in action, turn on your system's reduced motion setting.

#### Static label

When people turn on reduced motion, the loader shows text instead of the animation. Use the default slot to set that text. The default is "Loading...".

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/static-label.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/static-label.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

#### Message slot only

When only the `message` slot has content and reduced motion is on, the loader shows that content instead of the "Loading..." fallback, frozen on whichever message was active.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/reduced-motion-message-only.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/reduced-motion-message-only.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

#### Default slot and message slot together

If both slots have content, only `message` shows under normal motion. When people turn on reduced motion, the default slot's content takes over and `message` is hidden, so only one piece of text shows at a time.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/reduced-motion-combined.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/reduced-motion-combined.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

## CSS shadow part examples

### Element

Use `::part(element)` in your CSS to change things like the speed of the animation.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/custom-speed.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/custom-speed.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

## Common usage patterns

### Custom color

To use a custom color, set the CSS `color` property on `<auro-loader>`. The loader draws itself in its current text color.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/custom-color.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/custom-color.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

## Restyle with CSS custom properties

Restyle the component by changing the values of the following tokens.

<!-- Remove section if component does not have any component specific tokens -->

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../src/styles/tokens.scss) -->
<!-- AURO-GENERATED-CONTENT:END -->
