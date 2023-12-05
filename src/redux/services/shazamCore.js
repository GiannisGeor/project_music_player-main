import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const shazamCoreApi = createApi({
  reducerPath: "shazamCoreApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://shazam-core7.p.rapidapi.com",
    prepareHeaders: (headers) => {
      headers.set(
        "X-RapidAPI-Key",
        "cbb5d1278dmsh93db63b06fce160p18ff21jsnb04de66a54ec"
      );

      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTopCharts: builder.query({
      query: () => "/charts/get-top-songs-in-world",
    }),
    getSongsByGenre: builder.query({
      query: (genre) =>
        `/charts/get-top-songs-in_world_by_genre?genre=${genre}&limit=10`,
    }),
    getSongsByCountry: builder.query({
      query: (countryCode) =>
        `/charts/get-top-songs-in-country?country_code=${countryCode}`,
    }),
    getSongsBySearch: builder.query({
      query: (searchTerm) => `/search?term=${searchTerm}`,
    }),
    getArtistDetails: builder.query({
      query: (artistId) => `/artist/get-details?id=${artistId}`,
    }),
    getArtistTopSongs: builder.query({
      query: (artistId) => `/artist/get-top-songs?id=${artistId}`,
    }),
    getSongDetails: builder.query({
      query: ({ songid }) => `/songs/get_details?id=${songid}`,
    }),
    getSongRelated: builder.query({
      query: ({ songid }) => `/songs/list-recommendations?id=${songid}`,
    }),
  }),
});

export const {
  useGetTopChartsQuery,
  useGetSongsByGenreQuery,
  useGetSongsByCountryQuery,
  useGetSongsBySearchQuery,
  useGetArtistDetailsQuery,
  useGetArtistTopSongsQuery,
  useGetSongDetailsQuery,
  useGetSongRelatedQuery,
} = shazamCoreApi;
