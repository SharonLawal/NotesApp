import React, { useState, useContext } from "react";
import { Text, View, Switch, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { useTheme } from "styled-components";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { Ionicons } from "@expo/vector-icons";
import { NotesContext } from "../../../services/notes/notes.context";

const Container = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.colors.bg.primary};
  padding: ${(props) => props.theme.space[3]};
`;

const SettingsHeader = styled.Text`
  font-size: ${(props) => props.theme.fontSizes.title};
  font-weight: bold;
  color: ${(props) => props.theme.colors.text.primary};
  padding: ${(props) => props.theme.space[2]};
  margin-bottom: ${(props) => props.theme.space[3]};
  margin-top: ${(props) => props.theme.space[2]};
`;

const SettingsOption = styled(TouchableOpacity)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.ui.primary};
  border-radius: ${(props) => props.theme.sizes[1]};
  margin-bottom: ${(props) => props.theme.space[2]};
`;

const SettingsText = styled.Text`
  color: ${(props) => props.theme.colors.text.primary};
  font-size: ${(props) => props.theme.fontSizes.body};
`;

const AboutText = styled.Text`
  color: ${(props) => props.theme.colors.text.secondary};
  font-size: ${(props) => props.theme.fontSizes.caption};
  text-align: center;
  margin-top: ${(props) => props.theme.space[5]};
`;


export const SettingsScreen = ({ navigation }) => {
  const theme = useTheme();
  // We'll use a placeholder for theme logic here
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    // This is where you would call a function to change the theme
    // For now, it's just a local state change.
    setIsDarkMode(previousState => !previousState);
  };

  return (
    <SafeArea>
      <Container>
        <SettingsHeader>Settings</SettingsHeader>

        <SettingsOption activeOpacity={0.7}>
          <SettingsText>Dark Mode</SettingsText>
          <Switch
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={isDarkMode ? "tomato" : "#f4f3f4"}
            onValueChange={toggleTheme}
            value={isDarkMode}
          />
        </SettingsOption>
        <SettingsOption activeOpacity={0.7} onPress={() => navigation.navigate("Favourites")}>
          <SettingsText >Favourites</SettingsText>
        </SettingsOption>
        <SettingsOption activeOpacity={0.7}>
          <SettingsText>Export All Notes</SettingsText>
          <Ionicons name="download" size={24} color={theme.colors.text.primary} />
        </SettingsOption>
        <AboutText>
          NoteEase Version 1.0.0
        </AboutText>
      </Container>
    </SafeArea>
  );
};