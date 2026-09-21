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
| onDark          | ondark           |           | boolean                                |           | DEPRECATED - use `appearance="inverse"`.                                                                                                                             |
| onLight         | onlight          |           | boolean                                |           | DEPRECATED - use `appearance="brand"`.                                                                                                                               |
| orbit           | orbit            |           | boolean                                |           | Sets loader to orbit type.                                                                                                                                           |
| pulse           | pulse            |           | boolean                                |           | Sets loader to pulse type.                                                                                                                                           |
| ringworm        | ringworm         |           | boolean                                |           | Sets loader to ringworm type.                                                                                                                                        |
| sm              | sm               |           | boolean                                |           | Sets size to small.                                                                                                                                                  |
| xs              | xs               |           | boolean                                |           | Sets size to extra small.                                                                                                                                            |

### Methods

| Name     | Parameters                                                           | Return | Description                                       |
| -------- | -------------------------------------------------------------------- | ------ | ------------------------------------------------- |
| register | `name` (string) - The name of the element that you want to register. |        | This will register this element with the browser. |

### Slots

| Name      | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| (default) | Fallback text shown under `prefers-reduced-motion: reduce`. Not shown for the `laser` type.                                                                     |
| message   | Optional message(s) to show alongside the animation, rotating at `messageInterval` when more than one is provided. Not shown for `laser`. See the docs for reduced-motion behavior. |

### CSS Shadow Parts

| Name    | Description                                                    |
| ------- | -------------------------------------------------------------- |
| element | Apply style to adjust speed of animation.                      |
| message | Apply style to the message region wrapping the `message` slot. |