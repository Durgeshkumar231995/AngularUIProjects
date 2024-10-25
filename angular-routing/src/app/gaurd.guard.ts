import { CanActivateFn } from '@angular/router';
import { LoginserviceService } from './loginservice.service';
import { inject } from '@angular/core';

export const gaurdGuard: CanActivateFn = (route, state) => {
  const log=inject(LoginserviceService);
  if(log.isloggedIn)
  {
    return true;
  }
  else
  {
    return false;
  } 
};


  
