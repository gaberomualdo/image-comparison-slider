# Image Comparison Slider

Image comparison slider component for React.

![Demo Image](./demo.png)

[View This Demo &nbsp;&rarr;]()

## Download

NPM:

```
npm install image-comparison-slider-react
```

Yarn:

```
yarn add image-comparison-slider-react
```

## Usage

```jsx
<ImageComparisonSlider
  images={[
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

Here's an example component with options:

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
  options={{
    color: 'yellow',
    iconColor: '#000',
    height: '250px',
    width: '350px',
  }}
></ImageComparisonSlider>
```

## License

Image Comparison Slider is MIT Licensed.
