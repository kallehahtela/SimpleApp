import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { MaterialIcons, Ionicons, AntDesign } from '@expo/vector-icons';

// Screens import
import HomeScreen from '@/app/(tabs)/HomeScreen';
import AddScreen from '@/app/(tabs)/AddScreen';
import NotificationScreen from '@/app/(tabs)/NotificationScreen';
import AccountScreen from '@/app/(tabs)/AccountScreen';

type TabParamList = {
    Home: undefined;
    Add: undefined;
    Notification: undefined;
    Account: undefined;
};

const Tab = createBottomTabNavigator<TabParamList>();

export const BottomNavigator: React.FC = () => {
    return (
        <Tab.Navigator screenOptions={{
            headerShown: false,
            tabBarStyle: {
                backgroundColor: 'black',
            }
        }}>
            
            <Tab.Screen 
                name='Home' 
                component={HomeScreen} 
                options={{
                    tabBarIcon(props) {
                        return (
                            <AntDesign name='home' size={24} color='white' />
                        )
                    },
                    tabBarLabelStyle: {
                        color: 'white',
                        fontSize: 11,
                    },
                    
                }}
            />
            <Tab.Screen 
                name='Add' 
                component={AddScreen} 
                options={{
                    tabBarIcon(props) {
                        return (
                            <MaterialIcons name='add-circle-outline' size={24} color='white' />
                        )
                    },
                    tabBarLabelStyle: {
                        color: 'white',
                        fontSize: 11,
                    },
                    
                }}
            />
            <Tab.Screen 
                name='Notification' 
                component={NotificationScreen} 
                options={{
                    tabBarIcon(props) {
                        return (
                            <MaterialIcons name='notifications-none' size={24} color='white' />
                        )
                    },
                    tabBarLabelStyle: {
                        color: 'white',
                        fontSize: 11,
                    },
                    
                }}
            />
            <Tab.Screen 
                name='Account' 
                component={AccountScreen} 
                options={{
                    tabBarIcon(props) {
                        return (
                            <AntDesign name='user' size={24} color='white' />
                        )
                    },
                    tabBarLabelStyle: {
                        color: 'white',
                        fontSize: 11,
                    },
                }}
            />
        </Tab.Navigator>
    );
};