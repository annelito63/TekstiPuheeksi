import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Pressable } from 'react-native';
import * as Speech from 'expo-speech';
import { useState } from 'react';
import SegmentedControl from '@react-native-segmented-control/segmented-control';
import {
  SafeAreaView,
  SafeAreaProvider,
} from 'react-native-safe-area-context';


export default function App() {
  const [text, setText] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState(0);

  const speak = () => {
    const languages = ['en-US', 'fi-FI', 'sv-SE'];
    const thingToSay = text;
    Speech.speak(thingToSay , {
      language: languages[selectedLanguage],
    } 
    );
    setText("");
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <SegmentedControl
        style={styles.segmentedControl}
          values={['English', 'Finnish', 'Swedish']}
          selectedIndex={selectedLanguage}
          onChange={(event) => {
            setSelectedLanguage(event.nativeEvent.selectedSegmentIndex);
          }}
        />
        <TextInput style={styles.input}
          placeholder='Type something here...'
          onChangeText={text => setText(text)}
          value={text}
        />
        <Pressable onPress={speak} style={styles.button}>
          <Text style={styles.buttonText}>SAY IT</Text>
        </Pressable>
        <StatusBar style="auto" />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    width: 300,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  button: {
    backgroundColor: 'blue',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white'
  },
  segmentedControl: {
    width: 300

  }
});
