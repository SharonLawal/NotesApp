// src/features/notes/components/note-card.component.js
import React, { useContext } from "react";
import styled from "styled-components/native";
import { useTheme } from "styled-components";
import { Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { NotesContext } from "../../../services/notes/notes.context";

const NoteCardContainer = styled.View`
  background-color: ${(props) => props.theme.colors.ui.primary};
  border-radius: ${(props) => props.theme.sizes[1]};
  padding: ${(props) => props.theme.space[4]} ${(props) => props.theme.space[3]};
  position: relative;
  overflow: hidden;
  border: ${(props) => props.selected ? "2px solid tomato" : "none"};
`;

const NoteTitle = styled.Text`
  font-size: ${(props) => props.theme.fontSizes.title};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  color: ${(props) => props.theme.colors.text.primary};
`;

const NoteParagraph = styled.Text`
  font-size: 14px;
  color: ${(props) => props.theme.colors.text.secondary};
  margin-top: ${(props) => props.theme.space[2]};
`;

const NoteDate = styled.Text`
  font-size: ${(props) => props.theme.fontSizes.caption};
  color: ${(props) => props.theme.colors.text.secondary};
  position: absolute;
  bottom: ${(props) => props.theme.space[2]};
  right: ${(props) => props.theme.space[2]};
`;

const FavoriteButton = styled(TouchableOpacity)`
  position: absolute;
  top: 8px;
  right: 8px;
  z-index: 10;
`;

export const NoteCard = ({ id, title, paragraph, date, selected, isFavorite }) => {
  const theme = useTheme();
  const { toggleFavorite } = useContext(NotesContext);

  return (
    <NoteCardContainer selected={selected}>
      <FavoriteButton onPress={() => toggleFavorite(id)}>
        <Ionicons
          name={isFavorite ? "star" : "star-outline"}
          size={24}
          color={isFavorite ? "orange" : theme.colors.text.primary}
        />
      </FavoriteButton>
      <NoteTitle numberOfLines={1}>{title}</NoteTitle>
      <NoteParagraph numberOfLines={4}>{paragraph}</NoteParagraph>
      <NoteDate>{date}</NoteDate>
    </NoteCardContainer>
  );
};