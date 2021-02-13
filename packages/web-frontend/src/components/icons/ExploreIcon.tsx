/**
 * Copyright (c) Caiden Sanders and his affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// CSS Frameworks & Animation Imports
import { withTheme } from 'styled-components';

// Type Declarations
interface Theme {
  colors: any;
}

interface IExploreIconProps {
  width: string;
  color: string;
  theme: Theme;
}

/**
 * Explore page icon
 *
 * @param {string} width
 * @param {string} color
 */
export const ExploreIcon = withTheme(
  ({ width, color, theme }: IExploreIconProps) => {
    const DEFAULT_WIDTH = '28';
    const DEFAULT_COLOR = theme.colors.text.secondary;

    return (
      <svg
        width={width || DEFAULT_WIDTH}
        fill={theme.colors[color] || DEFAULT_COLOR}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 487.601 487.601"
      >
        <path d="M379 229.65c-25.6 0-46.3 20.8-46.3 46.3 0 6.1 5 11.1 11.1 11.1s11.1-5 11.1-11.1c0-13.3 10.9-24.2 24.2-24.2 6.1 0 11.1-5 11.1-11.1-.1-6.1-5.1-11-11.2-11z" />
        <path d="M454.5 197.75c-2.7-2.6-5.6-5.1-8.6-7.5l-41-34.8c-15.8-11.2-34.6-18.3-55-19.7l2.2 2.2-24.9-25h-.2c-6.9-6.3-16.2-10.2-26.3-10.2-17.4 0-32.1 11.3-37.1 27-5-3.2-10.8-5.1-17.1-5.5-1-.1-2.1-.1-3.1-.1-7.1 0-13.7 2.1-19.3 5.6-5.1-15.6-19.8-26.9-37.1-26.9-10.1 0-19.3 3.8-26.3 10.2h-.2l-24.9 25 2.2-2.2c-20.4 1.4-39.3 8.6-55 19.7l-41 34.8c-3 2.3-5.9 4.8-8.6 7.5-20.5 19.8-33.2 47.5-33.2 78.2 0 60 48.8 108.8 108.8 108.8 55.4 0 101.3-41.7 107.9-95.4 8 4.6 17.3 7.2 27.1 7.2 9.9 0 19.1-2.6 27.1-7.2 6.7 53.6 52.5 95.3 107.9 95.3 60 0 108.8-48.8 108.8-108.8.1-30.7-12.6-58.4-33.1-78.2zm-345.7 152.5c-41 0-74.2-33.2-74.2-74.2s33.2-74.2 74.2-74.2 74.2 33.2 74.2 74.2c.1 40.9-33.2 74.2-74.2 74.2zm135.1-84.4c-13.3 0-24.1-10.8-24.1-24.1s10.8-24.1 24.1-24.1 24.1 10.8 24.1 24.1-10.8 24.1-24.1 24.1zm135.1 84.4c-41 0-74.2-33.2-74.2-74.2s33.2-74.2 74.2-74.2 74.2 33.2 74.2 74.2c0 40.9-33.2 74.2-74.2 74.2z" />
        <path d="M108.8 229.65c-25.6 0-46.3 20.8-46.3 46.3 0 6.1 5 11.1 11.1 11.1s11.1-5 11.1-11.1c0-13.3 10.9-24.2 24.2-24.2 6.1 0 11.1-5 11.1-11.1-.1-6.1-5.1-11-11.2-11z" />
      </svg>
    );
  },
);

export default withTheme(ExploreIcon);
