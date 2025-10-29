# auro-loader

The auro-loader element is an easy to use animated loader component.

### Properties & Attributes

| Properties | Attributes | Type    | Default   | Description                                                                                                                                 |
| ---------- | ---------- | ------- | --------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| appearance | appearance | string  | "default" | Defines whether the loader is intended for lighter or darker backgrounds, or if it should use the brand color regardless of the background. |
| laser      | laser      | boolean | false     | Sets loader to laser type.                                                                                                                  |
| orbit      | orbit      | boolean | false     | Sets loader to orbit type.                                                                                                                  |
| pulse      | pulse      | boolean | false     | Sets loader to pulse type.                                                                                                                  |
| ringworm   | ringworm   | boolean | false     | Sets loader to ringworm type.                                                                                                               |
|            | lg         | Boolean |           | Sets size to large.                                                                                                                         |
|            | md         | Boolean |           | Sets size to medium.                                                                                                                        |
|            | ondark     | Boolean |           | DEPRECATED - use `appearance="inverse"`.                                                                                                    |
|            | onlight    | Boolean |           | DEPRECATED - use `appearance="brand"`.                                                                                                      |
|            | sm         | Boolean |           | Sets size to small.                                                                                                                         |
|            | xs         | Boolean |           | Sets size to extra small.                                                                                                                   |

### Methods

| Name     | Parameters                                                          | Return | Description                                       |
| -------- | ------------------------------------------------------------------- | ------ | ------------------------------------------------- |
| register | `name` (string) - The name of element that you want to register to. |        | This will register this element with the browser. |

### Slots

| Name      | Description                                                                                                         |
| --------- | ------------------------------------------------------------------------------------------------------------------- |
| (default) | Default slot for text that replaces `auro-loader` component when user has the "Reduce Motion" a11y feature enabled. |

### CSS Shadow Parts

| Name    | Description                               |
| ------- | ----------------------------------------- |
| element | Apply style to adjust speed of animation. |