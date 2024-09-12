import { Component } from '@angular/core';
import liff from '@line/liff';

@Component({
  selector: 'app-close',
  templateUrl: './close.component.html',
  styleUrls: ['./close.component.css']
})
export class CloseComponent {

  close() {
    liff
      .init({
        liffId: "2006307091-PJ050Qv1", 
      })
      .then(() => {
        if (liff.isLoggedIn()) {
          liff.logout();
          liff.closeWindow();
        }
      })
  }

}
