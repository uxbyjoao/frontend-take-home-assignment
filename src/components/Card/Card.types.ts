export type CardProps = {
  as?: string;
  children: React.ReactNode | React.ReactNode[];
};

export type CardHeaderProps = {
  icon: string;
  title: string;
  subtitle?: string;
  titleAs?: string;
};

export type CardBodyProps = {
  children: React.ReactNode | React.ReactNode[];
};

export type CardFooterProps = {
  children: React.ReactNode | React.ReactNode[];
};
