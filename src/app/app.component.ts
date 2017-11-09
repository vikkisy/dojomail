import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  importance: boolean;
  users = [
    {
      email: 'bill@gates.com', 
      importance:true, 
      subject:"new windows", 
      content:"windows XI will launch in year 2100"
    },
    {
      email: 'ada@lovelace.com',
      importance: true,
      subject: "programming",
      content: "enchantress of numbers"
    },
    {
      email: 'john@carmac.com',
      importance:false,
      subject: "updated algo",
      content: "new algorithm for shadow volumes"
    },
    
    {
      email: 'gabe@newel.com',
      importance:false,
      subject: "hl3",
      content: "just kidding..."
    },
  
]


}
