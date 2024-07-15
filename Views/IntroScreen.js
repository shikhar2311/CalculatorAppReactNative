import React from 'react'
import { View, StyleSheet, Image} from 'react-native'
import favicon from '../assets/favicon.png'

const IntroScreen = () => {
  return (
    <View style={styles.container}>
        <View style={styles.inner}>
            <Image source={favicon} style={styles.innerimg}/>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        width: '100%',
        backgroundColor: '#FF5757',
        alignItems: 'center',
        justifyContent: 'center'
    }, 
    inner:{
        height: 100,
        width: 100,
        backgroundColor: 'inherit',
    },
    innerimg:{
        height: 100,
        width: 100,
    }
})

export default IntroScreen