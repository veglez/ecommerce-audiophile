import { breakpoints } from "@styles/theme/default";
import { FC } from "react";
import { PickRequired } from "types/utilities";
import { IPictureStylesProps, Picture } from "./styles.responsiveimage";

type IResponsiveImageProps = PickRequired<API.Product, "image" | "name"> &
  Partial<IPictureStylesProps>;

const ResponsiveImage: FC<IResponsiveImageProps> = (props) => {
  const { image, name, maxWidth = 350, borderRadius = 8 } = props;

  return (
    <Picture maxWidth={maxWidth} borderRadius={borderRadius}>
      <source
        media={`(min-width: ${breakpoints.desktop})`}
        srcSet={image.desktop}
      />
      <source
        media={`(min-width: ${breakpoints.tablet})`}
        srcSet={image.tablet}
      />
      <img src={image.mobile} alt={`${name} image`} />
    </Picture>
  );
};

export default ResponsiveImage;
