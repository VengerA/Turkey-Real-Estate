import React from 'react';

import cover1 from '../static/cover-image1.jpg'
import cover2 from '../static/cover-image2.jpg'
import cover3 from '../static/cover-image3.jpg'

const coverImages = [
    cover1,
    cover2,
    cover3,
    cover1,
    cover2,
    cover3,
    cover1,
    cover2,
    cover3
]

export default class SliderGallery extends React.Component {
    state = {
        currentImageIndex: 0,
        imageSwitchTimer: undefined
    }

    componentDidMount() {
        var vm = this

        this.setState({ imageSwitchTimer: setInterval(() => {
            vm.switchNextImage()
        }, 2000) })
    }

    switchNextImage = () => {
        let currentImageIndex = (this.state.currentImageIndex + 1) % coverImages.length
        this.setState({ currentImageIndex })
    }

    switchToImageByIndex = (indx) => {
        console.log('switch called with', indx)

        if (indx < 0 || indx >= coverImages.length) {
            console.log("Invalid image index:", indx, ", ( coverImages.length =", coverImages.length, ")")
            return
        }

        var vm = this

        if (this.state.imageSwitchTimer !== undefined) {
            clearInterval(this.state.imageSwitchTimer)
        }

        this.setState({
            currentImageIndex: indx,
            imageSwitchTimer: setInterval(() => {
                vm.switchNextImage()
            }, 2000)
        })
    }

    render() {
        return (
            <div className="SliderGallery" style={styles.conatiner}>
                <img
                    style={styles.coverImage}
                    className="slider-cover-image"
                    src={coverImages[this.state.currentImageIndex]}
                />
                <div className="slider-imageslider" style={styles.slider}>
                    {coverImages.map((uri, index) => (
                        <div
                            style={this.state.currentImageIndex == index ? styles.sliderItemSelected : styles.sliderItem}
                            onClick={() => {this.switchToImageByIndex(index)}}
                            className="slider-imagesilder-item"
                        >
                            {index + 1}
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}

const styles = {
    conatiner: {
        position: 'relative',
        width: '1440px'
    },
    coverImage: {
        width: '1440px',
        height: '720px'
    },
    slider: {
        position: 'absolute',
        top: '209px',
        right: '64px',
        width: '59px',
        textAlign: 'center',
        height: '191px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        overflowY: 'scroll',
        scrollbarColor: 'white rgba(255, 255, 255, 0.4)',
        scrollbarWidth: 'thin'
    },
    sliderItem: {
        fontSize: '18.6px',
        color: '#fff',
        fontWeight: 'bold',
        marginBottom: '15px',
        marginTop: '15px'
    },
    sliderItemSelected: {
        fontSize: '41px',
        color: '#fff',
        fontWeight: 'bold'
    }
}