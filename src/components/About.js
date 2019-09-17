import React from 'react';

import coverImage from './../static/about-cover.png';

const contentTexts = [
    'We are a private consultancy company operating in Turkey since 2007 in the sector of real estate consultancy and investment. We manage to support you, foreigners willing to invest in real estate market in Turkey more specific Istanbul, for business or personal purposes with a full-service procedure from A to Z.',
    'Established by its founder and manager Murat Aydin, our company was based first in its head office in The Ritz Carlton Istanbul to open then the doors of its second office in Selenium Plaza Sisli to be closer to you. As our logo indicates, “History references the future”, Our company has its own history with a wide background of experience and knowledge in the market. As the owner Murat Aydin used to work in Tourism Sector, he had to deal with foreign investors managing business in Turkey and who hated to stay in hotels and wished to have their own dwellings. And this is where the spark of helping them get their own properties came from. So, he started at a first place to buy properties on his name for the favor of his foreign friends since it was legally impossible at that time. And here is where our motto finds his routes: “We don’t sell you, but we buy on your behalf”. He worked hard to establish this policy for 5 years until his efforts were rewarded by government first and the chamber of commerce then with the announcement of a new law allowing foreigners to own properties in Turkey and Istanbul Investments was legally active after its registration on the chamber of commerce.',
    'We have built so far, a strong reputation based on this philosophy with a passionate leadership, a strong mentorship and an innovative founder whose influence was contagious enough to transmit his challenge spirit to his team who continues the race bringing out the best in themselves just for your satisfaction. You will be in the hands of a highly trained team who learned to think like you and to put themselves in your position to figure out better your needs and bring you the satisfactory results.',
    'With 7000 transactions left behind us, we continue existing to always protect our reputation and to make the pride of our name last as long as we can because we do believe that a thankful word or a referral from you is the best reward we can have. We commit to give you trust and we offer you our cooperation from the first second you start thinking to own your housing until we make sure everything was properly settled down. We will be supporting you for a lifetime.'
]

export default function About(props) {
    return (
        <div style={styles.container}>
            <img src={coverImage} style={styles.coverImage} />
            <div style={styles.coverTitle}>"Honesty is always the best policy"</div>
            <div style={styles.contentsTitle}>About Us</div>
            {contentTexts.map((value) => (
                <div style={styles.contentsText}>{value}</div>
            ))}
        </div>
    )
}

const styles = {
    container: {
        width: '100%',
        position: 'relative',
        backgroundColor: '#f0f0f0',
        paddingBottom: '30px',
    },
    coverImage: {
        width: '100%',
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
    contentsTitle: {
        height: '99px',
        paddingLeft: '135px',
        color: '#1d1f42',
        fontSize: '24px',
        fontWeight: 'bold',
        borderBottom: '1px solid #d8d8d8',
        marginBottom: '67px',
        display: 'flex',
        alignItems: 'center'
    },
    contentsText: {
        marginBottom: '30px',
        marginLeft: '237px',
        width: '968px',
        fontSize: '18px',
        fontWeight: 500,
        color: '#1d1f42'
    }
}