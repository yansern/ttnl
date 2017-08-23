import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import ArrowLeftSvg from '../../../assets/svg/arrow-left.svg';
import ArrowRightSvg from '../../../assets/svg/arrow-right.svg';
import ArrowDownSvg from '../../../assets/svg/arrow-down.svg';
import ArrowDownDoubleSvg from '../../../assets/svg/arrow-down-double.svg';
import MouseSvg from '../../../assets/svg/mouse.svg';

// Change the slide transition type.
const transition = 'scale';
// try translate, scale, blur, rotate

const appearTransition = true;
// Change it to true to add an appear transition that fades the
// image in from grayscale to full color.

export default class Carousel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
    };
  }

  componentDidMount() {
    this.scrollToElement = require('scroll-to-element'); // eslint-disable-line
  }

  prevItem = () => {
    const prevItem = (this.state.counter - 1 < 0) ?
      this.props.items.length - 1 :
      this.state.counter - 1;

    this.setState({
      counter: prevItem,
    });
  }

  nextItem = () => {
    const nextItem = (this.state.counter + 1 < this.props.items.length) ?
      this.state.counter + 1 :
      0;

    this.setState({
      counter: nextItem,
    });
  }

  exitCarousel = () => {
    this.scrollToElement(this.props.exitTo, {
      offset: 0,
      ease: 'out-bounce',
      duration: 1500,
    });
  }

  render() {
    const item = this.props.items[this.state.counter];

    return (
      <div className='carousel'>

        <div className='carousel-overlay'>
          <h2 className='title has-text-centered is-uppercase is-size-3'>{ item.title }</h2>
          <div className='carousel-menu'>
            <button type='button' className='button is-black carousel-prev' onClick={ this.prevItem }>
              <ArrowLeftSvg />
            </button>
            <button type='button' className='button is-black carousel-open'><span>View Case</span></button>
            <button type='button' className='button is-black carousel-next' onClick={ this.nextItem }><ArrowRightSvg /></button>
          </div>
        </div>

        <div className='carousel-exit'>
          <button type='button' className='button is-white carousel-scroll-exit' onClick={ this.exitCarousel }>
            <MouseSvg className='mouse' />
            <ArrowDownSvg className='arrow-down' />
          </button>
          <button type='button' className='button is-white carousel-swipe-exit' onClick={ this.exitCarousel }>
            <ArrowDownDoubleSvg className='arrow-down-double' />
          </button>
        </div>

        <ReactCSSTransitionGroup
          transitionName={ transition }
          transitionEnterTimeout={ 500 }
          transitionLeaveTimeout={ 500 }
          component='div'
          className='carousel-slide'
          transitionAppear={ appearTransition }
          transitionAppearTimeout={ 1000 }
        >
          <div className={ item.className } key={ this.state.counter } />
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}
