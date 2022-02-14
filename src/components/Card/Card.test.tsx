import { render, cleanup, screen } from '@testing-library/react';

import Card from './Card';
import buyHouse from 'assets/icons/buy-a-house.svg';

describe('Card', () => {
  afterEach(cleanup);

  it('should render card', () => {
    render(
      <Card.Card data-testid="card">
        <Card.CardHeader
          icon={buyHouse}
          title="CardHeader Title"
          subtitle="CardHeader Subtitle"
        />
        <Card.CardBody>
          <span>CardBody</span>
        </Card.CardBody>
        <Card.CardFooter>
          <span>CardFooter</span>
        </Card.CardFooter>
      </Card.Card>
    );

    const card = screen.getByTestId('card');

    expect(card).toBeVisible();
    expect(card).toContainElement(screen.getByText('CardHeader Title'));
    expect(card).toContainElement(screen.getByText('CardHeader Subtitle'));
    expect(card).toContainElement(screen.getByAltText('CardHeader Title'));
    expect(card).toContainElement(screen.getByText('CardBody'));
    expect(card).toContainElement(screen.getByText('CardFooter'));
  });
});
