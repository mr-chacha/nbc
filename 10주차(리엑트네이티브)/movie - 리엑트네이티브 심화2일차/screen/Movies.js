import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  ScrollView,
  RefreshControl,
  FlatList,
  View,
  Alert,
} from "react-native";
import styled from "@emotion/native";
import Swiper from "react-native-swiper";
import Slide from "../components/Slide";
import Vcard from "../components/Vcard";
import Hcard from "../components/Hcard";
import { useQuery } from "react-query";
import { getNowPlayings, getTopRateds, getupComings } from "../Api";
import { useQueryClient, useInfiniteQuery } from "react-query";

export default function Movies({ navigation: { navigate } }) {
  //RefreshControl로 스크롤내리면 새로고침하는 state
  const [isRefreshing, setIsRefreshing] = useState(false);
  const queryClient = useQueryClient();

  // const getData = async () => {
  //   await Promise.all([getNowPlayings(), getTopRateds(), getupComings()]);
  //   setIsLoading(false);
  // };

  const { data: nowPlayingData, isLoading: isLoadingNP } = useQuery(
    ["Moveis", "NowPlaying"],
    getNowPlayings
  );
  const { data: topRatedData, isLoading: isLoadingTR } = useQuery(
    ["Moveis", "TopRated"],
    getTopRateds
  );
  const {
    data: upComingData,
    isLoading: isLoadingUC,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery(["Movies", "Upcoming"], getupComings, {
    getNextPageParam: (lastPage) => {
      if (lastPage.page < lastPage.total_pages) {
        return lastPage + 1;
      }
    },
  });
  
  const onRefresh = async () => {
    setIsRefreshing(true);
    // await Promise.all([refetchNP(), refetchTR(), refetchUC()]);
    await queryClient.refetchQueries(["Moveis"]);
    setIsRefreshing(false);
  };

  const isLoading = isLoadingNP || isLoadingTR || isLoadingUC;
  if (isLoading) {
    return (
      <Loader>
        <ActivityIndicator />
      </Loader>
    );
  }

  const fetcMore = async () => {
    if (hasNextPage) {
      await fetchNextPage();
    }
  };
  return (
    <FlatList
      onEndReachedThreshold={1}
      onEndReached={fetcMore}
      refreshing={isRefreshing}
      onRefresh={onRefresh}
      // FlatList를 맨위에서 쓸때  ListHeaderComponent 쓰는거같음 ..정확히는잘..
      ListHeaderComponent={
        <>
          <Swiper height="100%" showsPagination={false} autoplay loop>
            {/* 맨위지점 */}
            {nowPlayingData.results.map((movie) => (
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
            data={topRatedData.results}
            renderItem={({ item }) => <Vcard movie={item} />}
            keyExtractor={(item) => item.id}
          />
          {/* 마지막 지점 */}
          <ListTitle>Upcoming Movies</ListTitle>
        </>
      }
      data={upComingData.pages.map((page) => page.results).flat()}
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
