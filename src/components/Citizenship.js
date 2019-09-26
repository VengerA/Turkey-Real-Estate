import React from 'react';

import coverImage from './../static/citizenship-cover.png';

const stepElements = [
    {
        descr: 'Purchasing a property worth minimum.250.000$'
    },
    {
        descr: 'Payment of concerned amount by bank transfer'
    },
    {
        descr: 'Keeping the property for minimum 3 years'
    },
    {
        descr: 'Fast Processing Times Passport in 3 Months.'
    }
]

const listingItems = [
    "In order to obtain the title deed, foreigners must have a Turkish tax number which can easily be obtained from the  Turkish tax offices.",
    "Property’s tax excluded price must be at least 250,000 USD. ",
    "The title deed owner and applicant must be the same person.",
    "The valuation report must show that the property is worth more than 250,000 USD.",
    "Even though the payment is made in dollar, the price of the property will be written in Turkish Lira on the title deed. The exchange rate will be adopted according to the current day’s effective  selling rate of official Turkish Central  Bank. ",
    "In case the foreigner will purchase the property in Turkish Lira, the exchange rate will becalculated  according to  current day’s effective selling rate of the official Turkish Central Bank ",
    "The property must be purchased from a Turkish real person or Turkish company established with Turkish capital. It will not be acceptable to buy properties purchased from foreigners.",
    "The payment method must be via bank transfer exclusively from foreigners’ personal bank account to the sellers bank account and both  sellers and buyers bank receipts documented and stamped by the relevant banks  will be required in order to prove that the bank transfer is made. The payment will not be accepted if It was made cash. If the foreign buyer has a bank account in a Turkish bank, he/she can make the transfer from that account too."
]

const howtoQNA = [
    {
        question: 'Can I pay, $250,000, the price of the property with instalments?',
        answer: 'No, the “Regulation” states that payment must be at once.'
    },
    {
        question: 'Can I buy an off-plan property for $250,000 and still be eligible for Turkish citizenship?',
        answer: 'Yes, with the recent amendment to the law, you can now acquire citizenship with an off-plan project in condition to provide a notarized contract.'
    },
    {
        question: 'Will Turkish citizenship be given only to the owner of the property?',
        answer: 'Turkish citizenship will be given to the owner of the property, his/her spouse and his/her children under 18 years old.'
    },
    {
        question: 'What type of real estate can I invest in to be able to acquire the Turkish citizenship?',
        answer: 'All immovables properties, like apartment, villa, land, hotels, farms… etc. are eligible for citizenship according to this regulation.'
    },
    {
        question: 'How can I be sure that I am getting the right value of my property investment?',
        answer: 'As part of our services, we provide a licensed valuation approved by the Capital Market Board in accordance with valuation standards.'
    },
    {
        question: 'As part of our services, we provide a licensed valuation approved by the Capital Market Board in accordance with valuation standards.',
        answer: 'The date of title deed acquirement must be after 19 September 2018, the date of the latest regulation announcement.'
    },
    {
        question: 'Can I invest $250,000 in more than one property and still be able to apply for Turkish citizenship through investment program?',
        answer: 'Yes, foreigners who own properties with a total value of more than $ 250,000 are eligible to apply for Turkish citizenship.'
    },
    {
        question: 'Can I sell the property after applying for Turkish citizenship?',
        answer: 'Yes, but you have to wait at least 3 years before you sell your property. You must write an official promise in the title deed stating that you commit not to buy the property before 3 years. '
    },
]

const benefitCards = [
    {
        descr: '115 Visa-free travel countriesincluding 26 Schengen zone ones'
    },
    {
        descr: 'World Top 40th passport'
    },
    {
        descr: '10 Year-validity passport renewable'
    },
    {
        descr: 'Allows dual citizenship'
    },
    {
        descr: 'Full free medical assistance for life to all the family'
    },
    {
        descr: 'Free education and University access'
    },
    {
        descr: 'Free finance system, no tracking'
    },
    {
        descr: 'No military service is required'
    },
    {
        descr: 'No name change is required'
    },
]

export default function Citizenship(props) {
    return (
        <div className='Citizenship' style={styles.container}>
            <img src={coverImage} style={styles.coverImage} />
            <div style={styles.header}>Get the ownership of your own home and 
become a Turkish Citizen with 250,000$</div>
            <div style={styles.citizenshipSubHeader}>Citizenship</div>
            <div style={styles.citizenshipSection}>
                <div style={styles.citizenshipSectionHeader}>Turkish Citizenship By Investment Procedure</div>
                <div style={styles.citizenshipSectionStepsContainer}>
                    {stepElements.map((elem, index) => (
                        <div style={styles.citizenshipSectionStep}>
                            <div style={styles.citizenshipSectionStepHeader}>
                                <div style={styles.citizenshipSectionStepHeaderIcon}></div>
                                <div style={styles.citizenshipSectionStepHeaderText}>STEP {index+1}</div>
                            </div>
                            <div style={styles.citizenshipSectionStepDescription}>{elem.descr}</div>
                        </div>
                    ))}
                </div>
                <div style={styles.citizenshipSectionDescription}>
                    In accordance with the Law amendment that has come into force in 19 September 2018, foreigners who purchase a property with at least 250,000 USD can acquire Turkish Citizenship. 
                </div>
                <div style={styles.citizenshipSectionDescription}>
                    The first step for a foreigner willing to become a Turkish Citizen is to purchase a property with a minimum value of USD 250.000. There are certain points to be considered when purchasing the property. 
                </div>
                <div style={styles.citizenshipSectionListing}>
                    {listingItems.map((value) => (
                        <div style={styles.citizenshipSectionListingItem}>
                            <div style={styles.citizenshipSectionListingItemPoint}></div>
                            <div style={styles.citizenshipSectionListingItemText}>{value}</div>
                        </div>
                    ))}
                </div>
            </div>
            <div style={styles.howtoSection}>
                <div style={styles.howtoSectionTitle}>How to Get Turkish Citizenship ?</div>
                {howtoQNA.map((value) => (
                    <div style={styles.howtoSectionQNAItem}>
                        <div style={styles.howtoSectionQNAItemQuestion}>{value.question}</div>
                        <div style={styles.howtoSectionQNAItemAnswer}>{value.answer}</div>
                    </div>
                ))}
            </div>
            <div style={styles.benefitsSection}>
                <div style={styles.benefitsSectionTitle}>Benefits of Turkish Citizenship Program</div>
                <div style={styles.benefitsSectionCardContainer}>
                    {benefitCards.map((value) => (
                        <div style={styles.benefitsSectionCard}>
                            <div style={styles.benefitsSectionCardIcon}></div>
                            <div style={styles.benefitsSectionCardDescription}>{value.descr}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

const styles = {
    container: {
        position: 'relative',
        width: "100%",

    },
    coverImage: {
        width: '100%',
        height: '450px'
    },
    header: {
        position: 'absolute',
        left: '135px',
        top: '311px',
        fontSize: '40px',
        fontWeight: 300,
        color: '#fff',
        width: '780px'
    },
    citizenshipSubHeader: {
        height: '99px',
        paddingLeft: '135px',
        fontSize: '24px',
        fontWeight: 'bold',
        color: '#1d1f42',
        borderBottom: '1px solid #d8d8d8',
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#f0f0f0'
    },
    citizenshipSection: {
        backgroundColor: '#f0f0f0',
        paddingBottom: '100px'
    },
    citizenshipSectionHeader: {
        marginLeft: '135px',
        paddingTop: '91px',
        fontSize: '40px',
        fontWeight: 'bold',
        color: '#1d1f42',
    },
    citizenshipSectionStepsContainer: {
        marginTop: '39px',
        marginLeft: '135px',
        display: 'flex',
        flexDirection: 'row'
    },
    citizenshipSectionStep: {
        width: '270px',
        height: '233px',
        backgroundColor: '#fff',
        marginRight: '30px'
    },
    citizenshipSectionStepHeader: {
        marginTop: '43px',
        marginLeft: '30px',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    citizenshipSectionStepHeaderIcon: {
        width: '55px',
        height: '55px',
        border: 'solid 5px #000'
    },
    citizenshipSectionStepHeaderText: {
        marginLeft: '25px',
        fontSize: '14px',
        fontWeight: 'bold',
        color: '#1d1f42'
    },
    citizenshipSectionStepDescription: {
        marginLeft: '30px',
        marginTop: '29px',
        marginRight: '30px',
        fontSize: '18px',
        fontWeight: 500,
        lineHeight: 1.33,
        color: '#1d1f42'
    },
    citizenshipSectionDescription: {
        marginTop: '47px',
        marginLeft: '237px',
        width: '968px',
        fontSize: '18px',
        fontWeight: 500,
        lineHeight: 1.67,
        color: '#1d1f42'
    },
    citizenshipSectionListing: {
        marginTop: '47px',
        marginLeft: '335px',
        width: '800px',
    },
    citizenshipSectionListingItem: {
        marginBottom: '30px',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'baseline'
    },
    citizenshipSectionListingItemPoint: {
        width: '10px',
        height: '10px',
        borderRadius: '5px',
        marginRight: '20px',
        backgroundColor: '#5c5f81'
    },
    citizenshipSectionListingItemText: {
        width: '770px',
        fontWeight: 500,
        lineHeight: 1.5,
        color: '#1d1f42'
    },
    howtoSection: {
        backgroundColor: '#fff',
        paddingBottom: '89px'
    },
    howtoSectionTitle: {
        marginTop: '89px',
        marginLeft: '135px',
        fontSize: '48px',
        fontWeight: 'bold',
        color: '#1d1f42'

    },
    howtoSectionQNAItem: {
        marginTop: '30px',
        marginLeft: '237px',
    },
    howtoSectionQNAItemQuestion: {
        marginBottom: '6px',
        fontSize: '18px',
        fontWeight: 'bold',
        color: '#1d1f42',
        width: '881px'
    },
    howtoSectionQNAItemAnswer: {
        fontSize: '16px',
        fontWeight: 500,
        lineHeight: 1.5,
        color: '#1d1f42',
        width: '968px'
    },
    benefitsSection: {
        backgroundColor: '#252851',
        paddingTop: '90px',
        paddingBottom: '70px'
    },
    benefitsSectionTitle: {
        marginLeft: '135px',
        fontSize: '40px',
        fontWeight: 'bold',
        color: '#fff'
    },
    benefitsSectionCardContainer: {
        marginTop: '76px',
        marginLeft: '135px',
        marginRight: '135px',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between'
    },
    benefitsSectionCard: {
        width: '370px',
        height: '257px',
        borderRadius: '3px',
        border: 'solid 2px #5c5f81',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'baseline',
        marginBottom: '30px'
    },
    benefitsSectionCardIcon: {
        width: '60px',
        height: '45px',
        border: '4px solid #fff',
        marginTop: '53.5px',
        marginLeft: '30.5px'
    },
    benefitsSectionCardDescription: {
        marginTop: '20.5px',
        marginLeft: '30.5px',
        width: '310px',
        fontSize: '24px',
        lineHeight: 1.42,
        color: '#fff'
    }
}