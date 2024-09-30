import {ScrollView, Text, TouchableOpacity, View} from 'react-native';

import {MaterialIcons} from '@expo/vector-icons';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';

// import {COLORS, FONTS} from '../constants';




/** TODO  Add functionality to the rest of the buttons
 * Cleanup the code
 **/

const SettingScreen = () => {
  const navigation = useNavigation();

  const navigateToEditProfile = () => {
    
  };

  const navigateToSecurity = () => {
    console.log('Security function');
  };

  const navigateToNotifications = () => {
    console.log('Notifications function');
  };

  const navigateToPrivacy = () => {
    console.log('Privacy function');
  };

  const navigateToSubscription = () => {
    console.log('Subscription function');
  };

  const navigateToSupport = () => {
    console.log('Support function');
  };

  const navigateToTermsAndPolicies = () => {
    console.log('Terms and Policies function');
  };

  const navigateToFreeSpace = () => {
    console.log('Free Space function');
  };

  const navigateToDateSaver = () => {
    console.log('Date saver');
  };

  const navigateToReportProblem = () => {
    console.log('Report a problem');
  };

  const addAccount = () => {
    console.log('Add account ');
  };

  const logout = () => {
    console.log('Logout');
  };

  const accountItems = [
    {
      icon: 'person-outline',
      text: 'Edit Profile',
      action: navigateToEditProfile,
    },
    {icon: 'security', text: 'Security', action: navigateToSecurity},
    {
      icon: 'notifications-none',
      text: 'Notifications',
      action: navigateToNotifications,
    },
    {icon: 'lock-outline', text: 'Privacy', action: navigateToPrivacy},
  ];

  const supportItems = [
    {icon: 'help-outline', text: 'Help & Support', action: navigateToSupport},
    {
      icon: 'info-outline',
      text: 'Terms and Policies',
      action: navigateToTermsAndPolicies,
    },
  ];

  const actionsItems = [
    {
      icon: 'outlined-flag',
      text: 'Report a problem',
      action: navigateToReportProblem,
    },
    {icon: 'people-outline', text: 'Add Account', action: addAccount},
    {icon: 'logout', text: 'Log out', action: logout},
  ];

  const renderSettingsItem = ({icon, text, action}) => (
    <TouchableOpacity
      onPress={action}
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 8,
        paddingLeft: 12,
        backgroundColor: 'gray',
      }}>
      <MaterialIcons name={icon} size={24} color="black" />
      <Text
        style={{
          marginLeft: 36,
          // ...FONTS.semiBold,
          fontWeight: 600,
          fontSize: 16,
        }}>
        {text}{' '}
      </Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: 'white',
      }}>
      <View
        style={{
          marginHorizontal: 12,
          flexDirection: 'row',
          justifyContent: 'center',
        }}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{
            position: 'absolute',
            left: 0,
          }}>
          <MaterialIcons name="keyboard-arrow-left" size={24} color="black" />
        </TouchableOpacity>

        <Text style={{fontFamily: 'bold', fontSize: 18, lineHeight: 22}}>
          Settings
        </Text>
      </View>

      <ScrollView style={{marginHorizontal: 12}}>
        {/* Account Settings */}
        <View style={{marginBottom: 12}}>
          <Text
            style={{
              fontFamily: 'bold',
              fontSize: 16,
              lineHeight: 20,
              marginVertical: 10,
            }}>
            Account
          </Text>
          <View
            style={{
              borderRadius: 12,
              backgroundColor: 'gray',
            }}>
            {accountItems.map((item, index) => (
              <React.Fragment key={index}>
                {renderSettingsItem(item)}
              </React.Fragment>
            ))}
          </View>
        </View>

        {/* Support and About settings */}

        <View style={{marginBottom: 12}}>
          <Text
            style={{
              fontFamily: 'bold',
              fontSize: 16,
              lineHeight: 20,
              marginVertical: 10,
            }}>
            Support & About{' '}
          </Text>
          <View
            style={{
              borderRadius: 12,
              backgroundColor: 'gray',
            }}>
            {supportItems.map((item, index) => (
              <React.Fragment key={index}>
                {renderSettingsItem(item)}
              </React.Fragment>
            ))}
          </View>
        </View>

        {/* Actions Settings */}

        <View style={{marginBottom: 12}}>
          <Text
            style={{
              fontFamily: 'bold',
              fontSize: 16,
              lineHeight: 20,
              marginVertical: 10,
            }}>
            Actions
          </Text>
          <View
            style={{
              borderRadius: 12,
              backgroundColor: 'gray',
            }}>
            {actionsItems.map((item, index) => (
              <React.Fragment key={index}>
                {renderSettingsItem(item)}
              </React.Fragment>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SettingScreen;
