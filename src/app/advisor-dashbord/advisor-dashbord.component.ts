import { Component } from '@angular/core';

@Component({
  selector: 'app-advisor-dashbord',
  templateUrl: './advisor-dashbord.component.html',
  styleUrl: './advisor-dashbord.component.css'
})
export class AdvisorDashbordComponent {
  doneBtnClicke(){
    const popupDiv = document.getElementById('popup');
    if(popupDiv != null)
    {
      popupDiv.style.display = 'flex';
    }
  }

  closePopup(){
    const popupDiv = document.getElementById('popup');
    if(popupDiv != null)
    {
      popupDiv.style.display = 'none';
    }
  }


}
