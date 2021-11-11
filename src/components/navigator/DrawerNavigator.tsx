import { DrawerItem, createDrawerNavigator } from '@react-navigation/drawer';
import React, { ReactElement } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import TabNavigator from './TabNavigator';
import { SafeAreaView } from 'react-native-safe-area-context';
const Drawer = createDrawerNavigator();

function CustomDrawerContent({ navigation }: any): ReactElement {

  return (
    <SafeAreaView>
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
          label="goto stack 1 page"
          onPress={(): void => {
            navigation.navigate("Test")
          }}
        />
        <DrawerItem
          label="Close"
          onPress={(): void => {
            navigation.closeDrawer();
          }}
        />
      </ScrollView>
    </SafeAreaView>
  );
}
function DrawerNavigator(): ReactElement {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: true,
        headerStyle: {
          backgroundColor: "#00ff0000"
        }
      }}
      drawerContent={(props): ReactElement => (
        <CustomDrawerContent {...props} />
      )}
    >
      <Drawer.Screen
        name='지갑'
        component={TabNavigator}
        options={{
          drawerLabel: '메인',
          headerStyle: {
            height:70
          }
        }}
      />
    </Drawer.Navigator>
  );
}
export default DrawerNavigator;