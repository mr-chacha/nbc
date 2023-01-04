import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  ScrollView,
  RefreshControl,
  FlatList,
  View,
} from "react-native";
import styled from "@emotion/native";
import Swiper from "react-native-swiper";
import Slide from "../components/Slide";
import Vcard from "../components/Vcard";
import Hcard from "../components/Hcard";

export default function Movies({ navigation: { navigate } }) {
  //RefreshControl로 스크롤내리면 새로고침하는 state
  const [isRefreshing, setIsRefreshing] = useState(false);
  //로딩중일때 ActivityIndicator 하기위해 만든 state
  const [isLoading, setIsLoading] = useState(true);
  // 맨위 main 페이지에 results를 넣어서 호출하는 state
  const [nowPlayings, setNowPlayings] = useState([]);
  //중간꺼
  const [topRateds, setTopRateds] = useState([]);
  //마지막꺼
  const [upComings, setUpComings] = useState([]);
  //이미지 url 공통부분들어갈거
  const BASE_URL = "https://api.themoviedb.org/3/movie";
  //API KEy
  const API_KEY = "fa2ec8494cf09766170eaf6b3e1717a6";
  //맨위 API호출함수
  const getNowPlayings = async () => {
    const { results } = await fetch(
      `${BASE_URL}/now_playing?api_key=${API_KEY}&language=en-US&page=1`
    ).then((res) => res.json());
    results;
    setNowPlayings(results);
  };
  //중간꺼 API호출함수
  const getTopRateds = async () => {
    const { results } = await fetch(
      `${BASE_URL}/top_rated?api_key=${API_KEY}&language=en-US&page=1`
    ).then((res) => res.json());
    setTopRateds(results);
  };
  //맨아래꺼 API호출함수
  const getupComings = async () => {
    const { results } = await fetch(
      `${BASE_URL}/upcoming?api_key=${API_KEY}&language=en-US&page=1`
    ).then((res) => res.json());
    setUpComings(results);
  };

  const getData = async () => {
    await Promise.all([getNowPlayings(), getTopRateds(), getupComings()]);
    setIsLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  if (isLoading) {
    return (
      <Loader>
        <ActivityIndicator />
      </Loader>
    );
  }

  //RefreshControl로 스크롤내리면 새로고침하는 함수
  const onRefresh = async () => {
    setIsRefreshing(true);
    await getData();
    setIsRefreshing(false);
  };

  return (
    <FlatList
      refreshing={isRefreshing}
      onRefresh={onRefresh}
      // FlatList를 맨위에서 쓸때  ListHeaderComponent 쓰는거같음 ..정확히는잘..
      ListHeaderComponent={
        <>
          <Swiper height="100%" showsPagination={false} autoplay loop>
            {/* 맨위지점 */}
            {nowPlayings.map((movie) => (
              <Slide movie={movie} key={movie.id} />
            ))}
          </Swiper>
          <ListTitle>Top Rated Movies</ListTitle>
          <FlatList
            horizontal
            /*  showsHorizontalScrollIndicator 은 페이지수?같은걸 나타내줌 */
            showsHorizontalScrollIndicator={false}
            /*  ItemSeparatorComponent은 이미지?사이사이마다 어떤값을 넣을수 있음 */
            ItemSeparatorComponent={<View style={{ width: 10 }} />}
            contentContainerStyle={{ paddingHorizontal: 20 }}
            data={topRateds}
            renderItem={({ item }) => <Vcard movie={item} />}
            keyExtractor={(item) => item.id}
          />
          {/* 마지막 지점 */}
          <ListTitle>Upcoming Movies</ListTitle>
        </>
      }
      data={upComings}
      renderItem={({ item }) => <Hcard movie={item} />}
      keyExtractor={(item) => item.id}
      ItemSeparatorComponent={<View style={{ height: 15 }} />}
    />
  );
}

const Loader = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const ListTitle = styled.Text`
  margin-top: 20px;
  margin-bottom: 20px;
  margin-left: 20px;
  font-size: 20px;
  font-weight: 500;
  color: ${(props) => props.theme.title};
`;
