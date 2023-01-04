import React from "react";
import styled from "@emotion/native";
import { getImagePath } from "../util";

export default function Vcard({ movie }) {
  return (
    <VWrapper>
      <TRPoster source={{ uri: getImagePath(movie.poster_path) }} />
      <TRColumn>
        <Rating>⭐️{movie.vote_average}/10</Rating>
        <TRTitle>
          {movie.title.slice(0, 11)}
          {movie.title.length > 11 && "..."}
        </TRTitle>
      </TRColumn>
    </VWrapper>
  );
}

const Rating = styled.Text`
  color: white;
  margin-top: 5px;
  margin-bottom: 5px;
`;
const TRPoster = styled.Image`
  width: 120px;
  height: 170px;
  background-color: grey;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`;
const TRTitle = styled.Text`
  font-size: 13px;
  font-weight: 600;
  color: white;
`;

const VWrapper = styled.TouchableOpacity`
  background-color: black;
  border-radius: 5px;
`;

const TRColumn = styled.View`
  padding: 10px;
`;
