<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../docs/api.md) -->
<!-- AURO-GENERATED-CONTENT:END -->

## Basic Loaders

The following example illustrates the different loader types that the `<auro-loader>` element supports. The `laser` example is shown at the top of the page due to its fixed positioning.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/basic.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/basic.html) -->
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
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/brand-appearance.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

#### Inverse

Use the `appearance="inverse"` attribute for a pre-defined color.

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

The `<auro-loader>` element supports a scale of sizes. Options are `[xs, sm, md, lg]`. 

**Note**: Type `laser` does not support a size attribute.

#### Extra Small

Use the `xs` boolean attribute for a pre-defined size.

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

Use the `sm` boolean attribute for a pre-defined size.

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

Use the `md` boolean attribute for a pre-defined size.

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

Use the `lg` boolean attribute for a pre-defined size.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/lg.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/lg.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>


## Slot Examples

### Static Label

Use the `staticLabel` slot to provide custom text that replaces the `auro-loader` component when the user has the `prefers-reduced-motion` accessibility feature enabled.
The default text is `Loading...`

In order to see the example in action, please enable your system's "Reduce Motion" accessibility setting.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/static-label.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/static-label.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

## CSS Shadow Part Examples

### Element

Use the `::part(element)` with your CSS as illustrated to effect things like the speed of the animation.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/custom-speed.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/custom-speed.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

## Common Usage Patterns & Functional Examples

### Custom Color Support

The `<auro-loader>` element supports any custom color defined at the root level of the element.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/custom-color.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/custom-color.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

## Restyle Component with CSS Variables

The component may be restyled by changing the values of the following token(s).

<!-- Remove section if component does not have any component specific tokens -->

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../src/styles/tokens.scss) -->
<!-- AURO-GENERATED-CONTENT:END -->
