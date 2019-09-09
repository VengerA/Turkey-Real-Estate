import React from 'react';

import coverImage from './../static/about-cover.png';

const welcomeList = [
    {
        header: 'Epic History',
        content: 'From the ancient port city of Ephesus (Efes) to the soaring Byzantine dome of Aya Sofya, Turkey has more than its fair share of world-famous ruins and monuments. A succession of historical figures and empires – including the Romans, Byzantines and Ottomans – have all left their mark on this former stopover along the Silk Road. Experiencing their legacy takes you from the closeted quarters of the sultan and his harem in İstanbul\'s sprawling Topkapı Palace to the romantic and mysterious Lycian ruins on Mediterranean beaches.'
    },
    {
        header: 'Lyrical Landscapes',
        content: 'Turkey\'s diverse landscapes, from Aegean olive groves to eastern steppe, provide a lyrical setting for its many great ruins. The country\'s most magical scenery is to be found in Asian Anatolia, where beautiful vistas are provided by the vertiginous Mediterranean coastline, Cappadocia\'s otherworldly \'fairy chimney\' rock formations and wavy valleys, the alpine pastures of the Kaçkar Mountains, and golden beaches such as 18km-long Patara. Whether you settle down with a çay to enjoy the view across mountain-ringed Lake Eğirdir or explore the hilly hinterland on the southwest coast\'s many peninsulas, Turkey\'s landscape will leave a lasting impression.'
    },
    {
        header: 'Activities Galore',
        content: 'Turkey offers activities to suit every temperament, from outdoors adventure to cultural enrichment. Watery fun includes diving, windsurfing, rafting and canyoning in mountain gorges, kayaking over Kekova\'s sunken ruins and traditional gület cruises on the Mediterranean and Aegean. Or take to the air with Ölüdeniz\' thrilling paragliding flights or a hot-air balloon ride over Cappadocia. For a fresh angle on stunning Turkish scenery, trek to highland pastures or walk part of the Lycian Way trail. In town, take a culinary course, soak in the hamam or sign up for a culinary or cultural walking tour.'
    },
    {
        header: 'Culinary Exploration',
        content: 'The best thing about sampling Turkey\'s delicious specialties – ranging from meze on a Mediterranean harbour to a pension breakfast featuring ingredients fresh from the kitchen garden – is that they take you to the heart of Turkish culture. For the sociable and family-orientated Turks, gathering together and eating well is a time-honoured ritual. So get stuck into olive oil–lathered Aegean vegetables, spicy Anatolian kebaps and dishes from Turkey\'s many other corners – and as you drink a tulip-shaped glass of çay and contemplate some baklava for dessert, remember that eating is deepening your understanding of Turkey.',
    },
]

const experienceContent = [
    {
        header: 'Sea & Nature',
        content: 'Find out the best beaches in Turkey'
    },
    {
        header: 'Wellness & Health',
        content: 'Discover the best natural wonders in Turkey'
    },
    {
        header: 'Gastronomy',
        content: 'Find out the best foods in Turkey'
    },
    {
        header: 'Sport & Adventure',
        content: 'Find out the best sport centers in Turkey'
    },
]

export default function Guide(props) {
    return (
        <div style={styles.container}>
            <img src={coverImage} style={styles.coverImage} />
            <div style={styles.coverTitle}>
                <div style={styles.coverTitleText}>A colossal mosaic of</div>
                <div style={styles.coverTitleHeader}>Civilizations</div>
                <div style={styles.coverTitleDesc}>A richly historical land with some of the best cuisine you will ever taste, scenery from beaches to mountains and the great city of İstanbul</div>
                <div style={styles.coverTitleButton}>Cities of Turkey</div>
            </div>
            <div style={styles.welcomeContent}>
                <div style={styles.welcomeContentHeader}>Welcome to Turkey</div>
                <div style={styles.welcomeContentDesc}>A richly historical land with some of the best cuisine you will ever taste, scenery from beaches to mountains and the great city of İstanbul</div>
                {welcomeList.map((value) => (
                    <div style={styles.welcomeContentListItem}>
                        <div style={styles.welcomeContentListItemHeader}>{value.header}</div>
                        <div style={styles.welcomeContentListItemContent}>{value.content}</div>
                    </div>
                ))}
                <div style={styles.welcomeContentSubHeader}>Experience Turkey</div>
                <div style={styles.welcomeContentSubContent}>
                    {experienceContent.map((value) => (
                        <div style={styles.experienceItem}>
                            <div style={styles.experienceItemHeader}>{value.header}</div>
                            <div style={styles.experienceItemText}>{value.content}</div>
                        </div>
                    ))}
                </div>
                <div style={styles.welcomeContentBottomButton}>See More</div>
            </div>
            <div style={styles.bestContent}>
                <div style={styles.bestContentHeader}>Best Cities of Turkey</div>
                <div style={styles.bestContentCities}>
                    <div style={styles.bestContentCityItem}>
                        <div style={styles.bestContentCityItemHeader}>İzmir</div>
                        <div style={styles.bestContentCityItemText}>234 Properties</div>
                    </div>
                    <div style={styles.bestContentCityItem}>
                        <div style={styles.bestContentCityItemHeader}>Bodrum</div>
                        <div style={styles.bestContentCityItemText}>132 Properties</div>
                    </div>
                    <div style={styles.bestContentCityItem}>
                        <div style={styles.bestContentCityItemHeader}>Trabzon</div>
                        <div style={styles.bestContentCityItemText}>78 Properties</div>
                    </div>
                    <div style={styles.bestContentCityItem}>
                        <div style={styles.bestContentCityItemHeader}>Antalya</div>
                        <div style={styles.bestContentCityItemText}>234 Properties</div>
                    </div>
                </div>
                <div style={styles.bestContentDots}>
                    <div style={styles.bestContentDot}></div>
                    <div style={styles.bestContentDotActive}></div>
                    <div style={styles.bestContentDot}></div>
                </div>
            </div>
        </div>
    )
}

const styles = {
    container: {
        width: '1440px',
        position: 'relative',
        backgroundColor: '#fff',
    },
    coverImage: {
        width: '1440px',
        height: '450px'
    },
    coverTitle: {
        position: 'absolute',
        top: '147px',
        left: '135px',
        display: 'flex',
        flexDirection: 'column'
    },
    coverTitleText: {
        fontSize: '40px',
        fontWeight: 300,
        color: '#fff'
    },
    coverTitleHeader: {
        fontSize: '60px',
        fontWeight: 300,
        color: '#fff'
    },
    coverTitleDesc: {
        fontSize: '14px',
        fontWeight: 600,
        color: '#fff',
        lineHeight: 1.6,
        width: '970px',
        marginTop: '7px',
        marginBottom: '30px'
    },
    coverTitleButton: {
        width: '200px',
        height: '50px',
        borderRadius: '3px',
        backgroundColor: '#e33654',
        fontSize: '16px',
        fontWeight: 600,
        color: '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    welcomeContent: {
        paddingTop: '101px',
        paddingLeft: '135px',
        paddingBottom: '99px'
    },
    welcomeContentHeader: {
        fontSize: '40px',
        color: '#1d1f42',
        fontWeight: 'bold'
    },
    welcomeContentDesc: {
        fontSize: '24px',
        marginTop: '34px',
        marginLeft: '100px',
        color: '#1d1f42',
        lineHeight: 1.42,
        width: '970px'
    },
    welcomeContentListItem: {
        marginTop: '36px',
        marginLeft: '100px'
    },
    welcomeContentListItemHeader: {
        fontSize: '24px',
        color: '#1d1f42',
        lineHeight: 1.6,
        fontWeight: 'bold',
    },
    welcomeContentListItemContent: {
        marginTop: '18px',
        fontSize: '18px',
        color: '#1d1f42',
        lineHeight: 1.6,
        width: '968px'
    },
    welcomeContentSubHeader: {
        marginTop: '60px',
        marginBottom: '44px',
        color: '#1d1f42',
        fontSize: '24px',
        fontWeight: 'bold'
    },
    welcomeContentSubContent: {
        marginRight: '134px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    experienceItem: {
        width: '270px',
        height: '250px',
        border: '1px solid #000'
    },
    experienceItemHeader: {
        marginTop: '160px',
        marginLeft: '31px',
        fontSize: '24px',
        fontWeight: 'bold',
        color: '#000',
        width: '209px'
    },
    experienceItemText: {
        marginTop: '7px',
        width: '209px',
        fontSize: '14px',
        fontWeight: 'bold',
        color: '#000',
        marginLeft: '31px'
    },
    welcomeContentBottomButton: {
        width: '127px',
        height: '40px',
        color: '#252851',
        fontSize: '16px',
        fontWeight: 'bold',
        border: 'solid 1px rgba(92, 95, 129, 0.5)',
        marginTop: '50px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: '518px',
    },
    bestContent: {
        paddingTop: '103px',
        paddingBottom: '100px',
        backgroundColor: '#1d1f42'
    },
    bestContentHeader: {
        width: '100%',
        textAlign: 'center',
        fontSize: '40px',
        fontWeight: 300,
        marginBottom: '90px',
        color: '#fff'
    },
    bestContentCities: {
        marginLeft: '135px',
        marginRight: '135px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    bestContentCityItem: {
        width: '270px',
        height: '400px',
        border: '1px solid #000'
    },
    bestContentCityItemHeader: {
        marginTop: '305px',
        marginLeft: '31px',
        width: '209px',
        fontSize: '30px',
        fontWeight: 'bold',
        color: '#fff'
    },
    bestContentCityItemText: {
        marginTop: '5px',
        marginLeft: '31px',
        fontSize: '14px',
        fontWeight: 'bold',
        color: '#fff'
    },
    bestContentDots: {
        marginTop: '50px',
        width: '100%',
        display: 'flex',
        justifyContent: 'center'
    },
    bestContentDot: {
        marginLeft: '5px',
        marginRight: '5px',
        borderRadius: '5px',
        width: '10px',
        height: '10px',
        backgroundColor: 'rgba(92, 95, 129, 0.5)'
    },
    bestContentDotActive: {
        marginLeft: '5px',
        marginRight: '5px',
        borderRadius: '5px',
        width: '10px',
        height: '10px',
        backgroundColor: '#e33654'
    }
}