// @flow
import React from 'react';
import { createStyledTag, createComponentTheme, getThemeStyle } from '../../utils';
import { offsetModifier } from './common';
import type { PropSizes } from '../../types';

type CardHeaderProps = {|
  children: React$Node,
  padding?: PropSizes,
|}

const name = 'cardHeader';

const cardHeaderTheme = createComponentTheme(name, (colors: *): * => ({
  cardHeader: {
    borderBottom: `1px solid ${colors.PRIMARY_BORDER_COLOR}`,
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    flexShrink: 0,
  },
  modifiers: {
    ...offsetModifier,
  },
}));

const CardHeaderTag = createStyledTag(name, props => ({
  ...getThemeStyle(props, name).cardHeader,
}));

const CardHeader = ({
  children,
  ...rest
  }: CardHeaderProps) => {
  return (
    <CardHeaderTag { ...rest } tagName="div">
      { children }
    </CardHeaderTag>
  );
};

CardHeader.defaultProps = {
  padding: 'md',
};

export { cardHeaderTheme, CardHeader };
