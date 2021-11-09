import { DrawerItem, createDrawerNavigator } from '@react-navigation/drawer';
import React, { ReactElement } from 'react';
import { ScrollView, StyleSheet } from 'react-native';

const Drawer = createDrawerNavigator();

function CustomDrawerContent({navigation} : any): ReactElement {

return (
    <ScrollView
      contentContainerStyle={[
      ]}
    >
      <DrawerItem
        label="Home"
        onPress={(): void => {
          
        }}
      />
      <DrawerItem
        label="Screen2"
        onPress={(): void => {
         
        }}
      />
      <DrawerItem
        label="Close"
        onPress={(): void => {
          navigation.closeDrawer();
        }}
      />
    </ScrollView>
  );
}
function DrawerNavigator(): ReactElement {
  return (
    <Drawer.Navigator
      drawerContent={(props): ReactElement => (
        <CustomDrawerContent {...props} />
      )}
    >
     
    </Drawer.Navigator>
  );
}
export default DrawerNavigator;