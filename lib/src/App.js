import ImageComparisonSlider from './component';

function App() {
  return (
    <div className='App'>
      <h1>Image Comparison Slider Demo</h1>
      <a href='https://github.com/xtrp/imagecomparisonslider/blob/main/lib/src/App.js' target='_blank' rel='noopener noreferrer'>
        View The Code &rarr;
      </a>
      <div>
        <ImageComparisonSlider
          images={[
            {
              src: './spring.jpg',
              alt: 'spring',
              text: 'Spring',
            },
            {
              src: './autumn.jpg',
              alt: 'autumn',
              text: 'Autumn',
            },
          ]}
          options={{
            color: '#27ae60',
          }}
        ></ImageComparisonSlider>
      </div>
    </div>
  );
}

export default App;
