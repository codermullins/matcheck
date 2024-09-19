import { Button, KeyboardAvoidingView, StyleSheet, Text, TextInput, View } from 'react-native';
import React, {useState} from 'react'

function register({}) {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')
    const [passwordVerify, setPasswordVerify] = useState('')
    const [sport, setSport] = useState('')
    const [parent, setParent] = useState('')
    const [showAthlete, setShowAthlete] = useState(true)

    function registerSubmit(){

    }
    
      return (
        <View style={styles.container}>
            
            <KeyboardAvoidingView behavior='padding'>
                
                <Text style={styles.text}>Create and Account </Text>
              
                <TextInput
                style={styles.input}
                    value={name}
                    placeholder="Name"
                />
                <TextInput style={styles.input}
                placeholder='Email'
                value={email}
                onChangeText={setEmail}
                autoCapitalize="none"
                keyboardType="email-address"/>
                <TextInput style={styles.input}
                value={phone}
                placeholder='Phone' />
                <TextInput style={styles.input}
                value={sport}
                placeholder='Sport' />
                <TextInput style={styles.input}
                placeholder='Password'
                value={password}
                onChangeText={setPassword}
                secureTextEntry/>
                <TextInput
                style={styles.input}
                    value={passwordVerify}
                    placeholder="Confirm Password"
                />

                <Button
                    title="Register"
                />
            </KeyboardAvoidingView>
        </View>
      );
    };
    
    const styles = StyleSheet.create({
        container: {
          alignItems: 'center',
          marginHorizontal: 20,
          flex: 1,
          
        },
        input: {
          marginVertical: 4,
          height: 50,
          width: 300,
          borderWidth: 1,
          borderRadius: 4,
          padding: 10
        },
        link: {
          color: 'blue'
        },
        text: {
            marginTop: 75,
            fontSize: 30,
            marginBottom: 20,
          },
        btn: {
            borderRadius: 5,
        }
      })

export default register
