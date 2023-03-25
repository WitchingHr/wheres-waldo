import React, { FC, PropsWithChildren} from 'react';
import fs from 'fs';
import path from 'path';
import { render } from '@testing-library/react';
import { Coordinates } from '../types';
import { ObjectiveContext } from '../App';

const cssFile = fs.readFileSync(
  path.resolve(__dirname, '../../dist/output.css'),
  'utf8'
);
const setObjective = vi.fn();

const Providers: FC<PropsWithChildren> = ({children}) => {
  return (
    <ObjectiveContext.Provider value={{objective, setObjective}}>
      {children}
    </ObjectiveContext.Provider>
  )
}

export const customRender = (ui: React.ReactElement) => {
  const { container } = render(ui, { wrapper: Providers });
  const style = document.createElement('style');
  style.innerHTML = cssFile;
  document.head.appendChild(style);
  return { ...container };
}

export const data = [
	{
		odlaw: ["Odlaw", 99, 231],
		waldo: ["Waldo", 615, 244],
		img: "https://firebasestorage.googleapis.com/v0/b/where-s-waldo-9.appspot.com/o/1.jpg?alt=media&token=fe77ad33-475d-4364-bfc4-29ed94a70600",
		wizard: ["Wizard", 263, 230],
	},
	{
		img: "https://firebasestorage.googleapis.com/v0/b/where-s-waldo-9.appspot.com/o/2.jpg?alt=media&token=a86174b6-62c8-437a-b139-2c1e22563451",
		wizard: ["Wizard", 781, 383],
		waldo: ["Waldo", 405, 411],
		odlaw: ["Odlaw", 70, 456],
	},
	{
		img: "https://firebasestorage.googleapis.com/v0/b/where-s-waldo-9.appspot.com/o/3.jpg?alt=media&token=7ecae02b-b250-463a-96ca-291b448a1336",
		waldo: ["Waldo", 703, 279],
		wizard: ["Wizard", 691, 438],
		odlaw: ["Odlaw", 556, 515],
	},
];

export const coordinates: Coordinates = [
  { char: "waldo", coordinate: [0, 0] },
  { char: "odlaw", coordinate: [0, 0] },
  { char: "wizard", coordinate: [0, 0] },
];

export const objective = {
	Waldo: false,
	Odlaw: false,
	Wizard: false,
};
