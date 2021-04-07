import ImageComparisonSlider from './component';

function App() {
  return (
    <div className='App'>
      <h1>Hello, world!</h1>
      <ImageComparisonSlider
        images={[
          {
            src: './spring.jpg',
            alt: 'spring',
            text: 'spring',
          },
          {
            src: './autumn.jpg',
            alt: 'autumn',
            text: 'autumn',
          },
        ]}
        options={{
          color: '#27ae60',
        }}
      ></ImageComparisonSlider>
    </div>
  );
}

export default App;
