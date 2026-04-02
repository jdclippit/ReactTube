import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";
import React from "react";
import {Platform} from "react-native";

import SettingsNavigator from "./SettingsNavigator";

import {VideoMenuScreen} from "@/components/general/VideoMenu";
import {PlaylistManagerContextMenu} from "@/components/playlists/tv/PlaylistManagerContextMenu";
import {HistoryScreen} from "@/components/screens/phone/HistoryScreen";
import {VideoPlayerLanguage} from "@/components/video/videoPlayer/settings/VideoPlayerLanguage";
import {VideoPlayerSettings} from "@/components/video/videoPlayer/settings/VideoPlayerSettings";
import {VideoPlayerSpeed} from "@/components/video/videoPlayer/settings/VideoPlayerSpeed";
import {ElementData} from "@/extraction/Types";
import useAppInit from "@/hooks/general/useAppInit";
import ChannelScreen from "@/screens/ChannelScreen";
import HomeWrapperScreen from "@/screens/HomeWrapperScreen";
import LoadingScreen from "@/screens/LoadingScreen";
import LoginScreen from "@/screens/LoginScreen";
import PlaylistScreen from "@/screens/PlaylistScreen";
import SearchScreen from "@/screens/SearchScreen";
import TrendingScreen from "@/screens/TrendingScreen";
import VideoScreen from "@/screens/VideoScreen";
import {ActiveDownloadScreen} from "@/screens/phone/ActiveDownloadScreen";
import {ActiveUploadScreen} from "@/screens/phone/ActiveUploadScreen";
import {MusicAlbumScreen} from "@/screens/phone/MusicAlbumScreen";
import {MusicChannelScreen} from "@/screens/phone/MusicChannelScreen";
import {MusicLibraryScreen} from "@/screens/phone/MusicLibraryScreen";
import {MusicPlayerScreen} from "@/screens/phone/MusicPlayerScreen";
import {MusicPlaylistScreen} from "@/screens/phone/MusicPlaylistScreen";
import {MusicSearchScreen} from "@/screens/phone/MusicSearchScreen";
import VideoScreenWrapper from "@/screens/phone/VideoScreenWrapper";
import {YTNodes} from "@/utils/Youtube";

export type RootStackParamList = {
  LoadingScreen: undefined;
  Home: undefined;
  Trending: undefined;
  VideoScreen: {
    videoId: string;
    navEndpoint?: YTNodes.NavigationEndpoint;
    reel?: boolean;
    startSeconds?: number;
  };
  ChannelScreen: {channelId: string};
  PlaylistScreen: {playlistId: string};
  Search: undefined;
  SubscriptionScreen: undefined;
  History: undefined;
  SettingsScreen: undefined;
  LoginScreen: undefined;
  // TV
  VideoMenuContext: {element: ElementData};
  PlaylistManagerContextMenu: {videoId: string};
  VideoPlayerSettings: undefined;
  VideoPlayerPlaySpeed: undefined;
  VideoPlayerLanguage: undefined;
  // Downloads
  ActiveDownloadScreen: undefined;
  ActiveUploadScreen: undefined;
  DownloadPlayer: {id: string};
  // Music Screens
  MusicPlaylistScreen: {playlistId: string};
  MusicChannelScreen: {artistId: string};
  MusicAlbumScreen: {albumId: string};
  MusicSearchScreen: undefined;
  MusicLibraryScreen: undefined;
  MusicPlayerScreen: undefined;
};

export type RootNavProp = NativeStackNavigationProp<RootStackParamList>;

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootStackNavigator() {
  const {init} = useAppInit();

  return (
    <Stack.Navigator screenOptions={Platform.isTV ? {headerShown: false} : {}}>
      <Stack.Screen
        name={"LoadingScreen"}
        component={LoadingScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
