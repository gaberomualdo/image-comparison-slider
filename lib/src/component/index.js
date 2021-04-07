import './styles.css';
import React from 'react';

const defaultOptions = {
  color: '#2188ff',
  iconColor: '#fff',
  height: '18.75rem',
  width: '30rem',
};

export default class ImageComparisonSlider extends React.Component {
  constructor(props) {
    super(props);
    this.imageRef = React.createRef();
    this.state = {
      sliderPosition: 50,
      dragging: false,
    };

    this.startDragging = this.startDragging.bind(this);
    this.stopDragging = this.stopDragging.bind(this);
    this.drag = this.drag.bind(this);
    this.dragMobile = this.dragMobile.bind(this);
  }
  componentDidMount() {
    document.addEventListener('mousemove', this.drag);
    document.addEventListener('mouseup', this.stopDragging);

    // mobile
    document.addEventListener('touchend', this.stopDragging);
    document.addEventListener('touchmove', this.dragMobile, { passive: false });
  }
  componentWillUnmount() {
    document.removeEventListener('mousemove', this.drag);
    document.removeEventListener('mouseup', this.stopDragging);

    // mobile
    document.removeEventListener('touchend', this.stopDragging);
    document.removeEventListener('touchmove', this.dragMobile);
  }
  stopDragging() {
    this.setState({ dragging: false });
  }
  startDragging() {
    console.log('go');
    this.setState({ dragging: true });
  }
  drag(e) {
    if (this.state.dragging) {
      const rect = this.imageRef.current.getBoundingClientRect();
      const width = rect.right - rect.left;
      let perc = ((e.clientX - rect.left) / width) * 100;
      perc = Math.max(10, perc);
      perc = Math.min(90, perc);
      this.setState({ sliderPosition: perc });
    }
  }
  dragMobile(e) {
    if (this.state.dragging) {
      e.preventDefault();
    }
    this.drag(e.changedTouches[0]);
  }
  render() {
    const { images } = this.props;

    if (!images) {
      throw new Error("Prop 'images' must be present.");
    } else if (images.length !== 2) {
      throw new Error("Prop 'images' must have two elements.");
    } else if (images.filter((e) => e.hasOwnProperty('src') && e.hasOwnProperty('src')).length !== images.length) {
      throw new Error("Every image must have an 'src' property and an 'alt' property.");
    }

    const options = { ...defaultOptions, ...this.props.options };

    return (
      <div
        className='__ReactImageComparisonSlider'
        style={{
          '--theme': options.color,
          '--icon-color': options.iconColor,
          '--left-offset': `${this.state.sliderPosition}%`,
          '--height': options.height,
          '--width': options.width,
        }}
        ref={this.imageRef}
      >
        <img src={images[1].src} alt={images[1].alt} />
        <img src={images[0].src} alt={images[0].alt} />
        <div onMouseDown={(e) => this.startDragging(e)} onTouchStart={(e) => this.startDragging(e)}>
          <div>
            <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'>
              <path d='M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z' />
            </svg>
            <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'>
              <path d='M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z' />
            </svg>
          </div>
        </div>
        <div>
          {images[0].text ? <p>{images[0].text}</p> : null}
          {images[1].text ? <p>{images[1].text}</p> : null}
        </div>
      </div>
    );
  }
}
