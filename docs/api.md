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