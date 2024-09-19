import React, { useState } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Dimensions, Button } from 'react-native';
import Swiper from 'react-native-swiper';
import Icon from 'react-native-vector-icons/Ionicons';

const CleaningServiceScreen = () => {
    const [services, setServices] = useState([
        { id: 1, name: 'Bathroom cleaning', imageUrl: 'https://i.postimg.cc/hGNnRcdK/OIG4-6-LD1-YCQmy-Ok.jpg' },
        { id: 2, name: 'Sofa cleaning', imageUrl: 'https://i.postimg.cc/hGNnRcdK/OIG4-6-LD1-YCQmy-Ok.jpg' },
        { id: 3, name: 'Kitchen cleaning', imageUrl: 'https://i.postimg.cc/hGNnRcdK/OIG4-6-LD1-YCQmy-Ok.jpg' }
    ]);

    return (
        <ScrollView style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity>
                    <Icon name="arrow-back" size={24} color="#000" />
                </TouchableOpacity>
                <View style={styles.headerIcons}>
                    <TouchableOpacity>
                        <Icon name="search" size={24} color="#000" />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Icon name="settings-outline" size={24} color="#000" />
                    </TouchableOpacity>
                </View>
            </View>

            {/* Carousel */}
            <View style={styles.carouselContainer}>
                <Swiper style={styles.wrapper} autoplay={true} autoplayTimeout={3} showsPagination={false}>
                    {services.map((service, index) => (
                        <View key={index}>
                            <Image source={{ uri: service.imageUrl }} style={styles.carouselImage} />
                            {/* Icons on the carousel */}
                            <View style={styles.carouselIcons}>
                                <TouchableOpacity>
                                    <Icon name="heart-outline" size={30} color="#fff" />
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Icon name="share-outline" size={30} color="#fff" />
                                </TouchableOpacity>
                            </View>
                        </View>
                    ))}
                </Swiper>
            </View>

            {/* Service Header */}
            <View style={styles.serviceHeader}>
                <Text style={styles.serviceTitle}>Bathroom & kitchen cleaning</Text>
                <Text style={styles.ratings}>4.81 (7.0 M bookings)</Text>

                {/* Action Buttons */}
                <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.actionButtons}>
                    <TouchableOpacity style={[styles.actionButton, styles.blue]}>
                        <Text style={styles.actionText}>UC Professional Cleaning Guide</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.actionButton, styles.purple]}>
                        <Text style={styles.actionText}>Save 10% on every order</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.actionButton, styles.green]}>
                        <Text style={styles.actionText}>CRED cashback</Text>
                    </TouchableOpacity>
                </ScrollView>
                <View style={styles.horizontalLine} />
                <View style={styles.priceContainer}>
                    <Text style={styles.serviceTitle}>Prices</Text>
                    <Text style={styles.text}>Minimum Charges Price for 1/2 hour: <Text>149</Text></Text>
                    <Text style={styles.text}>Every 1/2 hour will charge 49</Text>
                </View> 
                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        style={styles.bookButton}
                    >
                        <Text style={styles.bookButtonText}>Book Now</Text>
                    </TouchableOpacity>
                </View>
            </View>



            {/* Service Options */}
            <View style={styles.serviceOptions}>
                {services.map(service => (
                    <View key={service.id} style={styles.serviceItem}>
                        <Image source={{ uri: service.imageUrl }} style={styles.optionImage} />
                        <Text style={styles.serviceText}>{service.name}</Text>
                    </View>
                ))}
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f7',
    },
    priceContainer:{
        marginTop:20
    },
    buttonContainer:{
        display:"flex",
        flexDirection:'row',
        width: Dimensions.get('window').width,
        justifyContent: "center",
        marginTop:30
    },
    horizontalLine: {
        width: Dimensions.get('window').width,
        height: 1, // Height of the line
        backgroundColor: '#F4F4F4', // Color of the line,
        marginTop:20,
        height:10
    },
    text:{
        color:'#000'
    },
    bookButtonText: {
        color: '#fff',
        fontSize: 15,
        textAlign:'center'
      },
    bookButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#333333',

        borderRadius: 8,
        marginTop: 10,
        width:150,
        height: 31,
        justifyContent: 'center',
        alignItems:'center'
      },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 15,
        alignItems: 'center',
        backgroundColor: 'transparent',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1,  // Ensures the header appears above the carousel
    },
    headerIcons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 80,
    },
    wrapper: {
        height: 200,
    },
    carouselContainer: {
        height: 200,
    },
    carouselImage: {
        width: Dimensions.get('window').width,
        height: 200,
        resizeMode: 'cover',
    },
    carouselIcons: {
        position: 'absolute',
        right: 20,
        top: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 70,
    },
    serviceHeader: {
        padding: 20,
        backgroundColor: '#fff',
    },
    serviceTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color:'#000',
        width:'50%'
    },
    ratings: {
        color: '#666',
        marginVertical: 10,
    },
    actionButtons: {
        flexDirection: 'row',
        marginTop: 10,
    },
    actionButton: {
        padding: 10,
        borderRadius: 5,
        marginRight: 10,
    },
    blue: {
        backgroundColor: 'rgba(255, 0, 0, 0)',
        borderWidth: 2,
        borderColor: '#F4F4F4', // Border color
        borderRadius: 10,   // Optional: for rounded corners
    },
    purple: {
        backgroundColor: 'rgba(255, 0, 0, 0)',
        borderWidth: 2,
        borderColor: '#F7F7F7', // Border color
        borderRadius: 10,   // Optional: for rounded corners
    },
    green: {
        backgroundColor: 'rgba(255, 0, 0, 0)',
        borderWidth: 2,
        borderColor: '#F7F7F7', // Border color
        borderRadius: 10,   // Optional: for rounded corners
    },
    actionText: {
        color: '#000',
        fontWeight: 'bold',
    },
    serviceOptions: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 20,
        backgroundColor: '#fff',
    },
    serviceItem: {
        alignItems: 'center',
        width: 100,
    },
    optionImage: {
        width: 100,
        height: 100,
        resizeMode: 'cover',
        marginBottom: 10,
    },
    serviceText: {
        textAlign: 'center',
        color: '#333',
    },
});

export default CleaningServiceScreen;
