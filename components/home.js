import React from 'react'

import {View, Text, StyleSheet} from 'react-native'


const Home=()=>{
    return(
        <View style={styles.homeStyle}>
            <Text>Home</Text>
        </View>
    )
}

const styles=StyleSheet.create({
    homeStyle:{
        flex:1, 
        justifyContent:'center', 
        textAlign:"center"
    }
})