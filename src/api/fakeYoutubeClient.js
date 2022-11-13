import axios from "axios";

export default class FakeYoutubeClient {
  async search({ params }) {
    return params.relatedToVideoId
      ? axios.get("/data/related.json")
      : axios.get("/data/search.json");
  }
  async videos(params) {
    return axios.get("/data/popular.json");
  }
  async channels(params) {
    return axios.get("/data/channel.json");
  }
}
