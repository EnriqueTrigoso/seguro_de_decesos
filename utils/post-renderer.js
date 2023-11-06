import RichText from "@/../../components/Pages/blog/Richtext/Richtext";
import { Banner } from "@/../../components/Pages/blog/Banner/Banner";

export function postRenderer(section, index) {
  switch (section.__component) {
    case "shared.rich-text":
      return <RichText key={index} data={section} id={index} />;
    case "shared.banner":
      return <Banner key={index} data={section} id={index} />;
    default:
      return null;
  }
}
