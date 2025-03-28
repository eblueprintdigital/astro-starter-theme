# Icons in Astro Starter Theme

This project uses the [astro-icon](https://github.com/natemoo-re/astro-icon) package to provide easy access to thousands of icons from various icon sets.

## Basic Usage

To use an icon in your component or page:

```astro
---
import { Icon } from 'astro-icon/components';
---

<Icon name="mdi:home" />
```

## Icon Format

Icons follow the format `collection:icon-name`, where:

- `collection` is the icon set (like mdi, ph, lucide)
- `icon-name` is the specific icon name

## Popular Icon Collections

- `mdi:` - Material Design Icons
- `ph:` - Phosphor Icons
- `lucide:` - Lucide Icons
- `heroicons:` - Heroicons (by Tailwind CSS)
- `simple-icons:` - Simple Icons (brand and logo icons)

## Customizing Icons

### Size

Control the size with `width` and `height` attributes:

```astro
<Icon name="mdi:home" width="32" height="32" />
```

### Color

Use CSS classes or inline styles:

```astro
<!-- Using a utility class -->
<Icon name="mdi:star" class="text-primary" />

<!-- Using inline style -->
<Icon name="mdi:star" style="color: #7209b7;" />
```

### Other Attributes

You can pass other HTML attributes as needed:

```astro
<Icon name="mdi:info" aria-label="Information" />
```

## Finding Icons

Browse all available icons at: [https://icon-sets.iconify.design/](https://icon-sets.iconify.design/)

## Examples

See a working example of various icons in the `/icon-example` page of this project.

## Performance Notes

- Icons are automatically optimized by Astro
- They're inlined in the HTML as SVGs (no extra requests)
- Only the icons you use are included in the build
