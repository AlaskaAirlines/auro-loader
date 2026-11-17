<!--
 THIS PAGE'S CONTENT SHOULD BE KEPT MINIMAL.
 ONLY ADD EXAMPLES THAT ARE TRULY NECESSARY FOR THE INDEX PAGE. THE BASIC EXAMPLE IS USUALLY ENOUGH.
 ALL OTHER EXAMPLES SHOULD GO IN THE API DOCUMENTATION.
-->

# Loader

<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../docs/partials/description.md) -->
<!-- The below content is automatically added from ./../docs/partials/description.md -->
An animated loading indicator that shows people a task is in progress.
<!-- AURO-GENERATED-CONTENT:END -->

## Use cases

<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../docs/partials/useCases.md) -->
<!-- The below content is automatically added from ./../docs/partials/useCases.md -->
Use `<auro-loader>` when people have to wait, for example while a page loads or a request is processing.
<!-- AURO-GENERATED-CONTENT:END -->

## Examples

### Basic

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
