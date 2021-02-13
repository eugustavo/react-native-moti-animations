import React, { useReducer } from 'react'
import { StyleSheet, Pressable } from 'react-native'

import profile from './assets/perfil.jpeg';

import { View, Image, Text, AnimatePresence } from 'moti'

function Button() {
  return (
    <View
      from={{
        opacity: 0,
        scale: 0.3,
      }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      exit={{
        opacity: 0,
        scale: 0.2,
      }}
      style={styles.button}
    >
      <Text style={styles.text}>Clique aqui</Text>
    </View>
  )
}

function Avatar() {
  return (
    <Image
      source={profile}
      from={{
        opacity: 0,
        scale: 0.3,
      }}
      animate={{
        opacity: 1,
        scale: 1,
        translateY: [
          {value: 0},
          {delay: 2000},
          {value: -10}
        ]
      }}
      exit={{
        opacity: 0,
        scale: 0.2,
      }}
      style={styles.image}
    />
  )
}

function Title() {
  return(
    <Text
      delay={1000}
      from={{
        opacity: 0,
        scale: 0.3,
      }}
      animate={{
        opacity:[
          {value: 1}
        ],
        scale: 1,
      }}
      exit={{
        opacity: 0,
        scale: 0.2,
      }}
      style={styles.title}
    >
      Gustavo Souza
    </Text>
  )
}

export default function App() {
  const [visible, toggle] = useReducer((s) => !s, false)

  return (
    <Pressable onPress={toggle} style={styles.container}>
      <AnimatePresence>
        {!visible && <Button />}

        {visible && (
          <>
            <Avatar />
            <Title />
          </>
        )}
      </AnimatePresence>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  image: {
    height: 200,
    width: 200,
    borderRadius: 10,
  },
  button: {
    height: 60,
    width: 300,
    borderRadius: 10,
    backgroundColor: 'white',

    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#121213',
    textTransform: 'uppercase',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fafafa',
    textTransform: 'uppercase',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    backgroundColor: '#9c1aff',
  },
})