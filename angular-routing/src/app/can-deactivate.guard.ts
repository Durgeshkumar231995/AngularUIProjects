import { CanDeactivateFn } from '@angular/router';
import { LoginComponent } from './login/login.component';

export const canDeactivateGuard: CanDeactivateFn<LoginComponent> = (component, currentRoute, currentState, nextState) => {
  return component.canExit();
};
