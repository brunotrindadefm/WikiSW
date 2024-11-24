import { Dimensions, PixelRatio } from "react-native";

// Pegando a largura da tela do dispositivo
const { width } = Dimensions.get("window");

// Largura da tela em que eu fiz o projeto
const figmaWidth: number = 375;

// Converte o valor em pixels baseado na largura do figma
const px = (valuePx: number): number => {
  const widthPercent: number = (valuePx / figmaWidth) * 100;
  const screenPx: number = PixelRatio.roundToNearestPixel(
    (width * widthPercent) / 100
  );
  return screenPx;
};

export const metrics = {
  px,
};
