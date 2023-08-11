import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { SafeAreaView, ScrollView, Text, Image, View } from 'react-native'

export default function App() {
  const [data, setData] = useState()

  const getData = async () => {
    try {
      const res = await axios.get('https://newsapi.org/v2/top-headlines', {
        params: {
          country: 'us',
          category: 'business',
          apiKey: 'ed72923f7cba4fc8a8f326fe0f91b88c'
        },
        // header
      });
      setData(res.data.articles)
    } catch (error) {
      alert(error.message)
    }
  };

  useEffect(() => {
    getData()
  }, [])

  return (
    <SafeAreaView>
      <ScrollView>
        {data &&
          data.map((item, i) => {
            return (
            <>
              <View style={{ flexDirection: 'row', marginVertical: 10, marginHorizontal: 10 }}>
                <Image 
                style={{ width: 100, height: 100 }}  
                source={{ uri: item.urlToImage }} 
                />
                <View style={{justifyContent:'space-between'}}>
                <Text style={{marginHorizontal: 10, fontWeight:'bold'}}>{item.title}</Text>
                <Text>{item.author}</Text>
                </View>
                </View>
            </>
            );
          })}
      </ScrollView>
    </SafeAreaView>
  )
}