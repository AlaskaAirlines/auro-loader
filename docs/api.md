# auro-loader

An animated loading indicator that shows people a task is in progress, with optional messages that rotate beside the animation.

**Key capabilities**
- **Loader types**: Set `orbit`, `ringworm`, `pulse`, or `laser` to choose the animation.
- **Sizes**: Set `xs`, `sm`, `md`, or `lg` to scale the loader and its text.
- **Appearance**: Set `appearance="inverse"` for dark backgrounds or `appearance="brand"` for the brand color.
- **Rotating messages**: Slot more than one `message` to cycle through them every `message-interval` milliseconds.
- **Reduced motion**: Always replaces the animation with text for people who turn on reduced motion.
- **Screen readers**: The animation is silent, and the `message` slot is announced politely as it changes.

**Example**
```html
<auro-loader orbit>
  <span slot="message">Hang tight...</span>
</auro-loader>
```

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

| Name      | Description                                                                                                                                                                                                                                                                         |
| --------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| (default) | Text shown in place of the animation for people who turn on reduced motion, for example "Loading your reservation". Defaults to "Loading..." unless the `message` slot has content. Screen readers read it only when reduced motion is on, and it isn't shown for the `laser` type. |
| message   | Messages to show beside the animation, for example "Hang tight...". Screen readers politely announce them as they change, and when you slot more than one, they rotate every `messageInterval` milliseconds until someone turns on reduced motion. Not shown for `laser`.           |

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