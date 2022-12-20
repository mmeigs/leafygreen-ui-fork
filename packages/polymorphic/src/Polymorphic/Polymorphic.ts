import { forwardRef } from 'react';

import {
  PolymorphicComponentType,
  PolymorphicRenderFunction,
} from './Polymorphic.types';

/**
 * Factory function that returns a polymorphic component.
 *
 * If you want to expose `as` as a prop of your component,
 * use this `Polymorphic` factory function and related hooks.
 *
 * However, if the logic defining the `as` prop is defined internally within your component,
 * use the standalone `Polymorph` component.
 *
 * For more, see {@link https://github.com/mongodb/leafygreen-ui/blob/main/packages/polymorphic/README.md | README.md}
 */
export const Polymorphic = <XP extends object = {}>(
  render: PolymorphicRenderFunction<XP>,
  displayName?: string,
): PolymorphicComponentType<XP> => {
  // Here we only know the additional props,
  // but don' t know what `as` is, or what props to inherit

  // If no `ref` arg was passed in, we use the plain render function
  const PolyComponent: PolymorphicComponentType<XP> =
    render.length === 1 ? render : forwardRef(render);

  PolyComponent.displayName =
    displayName ?? render.displayName ?? 'PolymorphicComponent';
  return PolyComponent;
};