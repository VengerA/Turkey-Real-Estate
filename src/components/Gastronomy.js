import React from 'react';

import coverImage from './../static/gastronomy-cover.png';

const galleryContent = [
    {
        title: 'Turkish Coffee',
        content: 'European countries developed their coffee brewing methods after deriving coffee drinking habit from the Turks; however, the method of brewing Turkish coffee has'
    },
    {
        title: 'Meze',
        content: 'In Turkey, there is a rich tradition associated with liquor. Drinking alcoholic beverages in the company of family and friends at home as well as in taverns and'
    },
    {
        title: 'Turkish Coffee and Ayran',
        content: 'Volumes have been written about Turkish coffee; its history, its significance in social life, and the ambiance of the ubiquitous coffee houses. Without some und'
    },
    {
        title: 'Ceremonial Keşkek Tradition',
        content: 'The ceremonial meal where groups of men and women all work together cooking wheat and meat in large cauldrons over an open fire is called "keşkek", and the ritu'
    },
    {
        title: 'Grains: From Bread to Börek',
        content: 'The foundation of Turkish food is, if anything, dough made of wheat flour. Besides "ekmek" (ordinary white bread), "pide" (flat bread), "simit" (sesame seed rin'
    },
    {
        title: 'Grilled Meats',
        content: '"Kebab" is another category of food which, like the börek, is typically Turkish dating back to the time when the nomadic Turks learned to grill and roast meat o'
    },
    {
        title: 'Kitchen of the Imperial Palace',
        content: 'The importance of culinary art to the Ottoman Sultans, who followed the sacred advice of Islam to "Feed the Hungry", is evident to every visitor of Topkapı Pala'
    },
    {
        title: 'Lavash, Katyrma, Jupka, Yufka',
        content: 'Lavash, Katyrma, Jupka and Yufka being varieties of round- or oval-shaped thin breads that take shape by rolling dough by hand or using a dough roller, called "'
    },
    {
        title: 'Seafood',
        content: 'Four seas (the Black Sea, the Sea of Marmara, the Aegean, and the Mediterranean) surround the Turkish landscape. Residents of the coastal cities are experts in'
    },
]

export default function Gastronomy(props) {
    return (
        <div style={styles.container}>
            <img src={coverImage} style={styles.coverImage} />
            <div style={styles.coverTitle}>Find out the best foods in Turkey</div>
            <div style={styles.contentHeader}>Gastronomy</div>
            <div style={styles.contentGallery}>
                {galleryContent.map((value) => (
                    <div style={styles.galleryItem}>
                        <img style={styles.galleryItemPicture} />
                        <div style={styles.galleryItemHeader}>{value.title}</div>
                        <div style={styles.galleryItemContent}>{value.content}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}

const styles = {
    container: {
        width: '1440px',
        position: 'relative',
        backgroundColor: '#f0f0f0',
        paddingBottom: '30px'
    },
    coverImage: {
        width: '1440px',
        height: '450px'
    },
    coverTitle: {
        position: 'absolute',
        top: '344px',
        left: '135px',
        color: '#fff',
        fontSize: '60px',
        fontWeight: 300
    },
    contentHeader: {
        height: '99px',
        borderBottom: '1px solid #d8d8d8',
        color: '#1d1f42',
        fontSize: '24px',
        fontWeight: 'bold',
        paddingLeft: '135px',
        display: 'flex',
        alignItems: 'center'
    },
    contentGallery: {
        marginTop: '50px',
        marginLeft: '135px',
        marginRight: '135px',
        marginBottom: '70px',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    galleryItem: {
        width: '370px',
        height: '397px',
        backgroundColor: '#fff',
        marginBottom: '30px'
    },
    galleryItemPicture: {
        width: '370px',
        height: '240px'
    },
    galleryItemHeader: {
        marginTop: '15px',
        marginLeft: '30px',
        width: '310px',
        color: '#1d1f42',
        fontSize: '18px',
        fontWeight: 'bold',
        lineHeight: 1.67
    },
    galleryItemContent: { 
        marginLeft: '30px',
        width: '310px',
        color: '#1d1f42',
        fontSize: '14px',
        lineHeight: 1.71
    }
}