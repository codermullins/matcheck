import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from "react"

import DropDownPicker from "react-native-dropdown-picker"
import { error } from "console"

interface School {
    _id: string
    name: string
}

interface Sport {
    _id: string
    name: string
}

interface DropdownProps {
    onSport: (sportId: string | null) => void
}

const SchoolDropdown: React.FC<DropdownProps> = ({onSport}) => {
    const [schools, setSchools] = useState<School[]>([])
    const [sports, setSports] = useState<Sport[]>([])
    const [schoolOpen, setSchoolOpen] = useState<boolean>(false)
    const [schoolValue, setSchoolValue] = useState<string | null>(null)
    const [schoolItems, setSchoolItems] = useState<{label: string, value: string}[]>([])
    const [sportOpen, setSportOpen] = useState<boolean>(false)
    const [sportValue, setSportValue] = useState<string | null>(null)
    const [sportItems, setSportItems] = useState<{label: string, value: string}[]>([])
    const [loading, setLoading] = useState<boolean>(true)
    
    



    useEffect(() => {
        fetch('http://192.168.1.68:4000/getSchools')
        .then(response => response.json())
        .then(data => {
            setSchools(data)
            const schoolItems = data.map((school: School) =>({
                label: school.name,
                value: school._id,
            }))
            setSchoolItems(schoolItems)
            setLoading(false)
        })
        .catch(error => {
            console.error('Error fetching schools:', error)
            setLoading(false)
        })
    }, [])

    const fetchSports = (schoolId: string) => {
        fetch(`http://192.168.1.68:4000/getSchools/${schoolId}/sports`)
        .then(response => response.json())
        .then(data => {
            setSports(data)
            const sportOptions = data.map((sport: Sport) => ({
                label: sport.name,
                value: sport._id
            }))
            setSportItems(sportOptions)
        })
        .catch(error => {
            console.error('Error fetching sports:', error)
        })
    }

    useEffect(() => {
        if (schoolValue) {
            fetchSports(schoolValue)
        }
    }, [schoolValue])

    useEffect(() => {
        onSport(sportValue)
    }, [sportValue])

    if(loading) {
        return <ActivityIndicator size="large" color="#0000ff" />
    }

    return (
        <>
            <DropDownPicker
                open={schoolOpen}
                value={schoolValue}
                items={schoolItems} 
                setOpen={setSchoolOpen}
                setValue={setSchoolValue}
                setItems={setSchoolItems}
                placeholder="Select a school"
                style={styles.dropdown}
                 />
                 {schoolValue && (
                    <>
                    <DropDownPicker
                    open={sportOpen}
                    value={sportValue}
                    items={sportItems}
                    setOpen={setSportOpen}
                    setItems={setSportItems}
                    setValue={setSportValue}
                    placeholder='Select a sport'
                    style={styles.dropdown}
                    />
                    </>
                 )}
        </>
    )

}

const styles = StyleSheet.create({ 
    container: { 
        justifyContent: 'center', 
        padding: 16, 
    }, 
    label: { 
        fontSize: 16, 
        marginVertical: 8, 
    }, 
    dropdown: { 
        borderColor: 'gray', 
        borderWidth: 1, 
        borderRadius: 4,
        marginBottom: 5,
        zIndex: -10,
        width: 300
    }, 
}); 

export default SchoolDropdown;