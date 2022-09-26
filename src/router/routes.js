import ContentMain from "../components/ContentMain";
import ContentCurrencyTop from "../components/ContentCurrencyTop";

export const routes = [
  {
    path: "/",
    element: <ContentMain />,
  },
  {
    path: "/top",
    element: <ContentCurrencyTop />,
  },
];
