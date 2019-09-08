import React from 'react';

import coverImage from './../static/contact-cover.png';

export default function ContactUs(props) {
    return (
        <div style={styles.container}>
            <img src={coverImage} style={styles.coverImage} />
            <div style={styles.coverTitle}>Contact Us</div>
            <div style={styles.titlesContainer}>
                <div style={styles.subTitle}>Ritz Carlton Office</div>
                <div style={styles.subTitleRight}>Selenium Plaza</div>
            </div>
            <div style={styles.contactSectionsContainer}>
                <div style={styles.contactSection}>
                    <div style={styles.contactItem}>
                        <div style={styles.contactItemIcon}></div>
                        <div style={styles.contactItemText}>+90 212 293 5512</div>
                    </div>
                    <div style={styles.contactItem}>
                        <div style={styles.contactItemIcon}></div>
                        <div style={styles.contactItemText}>+90 533 294 7505</div>
                    </div>
                    <div style={styles.contactItem}>
                        <div style={styles.contactItemIcon}></div>
                        <div style={styles.contactItemText}>info@istanbulinvestments.com</div>
                    </div>
                    <div style={styles.contactItem}>
                        <div style={styles.contactItemIcon}></div>
                        <div style={styles.contactItemText}>Ritz Carlton Residences Harbiye Mah. No:9/2107 34367 Elmadag, Sisli / ISTANBUL</div>
                    </div>
                </div>
                <div style={styles.contactSectionRight}>
                    <div style={styles.contactItem}>
                        <div style={styles.contactItemIcon}></div>
                        <div style={styles.contactItemText}>+90 212 293 5512</div>
                    </div>
                    <div style={styles.contactItem}>
                        <div style={styles.contactItemIcon}></div>
                        <div style={styles.contactItemText}>+90 533 294 7505</div>
                    </div>
                    <div style={styles.contactItem}>
                        <div style={styles.contactItemIcon}></div>
                        <div style={styles.contactItemText}>info@istanbulinvestments.com</div>
                    </div>
                    <div style={styles.contactItem}>
                        <div style={styles.contactItemIcon}></div>
                        <div style={styles.contactItemText}>Dikilitaş, Hakkı Yeten St. No:10/C 13th Floor Beşiktaş / İstanbul</div>
                    </div>
                </div>
            </div>
            <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1pHZk_rLn2-waf6O0Mq5dtgNUDQdF4Dfe" width="1440" height="600"></iframe>
        </div>
    )
}

const styles = {
    container: {
        width: '1440px',
        position: 'relative',
        backgroundColor: '#f0f0f0',
    },
    coverImage: {
        width: '1440px',
        height: '450px'
    },
    coverTitle: {
        position: 'absolute',
        top: '343px',
        left: '135px',
        color: '#fff',
        fontSize: '60px',
        fontWeight: 300
    },
    titlesContainer: {
        height: '99px',
        borderBottom: '1px solid #d8d8d8',
        display: 'flex',
        flexDirection: 'row'
    },
    subTitle: {
        color: '#1d1f42',
        fontSize: '24px',
        fontWeight: 'bold',
        display: 'flex',
        alignItems: 'center',
        width: '705px',
        paddingLeft: '145px',
    },
    subTitleRight: {
        color: '#1d1f42',
        fontSize: '24px',
        fontWeight: 'bold',
        display: 'flex',
        alignItems: 'center',
        width: '705px',
        paddingLeft: '30px',
    },
    contactSectionsContainer: {
        display: 'flex',
        flexDirection: 'row'
    },
    contactSection: {
        width: '705px',
        paddingTop: '69px',
        paddingLeft: '145px',
        paddingBottom: '54px',
        borderRight: '1px solid #d8d8d8'
    },
    contactSectionRight: {
        width: '705px',
        paddingTop: '69px',
        paddingLeft: '57px',
        paddingBottom: '54px',
        borderRight: '1px solid #d8d8d8'
    },
    contactItem: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    contactItemIcon: {
        width: '24px',
        height: '24px',
        margin: '18px',
        marginLeft: '30px',
        border: 'solid 5px #000'
    },
    contactItemText: {
        width: '402px',
        fontSize: '18px',
        fontWeight: 500,
        lineHeight: 1.61,
        color: '#1d1f42'
    }
}