import { cleanup, render, screen } from '@testing-library/react';

import Typography from './Typography';

describe('Typography', () => {
  afterEach(cleanup);

  it('should render headingSmall', () => {
    render(
      <Typography
        data-testid="headingSmall"
        variant="headingSmall"
        color="blueGray900"
      >
        heading small
      </Typography>
    );

    const headingSmall = screen.getByTestId('headingSmall');

    expect(headingSmall).toBeVisible();
    expect(headingSmall).toBeInstanceOf(HTMLSpanElement);
    expect(headingSmall).toHaveTextContent('heading small');
  });

  it('should render headingMedium', () => {
    render(
      <Typography
        data-testid="headingMedium"
        variant="headingMedium"
        color="blueGray900"
      >
        heading medium
      </Typography>
    );

    const headingMedium = screen.getByTestId('headingMedium');

    expect(headingMedium).toBeVisible();
    expect(headingMedium).toBeInstanceOf(HTMLSpanElement);
    expect(headingMedium).toHaveTextContent('heading medium');
  });

  it('should render subtitle', () => {
    render(
      <Typography data-testid="subtitle" variant="subtitle" color="blueGray900">
        subtitle
      </Typography>
    );

    const subtitle = screen.getByTestId('subtitle');

    expect(subtitle).toBeVisible();
    expect(subtitle).toBeInstanceOf(HTMLSpanElement);
    expect(subtitle).toHaveTextContent('subtitle');
  });

  it('should render description', () => {
    render(
      <Typography
        data-testid="description"
        variant="description"
        color="blueGray900"
      >
        description
      </Typography>
    );

    const description = screen.getByTestId('description');

    expect(description).toBeVisible();
    expect(description).toBeInstanceOf(HTMLSpanElement);
    expect(description).toHaveTextContent('description');
  });

  it('should render caption', () => {
    render(
      <Typography data-testid="caption" variant="caption" color="blueGray900">
        caption
      </Typography>
    );

    const caption = screen.getByTestId('caption');

    expect(caption).toBeVisible();
    expect(caption).toBeInstanceOf(HTMLSpanElement);
    expect(caption).toHaveTextContent('caption');
  });

  it('should render paragraph', () => {
    render(
      <Typography
        data-testid="paragraph"
        variant="paragraph"
        color="blueGray900"
      >
        paragraph
      </Typography>
    );

    const paragraph = screen.getByTestId('paragraph');

    expect(paragraph).toBeVisible();
    expect(paragraph).toBeInstanceOf(HTMLParagraphElement);
    expect(paragraph).toHaveTextContent('paragraph');
  });
});
