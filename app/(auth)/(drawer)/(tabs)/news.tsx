import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, {FC} from 'react'

import {Card} from 'react-native-elements'
import  {newsList}  from './../../../../model/news';

interface ItemProps {
  title: string
  poster: string
  content: string
}

const NewsCard: FC<ItemProps> = ({title, poster, content}) => (
<Card borderRadius={10}>
  <Card.Title>
    {title}
  </Card.Title>
  <Card.Divider/>
  <Text numberOfLines={2}>{content}</Text>
  <Card.Divider/>
    {/* TODO add comments and attachment buttons when applicable */}
  <Text>Date <Text style={{marginRight: 0}}>{poster}</Text></Text>
</Card>
)


function chat() {
  return (
    <SafeAreaView style={styles.container}>
    <Text style={{fontFamily: 'bold', fontSize: 30, alignSelf: 'center'}}>News Screen</Text>
    <FlatList 
    data={newsList}
    renderItem={({ item }) => (
      <TouchableOpacity onPress={() => {
        const {id, title} = item
        //add route for detailed content
        console.log(title)
      }}>      
      <NewsCard
      title={item.title}
      poster={item.poster}
      content={item.content}/>

      </TouchableOpacity>

    )}/>
    
    </SafeAreaView>
    
  )

}

export default chat


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },

});