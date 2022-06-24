import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import SelectDropdown from 'react-native-select-dropdown'

const countries = ["Equipment", "Vehicle", "Both"]
const Dropdown = () => {
    return (
        <View style={styles.btnStyle}>
            <SelectDropdown
                data={countries}
                // defaultValueByIndex={1}
                // defaultValue={'Egypt'}
                onSelect={(selectedItem, index) => {
                  console.log(selectedItem, index);
                }}
                defaultButtonText={'Select Type'}
                buttonTextAfterSelection={(selectedItem, index) => {
                  return selectedItem;
                }}
                rowTextForSelection={(item, index) => {
                  return item;
                }}
                buttonStyle={styles.dropdown1BtnStyle}
                buttonTextStyle={styles.dropdown1BtnTxtStyle}
                renderDropdownIcon={isOpened => {
                  return <FontAwesome name={isOpened ? 'chevron-up' : 'chevron-down'} color={'#444'} size={12} />;
                }}
                dropdownIconPosition={'right'}
                dropdownStyle={styles.dropdown1DropdownStyle}
                rowStyle={styles.dropdown1RowStyle}
                rowTextStyle={styles.dropdown1RowTxtStyle}
              />
        </View>
    )
}

export default Dropdown
const styles = StyleSheet.create({
  dropdown1BtnStyle: {
    width: '100%',
    height: 50,
    backgroundColor: '#F0F5FE',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#F0F5FE',
  },
  dropdown1BtnTxtStyle: {color: '#000', textAlign: 'left',fontSize:15},
  dropdown1DropdownStyle: {backgroundColor: '#EFEFEF'},
  dropdown1RowStyle: {backgroundColor: '#EFEFEF', borderBottomColor: '#C5C5C5'},
  dropdown1RowTxtStyle: {color: '#444', textAlign: 'left'},
})