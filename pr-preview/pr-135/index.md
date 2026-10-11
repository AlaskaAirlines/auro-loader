<!--
 THIS PAGE'S CONTENT SHOULD BE KEPT MINIMAL.
 ONLY ADD EXAMPLES THAT ARE TRULY NECESSARY FOR THE INDEX PAGE — THE BASIC EXAMPLE IS USUALLY ENOUGH.
 ALL OTHER EXAMPLES SHOULD GO IN THE API DOCUMENTATION.
-->

# Loader

<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../docs/partials/description.md) -->
<!-- The below content is automatically added from ./../docs/partials/description.md -->
`<auro-loader>` is a [HTML custom element](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements) for the purpose of illustrating animated loaders.
<!-- AURO-GENERATED-CONTENT:END -->

## Use Cases

<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../docs/partials/useCases.md) -->
<!-- The below content is automatically added from ./../docs/partials/useCases.md -->
The `<auro-loader>` element should be used in situations where developers may need to illustrate a wait time for their users.
<!-- AURO-GENERATED-CONTENT:END -->

## Example(s)

### Basic Loaders

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
