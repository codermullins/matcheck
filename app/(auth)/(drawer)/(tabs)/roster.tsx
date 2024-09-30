import {
  FlatList,
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { FC } from 'react';

import { SafeAreaView } from 'react-native-safe-area-context';
import { rosterList } from '../../../../model/db';
import { router } from 'expo-router';
import { useNavigation } from '@react-navigation/native';

interface ItemProps {
  name: string;
  weightClass: number
  grade: string;
}

const Item: FC<ItemProps> = ({ name, weightClass, grade }) => (
  <View style={styles.item}>
    <Text style={styles.name}>{name}</Text>
    <Text style={styles.weightClass}>{weightClass}</Text>
    <View>
      <Text style={styles.grade}>{grade}</Text>
    </View>
  </View>
);

const RosterScreen: FC = () => {
  const navigation = useNavigation();

  const onAddPressed = (): void => {
    // navigation.navigate('AddScreen');
  };
  

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={rosterList}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              const {id, name} = item
              router.push({ pathname: `/athleteProfileScreen`, params: {...item}})
            }}>
            <Item
              name={item.name}
              weightClass={item.weightClass}
              grade={item.grade}
              // email={item.email}
            />
          </TouchableOpacity>
        )}
      />

      <TouchableOpacity
        style={{
          borderWidth: 1,
          borderColor: 'red',
          alignItems: 'center',
          justifyContent: 'center',
          width: 70,
          position: 'absolute',
          right: 20,
          height: 70,
          backgroundColor: 'red',
          borderRadius: 100,
          bottom: 5,
        }}
        onPress={onAddPressed}>
        <Text style={{ color: 'white' }}>ADD</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default RosterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: 'grey',
    padding: 25,
    marginVertical: 8,
    marginHorizontal: 16,
    alignContent: 'space-between',
    borderRadius: 10,
  },
  name: {
    fontSize: 32,
    position: 'absolute',
    alignItems: 'flex-start',
    marginLeft: 10,
  },
  weightClass: {
    fontSize: 32,
    fontWeight: 'bold',
    position: 'absolute',
    alignSelf: 'flex-end',
    padding: 10,
  },
  grade: {
    fontSize: 20,
    bottom: -15,
    marginLeft: -10,
  },
});