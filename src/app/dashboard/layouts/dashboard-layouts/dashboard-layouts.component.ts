import { Component, computed, inject } from '@angular/core';
import { AuthService } from '../../../auth/services/auth.service';

@Component({
  selector: 'app-dashboard-layouts',
  templateUrl: './dashboard-layouts.component.html',
  styleUrl: './dashboard-layouts.component.css'
})
export class DashboardLayoutsComponent {
  private authService = inject (AuthService);

  public user = computed(() => this.authService.currentUser());

// get user(){
//   return this.authService.currentUser();
// }
onLogout(){
  this.authService.logout();
}
}
