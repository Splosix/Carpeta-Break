import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Dimensions } from "react-native";



export default class Circles extends React.Component {


    render() {
        

        return (

        
                <View>

                    <Text style={{
                        fontWeight: "bold",
                        marginLeft: 20,
                        marginTop: 20,
                        fontSize: 30,
                    }}>Mi Cuenta</Text>

                    <TouchableOpacity
                        style={{
                            marginTop: 30,
                            marginLeft: 15,
                            borderWidth: 1,
                            borderColor: '#2196f3',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: 80,
                            height: 80,
                            backgroundColor: '#2196f3',
                            borderRadius: 50,
                        }}
                    >
                        <Text style={{
                            fontWeight: "bold",
                        }}>J</Text>

                    </TouchableOpacity>
                </View>
        );
            }               
                                                        }