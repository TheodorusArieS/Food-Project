import React,{useState} from 'react'
import { View, StyleSheet } from 'react-native'
import { Avatar, Title, Caption, Paragraph, Drawer, Text, TouchableRipple, Switch } from 'react-native-paper'
import { DrawerItem, DrawerContentScrollView } from '@react-navigation/drawer'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'


export default function DrawerContent(props) {
    const [isDarkTheme,setDarkTheme]=useState(false)
    const toggleTheme = ()=>{
        setDarkTheme(!isDarkTheme)
    }

    return (
        <>
            <View style={{ flex: 1 }}>
                <DrawerContentScrollView {...props}>
                    <View style={{ flex: 1 }}>
                        <View style={{ flexDirection: 'row', padding: 20, alignItems: 'center' }}>
                            <View>
                                <Avatar.Image source={{
                                    uri: 'https://media.npr.org/assets/img/2017/09/14/gettyimages-10141026_slide-67be9fc1bca330b26debade87690b5e84286614d.jpg'
                                }} size={60} />
                            </View>
                            <View style={{ paddingLeft: 20 }}>
                                <Title style={{ fontSize: 16 }}>Mr. Rabbit</Title>
                                <Caption style={{ fontSize: 14, color: '#dedede' }}>@Mr. Rabbit</Caption>
                            </View>
                        </View>
                        <View style={{ flexDirection: "row", marginLeft: 20, justifyContent: "space-around", marginRight: 20 }}>
                            <View style={{ flexDirection: 'row' }}>
                                <Paragraph style={{ marginRight: 20, fontWeight: 'bold' }}>100</Paragraph>
                                <Caption>Followers</Caption>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <Paragraph style={{ marginRight: 20, fontWeight: 'bold' }}>80</Paragraph>
                                <Caption>Following</Caption>
                            </View>
                        </View>
                        <Drawer.Section style={{}}>
                            <DrawerItem label="Home" icon={({ color, size }) => (
                                <Icon name="home" size={size} color={color} />
                            )}
                                onPress={() => props.navigation.navigate('Home')} />

                            <DrawerItem label="Profile" icon={({ color, size }) => (
                                <Icon name="account" size={size} color={color} />
                            )}
                                onPress={() => props.navigation.navigate("Profile") } />

                            <DrawerItem label="Bookmark" icon={({ color, size }) => (
                                <Icon name="bookmark" size={size} color={color} />
                            )}
                                onPress={() => alert('bookmark')} />

                            <DrawerItem label="Settings" icon={({ color, size }) => (
                                <Icon name="settings-outline" size={size} color={color} />
                            )}
                                onPress={() => alert('out')} />

                            <DrawerItem label="Support" icon={({ color, size }) => (
                                <Icon name="account-check" size={size} color={color} />
                            )}
                                onPress={() => alert('out')} />
                        </Drawer.Section>
                        <Drawer.Section title="Preferences">
                            <TouchableRipple onPress={()=>toggleTheme()}>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginRight: 10, paddingHorizontal: 16, paddingVertical: 12 }}>
                                    <Text style={{ padding: 10 }}>Dark Theme</Text>
                                    <View pointerEvents='none'>
                                        <Switch style={{ transform: [{ scaleX: 1.5 }, { scaleY: 1.5 }] }} value={isDarkTheme} />
                                    </View>
                                </View>
                            </TouchableRipple>
                        </Drawer.Section>

                    </View>
                </DrawerContentScrollView>
                <Drawer.Section style={{}}>
                    <DrawerItem
                        label="Sign Out"
                        icon={({ color, size }) => (
                            <Icon name="exit-to-app" size={size} color={color} />
                        )}
                        onPress={() => alert('out')}
                    />
                </Drawer.Section>

            </View>

        </>
    )
}

const styles = StyleSheet.create({

})

