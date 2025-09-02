import Style1 from "./Style1";
import Style3 from "./Style3";
import Style4 from "./Style4";

function ContentStyle({ data, style }) {
  switch (style) {
    case 1:
      return <Style1 data={data} />;
    case 3:
      return <Style3 data={data} />;
    case 4:
      return <Style4 data={data} />;
    default:
      return null;
  }
}
export default ContentStyle;
