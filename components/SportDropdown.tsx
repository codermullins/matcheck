import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from "react"

import DropDownPicker from "react-native-dropdown-picker"
import { error } from "console"

interface Sport {
    _id: string
    name: string
}

const SportDropdown: React.FC = () => {
    const [sports, setSports] = useState<Sport[]>([])
    const [value, setValue] = useState<string>('')
    const [loading, setLoading] = useState<boolean>(true)
    const [open, setOpen] = useState(false)
    const [items, setItems] = useState<{label: string, value: string}[]>([])



    useEffect(() => {
        fetch('http://192.168.1.68:4000/getSports')
        .then(response => response.json())
        .then(data => {
            setSports(data)
            const sportItems = data.map((sport: Sport) =>({
                label: sport.name,
                value: sport._id,
            }))
            setItems(sportItems)
            setLoading(false)
        })
        .catch(error => {
            console.error('Error fetching schools:', error)
            setLoading(false)
        })
    }, [])

    if(loading) {
        return <ActivityIndicator size="large" color="#0000ff" />
    }

    return (
        < >
            <Text style={styles.label}>Select School</Text>
            <DropDownPicker
                open={open}
                value={value}
                items={items} 
                setOpen={setOpen}
                setValue={setValue}
                setItems={setItems}
                placeholder="Select a sport"
                style={styles.dropdown}
                 />
        </>
    )

}

const styles = StyleSheet.create({ 
    container: { 
        flex: 1, 
        justifyContent: 'center', 
        padding: 5, 
        zIndex: 10
    }, 
    label: { 
        fontSize: 16, 
        marginVertical: 8, 
    }, 
    dropdown: { 
        borderColor: 'gray', 
        borderWidth: 1, 
        borderRadius: 4, }, 
}); 

export default SportDropdown;