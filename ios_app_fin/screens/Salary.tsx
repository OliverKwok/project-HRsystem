import {StyleSheet, Text, View, Button} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Config} from 'react-native-config';

function Salary() {
  async function checkEmployeeid() {
    try {
      const requestOptions = {
        method: 'Get',
      };
      console.log(Config);
      console.log(Config.REACT_APP_BACKEND_URL);

      const res = await fetch(
        `${Config.REACT_APP_BACKEND_URL}/user/count`,
        requestOptions,
      );
      const jsonData = await res.json();
      console.log(jsonData);
    } catch (error) {
      console.log('Fetch fail');
    }
  }
  return (
    <ScrollView style={styles.pageContainer}>
      <View style={styles.monthContainer}>
        <View style={styles.salaryContainer}>
          <Text>YYYY/MM : </Text>
          <Text>2022/11</Text>
        </View>
        <View style={styles.salaryContainer}>
          <Text>Salary : </Text>
          <Text>dsafads</Text>
        </View>
        <View style={styles.salaryContainer}>
          <Text>MPF contributed by employee :</Text>
          <Text></Text>
        </View>
        <View style={styles.salaryContainer}>
          <Text>Final amount</Text>
          <Text></Text>
        </View>
      </View>
      <Button title="Try fetch" onPress={checkEmployeeid} />
    </ScrollView>
  );
}

export default Salary;

const styles = StyleSheet.create({
  pageContainer: {flex: 1, padding: 20},
  monthContainer: {borderWidth: 1, padding: 10},
  salaryContainer: {
    flexDirection: 'row',
  },
});
