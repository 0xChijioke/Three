import { proxy } from "valtio";

type State = {
  intro: boolean;
  color: string;
  isLogoTexture: boolean;
  isFullTexture: boolean;
  logoDecal: string;
  fullDecal: string;
};

const initialState: State = {
  intro: true,
  color: "#EFBD48",
  isLogoTexture: true,
  isFullTexture: false,
  logoDecal: "./BG.png",
  fullDecal: "./BG.png",
};

const state = proxy<State>(initialState);

export default state;
