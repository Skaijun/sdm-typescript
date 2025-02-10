//
// type NewType<T> = ( [K in keyof T]: Some Transformation<T[K]> )

// #keyof T #gets all the keys of T
// K in keyof T #iterates over each key
// SomeTransformation <T[K]> #modifies each property

type SongType = { name: string; author: string; liked: boolean };
type PlayList2 = SongType[];

type PlayList = { [song: string]: string };
type LikedSongs<T> = { [K in keyof T]: boolean };
type MyLikedSongs = LikedSongs<PlayList>;

const myPlayList = {
  singl1: "band1",
  singl2: "band2",
  singl3: "band2",
} as const;

const likedSongs: LikedSongs<typeof myPlayList> = {
  singl1: true,
  singl2: true,
  singl3: false,
};
