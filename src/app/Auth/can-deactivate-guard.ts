import { CanDeactivateFn } from '@angular/router';

export interface canComponentDeactivate{
  canDeactivate: () => boolean;
}

export const canDeactivateGuard: CanDeactivateFn<canComponentDeactivate> = (component) => {
  return component.canDeactivate();
};
