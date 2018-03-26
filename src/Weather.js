import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: '',
      forecast: {
        main: '_',
        description: '_',
        temp: 0
      }
    };
  }
getWeather= () => {
  let url = 'http://api.openweathermap.org/data/2.5/weather?q=+'
  + this.state.city +
  '&appid=77a6cbc5d7ff383b81f917930b9f0869&units=metric';
  return fetch(url)
    .then((response) => response.json())
    .then((responseJson) => {
      console.log(responseJson);
      this.setState({
        forecast: {
          main: responseJson.weather[0].main,
          description: responseJson.weather[0].description,
          temp: responseJson.main.temp
        }
      });
    });
}
    render() {
      return (
      <View style={styles.containerMain}>
        <View style={styles.header}>
          <Text style={styles.textHeader}>PRAKIRAAN CUACA</Text>
        </View>

        <View style={styles.main}>
          <View style={styles.containerInput}>
            <TextInput
              style={styles.input}
              placeholder="Masukkan Nama Kota"
              onChangeText={(city) => this.setState({ city })}
            />
            <Button
              onPress={() => this.getWeather()}
              title="PENCAHARIAN"
            />
          </View>

          <View style={styles.containerHasil}>
            <Text style={{ padding: 10, fontSize: 20 }} >
                {this.state.city} {'\n'}
                Suhu{'\t'}{'\t'}: {this.state.forecast.temp} {'\n'}
                Cuaca{'\t'}{'\t'}: {this.state.forecast.main} {'\n'}
                Deskripsi{'\t'}: {this.state.forecast.description}
            </Text>
          </View>
        </View>

        <View style={styles.footer}>
          <Text style={styles.textFooter} >#JaenKuliahdiPTI</Text>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerMain: {
    backgroundColor: '#B3E5FC',
    flex: 1,
  },
  header: {
    flex: 1,
    backgroundColor: '#03A9F4',
    marginTop: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  main: {
    backgroundColor: '#B3E5FC',
    flex: 9,
  },

  footer: {
    flex: 1,
    backgroundColor: '#03A9F4',
    alignItems: 'center',
    justifyContent: 'center',
  },

  textHeader: {
    fontSize: 25,
    color: '#fff',
    fontWeight: 'bold',
  },
  textFooter: {
    fontSize: 25,
    color: '#fff',
    fontWeight: 'bold',
  },
  containerInput: {
    backgroundColor: '#FFFFFF',
    flex: 1.5,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerHasil: {
    backgroundColor: '#FFFFF0',
    flex: 4,
    margin: 10,
  },
  input: {
    fontSize: 22,
    width: 300,
    textAlign: 'center',
    padding: 10,
    margin: 15,
  },
});
