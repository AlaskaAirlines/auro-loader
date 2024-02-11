<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../api.md) -->
<!-- The below content is automatically added from ./../api.md -->

# auro-loader

The auro-loader element is an easy to use animated loader component.

## Attributes

| Attribute | Type      | Description                                      |
|-----------|-----------|--------------------------------------------------|
| [lg](#lg)      | `Boolean` | sets size to large                               |
| [md](#md)      | `Boolean` | sets size to medium                              |
| [ondark](#ondark)  | `Boolean` | sets color of loader to auro-color-ui-default-on-dark |
| [onlight](#onlight) | `Boolean` | sets color of loader to auro-color-ui-default-on-light |
| [sm](#sm)      | `Boolean` | sets size to small                               |
| [white](#white)   | `Boolean` | sets color of loader to white                    |
| [xs](#xs)      | `Boolean` | sets size to extra small                         |

## Properties

| Property   | Attribute  | Type      | Default | Description      |
|------------|------------|-----------|---------|------------------|
| [laser](#laser)    | `laser`    | `Boolean` | false   | sets loader type |
| [orbit](#orbit)    | `orbit`    | `Boolean` | false   | sets loader type |
| [pulse](#pulse)    | `pulse`    | `Boolean` | false   | sets loader type |
| [ringworm](#ringworm) | `ringworm` | `Boolean` | false   | sets loader type |

## CSS Shadow Parts

| Part      | Description                              |
|-----------|------------------------------------------|
| [element](#element) | apply style to adjust speed of animation |
<!-- AURO-GENERATED-CONTENT:END -->

## API Examples

### Default examples

The following illustrates the use of the base elements with default output. The `laser` example is shown at the top of the page due to its fixed positioning.

<div class="twoColDemoRow">
  <div>
    <div class="exampleWrapper">
      <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/loaderGallery.html) -->
      <!-- The below content is automatically added from ./../../apiExamples/loaderGallery.html -->
      <auro-loader ringworm></auro-loader>
      <auro-loader orbit></auro-loader>
      <auro-loader pulse></auro-loader>
      <auro-loader laser></auro-loader>
      <!-- AURO-GENERATED-CONTENT:END -->
    </div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/loaderGallery.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/loaderGallery.html -->

```html
<auro-loader ringworm></auro-loader>
<auro-loader orbit></auro-loader>
<auro-loader pulse></auro-loader>
<auro-loader laser></auro-loader>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Attribute Examples

#### <a name="xs"></a>`xs`

Use the `xs` boolean attribute for a pre-defined size. Type `laser` does not support a size attribute.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/api_xs.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/api_xs.html -->
  <auro-loader ringworm xs></auro-loader>
  <auro-loader orbit xs></auro-loader>
  <auro-loader pulse xs></auro-loader>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/api_xs.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/api_xs.html -->

```html
<auro-loader ringworm xs></auro-loader>
<auro-loader orbit xs></auro-loader>
<auro-loader pulse xs></auro-loader>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

#### <a name="sm"></a>`sm`

Use the `sm` boolean attribute for a pre-defined size. Type `laser` does not support a size attribute.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/api_small.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/api_small.html -->
  <auro-loader ringworm sm></auro-loader>
  <auro-loader orbit sm></auro-loader>
  <auro-loader pulse sm></auro-loader>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/api_small.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/api_small.html -->

```html
<auro-loader ringworm sm></auro-loader>
<auro-loader orbit sm></auro-loader>
<auro-loader pulse sm></auro-loader>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

#### <a name="md"></a>`md`

Use the `md` boolean attribute for a pre-defined size. Type `laser` does not support a size attribute.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/api_medium.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/api_medium.html -->
  <auro-loader ringworm md></auro-loader>
  <auro-loader orbit md></auro-loader>
  <auro-loader pulse md></auro-loader>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/api_medium.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/api_medium.html -->

```html
<auro-loader ringworm md></auro-loader>
<auro-loader orbit md></auro-loader>
<auro-loader pulse md></auro-loader>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

#### <a name="lg"></a>`lg`

Use the `lg` boolean attribute for a pre-defined size. Type `laser` does not support a size attribute.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/api_large.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/api_large.html -->
  <auro-loader ringworm lg></auro-loader>
  <auro-loader orbit lg></auro-loader>
  <auro-loader pulse lg></auro-loader>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/api_large.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/api_large.html -->

```html
<auro-loader ringworm lg></auro-loader>
<auro-loader orbit lg></auro-loader>
<auro-loader pulse lg></auro-loader>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

#### <a name="onlight"></a>`onlight`

Use the `onlight` boolean attribute for a pre-defined color. Type `laser` is supported, but not shown due to fixed positioning.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/onlight.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/onlight.html -->
  <auro-loader ringworm onLight></auro-loader>
  <auro-loader orbit onLight></auro-loader>
  <auro-loader pulse onLight></auro-loader>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/onlight.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/onlight.html -->

```html
<auro-loader ringworm onLight></auro-loader>
<auro-loader orbit onLight></auro-loader>
<auro-loader pulse onLight></auro-loader>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

#### <a name="ondark"></a>`ondark`

Use the `ondark` boolean attribute for a pre-defined color. Type `laser` is supported, but not shown due to fixed positioning.

<div class="exampleWrapper--ondark">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/ondark.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/ondark.html -->
  <auro-loader ringworm ondark></auro-loader>
  <auro-loader orbit ondark></auro-loader>
  <auro-loader pulse ondark></auro-loader>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/ondark.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/ondark.html -->

```html
<auro-loader ringworm ondark></auro-loader>
<auro-loader orbit ondark></auro-loader>
<auro-loader pulse ondark></auro-loader>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

#### <a name="white"></a>`white`

Use the `white` boolean attribute for a pre-defined color. Type `laser` is supported, but not shown due to fixed positioning.

<div class="exampleWrapper--ondark">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/white.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/white.html -->
  <auro-loader ringworm white></auro-loader>
  <auro-loader orbit white></auro-loader>
  <auro-loader pulse white></auro-loader>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/white.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/white.html -->

```html
<auro-loader ringworm white></auro-loader>
<auro-loader orbit white></auro-loader>
<auro-loader pulse white></auro-loader>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Property Examples

Use the following `orbit`, `laser`, `ringworm`, and `pulse` properties as illustrated.

#### <a name="orbit"></a>`orbit`

Use the `orbit` property for the desired animated loader.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/property_orbit.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/property_orbit.html -->
  <auro-loader orbit></auro-loader>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/property_orbit.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/property_orbit.html -->

```html
<auro-loader orbit></auro-loader>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

#### <a name="laser"></a>`laser`

Use the `laser` property for the desired animated loader. Example is shown at the top of the page due its fixed positioning.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/property_laser.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/property_laser.html -->
  <auro-loader laser></auro-loader>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/property_laser.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/property_laser.html -->

```html
<auro-loader laser></auro-loader>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

#### <a name="pulse"></a>`pulse`

Use the `pulse` property for the desired animated loader.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/property_pulse.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/property_pulse.html -->
  <auro-loader pulse></auro-loader>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/property_pulse.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/property_pulse.html -->

```html
<auro-loader pulse></auro-loader>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

#### <a name="ringworm"></a>`ringworm`

Use the `ringworm` property for the desired animated loader.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/property_ringworm.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/property_ringworm.html -->
  <auro-loader ringworm></auro-loader>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/property_ringworm.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/property_ringworm.html -->

```html
<auro-loader ringworm></auro-loader>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### CSS Shadow Parts Examples

#### <a name="element"></a>`element`

Use the `element` CSS Part with your CSS as illustrated to effect things like the speed of the animation.

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
