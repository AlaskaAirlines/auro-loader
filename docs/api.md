# auro-loader

The auro-loader element is an easy to use animated loader component.

## Attributes

| Attribute | Type      | Description                              |
|-----------|-----------|------------------------------------------|
| `lg`      | `Boolean` | Sets size to large.                      |
| `md`      | `Boolean` | Sets size to medium.                     |
| `ondark`  | `Boolean` | DEPRECATED - use `appearance="inverse"`. |
| `onlight` | `Boolean` | DEPRECATED - use `appearance="brand"`.   |
| `sm`      | `Boolean` | Sets size to small.                      |
| `xs`      | `Boolean` | Sets size to extra small.                |

## Properties

| Property     | Attribute    | Type      | Default     | Description                                      |
|--------------|--------------|-----------|-------------|--------------------------------------------------|
| `appearance` | `appearance` | `string`  | "'default'" | Defines whether the button is intended for lighter or darker backgrounds, or if it should use the brand color regardless of the background. |
| `laser`      | `laser`      | `boolean` | false       | Sets loader to laser type.                       |
| `orbit`      | `orbit`      | `boolean` | false       | Sets loader to orbit type.                       |
| `pulse`      | `pulse`      | `boolean` | false       | Sets loader to pulse type.                       |
| `ringworm`   | `ringworm`   | `boolean` | false       | Sets loader to ringworm type.                    |

## CSS Shadow Parts

| Part      | Description                               |
|-----------|-------------------------------------------|
| `element` | Apply style to adjust speed of animation. |
