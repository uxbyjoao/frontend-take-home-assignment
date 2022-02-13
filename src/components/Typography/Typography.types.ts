export type TypographyProps = {
  align?: 'left' | 'center' | 'right';
  children: React.ReactNode;
  color:
    | 'brandColorPrimary'
    | 'brandColorSecondary'
    | 'blueGray10'
    | 'blueGray50'
    | 'blueGray300'
    | 'blueGray400'
    | 'blueGray600'
    | 'blueGray900'
    | 'neutralWhite';
  variant:
    | 'headingSmall'
    | 'headingMedium'
    | 'subtitle'
    | 'description'
    | 'caption'
    | 'paragraph'
    | 'paragraphSemibold';
};
