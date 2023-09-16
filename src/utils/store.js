import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import searchSlice from "./searchSlice";
import ChatSlice from "./ChatSlice";
import videoSlice from "./videoSlice";
import searchBox_Slice from "./searchBox_Slice";
const store = configureStore({
  reducer: {
    app: appSlice,
    search: searchSlice,
    chat: ChatSlice,
    videos: videoSlice,
    searchbox: searchBox_Slice,
  },
});

export default store;
