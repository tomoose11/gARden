import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';
import api from '../api/index';

class ShoppingList extends Component {
  state = {
    savedList: []
  };

  restructureCounter = obj => Object.entries(obj);

  componentDidMount = () => {
    api.getShopplingList().then((list) => {
      const listFormat = this.restructureCounter(list);
      this.setState({ savedList: listFormat });
    });
  };

  render() {
    const { savedList } = this.state;
    return (
      <View style={styles.tableContainer}>
        <Table borderStyle={{ borderColor: 'transparent' }}>
          <Row style={styles.body} data={['Plant', 'No.']} textStyle={styles.text} />
          <Rows data={savedList} style={styles.head} />
        </Table>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  tableContainer: {
    width: 300,
    height: 300,
    borderColor: 'red'
  },
  head: { height: 40, backgroundColor: 'rgba(248, 180, 157, 0.604)' },
  text: { fontSize: 18 },
  body: { backgroundColor: 'rgba(223,142,114,0.800)' }
});
export default ShoppingList;
