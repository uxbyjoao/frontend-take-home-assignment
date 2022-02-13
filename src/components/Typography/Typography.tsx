import * as T from './Typography.types';
import * as S from './Typography.styles';

const variants = {
  headingSmall: S.HeadingSmall,
  headingMedium: S.HeadingMedium,
  subtitle: S.Subtitle,
  description: S.Description,
  caption: S.Caption,
  paragraph: S.Paragraph,
};

function Typography(props: T.TypographyProps): JSX.Element {
  const { children, color, variant, align = 'left', ...rest } = props;

  const TypographyComponent = variants[variant] as React.ElementType;

  return (
    <TypographyComponent align={align} color={color} {...rest}>
      {children}
    </TypographyComponent>
  );
}

export default Typography;
