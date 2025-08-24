import React, { useContext } from "react";
import { Text, View, StyleSheet } from "react-native";
import styled from "styled-components/native";
import { useTheme } from "styled-components";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { NotesContext } from "../../../services/notes/notes.context";
import MasonryList from "@react-native-seoul/masonry-list";
import { NoteCard } from "../components/note-card.component";
import { formatDate } from "../../../infrastructure/utility/formatDate";
import { TouchableOpacity } from "react-native-gesture-handler";

const Container = styled.View`
  flex: 1;
  padding: 20px;
`;

const EmptyListContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const FavouritesScreen = ({ navigation }) => {
  const theme = useTheme();
  const { notes } = useContext(NotesContext);
  const favoriteNotes = notes.filter(note => note.isFavorite);

  return (
    <SafeArea>
      {favoriteNotes.length === 0 ? (
        <EmptyListContainer>
          <Text style={{ color: theme.colors.text.primary, fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}>
            Favourites
          </Text>
          <Text style={{ color: theme.colors.text.primary, fontSize: theme.fontSizes.medium }}>
            You haven't added any favourites yet.
          </Text>
        </EmptyListContainer>
      ) : (
          <Container>
            <Text style={{ color: theme.colors.text.primary, fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}>
              Favourites
            </Text>
          <MasonryList
            contentContainerStyle={{
              paddingHorizontal: 0,
              alignSelf: "stretch",
            }}
            numColumns={2}
            data={favoriteNotes}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
              <View style={{ padding: 4 }}>
                <TouchableOpacity
                  onPress={() => navigation.navigate("EditNote", { noteId: item.id })}
                >
                  <NoteCard
                    id={item.id}
                    title={item.title}
                    paragraph={item.content}
                    date={formatDate(new Date(item.date))}
                    selected={false}
                    isFavorite={item.isFavorite}
                  />
                </TouchableOpacity>
              </View>
            )}
          />
        </Container>
      )}
    </SafeArea>
  );
};