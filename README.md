# Infinite Spinner

Infinite Spinner is a lightweight script with no dependencies that draws an animated spinner on a canvas element. The spinner can be customized with various options, such as the speed of rotation, and the color of the lines.

## Installation

Simply include the `infinite-spinner.js` file in your project.

```html
<script src="infinite-spinner.js"></script>
```

## Usage

You can call the `infiniteSpinner()` method to draw the spinner on a canvas element.

```javascript
infiniteSpinner(document.getElementById('myCanvas'));
```

## Simple Demo

A simple demo is provided in the [demo-simple.html](https://theogibbons.github.io/infinite-spinner/demo-simple.html) file. You can open this file in your browser to see it in action.

## Complex Demo

A demo displaying different options is provided in the [demo-multiple.html](https://theogibbons.github.io/infinite-spinner/demo-multiple.html) file. You can open this file in your browser to see how to use the different available options.

## Options

Options can be passed to the `infiniteSpinner()` method to customize the spinner.

Example:

```javascript
infiniteSpinner(document.getElementById('myCanvas1'), {
    entireThingSpinSpeed: 0.05,
    lengthModifierSpeed: 20,
    strokeStyle: 'red',
    lineWidth: 5,
    lineCap: 'square',
    arcMaxLength: 10
});
```

The following options are available:

- **entireThingSpinSpeed**: Speed at which the entire spinner rotates. Higher values make it spin faster. Default is `0.1`.
- **lengthModifierSpeed**: Speed at which the spinner's arc length changes. Higher values make it slower. Default is `10`.
- **strokeStyle**: The color or style to use for the spinner's stroke. Default is `'#e74c3c'`.
- **lineWidth**: The thickness of the spinner's stroke. Default is `10`.
- **lineCap**: The shape used for line ends: 'butt', 'round', or 'square'. Default is `'round'`.
- **arcMaxLength**: The maximum dynamic arc length for the sine wave. (0 ≤ arcMaxLength ≤ 100). Default is `80`.


## Links
- GitHub repository: [https://github.com/TheoGibbons/infinite-spinner](https://github.com/TheoGibbons/infinite-spinner)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details