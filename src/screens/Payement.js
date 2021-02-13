import React, { useState } from 'react';
import { View, Text, TextInput, Image, StyleSheet, Dimensions,TouchableOpacity, Modal} from 'react-native';
import {WebView} from 'react-native-webview';

//import { TouchableOpacity } from 'react-native-gesture-handler';
import StatusBar from '../components/StatusBar'
import { FontAwesome } from '@expo/vector-icons';

const windowWidth = Dimensions.get('window').width;

const Payement = ({ navigation, route: { params: { item } } }) => {
    /*
    const [cardNumber, setCardNumber] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [icon, setIcon] = useState('');
    const [cvc, setCvc] = useState('');

    const checkLuhn = (cardNo) => {
        var s = 0;
        var doubleDigit = false;
        for (var i = cardNo.length - 1; i >= 0; i--) {
            var digit = +cardNo[i];
            if (doubleDigit) {
                digit *= 2;
                if (digit > 9)
                    digit -= 9;
            }
            s += digit;
            doubleDigit = !doubleDigit;
        }
        return s % 10 == 0;
    }

    const validateCardNo = (no) => {
        return (no && checkLuhn(no) &&
            no.length == 16 && (no[0] == 4 || no[0] == 5 && no[1] >= 1 && no[1] <= 5 ||
                (no.indexOf("6011") == 0 || no.indexOf("65") == 0)) ||
            no.length == 15 && (no.indexOf("34") == 0 || no.indexOf("37") == 0) ||
            no.length == 13 && no[0] == 4)
    }

    return (
        <View style={styles.container}>
            <StatusBar navigation={navigation} topRightIcon={"keyboard-backspace"} onTopRightIconPress={() => {
                navigation.goBack();
            }}
            />
            <Text>Paiement :</Text>
            <View style={styles.item}>
                <Text>{item.title}</Text>
                <View>
                    <View style={styles.image} >
                        <Image source={item.image} style={styles.image} />
                    </View>
                    <View style={styles.form} >
                        <View style={[styles.cardNumber, styles.separator]}>
                            <Text>cardNumber</Text>
                            <View style={[styles.cardNumberInput]}>
                                <TextInput
                                    style={{ height: 40 }}
                                    placeholder="4111 1111 1111 1111"
                                    onChangeText={text => {
                                        setCardNumber(text);
                                        if (validateCardNo(text)) {
                                            setIcon("cc-mastercard");
                                        }
                                    }}
                                    defaultValue={cardNumber}
                                />
                                {(icon != "") && <FontAwesome name={icon} size={24} color="black" />}
                            </View>
                        </View>
                        <View style={[{ flexDirection: "row" }, styles.separator]}>
                            <View style={[styles.expiryDate]}>
                                <Text>expiryDate</Text>
                                <TextInput
                                    style={{ height: 40 }}
                                    placeholder="21/12"
                                    onChangeText={text => setExpiryDate(text)}
                                    defaultValue={expiryDate}
                                />
                            </View>
                            <View style={[styles.cvc]}>
                                <Text>cvc</Text>
                                <TextInput
                                    style={{ height: 40 }}
                                    placeholder="***"
                                    onChangeText={text => setCvc(text)}
                                    defaultValue={cvc}
                                />
                            </View>
                        </View>
                        <TouchableOpacity>
                            <View style={{
                                alignSelf: 'center', backgroundColor: "#9CCFD5", padding: 5, borderRadius: 2, margin: 5
                            }}>
                                <Text>Payer {item.price} DH</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

        </View>
    );
    */

   const [showModal, setModal] = useState(false);  
   const [status, setstatus] = useState("En attente"); 
   const [statusColor, setstatusColor] = useState(styles.innerText); 



     
    const  handleResponse = (data) => {
        if (data.title === "success") {
            setModal(false);
            setstatus("Payé");
            setstatusColor(styles.innerText2)
        } else if (data.title === "cancel") {
            setModal(false);
            setstatus("Annulé");
        } else {
            return;
        }
    };



    return (
        <View style={styles.container}>
        <Modal visible={showModal}
               onRequestClose={() => setModal({ showModal: false })}
        >
            <WebView
                source={{ uri: "http://192.168.11.104:3000" }}
                onNavigationStateChange={data =>handleResponse(data)}
                injectedJavaScript={`document.f1.submit()`}
            />
        </Modal>

            <StatusBar navigation={navigation} topRightIcon={"keyboard-backspace"} onTopRightIconPress={() => {
                navigation.goBack();
            }}
            />
            <Text>Paiement :</Text>
            <View style={styles.item}>
                <Text>{item.title}</Text>
                <View>
                    <View style={styles.image} >
                        <Image source={item.image} style={styles.image} />
                    </View>
                    <View style={styles.form} >                                               
                        <TouchableOpacity
                            style={{ width: 300, height: 100 }}
                            onPress={() => {setModal(true);
                            }}
                        >
                            <View style={{
                                alignSelf: 'center', backgroundColor: "#9CCFD5", padding: 5, borderRadius: 2, margin: 5
                            }}>
                                

                                <Text><FontAwesome name="cc-mastercard" size={16} color="black" /> Payer {item.price} DH </Text>
                            </View>
                        </TouchableOpacity>
                        <Text style={styles.normal} > Payment Status:  <Text style={statusColor} > {status}</Text></Text>
                       

                    </View>
                </View>
            </View>

        </View>
    );

    



}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0063B2af',
    },
    item: {
    },
    image: {
        alignSelf: "center",
        width: windowWidth * 0.9
    },
    separator: {
        padding: 10,
        borderBottomWidth: 2,
    },
    cardNumberInput: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    cvc: {
        padding: 5
    },
    expiryDate: {
        borderRightWidth: 2,
        padding: 5
    },
    form: {
        alignSelf: "center",
        backgroundColor: "#9CC3D5FF",
        margin: 10,
        padding: 5,
        borderRadius: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.44,
        shadowRadius: 10.32,
        elevation: 16,
        width: windowWidth * (0.95)
    },
    innerText: {
      color: 'red'
    },
    innerText2: {
        color: 'green'
      },
    normal: {
        color: 'black'
      }
    
});

export default Payement;