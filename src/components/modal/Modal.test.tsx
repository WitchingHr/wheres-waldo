import React from 'react';
import { render, screen } from '@testing-library/react';
import Modal from './Modal';

it('should render the correct button text if level is not 3', () => {
  render(
    <Modal
      level={1}
      setLevel={() => null}
      setObjective={() => null}
      setPlaying={() => null}
      setHideButton={() => null}
      setText={() => null}
      setViewLeader={() => null}
      time={1}
    />
  );
  const button = screen.getByRole('button');
  expect(button).toHaveTextContent('Next Level');
});

it('should render the correct button text on level 3', () => {
  render(
    <Modal
      level={3}
      setLevel={() => null}
      setObjective={() => null}
      setPlaying={() => null}
      setHideButton={() => null}
      setText={() => null}
      setViewLeader={() => null}
      time={1}
    />
  );
  const button = screen.getByRole('button');
  expect(button).toHaveTextContent('View Leaderboard');
});

it('should render the correct time', () => {
  render(
    <Modal
      level={1}
      setLevel={() => null}
      setObjective={() => null}
      setPlaying={() => null}
      setHideButton={() => null}
      setText={() => null}
      setViewLeader={() => null}
      time={1.23}
    />
  );
  expect(screen.getByText('1.23s')).toBeInTheDocument();
});