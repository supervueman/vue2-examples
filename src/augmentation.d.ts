import { Axios } from "axios";

declare module 'vue' {
  interface ComponentCustomProperties {
    $axios: Axios
  }
}