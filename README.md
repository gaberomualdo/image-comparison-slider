# Image Comparison Slider

Image comparison slider component for React.

![Demo Image](./demo.png)

## Download

NPM:

```
npm install imagecomparisonslider
```

Yarn:

```
yarn add imagecomparisonslider
```

## Usage

```jsx
<ImageComparisonSlider
 - images={[
    {
      src: './image1.jpg',
      alt: 'First Image',
    },
    {
      src: './image2.jpg',
      alt: 'Second Image',
    },
  ]}
></ImageComparisonSlider>
```

### Add Descriptive Text For Each Image

As seen in the example image at the beginning of this README, describe descriptive text can be added for each image. This can be done by adding the `text` property to each image object like so:

```jsx
<ImageComparisonSlider
  images={[
    {
      src: './image1.jpg',
      alt: 'First Image',
      text: 'Before',
    },
    {
      src: './image2.jpg',
      alt: 'Second Image',
      text: 'After',
    },
  ]}
></ImageComparisonSlider>
```

### Options

Additional options can be added via the `options` prop. Here's a list of possible options:

- `color` &mdash; color of the slider (default is `#2188ff`)
- `iconColor` &mdash; color of the slider icon (default is `#fff`)
- `height` &mdash; height of the image (default is `18.75rem`)
- `width` &mdash; width of the image (default is `30rem`),

## License

Image Comparison Slider is MIT Licensed.
